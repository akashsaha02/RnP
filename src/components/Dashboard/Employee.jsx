import EmployeeCard from "../Common/EmployeeCard"

const Employee = () => {
    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 bg-slate-200 border-gray-200 rounded-lg">
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <EmployeeCard name="Samantha Green" date="March 26, 2021" role="Product Designer" mobile="+91 1122334455" email="samantha@gmail.com" />
                    <EmployeeCard name="Jack Reaper" date="February 29, 2020" role="Front-End Developer" mobile="+91 1122334455" email="jack@gmail.com" />
                    <EmployeeCard name="Todd Hewitt" date="December 16, 2022" role="Back-End Developer" mobile="+91 1122334455" email="todd@gmail.com" />
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <EmployeeCard name="Samantha Green" date="March 26, 2021" role="Product Designer" mobile="+91 1122334455" email="samantha@gmail.com" />
                    <EmployeeCard name="Jack Reaper" date="February 29, 2020" role="Front-End Developer" mobile="+91 1122334455" email="jack@gmail.com" />
                    <EmployeeCard name="Todd Hewitt" date="December 16, 2022" role="Back-End Developer" mobile="+91 1122334455" email="todd@gmail.com" />
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <EmployeeCard name="Samantha Green" date="March 26, 2021" role="Product Designer" mobile="+91 1122334455" email="samantha@gmail.com" />
                    <EmployeeCard name="Jack Reaper" date="February 29, 2020" role="Front-End Developer" mobile="+91 1122334455" email="jack@gmail.com" />
                    <EmployeeCard name="Todd Hewitt" date="December 16, 2022" role="Back-End Developer" mobile="+91 1122334455" email="todd@gmail.com" />
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <EmployeeCard name="Samantha Green" date="March 26, 2021" role="Product Designer" mobile="+91 1122334455" email="samantha@gmail.com" />
                    <EmployeeCard name="Jack Reaper" date="February 29, 2020" role="Front-End Developer" mobile="+91 1122334455" email="jack@gmail.com" />
                    <EmployeeCard name="Todd Hewitt" date="December 16, 2022" role="Back-End Developer" mobile="+91 1122334455" email="todd@gmail.com" />
                </div>

            </div>
        </div>
    )
}

export default Employee
