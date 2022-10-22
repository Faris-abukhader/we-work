const freelancer = [
    {
        title:'All works',
        url:'allWorks'
    },
    {
        title:'Transaction history',
        url:'transactionHistory'
    },
    {
        title:'Message',
        url:'message'
    }
]
const employer = [
    {
        title:'All works',
        url:'allWorks'
    },
    {
        title:'Transaction history',
        url:'transactionHistory'
    },
    {
        title:'Hired history',
        url:'hiredHistory'
    },
    {
        title:'Message',
        url:'message'
    }
]

const getUserList = (user)=>{
    if(user=='freelancer'){
        return freelancer
    }else{
        return employer
    }
}


export default getUserList