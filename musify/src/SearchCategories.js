import React from "react";
import "./SearchCategories.css";
import { useDataLayerValue } from "./DataLayer";

function SearchCategories() {
  const [{ categories }, dispatch] = useDataLayerValue();

  console.log("categories => ", categories);

  return (
    <div className="searchCategories">
      <h1>I am search component!</h1>
    </div>
  );
}

export default SearchCategories;
