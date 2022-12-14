import InfoAttribute from './InfoAttribute'
export default function EmploymentInfo({ location, category, salary }) {
    return (
        <div className='w-full'>
            <div className='border-2 border-gray-100 rounded-md p-8'>
                <h1 className='text-2xl font-bold py-4 border-b-2 border-gray-100'>Employment Information</h1>
                <div className='w-full p-8 flex-row justify-between md:justify-start md:flex'>
                    <div className='w-full space-y-10'>
                        <InfoAttribute icon={`industry.svg`} attribute={`Industry`} value={category} />
                        <InfoAttribute icon={`salary.svg`} attribute={`Salary`} value={`$${salary}`} />
                        <InfoAttribute icon={`JobType.svg`} attribute={`Job type`} value={`Permanent`} />
                        <InfoAttribute icon={`lastUpdate.svg`} attribute={`Updated`} value={`2022/10/9`} />
                    </div>
                    <div className='w-full space-y-10'>
                        <InfoAttribute icon={`jobLevel.svg`} attribute={`Job level`} value={`Experienced (Non - Manager)`} />
                        <InfoAttribute icon={`experience.svg`} attribute={`Experience`} value={`1 - 2 years`} />
                        <InfoAttribute icon={`deadline.svg`} attribute={`Deadline`} value={`2022/12/21`} />
                        <InfoAttribute icon={`location.svg`} attribute={`Location`} value={location} />
                    </div>
                </div>
            </div>
        </div>
    )
}
