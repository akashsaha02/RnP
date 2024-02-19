import React from 'react'

const Contact = () => {
    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700">
                <div className="mb-4 rounded bg-gray-50 dark:bg-gray-800">
                    <div className='flex items-center justify-center flex-col pt-10'>
                        <h1 className=' text-4xl text-center font-bold'>Contact Us</h1>
                        <p className='mt-4 text-center'>Fill out the form below and we will get back to you.</p>

                        <div className='w-1/2'>
                            {/* Full Name */}
                            <div className='my-5'>
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="block w-full h-10 mt-1 bg-white border-gray-600 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                            {/* Email Address */}
                            <div className="">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="block w-full h-10 mt-1 bg-white border-gray-600 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>

                            {/* Message */}
                            <div className='my-5'>
                                <label htmlFor="bio">Message</label>
                                <textarea
                                    id="bio"
                                    rows="4"
                                    placeholder='Write your message here...'
                                    className="block p-2 w-full mt-1 bg-white border-gray-600 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                ></textarea>
                            </div>
                            {/* Submit Button */}
                            <div className="my-8 flex justify-center">
                               
                                <button className="px-6 py-3 w-full font-bold bg-blue-500 text-white rounded-md shadow hover:bg-gray-600">
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

export default Contact
