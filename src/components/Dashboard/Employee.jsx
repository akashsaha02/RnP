import React, { useState, useEffect } from 'react'

import EmployeeCard from "../Common/EmployeeCard"
import ReactPaginate from "react-paginate";

const Employee = () => {
    const [items, setItems] = useState([]);

    const [pageCount, setpageCount] = useState(0);

    let limit = 10;

    useEffect(() => {
        const getEmployees = async () => {
            const res = await fetch(
                //custom api call
                `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
            );
            const data = await res.json();
            const total = res.headers.get("x-total-count");
            setpageCount(Math.ceil(total / limit));
            // console.log(Math.ceil(total/12));
            setItems(data);
        };

        getEmployees();
    }, [limit]);

    const fetchEmployees = async (currentPage) => {
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
        const employyesFormServer = await fetchEmployees(currentPage);
        setItems(employyesFormServer);
    }

    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 bg-slate-200 border-gray-200 rounded-lg">
                <div className="grid grid-cols-3 gap-4 mb-4">
                    {items.map((item) => {
                        return (
                            <div key={item.id}>
                                <EmployeeCard name={item.name} date="21 February, 2020" role="Product Designer" mobile="+91 1122334455" email={item.email} />
                            </div>
                        );
                    })}
                </div>

            </div>
            <div className='flex justify-center items-center'>
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"inline-flex -space-x-px text-sm justify-content-center items-center mt-4 mb-4"}
                pageLinkClassName={"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-blue-100 hover:text-blue-700 focus:bg-blue-100 focus:text-blue-700"}
                previousLinkClassName={"flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-blue-100 hover:text-blue-700"}
                nextClassName={"page-item"}
                nextLinkClassName={"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-blue-100 hover:text-blue-700"}
                breakLinkClassName={"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-blue-100 hover:text-blue-700 "}
            />
            </div>
        </div>
    )
}

export default Employee
