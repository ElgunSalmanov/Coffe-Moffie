import { useState, useEffect } from "react";
import Card from "../card/Card";

function ColdDrinks() {
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

  return (
    <>
      <Card cold={cold} />
    </>
  );
}

export default ColdDrinks;
