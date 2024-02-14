import React from "react";
import JobItem from "../Common/JobItem";

const Internship = () => {
  return (
    <div className="p-4 sm:ml-64 bg-blue-50">
      {/* Heading starts */}

      <div className="bg-white rounded-lg flex justify-between">
        <h1 className="p-4 text-2xl font-bold">Internship Opportunity</h1>
        <p className="text-gray-400  text-4xl pr-6">...</p>
      </div>

      {/* Heading ends  */}

      {/* Open Internship positions section starts*/}

      <div className="flex">
        <div className="mr-5">
          <JobItem
            type="Open"
            position="Tester"
            employee_salary="8700"
            date="2 March 2021, 12:30pm"
          />
        </div>

        {/* Open Internship position ends */}

        {/* Closed Internship position starts */}

        <div className="mr-5">
          <JobItem
            type="Closed"
            position="Tester"
            employee_salary="8700"
            date="2 March 2021, 12:30pm"
          />
        </div>

        {/* Closed Internship position ends */}

        {/* Under review Internship position starts */}

        <div className="mr-10">
          <JobItem
            type="Under review"
            position="Tester"
            employee_salary="8700"
            date="2 March 2021, 12:30pm"
          />
        </div>
        {/* Under review Internship position ends */}
      </div>
    </div>
  );
};

export default Internship;
