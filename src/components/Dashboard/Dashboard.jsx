import Card from '../Common/Card'
import totalProjects from '../../assets/dashboard/total-project.png'
import ongoingProjects from '../../assets/dashboard/ongoing-project.png'
import completedProjects from '../../assets/dashboard/completed-project.png'
import totalUser from '../../assets/dashboard/group.png'
import totalInternships from '../../assets/dashboard/id-card.png'
import totalJobs from '../../assets/dashboard/job-search.png'
import totalApplications from '../../assets/dashboard/window.png'
import totalCertificates from '../../assets/dashboard/medal.png'
import totalEmployees from '../../assets/dashboard/team1.png'


const Dashboard = () => {
    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700">
                <h1 className='text-center text-4xl font-bold mt-2 mb-6'>Dashboard</h1>
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <Card name='Total Projects' value='182' imgValue={totalProjects} bgColor='bg-indigo-100' />
                    <Card name='Ongoing Projects' value='321' imgValue={ongoingProjects} bgColor='bg-red-100' />
                    <Card name='Completed Project' value='48' imgValue={completedProjects} bgColor='bg-green-100' />
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <Card name={'Total Registered Users'} value={'1000'} imgValue={totalUser} bgColor='bg-yellow-200' />
                    <Card name={'Total Employees'} value={'70'} imgValue={totalEmployees} bgColor='bg-purple-300' />
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                    <Card name='Total Jobs' value='321' imgValue={totalJobs} bgColor='bg-lime-200' />
                    <Card name='Total Internships' value='48' imgValue={totalInternships} bgColor='bg-primary-200' />
                </div>
                <div className="grid grid-cols-2 gap-4">
                <Card name='Total Applications' value='123' imgValue={totalApplications} bgColor='bg-red-200' />

                    <Card name='Total Certificates' value='100' imgValue={totalCertificates} bgColor='bg-sky-300' />
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Dashboard
