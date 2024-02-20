import React from "react";

const Applynow = () => {
  return (
    <div className="p-4 sm:ml-64 bg-blue-50 ">
      <div className="m-5 p-5 bg-white w-8/9 flex justify-center">
        <div className="m-5 p-5 bg-white w-2/3">
          <h1 className="text-4xl font-bold text-center mb-8">Apply now</h1>

          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="number"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Number
              </label>
              <input
                type="text"
                id="number"
                name="number"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="portfolio"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Portfolio Link
              </label>
              <input
                type="text"
                id="portfolio"
                name="portfolio"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="experience"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Years of Experience
              </label>
              <select
                id="experience"
                name="experience"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="0-1">0-1 years</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5+">5+ years</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="resume"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Resume
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <span className="text-gray-400">PDF or word format</span>
            </div>

            <div className="flex justify-center">
              <div className="flex items-center">
                <button
                  className="bg-white border border-black hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                  type="button"
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Applynow;
