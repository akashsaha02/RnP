import { useState } from 'react'


const ChangePassword = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isPasswordVisible2, setIsPasswordVisible2] = useState(false);
    // functions for show hide icon
    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }
    function togglePasswordVisibility2(){
        setIsPasswordVisible2((prevState) => !prevState);
    }
    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700">
                <div className="flex items-center justify-center flex-row text-center mb-4 rounded bg-gray-50 dark:bg-gray-800">
                    <div>
                        <h1 className=' text-4xl font-bold mt-20'>Change Password</h1>
                        <p className='my-4'>Update your account's password</p>
                        <div>
                            {/* Current Password */}
                            <div className="relative w-full container mx-auto">
                                <input type="text" placeholder="Enter current password" className="w-full px-4 py-2 text-base border border-gray-300 rounded-xl outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                                />
                            </div>
                            {/* New Password Field */}
                            <div className="relative w-full container mx-auto my-5">
                                <input type={isPasswordVisible ? "text" : "password"} placeholder="Enter new password" className="w-full px-4 py-2 text-base border border-gray-300 rounded-xl outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                                />
                                <button className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                                    onClick={togglePasswordVisibility}>
                                    {isPasswordVisible ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            <div className="relative w-full container mx-auto">
                                <input type={isPasswordVisible2 ? "text" : "password"} placeholder="Password" className="w-full px-4 py-2 text-base border border-gray-300 rounded-xl outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                                />
                                <button className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                                    onClick={togglePasswordVisibility2}>
                                    {isPasswordVisible2 ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            <div className='flex justify-center items-center py-4 mb-20'>
                                <button type="reset" className="w-full border-2 border-transparent text-white bg-primary-600 hover:bg-white hover:text-primary-600 hover:border-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-3">Cancel</button>
                                <button type="submit" className="w-full border-2 border-transparent text-white bg-primary-600 hover:bg-white hover:text-primary-600 hover:border-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword
