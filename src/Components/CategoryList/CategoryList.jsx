import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {
  const [jobCategory, setJobCategory] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setJobCategory(data));
  }, []);

  return (
    <div className="space-y-4">
      <div className="mx-4">
        <h2 className="md:text-5xl text-4xl text-center text-gray-700 font-bold">
          Job Category List
        </h2>
        <p className="text-center text-gray-400 mt-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future.
        </p>
      </div>
      <div className="md:flex justify-center">
        {jobCategory.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
