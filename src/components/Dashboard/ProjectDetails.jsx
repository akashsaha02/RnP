import { useState } from 'react'

import title from '../../assets/project/project-title.png'
import date from '../../assets/project/date.png'
import srs from '../../assets/project/srs.png'
import document from '../../assets/project/document.png'
import status from '../../assets/project/status.png'
const ProjectDetails = () => {
    // State to manage the section of the project details
    const [section, setSection] = useState('overview')
    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700">
                <div className="bg-gray-100 rounded-xl text-center">
                    {/* Headings and buttons to navigate between the overview and team sections */}
                    <h1 className="text-4xl font-bold pb-8 pt-14">Project Details</h1>
                    <p className="text-lg">Details of the current Project</p>
                    <div className="flex justify-center items-center gap-4 pt-8 pb-14">
                        <button
                            onClick={() => setSection('overview')}
                            className={`flex justify-center items-center w-40 text-white font-bold py-2 px-4 rounded-xl ${section === 'overview' ? 'bg-primary-600 hover:bg-blue-600' : 'bg-gray-400'}`}
    
                            // className="flex justify-center items-center bg-primary-600 w-40 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl"
                        >
                            Overview
                        </button>
                        <button
                            onClick={() => setSection('team')}
                            className={`flex justify-center items-center w-40 text-white font-bold py-2 px-4 rounded-xl ${section === 'team' ? 'bg-primary-600 hover:bg-blue-600' : 'bg-gray-400'}`}
    
                            // className="flex justify-center items-center bg-primary-600 w-40 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl"
                        >
                            Team Members
                        </button>
                    </div>
                </div>

                {section === 'overview' ? (
                    //Overview Section
                    <div className="bg-gray-100 rounded-xl mt-8">
                        <h1 className="text-3xl font-bold pb-8 pt-14 text-center">Project Overview</h1>
                        <p className="text-lg text-center">Details of the current Project</p>
                        <div className="grid grid-cols-2 gap-4 pt-8 pb-14 mx-20">
                            {/* Project Title */}
                            <div className="grid grid-cols-4  bg-white border-2 border-gray-400 rounded-xl h-40">
                                <div className='col-1 mx-6 my-4 flex justify-center items-center'>
                                    <img src={title} className='w-100' alt="" />
                                </div>
                                <div className='my-10 col-span-3 mx-2'>
                                    <h2 className='text-xl font-semibold'>Title</h2>
                                    <p>Project A</p>
                                </div>
                            </div>
                            {/* Project Description */}
                            <div className="grid grid-cols-4 bg-white border-2 border-gray-400 rounded-xl h-40">
                                <div className='col-1 mx-6 my-4 w- flex justify-center items-center'>
                                    <img src={document} className='w-100' alt="" />
                                </div>
                                <div className='my-10 col-span-3 mx-2 overflow-y-scroll'>
                                    <h2 className='text-xl font-semibold'>Description</h2>
                                    <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga aperiam dignissimos numquam odit consectetur perspiciatis voluptatibus fugiat quod sunt sapiente! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum cumque aliquam soluta recusandae. Quis voluptatem cumque itaque! Dolorum iste consequuntur voluptatum sed iusto ipsum laborum excepturi facilis, qui voluptates est! </p>
                                </div>
                            </div>
                            {/* Project Start Date */}
                            <div className="grid grid-cols-4 bg-white border-2 border-gray-400 rounded-xl h-40">
                                <div className='col-1 mx-6 my-4 w- flex justify-center items-center'>
                                    <img src={date} className='w-100' alt="" />
                                </div>
                                <div className='my-10 col-span-3 mx-2'>
                                    <h2 className='text-xl font-semibold'>Start Date</h2>
                                    <p >01/01/2023</p>
                                </div>
                            </div>
                            {/* Project End Date */}
                            <div className="grid grid-cols-4 bg-white border-2 border-gray-400 rounded-xl h-40">
                                <div className='col-1 mx-6 my-4 w- flex justify-center items-center'>
                                    <img src={date} className='w-100' alt="" />
                                </div>
                                <div className='my-10 col-span-3 mx-2'>
                                    <h2 className='text-xl font-semibold'>End Date</h2>
                                    <p >01/04/2023</p>
                                </div>
                            </div>
                            {/* Project Status */}
                            <div className="grid grid-cols-4 bg-white border-2 border-gray-400 rounded-xl h-40">
                                <div className='col-1 mx-6 my-4 w- flex justify-center items-center'>
                                    <img src={status} className='w-100' alt="" />
                                </div>
                                <div className='my-10 col-span-3 mx-2'>
                                    <h2 className='text-xl font-semibold'>Status</h2>
                                    <p >Ongoing</p>
                                </div>
                            </div>
                            {/* Project SRS Document */}
                            <div className="grid grid-cols-4 bg-white border-2 border-gray-400 rounded-xl h-40">
                                <div className='col-1 mx-6 my-4 w- flex justify-center items-center'>
                                    <img src={srs} className='w-100' alt="" />
                                </div>
                                <div className='my-10 col-span-3 mx-2'>
                                    <h2 className='text-xl font-semibold'>SRS Document</h2>
                                    <p >Project A</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (

                    // Team Section
                    <div className="bg-gray-100 rounded-xl mt-8 pb-8">
                        {/* Heading */}
                        <h1 className="text-3xl font-bold pb-8 pt-14 text-center">Current Project Team</h1>
                        <div className='mx-8'>
                            {/* Employee Cards Start*/}
                            <div className="grid grid-cols-3 bg-white drop-shadow-lg rounded-lg p-6 w-full mb-4">
                                {/* Employee Name */}
                                <div className='flex justify-center items-center'>
                                    <h2 className="text-lg font-bold text-black">Akash Saha</h2>
                                </div>
                                {/* Employee ID */}
                                <div className='flex justify-center items-center'>
                                    <p className=" text-black font-bold">RNPW/2024-25/WEB007DEV</p>
                                </div>
                                {/* Employee Email */}
                                <div className='flex justify-center items-center'>
                                    <p className=" text-black font-bold">email@gmail.com</p>
                                </div>
                            </div>
                            {/* Employee Cards End */}

                            {/* Employee Cards Start*/}
                            <div className="grid grid-cols-3 bg-white drop-shadow-lg rounded-lg p-6 w-full mb-4">
                                {/* Employee Name */}
                                <div className='flex justify-center items-center'>
                                    <h2 className="text-lg font-bold text-black">Akash Saha</h2>
                                </div>
                                {/* Employee ID */}
                                <div className='flex justify-center items-center'>
                                    <p className=" text-black font-bold">RNPW/2024-25/WEB007DEV</p>
                                </div>
                                {/* Employee Email */}
                                <div className='flex justify-center items-center'>
                                    <p className=" text-black font-bold">email@gmail.com</p>
                                </div>
                            </div>
                            {/* Employee Cards End */}

                            {/* Employee Cards Start*/}
                            <div className="grid grid-cols-3 bg-white drop-shadow-lg rounded-lg p-6 w-full mb-4">
                                {/* Employee Name */}
                                <div className='flex justify-center items-center'>
                                    <h2 className="text-lg font-bold text-black">Akash Saha</h2>
                                </div>
                                {/* Employee ID */}
                                <div className='flex justify-center items-center'>
                                    <p className=" text-black font-bold">RNPW/2024-25/WEB007DEV</p>
                                </div>
                                {/* Employee Email */}
                                <div className='flex justify-center items-center'>
                                    <p className=" text-black font-bold">email@gmail.com</p>
                                </div>
                            </div>
                            {/* Employee Cards End */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProjectDetails

