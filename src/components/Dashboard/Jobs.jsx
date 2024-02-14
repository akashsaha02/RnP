import React from "react";
import JobItem from "../Common/JobItem";

const Jobs = () => {
  return (
    <div className="p-4 sm:ml-64 bg-blue-50">
      {/* Heading starts */}

      <div className="bg-white rounded-lg flex justify-between">
        <h1 className="p-4 text-2xl font-bold">Job Opportunity</h1>
        <p className="text-gray-400  text-4xl pr-6">...</p>
      </div>

      {/* Heading ends  */}

      {/* Open job positions section starts*/}

      <div className="flex">
        <div className="mr-5">
          <JobItem
            type="Open"
            position="Tester"
            employee_salary="8700"
            date="2 March 2021, 12:30pm"
          />
        </div>

        {/* Open job position ends */}

        {/* Closed job position starts */}

        <div className="mr-5">
          <JobItem
            type="Closed"
            position="Tester"
            employee_salary="8700"
            date="2 March 2021, 12:30pm"
          />
        </div>

        {/* Closed job position ends */}

        {/* Under review job position starts */}

        <div className="mr-10">
          <JobItem
            type="Under review"
            position="Tester"
            employee_salary="8700"
            date="2 March 2021, 12:30pm"
          />
        </div>
        {/* Under review job position ends */}
      </div>
    </div>
  );
};

export default Jobs;
