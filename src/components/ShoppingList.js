import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({items, onItemFormSubmit}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // category display
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true

    return item.category === selectedCategory})
  
  // search term on page
  const searchTerm = itemsToDisplay.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))  


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} search={search} onSearchChange={setSearch}/>
      <ul className="Items">
        {searchTerm.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
