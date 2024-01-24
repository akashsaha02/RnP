import { Link } from "react-router-dom"


const Header = () => {
    return (
        <header >
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="https://rnpsoft.com" className="flex items-center">
                        <img className="w-100 h-8 sm:h-9 mr-3 bg-primary-600 p-2 rounded-lg" src="https://framerusercontent.com/images/xLOBENWTydKgd9jy7VGqXoMKkww.png" alt="rnpsoft Logo" />
                    </a>
                    <div className="flex items-center lg:order-2">
                        <Link to="/" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-2 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">Log in</Link>
                        <Link to="/signup" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-2 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">Sign in</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
