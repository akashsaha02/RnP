import React, { useState, useEffect } from "react";
import LeaveCard from "../Common/LeaveCard";
import ReactPaginate from "react-paginate";

const Termination = () => {
  const [pageCount, setpageCount] = useState(0);
  const [chosen, setChosen] = useState(null);
  const [items, setItems] = useState([]);

  const handleParagraphClick = (option) => {
    setChosen(option);
  };
  let limit = 6;

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

        <div className="grid grid-cols-2 gap-4 mb-4">
            {items.map((item) => {
              return (
                <div key={item.id}>
                  <LeaveCard
                    name={item.name}
                    designation="Designer"
                    text={item.body}
                    date="Feb-2021 to Mar-2021"
                  />
                </div>
               );
            })}
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
