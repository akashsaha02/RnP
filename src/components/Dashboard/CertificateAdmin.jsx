const CertificateAdmin = () => {
    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-300 bg-slate-100 rounded-lg ">
                {/* Certificates Heading Section */}
                <div className="bg-white rounded-lg mb-4">
                    <h1 className="text-4xl font-bold pb-8 pt-14 text-center">Certificate Details</h1>
                    {/* Form input section */}
                    <div className="flex justify-center items-center">
                        <div className='w-1/2'>
                            {/* Full Name */}
                            <div className='my-5'>
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="block w-full h-10 mt-1 bg-white border-gray-300 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder:px-4"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            {/* Employee ID */}
                            <div className="my-5">
                                <label htmlFor="email">Employee ID</label>
                                <input
                                    type="text"
                                    id="employeeID"
                                    className="block w-full h-10 mt-1 bg-white border-gray-300 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder:px-4"
                                    placeholder="Enter your employee ID"
                                />
                            </div>
                             {/* Certificate Title */}
                             <div className="my-5">
                                <label htmlFor="email">Certificate Title</label>
                                <input
                                    type="text"
                                    id="certificateTitle"
                                    className="block w-full h-10 mt-1 bg-white border-gray-300 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder:px-4"
                                    placeholder="Enter the certificate title"
                                />
                            </div>
                             {/* Choose file Option */}
                             <div className="my-5">
                                <label htmlFor="email">Choose File</label>
                                <input
                                    type="file"
                                    id="email"
                                    className="block w-full h-10 mt-1 bg-white border-gray-300 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-4 py-1"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            {/* Submit Button */}
                            <div className="my-8 flex justify-center">
                                <button className="px-6 py-3 mb-6 w-full font-bold bg-blue-500 text-white rounded-md shadow hover:bg-gray-600 ">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CertificateAdmin
