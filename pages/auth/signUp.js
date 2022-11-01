import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { isValid as emailValidation,fireNotification} from '../../utils/utils'
import Link from "next/link"
import AccountTypeCard from "../../components/auth/AccountTypeCard"
import axios from "axios"
import InputWithLabel from "../../components/general/InputWithLabel"
export default function SignUp() {
    const [credentials, setCredentials] = useState({ email: '', password: '', firstName: '', lastName: '', accountType: '' })
    const [isValid, setIsValid] = useState({ email: false, password: false, firstName: false, lastName: false, accountType: false })
    const [disabled, setDisabled] = useState(true)
    const router = useRouter()

    const inputHandler = (e) => {
        setCredentials((prevs) => ({
            ...prevs,
            [e.target.name]: e.target.name == 'rememberMe' ? (e.target.checked) : e.target.value
        }))
        setIsValid((prevs) => ({
            ...prevs,
            [e.target.name]: credentials[e.target.name].length > 0 ? true : false
        }))
    }

    useEffect(() => {
        setIsValid(() => ({
            ['email']: emailValidation(credentials.email),
            ['password']: credentials.password.length > 5 ? true : false,
            ['firstName']: credentials.firstName.length > 1 ? true : false,
            ['lastName']: credentials.lastName.length > 1 ? true : false,
            ['accountType']: credentials.accountType.length > 0 ? true : false
        }))
    }, [credentials])

    const setAccountType = (type) => {
        setCredentials((prevs) => ({
            ...prevs,
            ['accountType']: type
        }))
    }

    const signUpFunc = async () => {
        console.log(credentials)
        let request;
        try {
            request = await axios.post(`${process.env.API_URL}/auth/signUp`, { ...credentials }, { headers: { token: 'arfhaeirfhe' } })
        } catch (err) {
            fireNotification(`This email address already register in our platform try to sigin instead.`, 'error')
            return
        }
        fireNotification(`We already sent email verification to ${credentials.email} , please check your email`)
        router.push('/auth/signIn')

    }

    const reset = () => {
        setCredentials({ email: '', password: '', firstName: '', lastName: '', accountType: '' })
    }

    useEffect(() => {
        if (emailValidation(credentials.email) && credentials.password.length >= 5 && credentials.firstName.length > 0 && credentials.lastName.length > 0 && credentials.accountType.length > 0) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [credentials])
    return (
        <div style={{ backgroundImage: 'url("/illustrations/signInBackground.svg")', backgroundSize: 'cover' }} className='w-full h-fit py-10 flex justify-center items-center bg-transparent'>
            <div className={`bg-blue-600 bg-opacity-50 text-center rounded-lg backdrop-blur-md w-full py-6 sm:w-3/4 md:w-1/2 h-4/5 mx-4 sm:mx-0`}>
                <div className='flex w-full pt-6 items-center justify-center text-center text-3xl font-bold text-gray-100'>
                    <Image src={`/icons/logo.svg`} width={30} height={30} alt='logo' />
                    <div>e work</div>
                </div>
                <h3 className="font-bold text-gray-50 text-xl md:text-3xl py-6">Start for free Today</h3>
                <h4 className="font-bold text-blue-200 text-lg md:text-xl py-6">Access to all features. No credit card required.</h4>
                <div className="px-2 sm:px-5 text-start pt-8">
                    <InputWithLabel value={credentials.email} name='email' isValid={isValid.email} label='Email' inputHandler={inputHandler} />
                    <InputWithLabel value={credentials.password} type={`password`} name='password' isValid={isValid.password} label='Password' inputHandler={inputHandler} />
                    <InputWithLabel value={credentials.firstName} name='firstName' isValid={isValid.firstName} label='First name' inputHandler={inputHandler} />
                    <InputWithLabel value={credentials.lastName} name='lastName' isValid={isValid.lastName} label='Last name' inputHandler={inputHandler} />
                    <div className="flex items-center space-x-3">
                        <AccountTypeCard label={'Freelancer'} icon={`freelancer.svg`} clickHandler={setAccountType} accountType={credentials.accountType} />
                        <AccountTypeCard label={'Employer'} icon={`employer.svg`} clickHandler={setAccountType} accountType={credentials.accountType} />
                    </div>
                    <button disabled={disabled} onClick={signUpFunc} className='w-full h-[40px] mt-6 text-gray-50 flex justify-center items-center bg-blue-800 rounded-md hover:bg-blue-900 disabled:bg-blue-300  disabled:text-red-500 cursor-pointer text-center'>Sign In</button>
                    <button onClick={reset} className='w-full h-[40px] mt-4 flex justify-center items-center text-gray-50  bg-blue-800 rounded-md hover:bg-blue-900 disabled:bg-blue-400  cursor-pointer text-center'>Reset</button>
                </div>
                <div className='w-full text-center text-gray-200 pt-4'>
                    already has an account ?  <Link href={`/auth/signIn`}><a className='text-gray-50 hover:text-blue-900 underline'>sign in instead.</a></Link>
                </div>
            </div>
        </div>
    )
}
