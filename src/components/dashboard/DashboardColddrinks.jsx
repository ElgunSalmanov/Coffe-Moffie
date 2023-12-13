import React, { useState, useEffect } from "react";
import axios from "axios";

const DashboardSnacks = () => {
  const [snacks, setSnacks] = useState([]);
  const [newSnack, setNewSnack] = useState({
    title: "",
    price: "",
    content: "",
    img: null,
  });

  useEffect(() => {
    const fetchSnacks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/secret-api/colddrinks/"
        );
        setSnacks(response.data);
      } catch (error) {
        console.error("An error occurred while loading snacks:", error);
      }
    };

    fetchSnacks();
  }, []);

  const handleInputChange = (e) => {
    setNewSnack({ ...newSnack, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setNewSnack({ ...newSnack, img: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", newSnack.title);
    formData.append("price", newSnack.price);
    formData.append("content", newSnack.content);
    formData.append("img", newSnack.img);

    try {
      const response = await axios.post(
        "http://localhost:8000/secret-api/colddrinks/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSnacks([...snacks, response.data]);
      setNewSnack({ title: "", price: "", content: "", img: null });
    } catch (error) {
      console.error("An error occurred while adding snacks:", error);
    }
  };

  const deleteSnack = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/secret-api/colddrinks/${id}/`);
      setSnacks(snacks.filter((snack) => snack.id !== id));
    } catch (error) {
      console.error("Error occurred while deleting snack:", error);
    }
  };

  return (
    <div className="dashboard__form">
      <h1>Hot drinks:</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          value={newSnack.title}
          onChange={handleInputChange}
          placeholder="Title..."
          required
        />
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          name="price"
          value={newSnack.price}
          onChange={handleInputChange}
          placeholder="Price..."
          required
        />
        <label htmlFor="content">Content:</label>
        <textarea
          name="content"
          value={newSnack.content}
          onChange={handleInputChange}
          placeholder="Content..."
          required
        />
        <label htmlFor="img">İmage:</label>
        <input type="file" name="img" onChange={handleImageChange} required />
        <button type="submit">Add</button>
      </form>

      <div className="dashboard__cards">
        {snacks.map((snack) => (
          <div className="dashboard__card" key={snack.id}>
            {snack.img && (
              <img
                src={snack.img}
                alt={snack.title}
                style={{ width: "100px" }}
              />
            )}
            <h3 className="title">{snack.title}</h3>
            <p className="content">{snack.content}</p>
            <p>{snack.price} azn</p>
            <button onClick={() => deleteSnack(snack.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardSnacks;
