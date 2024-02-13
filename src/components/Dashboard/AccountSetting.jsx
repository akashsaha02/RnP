import React from 'react'
import profileImg from '../../assets/profile.png'
import deleteImg from '../../assets/delete.png'
import passImg from '../../assets/password.png'
import { Link } from 'react-router-dom'
const AccountSetting = () => {
    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700">
                <div className="flex items-center justify-center flex-row text-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                    <div>
                        <h1 className=' text-4xl font-bold'>Account Setting</h1>
                        <p className='mt-4'>Manage Your Account Preferences</p>
                    </div>

                </div>
                <div className='text-center bg-gray-50 rounded mb-4 '>
                    <h1 className='text-4xl font-bold py-10'>Profile</h1>
                    <div className="flex justify-around py-5 items-center px-4 text-center">

                        <Link to="/edit-profile">
                            <div className="flex justify-center items-center flex-col rounded border-2 border-transparent px-10 py-5 bg-gray-50 hover:border-2 hover:border-black dark:bg-gray-800">
                                <div>
                                    <img className=' w-100' src={profileImg} alt="" />
                                </div>
                                <h2 className=' font-medium text-lg py-5'>Edit Profile</h2>
                            </div>
                        </Link>
                        <Link to="/change-password">
                            <div className="flex justify-center items-center flex-col rounded border-2 border-transparent px-10 py-5 bg-gray-50 hover:border-2 hover:border-black dark:bg-gray-800">
                                <div>
                                    <img className='w-100' src={passImg} alt="" />
                                </div>
                                <h2 className=' font-medium text-lg py-5'>Change Password</h2>
                            </div>
                        </Link>
                        <Link to="/delete-account">
                            <div className="flex justify-center  items-center flex-col rounded border-2 border-transparent px-10 py-5 bg-gray-50 hover:border-2 hover:border-black dark:bg-gray-800">
                                <div>
                                    <img className=' w-100' src={deleteImg} alt="" />
                                </div>
                                <h2 className=' font-medium text-lg py-5'>Delete Account</h2>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountSetting
