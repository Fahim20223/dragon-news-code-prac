import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Category = () => {
  const categories = use(categoryPromise);
  return (
    <div>
      <h2 className="font-bold">All Categories ({categories.length})</h2>
      <div className="grid grid-cols-1 space-y-4 mt-5">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className="bg-base-100 hover:bg-base-300 text-accent py-2 px-1 rounded-lg btn border-0 font-bold"
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Category;
