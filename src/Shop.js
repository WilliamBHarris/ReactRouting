import "./App.css";
import React, { useState, useEffect } from "react";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://fortnite-public-api.theapinetwork.com/prod9/upcoming/get");
    const items = await data.json();
    console.log(items.data);
    setItems(items.data);
  };

  return (
    <div>
      {items.map(item => (
        <h1>{items.data.daily.entries}</h1>
      ))}
    </div>
  );
}

export default Shop;
