const Banner = () => {
  return (
    <div className="md:flex items-center md:my-6 my-4 md:space-y-0 space-y-8 mx-4">
      <div className="md:w-2/3 space-y-4 -text-center">
        <h1 className="md:text-6xl text-4xl font-bold text-gray-600">One Step <br />Closer To Your<br /><span className="text-purple-400">Dream Job</span></h1>
        <p className="text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quisquam nobis quibusdam possimus dignissimos, ipsum fugit sint ipsam qui. Corporis.</p>
        <div className="">
        <button className="bg-purple-400 hover:bg-purple-500 text-gray-50 px-4 py-2 rounded-md font-bold">Get Haired</button>
        </div>
      </div>
      <div className="md:w-3/6">
        <img src="https://raw.githubusercontent.com/shifatshuvo/json-data/main/assets/images/user.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;