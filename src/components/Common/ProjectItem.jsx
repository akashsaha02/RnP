import { useState } from 'react'

const ProjectItem = ({ task, deleteTask, editTask, toggleCompleted }) => {
    // State defined for editing the project details
    const [isEditing, setIsEditing] = useState(false);
    const [editedProjectName, setEditedProjectName] = useState(task.text);
    const [editedProjectDescription, setEditedProjectDescription] = useState(task.projectDescription);
    const [editedProjectLink, setEditedProjectLink] = useState(task.link);
    const [editedProjectType, setEditedProjectType] = useState(task.selectedOption);
    const [editedStartDate, setEditedStartDate] = useState(task.startDate);
    const [editedEndDate, setEditedEndDate] = useState(task.endDate);

    // Function to handle the save button click
    function handleSaveClick() {
        editTask(task.id, {
            text: editedProjectName,
            projectDescription: editedProjectDescription,
            link: editedProjectLink,
            selectedOption: editedProjectType,
            startDate: editedStartDate,
            endDate: editedEndDate,
        });
        setIsEditing(false);
    }
    // Button to handle the edit button click
    function handleEditClick() {
        setIsEditing(true);
    }
    function handleCancelClick() {
        setIsEditing(false);
    }
    // Button to handle the checkbox click
    function handleChange() {
        toggleCompleted(task.id);
    }
    return (
        // Project Item View Card
        !isEditing ? (
            <div className='m-3'>
                <div className="bg-gray-100 border-primary-700 border-2 mb-4 rounded-lg overflow-hidden">
                    <div className="p-5">
                        {/* Project Title */}
                        <h2 className="text-xl font-bold mb-2">{task.text}</h2>
                        {/* Project Description */}
                        <p className="text-gray-600 mb-4">{task.projectDescription}</p>
                        <div className='flex items-center '>
                            {/* Project Type */}
                            <p className="text-white font-semibold text-xs mb-4 mr-2 bg-primary-600 px-3 py-1 rounded-full">{task.selectedOption}</p>
                            {/* Project Link */}
                            <a href={task.link} target="_blank" rel="noopener noreferrer" className="text-white bg-black font-semibold text-xs mb-4 rounded-full hover:underline font-md px-3 py-1">
                                Project Link
                            </a>
                        </div>
                        {/* Project Start and End Date */}
                        <div className="flex items-center mb-2">
                            <span
                                {...task.completed ? { className: 'inline-block rounded-full px-3 py-1 text-xs font-semibold bg-green-700 text-white mr-2' } : { className: 'inline-block rounded-full px-3 py-1 text-xs font-semibold bg-gray-600 text-white mr-2' }}
                            >
                                {task.completed ? 'Completed' : 'Ongoing'}
                            </span>
                            <span className="text-sm text-black">{task.startDate} - {task.endDate}</span>
                        </div>
                        {/* Checkbox to mark the project as completed */}
                        <div className="flex items-center font-semibold mb-4 border-primary-600">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={handleChange}
                                className="form-checkbox h-4 w-4 text-primary-600"
                            />
                            <span className="ml-2 text-md">Mark as Completed</span>
                        </div>
                        {/* PDF File need to complete the backend*/}
                        <p className="text-gray-600 mb-4">{task.setPdfFile}</p>
                        {/* Edit and Delete Button */}
                        <div className="flex justify-between items-center">
                            <button
                                onClick={handleEditClick}
                                className="text-sm text-white bg-blue-500 w-20 py-2 mr-10 rounded-md hover:bg-blue-600"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => deleteTask(task.id)}
                                className="text-sm text-white bg-red-500 w-20 py-2 rounded-md hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ) :
            (
                // Edit Project View Card
                <div className='bg-slate-200 p-2 m-2 rounded-xl'>
                    {/* Project Title edit input box */}
                    <input
                        type="text"
                        value={editedProjectName}
                        placeholder='Enter Project Title'
                        onChange={(e) => setEditedProjectName(e.target.value)}
                        className="mt-2 block w-full px-3 py-2 border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {/* Project Description edit input box */}
                    <textarea
                        value={editedProjectDescription}
                        placeholder='Enter Project Description'
                        onChange={(e) => setEditedProjectDescription(e.target.value)}
                        className="mt-2 block w-full px-3 py-2 border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {/* Project Link edit input box */}
                    <input
                        type="text"
                        value={editedProjectLink}
                        placeholder='Enter Project Link'
                        onChange={(e) => setEditedProjectLink(e.target.value)}
                        className="mt-2 block w-full px-3 py-2 border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {/* Project Type edit input box */}
                    <select
                        value={editedProjectType}
                        onChange={(e) => setEditedProjectType(e.target.value)}
                        className="mt-2 block w-full px-3 py-2 border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="Web-Development">Web Development</option>
                        <option value="App-Development">App Development</option>
                        <option value="Machine-Learning">Machine Learning</option>
                    </select>
                    {/* Project Start and End Date edit input box */}
                    <div className='flex justify-center items-center gap-2'>
                        <input
                            type="date"
                            value={editedStartDate}
                            placeholder='Enter Start Date'
                            onChange={(e) => setEditedStartDate(e.target.value)}
                            className="mt-2 block w-full px-3 py-2 border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <input
                            type="date"
                            value={editedEndDate}
                            placeholder='Enter End Date'
                            onChange={(e) => setEditedEndDate(e.target.value)}
                            className="mt-2 block w-full px-3 py-2 border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    {/* Save and Cancel Button */}
                    <div className="flex justify-between items-center mt-4">
                        <button
                            onClick={handleSaveClick}
                            className="text-sm text-white bg-green-500 px-3 py-1 rounded-md hover:bg-green-600"
                        >
                            Save
                        </button>
                        <button
                            onClick={handleCancelClick}
                            className="text-sm text-white bg-gray-500 px-3 py-1 rounded-md hover:bg-gray-600"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )

    );
};


export default ProjectItem

