import { getSession, useSession } from "next-auth/react"
import SubNav from "../../components/dashboard/SubNav"
import Layout from '../../components/layout/UserLayout'
import { useEffect, useState } from "react"
import WelcomingBanner from "../../components/dashboard/WelcomingBanner"
import axios from "axios"
export default function Index({statics}) {  
    const session = useSession()
    const username = session.data?.user?.name
    const userAccountType = session.data?.user?.accountType
    // const [userAccountType,setUserAccountType] = useState('')

    console.log(statics)

    // useEffect(()=>{
    //   setUserAccountType(session.data?.user?.accountType)
    // },[session])
    return (
    <Layout accountType={userAccountType}>
        <div className="py-8 px-4 md:px-0">
            <WelcomingBanner username={username} worksNum={Object.values(statics)} accountType={userAccountType}/>

        </div>
   </Layout>

    )
}

export const getServerSideProps = async (ctx) => {
    const session = await getSession(ctx)

    if (session) {
        const accountType = session?.user?.accountType
        const userId = session?.user?.id    
        console.log('*************')
        console.log(session.user)

        let targetUrl = `${process.env.API_URL}/`
        if(accountType=='e'){
            targetUrl+=`employer/statics/${userId}`
        }else{
            targetUrl+=`freelancer/statics/${userId}`
        }

        const request = await axios.get(targetUrl)
        const data = request.data

        return {
            props: {
                statics:data._count
            }
        }
    } else {
        return {
            redirect: {
                destination: '/api/auth/signin'
            },
            props: {}
        }
    }
}

