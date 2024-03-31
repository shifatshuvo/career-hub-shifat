import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="bg-purple-50 p-8 m-4 rounded-md space-y-3 shadow-md">
      <img src={logo} alt="" />
      <h4 className="text-xl font-bold text-gray-600">{job_title}</h4>
      <p className="text-gray-500 font-extrabold">{company_name}</p>
      <div className="flex space-x-4">
        <button className="border border-purple-400 rounded-md px-4 py-1 text-purple-500 font-semibold">
          {remote_or_onsite}
        </button>
        <button className="border border-purple-400 rounded-md px-4 py-1 text-purple-500 font-semibold">
          {job_type}
        </button>
      </div>
      <div className="flex space-x-5">
        <div className="flex items-center">
          <img
            src="https://raw.githubusercontent.com/shifatshuvo/json-data/main/assets/icons/location2.png"
            alt=""
          />
          <p>{location}</p>
        </div>
        <div className="flex items-center">
          <img
            src="https://raw.githubusercontent.com/shifatshuvo/json-data/main/assets/icons/money.png"
            alt=""
          />
          <p>{salary}</p>
        </div>
      </div>
      <Link to={`/job/${id}`}>
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-purple-500 text-gray-50 px-4 py-2 mt-4 rounded-md font-bold">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Job;
