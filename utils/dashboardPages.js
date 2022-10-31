const freelancer = [
    {
        title:'All works',
        url:'freelancer-all-works'
    },
    {
        title:'Proposals',
        url:'freelancer-proposals'
    },
    {
        title:'Hired history',
        url:'freelancer-hired-history'
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
        title:'Hired history',
        url:'employer-hired-history'
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