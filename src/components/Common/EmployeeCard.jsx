import StarRatings from "react-star-ratings";
import { useState } from "react";

const EmployeeCard = ({ name, employeeID, email, progress, link }) => {
  // updating the star rating state
  const [rating, setRating] = useState(progress);
  // updating star rating function
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  //Add receipts
  const [file, setFile] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const months=["January","February","March","April","May","June","July","August","September","October","November","December"]
  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
    setMenuOpen(false); 
    document.getElementById("fileInput").click();
  };

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
    console.log("Uploaded file for month:", selectedMonth, uploadedFile);
  };
  return (
    <div className="grid grid-cols-6 gap-4 bg-white drop-shadow-lg rounded-lg p-6 w-full mb-4">
      {/* Employee Name */}
      <div className="flex justify-center items-center">
        <h2 className="text-lg font-semibold text-black">{name}</h2>
      </div>
      {/* Employee ID */}
      <div className="flex justify-center items-center">
        <p className=" text-black font-semibold">{employeeID}</p>
      </div>
      {/* Employee Email */}
      <div className="flex justify-center items-center">
        <p className=" text-black font-semibold">{email}</p>
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
          window.open(link, "_blank");
          console.log(link);
        }}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center bg-primary-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl"
      >
        View Project
      </button>

      {/* Add receipt section */}
      <div className="flex items-center ml-5 mt-3 z-50">
        <input
          id="fileInput"
          type="file"
          onChange={handleFileUpload}
          style={{ display: "none" }}
        />
        <div className="relative">
          <button
            className="bg-primary-600 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded-xl ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {selectedMonth || "Select Month"}
          </button>
          {menuOpen && (
            <div className="absolute bg-white mt-1 p-2 rounded-md shadow-lg">
              {months.map((month) => (
                <button
                  key={month}
                  className="block w-full text-left py-1 px-2 hover:bg-gray-100"
                  onClick={() => handleMonthSelect(month)}
                >
                  {month}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
