import { getSession } from "next-auth/react"
import Layout from '../../components/layout/Layout'
export default function Index() {  
    return (
    <Layout navBackgroundColor='#000' navHasAnimation={false}>
    <h1>dashbordd</h1>
   </Layout>

    )
}

export const getServerSideProps = async (ctx) => {
    const session = await getSession(ctx)

    if (session) {
        console.log(session)
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

