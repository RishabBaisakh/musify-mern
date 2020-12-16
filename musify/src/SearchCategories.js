import React, { useEffect } from "react";
import "./SearchCategories.css";
import { useDataLayerValue } from "./DataLayer";

function SearchCategories() {
  const [{ categories }, dispatch] = useDataLayerValue();

  const colorArray = [
    "bluevoilet",
    "olive",
    "oranged",
    "peru",
    "brown",
    "slateblue",
    "darkolivegreen",
    "goldenrod",
    "green",
    "chocolate",
    "crimson",
  ];
  return (
    <div className="searchCategories">
      <h1>Browse all</h1>

      <div className="searchCategories__body">
        {categories?.items?.map((category, index) => (
          <div
            style={{
              background: `linear-gradient(to bottom right, ${
                colorArray[Math.floor(Math.random() * colorArray.length)]
              }, black)`,
            }}
            className="searchCategories__bodyCard"
            key={index}
          >
            <h1>{category.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchCategories;
