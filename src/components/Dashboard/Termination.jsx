import React, { useState, useEffect } from "react";

import ReactPaginate from "react-paginate";

const Termination = () => {
  const [pageCount, setpageCount] = useState(0);
  const [chosen, setChosen] = useState(null);

  const handleParagraphClick = (option) => {
    setChosen(option);
  };
  let limit = 50;

  useEffect(() => {
    const getLeaves = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setpageCount(Math.ceil(total / limit));
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
  };

  return (
    <div className=" h-full">
      <div className="p-4 ml-64 bg-blue-50">
        <h1 className="font-semibold text-3xl">Applications</h1>

        <div className="flex items-center mt-4">
          <p
            id="all"
            className={`cursor-pointer mr-4 ${
              chosen === "all" ? "chosen font-bold" : ""
            }`}
            onClick={() => handleParagraphClick("all")}
          >
            All
          </p>
          <p
            id="approved"
            className={`cursor-pointer mr-4 ${
              chosen === "approved" ? "chosen font-bold" : ""
            }`}
            onClick={() => handleParagraphClick("approved")}
          >
            Approved
          </p>
          <p
            id="pending"
            className={`cursor-pointer mr-4 ${
              chosen === "pending" ? "chosen font-bold" : ""
            }`}
            onClick={() => handleParagraphClick("pending")}
          >
            Pending
          </p>
        </div>

        {/* Card for leaves starts */}

        <div className="flex item-center">
          <div className="w-1/2 h-60 mt-5 bg-white mr-5 rounded-xl">
            <div className="flex items-center ">
              <div className="w-12 h-12 rounded-xl bg-gray-200 mt-5 ml-5 mr-3"></div>
              <div>
                <p className="font-semibold mt-4 text-2xl">Shoo Phar Dhie</p>
                <p className="text-gray-400 text-0.5x1">Designer</p>
              </div>
            </div>
            <div className="p-4 mt-2 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              accusamus ab itaque quo.
            </div>
            <div className="flex space-x-40 mt-4">
              <div className="text-gray-400 ml-5 font-semibold text-0.5x1">
                Feb-2021 to Mar-2021
              </div>
              <button className="bg-violet-700 p-2 pl-5 pr-5 rounded-lg text-white">
                Approve
              </button>
            </div>
          </div>
          <div className="w-1/2 h-60 mt-5 bg-white rounded-xl">
            <div className="flex items-center ">
              <div className="w-12 h-12 rounded-xl bg-gray-200 mt-5 ml-5 mr-3"></div>
              <div>
                <p className="font-semibold mt-4 text-2xl">Shoo Phar Dhie</p>
                <p className="text-gray-400 text-0.5x1">Designer</p>
              </div>
            </div>
            <div className="p-4 mt-2 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              accusamus ab itaque quo.
            </div>
            <div className="flex space-x-40 mt-4">
              <div className="text-gray-400 ml-5 font-semibold text-0.5x1">
                Feb-2021 to Mar-2021
              </div>
              <button className="bg-violet-700 p-2 pl-5 pr-5 rounded-lg text-white">
                Approve
              </button>
            </div>
          </div>
        </div>

        {/* Card for leaves end */}

        {/* Pagination starts */}
      </div>
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
  );
};

export default Termination;
