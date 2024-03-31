import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getStoredJobApp, saveJobApp } from "../Util/localStore";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  // console.log(job);

  const handleApplyJob = () => {
    const storedJobApp = getStoredJobApp();
    const exist = storedJobApp.find((jobId) => jobId === idInt);
    if (exist) {
      toast("Already Applied!!!");
      return;
    }

    saveJobApp(idInt);
    toast("You have applied successfully");
  };

  return (
    <div className="">
      <div className="text-center">
        <h2 className="text-5xl text-gray-600 font-bold bg-purple-50 py-12">
          Job Details
        </h2>
      </div>
      <div className="md:flex items-center md:space-y-0 space-y-10 my-8">
        {/* left div */}
        <div className="md:w-2/3 space-y-5 mx-6">
          <p>
            <span className="text-gray-700 font-bold">Job Description: </span>
            {job.job_description}
          </p>
          <p>
            <span className="text-gray-700 font-bold">
              Job Responsibility:{" "}
            </span>
            {job.job_responsibility}
          </p>
          <p>
            <span className="text-gray-700 font-bold">
              Educational Requirements:{" "}
            </span>
            {job.educational_requirements}
          </p>
          <div className="space-y-4">
            <span className="text-gray-700 font-bold">Experiences: </span>
            <p>{job.experiences}</p>
          </div>
        </div>

        {/* right div */}
        <div className="md:w-1/3 bg-purple-100 text-gray-700 mx-6 p-6 rounded-md shadow-md space-y-4">
          <div>
            <p className="text-gray-600 font-bold py-4">Job Details</p>
            <p className="border-b-2"></p>
            <div className="flex">
              <img
                src="https://raw.githubusercontent.com/shifatshuvo/json-data/main/assets/icons/money.png"
                alt="dollar img"
              />
              <p>Salary: {job.salary}</p>
            </div>
            <div>
              <img src="" alt="job img" />
              <p>Job Title: {job.job_title}</p>
            </div>
            <p className="text-gray-600 font-bold py-4">Contact Information</p>
            <p className="border-b-2"></p>
            <div>
              <img src="" alt="phone img" />
              <p>Phone: {job.contact_information.phone}</p>
            </div>
            <div>
              <img src="" alt="email img" />
              <p>Email: {job.contact_information.email}</p>
            </div>
            <div className="flex">
              <img
                className="h-6"
                src="https://raw.githubusercontent.com/shifatshuvo/json-data/main/assets/icons/location2.png"
                alt="address img"
              />
              <p> Address: {job.contact_information.address}</p>
            </div>
          </div>
          {/* btn */}
          <div className="flex justify-center py-4">
            <button
              onClick={handleApplyJob}
              className="bg-purple-400 px-8 py-2 rounded-md text-gray-50 text-xl hover:bg-purple-500"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
