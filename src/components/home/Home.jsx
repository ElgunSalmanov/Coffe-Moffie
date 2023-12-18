import { useState, useEffect } from "react";
import Card from "../card/Card";

function Home() {
  const [cold, setCold] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://164.92.248.69/secret-api/colddrinks/"
        );
        const data = await response.json();
        setCold(data);
      } catch (error) {
        console.error("Error fetching cold drinks data:", error);
      }
    };

    fetchData();
  }, []);

  const [hot, setHot] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://164.92.248.69/secret-api/hotdrinks/"
        );
        const data = await response.json();
        setHot(data);
      } catch (error) {
        console.error("Error fetching cold drinks data:", error);
      }
    };

    fetchData();
  }, []);

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
      <Card hot={hot} snack={snack} cold={cold} />
    </>
  );
}

export default Home;
