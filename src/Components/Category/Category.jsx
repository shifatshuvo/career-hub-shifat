const Category = ({category}) => {
  const {logo, category_name, availability} = category;
  return (
    <div>
      <div className="bg-purple-50 p-4 m-4 rounded-sm space-y-2 shadow-md">
        <img className="bg-gray-200 p-2 rounded-md" src={logo} alt="" />
        <h5 className="text-xl text-gray-600 font-semibold">{category_name}</h5>
        <p className="text-gray-500">{availability}</p>
      </div>
    </div>
  );
};

export default Category;
