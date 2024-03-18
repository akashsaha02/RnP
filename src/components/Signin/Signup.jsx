import { Link } from "react-router-dom"


const Signup = () => {
    return (
        <div className="bg-primary-800 py-10">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                            Create an Account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                {/* <label for="first-name" className="block mb-2 text-sm font-medium text-gray-900 ">First Name</label> */}
                                <input type="text" name="first-name" id="first-name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-3xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="First name" required="" />
                            </div>
                            <div>
                                {/* <label for="last-name" className="block mb-2 text-sm font-medium text-gray-900 ">Last Name</label> */}
                                <input type="text" name="last-name" id="last-name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-3xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Last name" required="" />
                            </div>
                            <div>
                                {/* <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label> */}
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-3xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="E-mail" required="" />
                            </div>
                            <div>
                                {/* <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label> */}
                                <input type="password" name="password" id="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-3xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                            </div>
                            <div>
                                {/* <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 ">Confirm password</label> */}
                                <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-3xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                            </div>

                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center">Create an account</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link href="/" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
