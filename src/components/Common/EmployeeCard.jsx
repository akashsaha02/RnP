import React from 'react'

const EmployeeCard = ({ name, date, role, mobile, email , empImg}) => {
    return (
        <div className="flex items-center justify-around rounded text-center">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <div className="flex flex-col items-center px-2 pb-5">
                    <img className="w-24 h-24 mb-3 mt-3 rounded-full shadow-lg" src={empImg} alt="employee image" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{date} - Present</span>
                    <span className="text-m pt-2 text-gray-500 dark:text-gray-400">{role}</span>
                    <a href="#" className="inline-flex items-center mt-2 px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ">{mobile}</a>
                    <a href="#" className="inline-flex items-center mt-2 px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ">{email}</a>
                </div>
            </div>
        </div>
    )
}

export default EmployeeCard
