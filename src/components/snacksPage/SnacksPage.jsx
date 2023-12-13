import { useState, useEffect } from "react";
import Card from "../card/Card";

function SnacksPage() {
  const [snack, setSnack] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://164.92.248.69/secret-api/snacks/");
        const data = await response.json();
        setSnack(data);
      } catch (error) {
        console.error("Error fetching cold drinks data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Card snack={snack} text={"Snacks"} />
    </>
  );
}

export default SnacksPage;
