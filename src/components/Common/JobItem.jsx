import React from "react";
const JobItem=({employee_salary,position,date})=>{
    return(
        <>
        
      <div className="bg-white mt-10 h-60 w-80 p-5 rounded-lg">
        <div className="flex justify-between">
          <p className="pl-3">{position}</p>
          <svg
            className="h-5 mt-1 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z" />
          </svg>
        </div>
        <p className="text-gray-400 text-sm mt-1 pl-3">CTC: ${employee_salary}</p>
        <p className="text-sm mt-1 pl-3 text-gray-400">
            {date}
        </p>
        <div className="flex">
          <svg
            className="h-6 m-3 mt-6 cursor-pointer"
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m13 16.745c0-.414-.336-.75-.75-.75h-9.5c-.414 0-.75.336-.75.75s.336.75.75.75h9.5c.414 0 .75-.336.75-.75zm9-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm-4-5c0-.414-.336-.75-.75-.75h-14.5c-.414 0-.75.336-.75.75s.336.75.75.75h14.5c.414 0 .75-.336.75-.75z"
              fill-rule="nonzero"
            />
          </svg>
          <svg
            className="mt-6 cursor-pointer"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M17.843 1c2.159 0 3.912 1.753 3.912 3.912 0 .395-.053 1.704-1.195 2.813l-8.465 8.465c-.596.671-2.12 1.279-3.299.099-1.178-1.177-.586-2.685.088-3.29l4.409-4.409.707.707-3.164 3.163.014.003-1.411 1.413.004.003c-.97 1.151.618 2.93 1.977 1.572l8.383-8.384c.656-.652.94-1.393.94-2.155 0-1.601-1.299-2.9-2.9-2.9-.783 0-1.495.311-2.018.818l-.003-.003c-.573.573-11.502 11.494-11.534 11.527l-.002-.002c-.795.812-1.286 1.923-1.286 3.148 0 2.483 2.017 4.5 4.5 4.5.65 0 1.84.007 3.52-1.668l10.273-10.267.707.707-10.477 10.477c-1.004 1.077-2.435 1.751-4.023 1.751-3.035 0-5.5-2.465-5.5-5.5 0-1.577.666-3 1.731-4.004 10.668-10.667 10.835-10.839 11.295-11.297.277-.278 1.215-1.199 2.817-1.199" />
          </svg>
        </div>
        <div className="flex mt-4">
          <img
            src=""
            className="h-12 w-12 rounded-full bg-gray-200 ml-2 -mr-5"
          ></img>
          <img
            src=""
            className="h-12 w-12 rounded-full bg-gray-200 -mr-5"
          ></img>
          <img src="" className="h-12 w-12 rounded-full bg-gray-200"></img>
          <p className="mt-2 ml-3 text-gray-400 font-semibold cursor-pointer">
            +28
          </p>
        </div>
      </div>
      </>
    );
}
export default JobItem;