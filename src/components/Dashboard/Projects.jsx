import { useState, useEffect } from 'react'
import Card from '../Common/Card'
import ticketsOpen from '../../assets/ticketsOpen.png'
import ticketsClosed from '../../assets/ticketsClosed.png'
import ProjectItem from '../Common/ProjectItem'

const Projects = () => {
  // Demo Item
  const [tasks, setTasks] = useState([
    { 'id': 1, 'text': 'Task 1', 'projectDescription': 'Description 1', 'selectedOption': 'App-Development', 'startDate': '2024/02/11', 'endDate': '2024/02/11', 'selectedFile': null, 'link': 'http://example.com/1' },
    { 'id': 2, 'text': 'Task 2', 'projectDescription': 'Description 2', 'selectedOption': 'App-Development', 'startDate': '2024/02/12', 'endDate': '2024/02/12', 'selectedFile': null, 'link': 'http://example.com/2' },
    { 'id': 3, 'text': 'Task 3', 'projectDescription': 'Description 3', 'selectedOption': 'App-Development', 'startDate': '2024/02/13', 'endDate': '2024/02/13', 'selectedFile': null, 'link': 'http://example.com/3' },
    { 'id': 4, 'text': 'Task 4', 'projectDescription': 'Description 4', 'selectedOption': 'Web-Development', 'startDate': '2024/02/14', 'endDate': '2024/02/14', 'selectedFile': null, 'link': 'http://example.com/4' },
    { 'id': 5, 'text': 'Task 5', 'projectDescription': 'Description 5', 'selectedOption': 'Web-Development', 'startDate': '2024/02/15', 'endDate': '2024/02/15', 'selectedFile': null, 'link': 'http://example.com/5' },
    { 'id': 6, 'text': 'Task 6', 'projectDescription': 'Description 6', 'selectedOption': 'Web-Development', 'startDate': '2024/02/16', 'endDate': '2024/02/16', 'selectedFile': null, 'link': 'http://example.com/6' },
    { 'id': 7, 'text': 'Task 7', 'projectDescription': 'Description 7', 'selectedOption': 'Machine-Learning', 'startDate': '2024/02/17', 'endDate': '2024/02/17', 'selectedFile': null, 'link': 'http://example.com/7' },
    { 'id': 8, 'text': 'Task 8', 'projectDescription': 'Description 8', 'selectedOption': 'Machine-Learning', 'startDate': '2024/02/18', 'endDate': '2024/02/18', 'selectedFile': null, 'link': 'http://example.com/8' },
    { 'id': 9, 'text': 'Task 9', 'projectDescription': 'Description 9', 'selectedOption': 'Machine-Learning', 'startDate': '2024/02/19', 'endDate': '2024/02/19', 'selectedFile': null, 'link': 'http://example.com/9' },
    { 'id': 10, 'text': 'Task 10', 'projectDescription': 'Description 10', 'selectedOption': 'Machine-Learning', 'startDate': '2024/02/20', 'endDate': '2024/02/20', 'selectedFile': null, 'link': 'http://example.com/10' },


  ]);

  const [text, setText] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedFile, setSelectedFile] = useState(null);
  const [link, setLink] = useState('');
  // for searchbar defining states
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  // for filter dropdown defining states
  const [filter, setFilter] = useState('all');

  //Add Projects function
  function addTask(text, projectDescription, selectedOption, startDate, endDate, selectedFile, link) {
    const newTask = {
      id: Date.now(),
      text,
      projectDescription,
      selectedOption,
      startDate,
      endDate,
      selectedFile,
      link,
      completed: false,

    };
    setTasks([...tasks, newTask]);
    setText('');
    setProjectDescription('');
    setSelectedOption('');
    setStartDate([]);
    setEndDate([]);
    setSelectedFile(null);
    setLink('');
  }

  //Delete Project function 
  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }
  //Edit Project function
  const editTask = (id, updatedTask) => {
    setTasks(prevTasks => prevTasks.map(task => task.id === id ? updatedTask : task));
  };
  //Toggle Completed function
  function toggleCompleted(id) {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    }));
  }
  // Search function
  useEffect(() => {
    const results = tasks.filter(task =>
      task.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  }, [searchQuery, tasks]);

  // Filter function
  const filteredTasks = tasks.filter(task => {
    const taskDate = new Date(task.startDate);
    const now = new Date();
  
    switch (filter) {
      case 'day':
        return taskDate.toDateString() === now.toDateString();
      case 'week':
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(now.getDate() - 7);
        return taskDate >= oneWeekAgo;
      case 'month':
        return taskDate.getMonth() === now.getMonth() && taskDate.getFullYear() === now.getFullYear();
      case 'year':
        return taskDate.getFullYear() === now.getFullYear();
      case 'all':
        return true;
      default:
        return true;
    }
  });

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 rounded-lg">
        {/* Projects Overview */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Onfoing Projetcs */}
          <Card name='Ongoing Projects' value='182' imgValue={ticketsOpen} />
          {/* Completed Projects */}
          <Card name='Completed Projects' value='321' imgValue={ticketsClosed} />
        </div>
        <h2 className='font-bold text-3xl mb-4 text-center'>Add Projects</h2>

        {/*Add Projects with details */}
        <div className='flex justify-center items-center flex-col mb-10'>
          {/* Project title input field */}
          <input
            className='border-2 w-1/2 border-gray-200 rounded-lg px-3 py-1.5 mb-2 placeholder:text-gray-800'
            value={text}
            placeholder='Enter Project Title'
            onChange={e => setText(e.target.value)}
            required
          /> <br />
          {/* Project Description input field */}
          <input
            className='border-2 w-1/2 border-gray-200 rounded-lg px-3 py-1.5 mb-2 placeholder:text-gray-800'
            value={projectDescription}
            placeholder='Enter Project Description'
            onChange={e => setProjectDescription(e.target.value)}
            required
          /> <br />
          {/* Project Type dropdown */}
          <select
            className='border-2 w-1/2 border-gray-200 rounded-lg px-3 py-1.5 mb-2'
            value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
            <option value="select">Select Project Type</option>
            <option value="Web-Development">Web Development</option>
            <option value="App-Development">App Development</option>
            <option value="Machine-Learning">Machine Learning</option>
          </select>
          <br />

          {/* Start and End Date */}
          <div className='flex justify-center gap-4 w-1/2'>
            <div className='w-1/2'>
              <label htmlFor="">Enter Project Start Date</label> <br />
              <input
                required
                className='border-2 w-full border-gray-200 rounded-lg px-3 py-1.5 mb-2'
                type="date"
                placeholder='Enter Start Date'
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
              />
            </div>
            <div className='w-1/2 text-start'>
              <label htmlFor="" className=''>Enter Project End Date</label> <br />
              <input
                required
                className='border-2 w-full border-gray-200 rounded-lg px-3 py-1.5 mb-2'
                type="date"
                placeholder='Enter Start Date'
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
              />
            </div>
          </div>
          <br />
          {/* SRS document input field */}
          <label htmlFor="">Enter SRS document</label>
          <input
            required
            className='border-2 w-1/2 border-gray-200 rounded-lg px-3 py-1.5 mr-2 mb-2'
            type="file"
            accept='.pdf'
            value={selectedFile}
            placeholder='Enter SRS'
            onChange={e => setSelectedFile(e.target.files[0])}
          /> <br />
          {/* Project Link input field */}
          <input
            required
            className='border-2 w-1/2 border-gray-200 rounded-lg px-3 py-1.5 mr-2 mb-2 placeholder:text-gray-800'
            type="text"
            placeholder='Enter Project Link'
            value={link}
            onChange={(e) => setLink(e.target.value)}
          /> <br />
          <button
            className='text-white w-1/2 bg-primary-600 border-2 hover:bg-white hover:text-primary-600 hover:border-primary-600 focus:ring-2 focus:ring-indigo-300 font-bold rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2'
            onClick={() => { if (text && startDate && endDate) addTask(text, projectDescription, selectedOption, startDate, endDate, selectedFile, link) }}>Add Projects
          </button>
        </div>
        {/* Add Projects with start and end date */}


        {/* Ongoing Projects  */}
        <div className="mb-4 rounded bg-gray-50 dark:bg-gray-800">
          {/* Searchbar and Heading Start */}
          <div className='flex justify-between items-center px-4 py-3'>
            <div className='w-72'>
              <h1 className=' text-xl mr-4 font-bold'>Ongoing Projects</h1>
            </div>
            {/* Searchbar and filter */}
            <div className='w-full mr-4'>
              <form>
                <div className="flex">
                  <div className="relative w-full">
                    <input
                      type="search"
                      id="search-dropdown"
                      className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg  border-2-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Search"
                      required
                      value={searchQuery}
                      onChange={event => setSearchQuery(event.target.value)}
                    />
                    <button
                      type="submit"
                      className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
                    ">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                      </svg>
                      <span className="sr-only">Search</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* Filter by week, month */}
            <div className='w-64'>
              <select
                id="filter"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={filter}
                onChange={event => setFilter(event.target.value)}
              >
                <option value="all" selected>All Time</option>
                <option value="week" >This Week</option>
                <option value="day" >Today</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>
            </div>
          </div>
          {/* Searchbar and Heading End */}

          <div className='my-3' >
            {/* Projects start */}
            <div className="mb-2">
              {/* Project Component Start */}
              <div className='grid grid-cols-2 gap-4'>
                {/* Conditional rendering between Search result and tasks list */}
                {
                  (searchQuery.length === 0 || searchResults.length === 0 ? filteredTasks : searchResults)
                    .map(task => (
                      <ProjectItem
                        key={task.id}
                        task={task}
                        projetDesceiption={task.projectDescription}
                        deleteTask={deleteTask}
                        editTask={editTask}
                        selectedOption={task.selectedOption}
                        startDate={task.startDate}
                        endDate={task.endDate}
                        selectedFile={task.selectedFile}
                        link={task.link}
                        toggleCompleted={toggleCompleted}
                      />
                    ))}
              </div>
              {/* Project Component End */}
            </div>
            {/* Projects End */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects


