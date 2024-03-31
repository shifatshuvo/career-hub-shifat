import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  // this is not the best way
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="mx-4 space-y-4 my-10">
      <div className="text-center space-y-4">
        <h2 className="md:text-5xl text-4xl font-bold text-gray-600">Featured Jobs</h2>
        <p className="text-gray-500">
          Explore thousands of job opportunities with all the information you
          need. Its your future.
        </p>
      </div>
      <div className="md:grid grid-cols-2 gap-8">
        {
          jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job} />)
        }
      </div>
      <div className={dataLength === jobs.length ? 'hidden' : '' }>
        <div className="flex justify-center">
        <button
          onClick={() => setDataLength(jobs.length)}
         className="bg-gradient-to-r from-purple-500 to-pink-500 text-gray-50 px-4 py-2 rounded-md font-bold">See All Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
