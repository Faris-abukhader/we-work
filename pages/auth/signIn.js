import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import Link from "next/link"
import { signIn } from "next-auth/react"
import { fireNotification,isValid as emailValidation } from '../../utils/utils'
import {InputWithLabel} from "../../components/general/general"
export default function SignIn() {
    const [credentials, setCredentials] = useState({ email: '', password: '' })
    const [isValid, setIsValid] = useState({ email: false, password: false })
    const [disabled, setDisabled] = useState(true)
    const router = useRouter()

    const inputHandler = (e) => {
        setCredentials((prevs) => ({
            ...prevs,
            [e.target.name]: e.target.value
        }))
    }

    useEffect(() => {
        setIsValid(() => ({
            ['email']: emailValidation(credentials.email),
            ['password']: credentials.password.length > 5 ? true : false,
        }))
    }, [credentials])


    const signInFunc = async () => {
        const request = await signIn('credentials', {
            redirect: false,
            callbackUrl: process.env.BASE_URL,
            email: credentials.email,
            password: credentials.password
        });

        if (request.status == 200) {
            router.push('/dashboard')
        } else {
            fireNotification({label:'your password or email is not correct', icon:'error'})
        }
    }

    const reset = () => {
        setCredentials({ email: '', password: '' })
    }

    useEffect(() => {
        if (emailValidation(credentials.email) && credentials.password.length >= 5) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [credentials])
    return (
        <div style={{ backgroundImage: 'url("/illustrations/signInBackground.svg")', backgroundSize: 'cover' }} className='w-full h-screen flex justify-center items-center bg-transparent'>
            <div className={`bg-blue-600 bg-opacity-50 text-center rounded-lg backdrop-blur-md w-full sm:w-3/4 md:w-1/2 h-4/5 mx-4 sm:mx-0`}>
                <div className='flex w-full pt-6 items-center justify-center text-center text-3xl font-bold text-gray-100'>
                    <Image src={`/icons/logo.svg`} width={30} height={30} alt='logo' />
                    <div>e work</div>
                </div>
                <h3 className="font-bold text-gray-50 text-xl md:text-3xl py-6">Start for free Today</h3>
                <h4 className="font-bold text-blue-200 text-lg md:text-xl py-6">Access to all features. No credit card required.</h4>
                <div className="px-2 sm:px-5 text-start pt-8">
                <InputWithLabel textColor="text-gray-100" value={credentials.email} name='email' isValid={isValid.email} label='Email' inputHandler={inputHandler} />
                <InputWithLabel textColor="text-gray-100" value={credentials.password} name='password' type="password" isValid={isValid.email} label='Email' inputHandler={inputHandler} />
                    <button disabled={disabled} onClick={signInFunc} className='w-full h-[40px] mt-6 text-gray-50 flex justify-center items-center bg-blue-800 rounded-md hover:bg-blue-900 disabled:bg-blue-400  cursor-pointer text-center'>Sign In</button>
                    <button onClick={reset} className='w-full h-[40px] mt-4 flex justify-center items-center text-gray-50  bg-blue-800 rounded-md hover:bg-blue-900 disabled:bg-blue-400  cursor-pointer text-center'>Reset</button>
                </div>
                <div className='w-full text-center text-gray-200 pt-4'>
                    new to our platform ?  <Link href={`/auth/signUp`}><a className='text-gray-50 hover:text-blue-900 underline'>create an account.</a></Link>
                </div>
            </div>
        </div>
    )
}
