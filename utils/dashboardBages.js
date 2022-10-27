const freelancer = [
    {
        title:'All works',
        url:'allWorks'
    },
    {
        title:'Proposals',
        url:'freelancerProposals'
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
    if(user=='f'){
        return freelancer
    }else{
        return employer
    }
}


export default getUserList