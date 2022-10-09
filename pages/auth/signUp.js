import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { isValid } from '../../utils/emailValidation'
import Link from "next/link"
import AccountTypeCard from "../../components/auth/AccountTypeCard"
export default function SignUp() {
    const [credentials, setCredentials] = useState({ email: '', password: '' ,firstName:'',lastName:'',accountType:''})
    const [disabled, setDisabled] = useState(true)
    const router = useRouter()

    const inputHanler = (e) => {
        setCredentials((prevs) => ({
            ...prevs,
            [e.target.name]: e.target.name == 'rememberMe' ? (e.target.checked) : e.target.value
        }))
    }

    const setAccountType = (type)=>{
        setCredentials((prevs)=>({
            ...prevs,
            ['accountType']:type
        }))
    }

    const signInFunc = () => {
        console.log(credentials)
    }

    const reset = ()=>{
        setCredentials({ email: '', password: '',firstName:'',lastName:'',accountType:'' })
    }

    useEffect(() => {
        if (isValid(credentials.email) && credentials.password.length >= 5 && credentials.firstName.length > 0  && credentials.lastName.length > 0 && credentials.accountType.length > 0) {
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
                    <label className='text-sm text-gray-200 pl-2'>Email :</label>
                    <input style={{ background: 'transparent' }} type="email" name="email" onChange={inputHanler} value={credentials.email} placeholder='something@yahoo.com' className='w-full px-3 py-2 m-0 text-gray-200 mb-3 appearance-none focus:outline-none border border-blue-400 focus:ring-blue-500 bg-transparent focus:bg-transparent hover:bg-transparent rounded-md' />
                    <label className='text-sm text-gray-200 pl-2'>Password :</label>
                    <input style={{ background: 'transparent' }} type="password" name="password" onChange={inputHanler} value={credentials.password} placeholder='*********' className='w-full px-3 py-2 m-0 text-gray-200 mb-3 appearance-none focus:outline-none border border-blue-400 focus:ring-blue-500 bg-transparent focus:bg-transparent hover:bg-transparent  rounded-md' />
                    <label className='text-sm text-gray-200 pl-2'>First name :</label>
                    <input style={{ background: 'transparent' }} name="firstName" onChange={inputHanler} value={credentials.email} placeholder='something@yahoo.com' className='w-full px-3 py-2 m-0 text-gray-200 mb-3  appearance-none focus:outline-none border border-blue-400 focus:ring-blue-500 bg-transparent focus:bg-transparent hover:bg-transparent rounded-md' />
                    <label className='text-sm text-gray-200 pl-2'>Last name :</label>
                    <input style={{ background: 'transparent' }} name="lastName" onChange={inputHanler} value={credentials.email} placeholder='something@yahoo.com' className='w-full px-3 py-2 m-0 text-gray-200 mb-3  appearance-none focus:outline-none border border-blue-400 focus:ring-blue-500 bg-transparent focus:bg-transparent hover:bg-transparent rounded-md' />
                    <label className='text-sm text-gray-200 pl-2'>Account type :</label>
                    <div className="flex items-center space-x-3">
                        <AccountTypeCard label={'Freelancer'} icon={`freelancer.svg`} clickHandler={setAccountType}/>
                        <AccountTypeCard label={'Employer'} icon={`employer.svg`} clickHandler={setAccountType}/>
                        {/* <div className={`border border-gray-100 p-2 px-4 rounded-lg text-center`}>
                            <p className="text-xs">Freelancer</p>
                            <Image src={`/icons/freelancer.svg`} width={90} height={90} alt='freelancer'/>
                        </div>
                        <div className={`border border-gray-100 p-2 rounded-lg text-center`}>
                           <p className="text-xs">Employer</p>
                            <Image src={`/icons/employer.svg`} width={90} height={90} alt='freelancer'/>
                        </div> */}
                    </div>
                    
                    <button disabled={disabled} onClick={signInFunc} className='w-full h-[40px] mt-6 text-gray-50 flex justify-center items-center bg-blue-800 rounded-md hover:bg-blue-900 disabled:bg-blue-400  cursor-pointer text-center'>Sign In</button>
                    <button onClick={reset} className='w-full h-[40px] mt-4 flex justify-center items-center text-gray-50  bg-blue-800 rounded-md hover:bg-blue-900 disabled:bg-blue-400  cursor-pointer text-center'>Reset</button>
                </div>
                <div className='w-full text-center text-gray-200 pt-4'>
                    already has an account ?  <Link href={`/auth/signIn`}><a className='text-gray-50 hover:text-blue-900 underline'>sign in instead.</a></Link>
                </div>
            </div>
        </div>
    )
}
