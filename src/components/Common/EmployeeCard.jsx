import StarRatings from 'react-star-ratings';
import { useState } from 'react';

const EmployeeCard = ({ name, employeeID, email, progress, link }) => {
    // updating the star rating state
    const [rating, setRating] = useState(progress);
    // updating star rating function
    const handleRatingChange = (newRating) => {
        setRating((newRating));
    };
    return (
        <div className="grid grid-cols-5 gap-5 bg-white drop-shadow-lg rounded-lg p-6 w-full mb-4">
            {/* Employee Name */}
            <div className='flex justify-center items-center'>
                <h2 className="text-lg font-bold text-black">{name}</h2>
            </div>
            {/* Employee ID */}
            <div className='flex justify-center items-center'>
                <p className=" text-black font-bold">{employeeID}</p>
            </div>
            {/* Employee Email */}
            <div className='flex justify-center items-center'>
                <p className=" text-black font-bold">{email}</p>
            </div>
            {/* Star Progress Input */}
            <div className="flex justify-center items-center">
                <StarRatings
                    rating={rating}
                    starRatedColor="blue"
                    starHoverColor="blue"
                    changeRating={handleRatingChange}
                    numberOfStars={5}
                    starDimension="25px"
                    starSpacing="1px"
                    name="rating"
                />
            </div>
            {/* View Project Button */}
            <button
                onClick={() => {
                    window.open(link, '_blank');
                    console.log(link);
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center bg-primary-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl">
                View Project
            </button>
        </div>
    )
}

export default EmployeeCard
