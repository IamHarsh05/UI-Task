import React, { useState } from "react";
import './filter.css'

export default function Filter() {
  const Filters = [
    "All",
    "Apparel",
    "Electronics",
    "Books",
    "Groceries",
    "Furniture",
    "Sports",
    "Beauty",
    "Music",
    "Pets",
    "Art",
    "Automotive",
    "Garden",
    "Adventure",
    "Bakery",
    "Technology",
  ];
  

  const [filter, setFilter] = useState(0);
  const applyFilter = (index) => {
    setFilter(index);
  };

  return (
    <>
      {Filters.map((f, index) =>
        filter === index ? (
          <p
            key={index}
            onClick={() => applyFilter(index)}
            className="mx-1 relative z-10 rounded-full border-2 border-sky-400 bg-sky-500 text-white px-3 py-1.5 font-medium hover:text-gray-600 hover:bg-gray-100 cursor-pointer"
          >
            {f}
          </p>
        ) : (
          <p
            key={index}
            onClick={() => applyFilter(index)}
            className="mx-1 relative z-10 rounded-full border-2 border-sky-400 bg-white text-sky-400 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 cursor-pointer"
          >
            {f}
          </p>
        )
      )}
    </>
  );
}
