const freelancer = [
    {
        title:'Job List',
        url:'jobList'
    },
    {
        title:'Product list',
        url:'productList'
    },
]
const employer = [
    {
        title:'Published jobs',
        url:'publishedJobs'
    },
    {
        title:'Product list',
        url:'productList'
    },
    {
        title:'Hiring request list',
        url:'hiringRequestList'
    },
]

const getUserList = (user)=>{
    if(user=='freelancer'){
        return freelancer
    }else{
        return employer
    }
}


export default getUserList