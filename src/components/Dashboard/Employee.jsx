import { useState } from 'react'
import EmployeeCard from "../Common/EmployeeCard"

const Employee = () => {
    // Demo data for Employee
    const [items, setItems] = useState([
        {
            'name': 'Bodhisatta Bhattacharjee',
            'employeeID': 'RNPW/2024-25/WEB007DEV',
            'email': '2109999@kiit.ac.in',
            'progress': 4,
            'projectLink': 'https://github.com/'

        },
        {
            'name': 'Sakshi Mohan',
            'employeeID': 'RNPW/2024-25/WEB008DEV',
            'email': '2109999@kiit.ac.in',
            'progress': 4,
            'projectLink': 'https://github.com/'

        },
        {
            'name': 'Akash Saha',
            'employeeID': 'RNPW/2024-25/WEB009DEV',
            'email': '2109999@kiit.ac.in',
            'progress': 4,
            'projectLink': 'https://github.com/'

        }
    ]);

    return (
        <div className="p-4 sm:ml-64">
            {/* Title Details */}
            <div className="p-4 border-2 bg-gray-100 border-gray-200 rounded-lg">
                <div>
                    <h1 className="text-3xl font-bold text-center mb-8 mt-4">Employees</h1>
                    {/* Employee Card  Heading*/}
                    <div className="grid grid-cols-6 gap-3 bg-primary-600 text-white shadow-gray-300 shadow-xl rounded-t-lg p-5 w-full">
                        <div className='flex justify-center items-center'>
                            <h2 className="text-xl font-bold">Name</h2>
                        </div>
                        <div className='flex justify-center items-center'>
                            <h2 className="text-xl font-bold">Employee ID</h2>
                        </div>
                        <div className='flex justify-center items-center'>
                            <h2 className="text-xl font-bold">Email</h2>
                        </div>
                        <div className='flex justify-center items-center'>
                            <h2 className="text-xl font-bold">Progress</h2>
                        </div>
                        <div className='flex justify-center items-center'>
                            <h2 className="text-xl font-bold">Project</h2>
                        </div>
                        <div className='flex justify-center items-center'>
                            <h2 className="text-xl font-bold">Receipt</h2>
                        </div>
                    </div>
                </div>
                {/* Employee Cards mapped to display*/}
                <div className="">
                    {items.map((item) => {
                        return (
                            <div key={item.id}>
                                <EmployeeCard
                                    key={item.employeeID}
                                    name={item.name}
                                    employeeID={item.employeeID}
                                    email={item.email}
                                    progress={item.progress}
                                    link={item.projectLink}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Employee;
