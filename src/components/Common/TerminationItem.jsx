import React from "react";

const TerminationItem = ({name,designation,text,date}) => {
  return (
    <div className="mt-5 bg-white mr-5 rounded-xl">
      <div className="flex items-center ">
        {/* User details */}

        {/* Profile image */}
        <img className="w-12 h-12 rounded-xl bg-gray-200 mt-5 ml-5 mr-3" src=""></img>
        <div>

        {/* Name */}
          <p className="font-semibold mt-6 text-2xl">{name}</p>

        {/* Designation   */}
          <p className="text-gray-400 text-0.5x1">{designation}</p>
        </div>
      </div>

      {/* Description */}
      <div className="p-4 mt-5 text-gray-400">
        {text}
      </div>
      <div className="flex space-x-40 mt-4">

      {/* Date   */}
        <div className="text-gray-400 ml-5 font-semibold text-0.5x1">
          {date}
        </div>

      {/* Button   */}
        <button className="bg-violet-700 p-2 pl-5 pr-5 rounded-lg text-white mb-4">
          Approve
        </button>
      </div>
    </div>
  );
};
export default TerminationItem;
