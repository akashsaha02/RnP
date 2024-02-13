import React from "react";

const Jobs = () => {
  return (
    <div className="p-4 sm:ml-64 bg-blue-50">
      {/* Heading starts */}

      <div className="bg-white rounded-lg flex justify-between">
        <h1 className="p-4 text-2xl font-bold">Internship Opportunity</h1>
        <p className="text-gray-400  text-4xl pr-6">...</p>
      </div>

      {/* Heading ends  */}

      {/* Open internship positions section starts*/}

      <div className="flex">
        <div className="mr-5">
          <div className="bg-white mt-10 rounded-lg flex justify-between">
            <p className="font-semibold p-1 pl-3">Open</p>
            <svg
              className="pt-1 pr-2 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
            </svg>
          </div>
          <div className="bg-white mt-10 h-60 w-80 p-5">
            <div className="flex justify-between">
              <p className="pl-3">Tester</p>
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
            <p className="text-gray-400 text-sm mt-1 pl-3">CTC: $8700</p>
            <p className="text-sm mt-1 pl-3 text-gray-400">
              2 March 2021, 12:30pm
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
        </div>

        {/* Open internship position ends */}

        {/* Closed internship position starts */}

        <div className="mr-5">
          <div className="bg-white mt-10 rounded-lg flex justify-between">
            <p className="font-semibold p-1 pl-3">Closed</p>
            <svg
              className="pt-1 pr-2 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
            </svg>
          </div>
          <div className="bg-white mt-10 h-60 w-80 p-5">
            <div className="flex justify-between">
              <p className="pl-3">Tester</p>
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
            <p className="text-gray-400 text-sm mt-1 pl-3">CTC: $8700</p>
            <p className="text-sm mt-1 pl-3 text-gray-400">
              2 March 2021, 12:30pm
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
              <p className="mt-2 ml-3 text-gray-400 font-semibold">+28</p>
            </div>
          </div>
        </div>

        {/* Closed internship position ends */}

        {/* Under review internship position starts */}

        <div className="mr-10">
          <div className=" bg-white mt-10 rounded-lg flex justify-between">
            <p className="font-semibold p-1 pl-3 ">Under review</p>
            <svg
              className="pt-1 pr-2 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
            </svg>
          </div>
          <div className="bg-white mt-10 h-60 w-80 p-5">
            <div className="flex justify-between">
              <p className="pl-3">Tester</p>
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
            <p className="text-gray-400 text-sm mt-1 pl-3">CTC: $8700</p>
            <p className="text-sm mt-1 pl-3 text-gray-400">
              2 March 2021, 12:30pm
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
              <p className="mt-2 ml-3 text-gray-400 font-semibold">+28</p>
            </div>
          </div>
        </div>
        {/* Under review internship position ends */}
      </div>
    </div>
  );
};

export default Jobs;
