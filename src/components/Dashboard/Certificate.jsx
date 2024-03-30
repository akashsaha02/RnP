import certificateIcon from "../../assets/certificateIcon.png";
const Certificate = () => {
    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 bg-slate-100 rounded-lg ">
                {/* Certificates Heading Section */}
                <div className="bg-white h-48 rounded-lg text-center mb-4">
                    <h1 className="text-4xl font-bold pb-8 pt-14">View Your Certificates</h1>
                    <p className="text-lg">Browse and download certificates for your achievements</p>
                </div>
                {/* Certificates List Section */}
                <div className="bg-white rounded-lg text-center">
                    <h2 className="text-3xl font-bold pb-8 pt-14">Certificate List</h2>
                    <div className="grid grid-cols-3 gap-4 mx-20">
                        {/* Single certificate card */}
                        <div className=" mb-6 py-3" >
                            <div className="flex justify-center items-center my-4">
                                <img src={certificateIcon} className="w-100" alt="" />
                            </div>
                            <h3 className="font-semibold text-xl mb-2">Certification Name</h3>
                            <p className="text-large text-gray-800">Issued By: Company ABC</p>
                        </div>
                        {/* Single certificate card */}
                        <div className=" mb-6 py-3" >
                            <div className="flex justify-center items-center my-4">
                                <img src={certificateIcon} className="w-100" alt="" />
                            </div>
                            <h3 className="font-semibold text-xl mb-2">Certification Name</h3>
                            <p className="text-large text-gray-800">Issued By: Company ABC</p>
                        </div>
                        {/* Single certificate card */}
                        <div className=" mb-6 py-3" >
                            <div className="flex justify-center items-center my-4">
                                <img src={certificateIcon} className="w-100" alt="" />
                            </div>
                            <h3 className="font-semibold text-xl mb-2">Certification Name</h3>
                            <p className="text-large text-gray-800">Issued By: Company ABC</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certificate
