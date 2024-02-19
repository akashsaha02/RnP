import error from '../../assets/error.png'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div className="text-center bg-[#e9f5fe] py-[30px] flex justify-center items-center flex-col ">

            <div>
                <h1 className='font-bold text-[80px]'>Oops!</h1>
                <p className=' text-[32px]'>You are lost</p>
            </div>


            <div className='mt-20 w-2/5'>
                <img src={error} className='w-100' alt="" />
            </div>
            <div>
                <Link to='/' className="block mt-20 px-6 py-3 font-bold bg-blue-500 text-white rounded-md shadow hover:bg-primary-700">
                    Return to Home
                </Link>
            </div>


        </div>

    )
}

export default Error
