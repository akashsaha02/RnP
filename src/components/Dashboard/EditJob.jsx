import React from "react";

const EditJob = () => {
  return (
    <div className="p-4 sm:ml-64 bg-blue-50 ">
      <div className="m-5 p-5 bg-white w-8/9 ">
        <div className="text-center">
          <div className="text-2xl font-bold">Edit Job</div>
          <div className="mt-5">Update Job details.</div>
        </div>

        <form>
          {/* JOB TITLE STARTS */}

          <div className="mb-4 mt-5 flex flex-col items-center ">
            <label htmlFor="title" className="text-gray-700 text-sm font-bold ">
              Job Title
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded text-gray-700 ml-4 p-1 w-80"
                placeholder="Enter Job Title"
              />
            </div>
          </div>

          {/* JOB TITLE ENDS */}

          {/* JOB DESCRIPTION STARTS */}

          <div className="mb-4 mt-5 flex flex-col items-center ">
            <label
              htmlFor="description"
              className="text-gray-700 text-sm font-bold"
            >
              Job Description
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="description"
                name="description"
                className="border rounded text-gray-700 ml-4 p-1 w-80"
                placeholder="Enter Job Description"
              />
            </div>
          </div>

          {/* JOB DESCRIPTION STARTS */}

          {/* Job status starts */}

          <div className="mb-4 mt-5 flex flex-col items-center ">
            <label htmlFor="status" className="text-gray-700 text-sm font-bold">
              Job Status
            </label>
            <div className="flex mt-2 pl-3">
              <div className="bg-gray-300 text-center mr-1 w-40 rounded-lg py-1">
                Open
              </div>
              <div className="bg-gray-300 text-center w-40 rounded-lg py-1">
                Closed
              </div>
            </div>
          </div>

          {/* Job status ends */}
        </form>

        <div className="flex flex-col items-center">
          <button
            className="bg-primary-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Edit Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditJob;
