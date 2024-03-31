import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredJobApp, removeJob } from "../Util/localStore";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storedJobIds = getStoredJobApp();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);

  return (
    <div>
      <h2 className="text-4xl text-center py-12 text-gray-600 font-bold">
        Applied Jobs
      </h2>
      {/* Filter Jobs Start */}
      <div className="dropdown ml-4">
        <div tabIndex={0} role="button" className="btn m-1">
          Filter Jobs
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36"
        >
          <li onClick={() => handleFilter("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handleFilter("remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleFilter("onsite")}>
            <a>OnSite</a>
          </li>
        </ul>
      </div>
      {/* Filter Jobs End */}
      <div>
        {displayJobs.map((appliedJob) => (
          <AppliedJob key={appliedJob.id} appliedJob={appliedJob} />
        ))}
        <div className="text-center text-3xl font-bold">
          <h1 className={appliedJobs.length ? "hidden" : ""}>
            Currently not applied.
          </h1>
        </div>
      </div>
      <Link to='/applied' className="flex justify-center my-8">
        <button
          onClick={() => removeJob()}
          className="btn btn-primary text-gray-50 mt-4"
        >
          Remove All
        </button>
      </Link>
    </div>
  );
};

export default AppliedJobs;
