import React, { useState } from "react";
import Filter from "./Filter";
import Hog from "./Hog";

function HongList({ hogs }) {
  const [moreInfo, setMoreInfo] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const appear = moreInfo ? "block" : "none";

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleClick() {
    setMoreInfo((moreInfo) => !moreInfo);
  }

  const itemsToDisplay = hogs
    .filter((item) => {
      return item.name.includes(search) || item.weight == search;
    })
    .filter((item) => {
      if (selectedCategory === "All") return true;

      return selectedCategory === "greased" && item.greased;
    });
  return (
    <div>
      <div className="container">
        <Filter
          onCategoryChange={handleCategoryChange}
          onSearchChange={handleSearch}
          search={search}
        />
        <div className="row">
          {itemsToDisplay.map((hog) => {
            return (
              <div className="col-lg-3">
                <Hog hog={hog} handleClick={handleClick} appear={appear} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HongList;
