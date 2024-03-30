import React, { useState, useEffect } from "react";
import JobItem from "../Common/JobItem";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
const Jobs = () => {
  const [pageCount, setpageCount] = useState(0);
  const [items, setItems] = useState([]);

  let limit = 3;

  useEffect(() => {
    const getLeaves = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setpageCount(Math.ceil(total / limit));
      setItems(data);
    };

    getLeaves();
  }, [limit]);

  const fetchLeaves = async (currentPage) => {
    const res = await fetch(
      //custom api call
      `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    console.log(data);
    let currentPage = data.selected + 1;
    const employyesFormServer = await fetchLeaves(currentPage);
    setItems(employyesFormServer);
  };

  return (
    <div className="p-4 sm:ml-64 bg-blue-50">
      {/* Manage job settings start */}

      <div className="bg-white rounded-lg mb-5 p-5">
        <div className="text-center font-bold text-2xl">Manage Job Listing</div>
        <div className="text-center m-3">
          Add, edit, or remove jobs within your company
        </div>
        <div className="flex justify-center">
          <div className="flex items-center">
            <Link
              to="/editJob"
              className="text-black border border-black bg-white hover:bg-primary-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
            >
              Edit Existing Job
            </Link>
            <Link
              to="/newJob"
              className="text-white border border-black bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
            >
              Create New Jobs
            </Link>
          </div>
        </div>
      </div>

      {/* Manage job settings ends */}

      {/* Heading starts */}

      <div className="bg-white rounded-lg flex justify-between">
        <h1 className="p-4 text-2xl font-bold">Job Opportunity</h1>
        <p className="text-gray-400  text-4xl pr-6">...</p>
      </div>

      {/* Heading ends  */}

      {/* Dropdown starts*/}

      <div className="mt-3 text-sm">
        <select className="p-1">
          <option>Select Domain</option>
          <option value="WEB DEV">Web Dev</option>
          <option value="APP DEV">App Dev</option>
        </select>
      </div>

      {/* Dropdown ends */}

      {/* Open job positions section starts*/}
      <div className="">
        <div className="flex">
          <div className="">
            <div className="bg-white mt-10 rounded-lg w-60 flex justify-between">
              <p className="font-semibold p-1">Open</p>
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
            <div className="flex flex-row">
              {items.map((item) => {
                return (
                  <div key={item.id} className="mr-5">
                    <JobItem
                      position="Tester"
                      employee_salary="8700"
                      date="2 March 2021, 12:30pm"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Open job position ends */}

      {/* Closed job position starts */}
      {/* 
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
            {items.map((item) => {
              return (
                <div key={item.id}>
                  <JobItem
                    position="Tester"
                    employee_salary="8700"
                    date="2 March 2021, 12:30pm"
                  />
                </div>
              );
            })}
          </div> */}

      {/* Closed job position ends */}

      {/* Under review job position starts */}

      {/* <div className="mr-10">
            <div className="bg-white mt-10 rounded-lg flex justify-between">
              <p className="font-semibold p-1 pl-3">Under review</p>
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
            {items.map((item) => {
              return (
                <div key={item.id}>
                  <JobItem
                    position="Tester"
                    employee_salary="8700"
                    date="2 March 2021, 12:30pm"
                  />
                </div>
              );
            })}
          </div> */}
      {/* Under review job position ends */}
      <div className="flex justify-center items-center">
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"flex items-center mt-10 mr-4 justify-end"}
          pageLinkClassName={
            "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-blue-100 hover:text-blue-700 focus:bg-blue-100 focus:text-blue-700"
          }
          previousLinkClassName={
            "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-blue-100 hover:text-blue-700"
          }
          nextClassName={"page-item"}
          nextLinkClassName={
            "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-blue-100 hover:text-blue-700"
          }
          breakLinkClassName={
            "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-blue-100 hover:text-blue-700 "
          }
        />
      </div>
    </div>
  );
};

export default Jobs;
