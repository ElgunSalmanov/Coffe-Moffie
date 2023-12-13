import { useState } from "react";
import Card from "../card/Card";
import Information from "../information/Information";

function Home() {
  const [hot] = useState([
    {
      id: 1,
      title: "Cappuccino",
      price: 10,
      description:
        "Lorem ipsum dolor sit amet consectetur. Urna ornare quam cursus nisi donec nisl maecenas fames.",
      image: "src/assets/img/hot-drinks.png",
    },
    {
      id: 2,
      title: "Cappuccino",
      price: 10,
      description:
        "Lorem ipsum dolor sit amet consectetur. Urna ornare quam cursus nisi donec nisl maecenas fames.",
      image: "src/assets/img/hot-drinks.png",
    },
    {
      id: 3,
      title: "Cappuccino",
      price: 10,
      description:
        "Lorem ipsum dolor sit amet consectetur. Urna ornare quam cursus nisi donec nisl maecenas fames.",
      image: "src/assets/img/hot-drinks.png",
    },
    {
      id: 4,
      title: "Cappuccino",
      price: 10,
      description:
        "Lorem ipsum dolor sit amet consectetur. Urna ornare quam cursus nisi donec nisl maecenas fames.",
      image: "src/assets/img/hot-drinks.png",
    },
  ]);

  const [snack] = useState([
    {
      id: 1,
      title: "Club sandwich",
      price: 10,
      description:
        "Lorem ipsum dolor sit amet consectetur. Urna ornare quam cursus nisi donec nisl maecenas fames.",
      image: "src/assets/img/sandwich.png",
    },
    {
      id: 2,
      title: "Club sandwich",
      price: 10,
      description:
        "Lorem ipsum dolor sit amet consectetur. Urna ornare quam cursus nisi donec nisl maecenas fames.",
      image: "src/assets/img/sandwich.png",
    },
    {
      id: 3,
      title: "Club sandwich",
      price: 10,
      description:
        "Lorem ipsum dolor sit amet consectetur. Urna ornare quam cursus nisi donec nisl maecenas fames.",
      image: "src/assets/img/sandwich.png",
    },
    {
      id: 4,
      title: "Club sandwich",
      price: 10,
      description:
        "Lorem ipsum dolor sit amet consectetur. Urna ornare quam cursus nisi donec nisl maecenas fames.",
      image: "src/assets/img/sandwich.png",
    },
  ]);

  const [cold] = useState([
    {
      id: 1,
      title: "Cappuccino",
      price: 10,
      description:
        "Lorem ipsum dolor sit amet consectetur. Urna ornare quam cursus nisi donec nisl maecenas fames.",
      image: "src/assets/img/cold-drinks.png",
    },
    {
      id: 2,
      title: "Cappuccino",
      price: 10,
      description:
        "Lorem ipsum dolor sit amet consectetur. Urna ornare quam cursus nisi donec nisl maecenas fames.",
      image: "src/assets/img/cold-drinks.png",
    },
    {
      id: 3,
      title: "Cappuccino",
      price: 10,
      description:
        "Lorem ipsum dolor sit amet consectetur. Urna ornare quam cursus nisi donec nisl maecenas fames.",
      image: "src/assets/img/cold-drinks.png",
    },
    {
      id: 4,
      title: "Cappuccino",
      price: 10,
      description:
        "Lorem ipsum dolor sit amet consectetur. Urna ornare quam cursus nisi donec nisl maecenas fames.",
      image: "src/assets/img/cold-drinks.png",
    },
  ]);

  return (
    <>
      <Card hot={hot} snack={snack} cold={cold} />
    </>
  );
}

export default Home;
