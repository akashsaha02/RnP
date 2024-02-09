import { useState } from 'react'
import Card from '../Common/Card'
import ticketsOpen from '../../assets/ticketsOpen.png'
import ticketsClosed from '../../assets/ticketsClosed.png'
import ProjectItem from '../Common/ProjectItem'
import ReactPaginate from 'react-paginate'

const Projects = () => {
  // Sample data for projects
  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": 'Project 11',
      "completed": true,
      "startDate": "2023-10-26",
      "endDate": "2024-02-09" // Example end date
    },
    {
      "id": 2,
      "text": 'Project 2020',
      "completed": false,
      "startDate": "2023-10-26",
      "endDate": "2024-02-09"// Set to null initially
    },
    {
      "id": 722,
      "text": "Project 722",
      "completed": false,
      "startDate": "2023-10-26",
      "endDate": "2024-02-09"
    },
    {
      "id": 2,
      "text": "Project 2",
      "completed": false,
      "startDate": "2023-10-26",
      "endDate": "2024-02-09"
    },
    {
      "id": 870,
      "text": "Project 870",
      "completed": true,
      "startDate": "2023-10-26",
      "endDate": "2024-02-09"
    },
    {
      "id": 688,
      "text": "Project 688",
      "completed": false,
      "startDate": "2023-10-26",
      "endDate": "2024-02-09"
    },
    {
      "id": 894,
      "text": "Project 894",
      "completed": true,
      "startDate": "2023-10-26",
      "endDate": "2024-02-09"
    },
    {
      "id": 979,
      "text": "Project 979",
      "completed": false,
      "startDate": "2023-10-26",
      "endDate": "2024-02-09"
    },
    {
      "id": 311,
      "text": "Project 311",
      "completed": false,
      "startDate": "2023-10-26",
      "endDate": "2024-02-09"
    },
    {
      "id": 564,
      "text": "Project 564",
      "completed": true,
      "startDate": "2023-10-26",
      "endDate": "2024-02-09"
    },
    {
      "id": 868,
      "text": "Projecfsfst 868",
      "completed": false,
      "startDate": "2023-10-26",
      "endDate": "2024-02-09"
    },
    {
      "id": 900,
      "text": "Project 900",
      "completed": false,
      "startDate": "2023-10-26",
      "endDate": "2024-02-09"
    },
    {
      "id": 200,
      "text": "Project 200",
      "completed": false,
      "startDate": "2023-10-26",
      "endDate": "2024-02-09"
    },
    {
      "id": 212,
      "text": "Project 212",
      "completed": false,
      "startDate": "2023-10-26",
      "endDate": "2024-02-09"
    },
    {
      "id": 128,
      "text": "Project 128",
      "completed": false,
      "startDate": "2023-10-26",
      "endDate": "2024-02-09"
    },
    {
      "id": 718,
      "text": "Project 718",
      "completed": true,
      "startDate": "2023-10-26",
      "endDate": "2024-02-09"
    },
    {
      "id": 678,
      "text": "Project 678",
      "completed": false,
      "startDate": "2023-10-26",
      "endDate": "2023-10-26",
    }

  ]);

  const [text, setText] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [pageNumber, setPageNumber] = useState(0);

  //Add Projects tasks function
  function addTask(text, startDate, endDate) {
    const newTask = {
      id: Date.now(),
      text,
      startDate,
      endDate,
      completed: false,

    };
    setTasks([...tasks, newTask]);
    setText('');
    setStartDate([]);
    setEndDate([]);
  }

  //Delete, Edit and Toggle Completed Project tasks
  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }
  function editTask(id) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, text };
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  function toggleCompleted(id) {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    }));
  }

  //Pagination
  const itemsPerPage = 5;
  const pagesVisited = pageNumber * itemsPerPage;
  const pageCount = Math.ceil(tasks.length / itemsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 rounded-lg">
        {/* Projects Overview */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <Card name='Ongoing Projects' value='182' imgValue={ticketsOpen} />
          <Card name='Closed Projects' value='321' imgValue={ticketsClosed} />
          <Card name='Hold' value='48' imgValue={ticketsOpen} />
        </div>

        {/* Ongoing Projects  */}
        <div className="mb-4 rounded bg-gray-50 dark:bg-gray-800">

          {/* Searchbar and Heading Start */}
          <div className='flex justify-between items-center px-4 py-3'>
            <div className='w-72'>
              <h1 className=' text-xl mr-4 font-bold'>Ongoing Projects</h1>
            </div>
            <div className='col-span-2 w-full mr-4'>
              <form>
                <div className="flex">
                  <div className="relative w-full">
                    <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg  border-2-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search" required />
                    <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                      </svg>
                      <span className="sr-only">Search</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className='w-64'>
              <select id="filter" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option value="week" selected>This Week</option>
                <option value="day" selected>Today</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>
            </div>
          </div>
          {/* Searchbar and Heading End */}
          {/* Projects start */}
          <div className='my-3'>
            <div className="mb-2">
              {/* Optional Add Projects with start and end date */}
              <div className='flex justify-around items-center mb-4'>
                <h2 className='font-bold text-lg'>Add Projects</h2>
                <input
                  className='border-2 w-72 border-gray-200 rounded-lg px-3 py-1.5 mr-2'
                  value={text}
                  placeholder='Enter Project name'
                  onChange={e => setText(e.target.value)}
                  required
                />
                <input
                  required
                  className='border-2 border-gray-200 rounded-lg px-3 py-1.5 mr-2'
                  type="date"
                  placeholder='Enter Start Date'
                  value={startDate}
                  onChange={e => setStartDate(e.target.value)}
                />
                <input
                  required
                  className='border-2 border-gray-200 rounded-lg px-3 py-1.5 mr-2'
                  type="date"
                  placeholder='Enter Start Date'
                  value={endDate}
                  onChange={e => setEndDate(e.target.value)}
                />
                <button
                  className='text-white bg-primary-600 border-2 hover:bg-white hover:text-primary-600 hover:border-primary-600 focus:ring-2 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2'
                  onClick={() => { if (text && startDate && endDate) addTask(text, startDate, endDate) }}>Add</button>

              </div>
              {/* Optional Add Projects with start and end date */}
              {/* Project Heading Start */}
              <div className='flex justify-between items center font-bold text-lg bg-gray-100 h-12 mb-3 rounded-lg'>
                <div>Completed</div>
                <div className='mr-20 pr-10'>Projects</div>
                <div className='flex justify-center items-center'>
                  <div className='flex justify-around items-center mr-32'>
                    <h2 className='w-30 mr-10'>Start</h2>
                    <h2 className='w-30 mr-10 '>Deadline</h2>
                  </div>
                  <h2 className=' w-32'>Actions</h2>
                </div>
              </div>
              {/* Project Heading End */}
              {/* Project Component Start */}
              <div>
                {tasks
                  .slice(pagesVisited, pagesVisited + itemsPerPage)
                  .map(task => (
                    console.log(task),
                    <ProjectItem
                      key={task.id}
                      task={task}
                      deleteTask={deleteTask}
                      editTask={editTask}
                      startDate={task.startDate}
                      toggleCompleted={toggleCompleted}
                      endDate={task.endDate}
                    />
                  ))}
              </div>
              {/* Project Component End */}
            </div>
          </div>
          {/* Projects End */}
        </div>
        <div className='flex justify-center items-center'>
          {tasks.length > itemsPerPage + 1 &&
            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={changePage}
              containerClassName={"inline-flex -space-x-px text-sm justify-content-center items-center mt-4 mb-4"}
              pageLinkClassName={"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-blue-100 hover:text-blue-700 focus:bg-blue-100 focus:text-blue-700"}
              previousLinkClassName={"flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-blue-100 hover:text-blue-700"}
              nextClassName={"page-item"}
              nextLinkClassName={"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-blue-100 hover:text-blue-700"}
              breakLinkClassName={"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-blue-100 hover:text-blue-700 "}

            />}
        </div>
      </div>

    </div>
  )
}

export default Projects


