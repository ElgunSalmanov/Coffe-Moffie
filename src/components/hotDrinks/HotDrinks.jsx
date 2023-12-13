import { useState, useEffect } from "react";
import Card from "../card/Card";

function HotDrinks() {
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

  return (
    <>
      <Card hot={hot} />
    </>
  );
}

export default HotDrinks;
