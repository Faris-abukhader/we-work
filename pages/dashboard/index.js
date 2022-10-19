import { getSession, useSession } from "next-auth/react"
import SubNav from "../../components/dashboard/SubNav"
import Layout from '../../components/layout/Layout'
import { useEffect, useState } from "react"
export default function Index() {  
    const session = useSession()
    const [userAccountType,setUserAccountType] = useState('')

    useEffect(()=>{
      setUserAccountType(session.data?.user?.accountType)
    },[session])
    return (
    <Layout>
        <SubNav userAccountType={userAccountType}/>
        <div className="py-8 px-4 md:px-0">

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

