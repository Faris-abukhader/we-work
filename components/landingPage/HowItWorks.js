import WorkStep from './WorkStep'
export default function HowItWorks() {
    return (
        <div className='h-screen grid grid-rows-2 items-center justify-around'>
            <section className='w-full  text-center'>
                <h1 className='text-lg text-gray-500'>Working Process</h1>
                <h1 className='text-3xl font-bold'>How It Works</h1>
                <h1 className='text-3xl font-bold rounded-md py-3 text-blue-700'>____</h1>
                <div className='w-full text-center flex justify-center py-2'>
                    <p className='text-gray-500 w-6/12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </section>
            <section className='sm:flex justify-around items-center'>
                <WorkStep label={`Create An Account`} number={`01`} image={`step-1.png`} />
                <WorkStep label={`Search Jobs`} number={`02`} image={`step-2.png`} />
                <WorkStep label={`Apply for Job`} number={`03`} image={`step-3.png`} />
            </section>
        </div>
    )
}
