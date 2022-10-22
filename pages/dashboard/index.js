import { getSession, useSession } from "next-auth/react"
import SubNav from "../../components/dashboard/SubNav"
import Layout from '../../components/layout/UserLayout'
import { useEffect, useState } from "react"
import WelcomingBanner from "../../components/dashboard/WelcomingBanner"
export default function Index() {  
    const session = useSession()
    const username = session.data.user?.name
    const [userAccountType,setUserAccountType] = useState('')

    useEffect(()=>{
      setUserAccountType(session.data?.user?.accountType)
    },[session])
    return (
    <Layout accountType={userAccountType}>
        <div className="py-8 px-4 md:px-0">
            <WelcomingBanner username={username}/>

        </div>
   </Layout>

    )
}

export const getServerSideProps = async (ctx) => {
    const session = await getSession(ctx)

    if (session) {
        console.log('*************')
        console.log(session.user)
        return {
            props: {}
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

