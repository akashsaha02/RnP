import React from "react";

const NewJob = () => {
  return (
    <div className="p-4 sm:ml-64 bg-blue-50 ">
      <div className="m-5 p-5 bg-white w-8/9 ">
        <div className="text-center">
          <div className="text-2xl font-bold">Job Details</div>
          <div className="mt-5">
            Enter job title, job description, expected salary, and location of
            work.
          </div>
        </div>

        <form>
          {/* JOB TITLE STARTS */}

          <div className="mb-4 mt-5">
            <label
              htmlFor="title"
              className="text-gray-700 text-sm font-bold pl-60"
            >
              Job Title
            </label>
            <div className="flex flex-col items-center mt-2">
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded text-gray-700 ml-4 p-1 w-1/2"
                placeholder="Enter Job Title"
              />
            </div>
          </div>

          {/* JOB TITLE ENDS */}

          {/* JOB DESCRIPTION STARTS */}

          <div className="mb-4 mt-5">
            <label
              htmlFor="description"
              className="text-gray-700 text-sm font-bold pl-60"
            >
              Job Description
            </label>
            <div className="flex flex-col items-center mt-2">
              <input
                type="text"
                id="description"
                name="description"
                className="border rounded text-gray-700 ml-4 p-1 w-1/2"
                placeholder="Enter Job Description"
              />
            </div>
          </div>

          {/* JOB DESCRIPTION STARTS */}

          {/* Expected salary Starts */}

          <div className="mb-4 mt-5">
            <label
              htmlFor="expectedSalary"
              className="text-gray-700 text-sm font-bold pl-60"
            >
              Enter Expected Salary
            </label>
            <div className="flex flex-col items-center mt-2">
              <input
                type="number"
                id="expectedSalary"
                name="expectedSalary"
                className="border rounded text-gray-700 ml-4 p-1 w-1/2"
                placeholder="Enter expected salary"
              />
            </div>
          </div>

          {/* Expected salary ends */}

          {/* Location starts */}

          <div className="mb-4 mt-5">
            <label
              htmlFor="location"
              className="text-gray-700 text-sm font-bold pl-60"
            >
              Location of Work
            </label>
            <div className="flex flex-col items-center mt-2">
              <input
                type="text"
                id="location"
                name="location"
                className="border rounded text-gray-700 ml-4 p-1 w-1/2"
                placeholder="Enter location"
              />
            </div>
          </div>

          {/* Location ends */}
        </form>

        <div className="flex flex-col items-center">
          <button
            className="bg-primary-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewJob;
