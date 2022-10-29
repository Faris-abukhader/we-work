import Image from 'next/image'
import { TypeAndTimeLabels, Salary, Location } from '../general/general'
import Link from 'next/link'
export default function JobTinyCard({ id, jobTitle = 'Java Software Engineer', avatar = '', salary = 0, isLast = false, jobType='', createdAt='', location='' }) {
  return (
    <div className={`p-1 py-2 border-gray-100 ${!isLast && 'border-b-2'} hover:py-3 hover:cursor-pointer `}>
    <Link href={`/jobDetails?id=${id}`}>
        <div className='flex space-x-2'>
          <div>
            <Image src={`/avatar/${avatar}`} className='rounded-lg' width={60} height={60} alt='logo' />
          </div>
          <div className='w-full space-y-3'>
            <h1 className='font-bold hover:text-blue-800'>{jobTitle}</h1>
            <TypeAndTimeLabels jobType={jobType} createdAt={createdAt} />
            <div className='flex justify-between items-center'>
              <Salary salary={salary} type={`Hour`} />
              <Location location={location} />
            </div>
          </div>
        </div>
    </Link>
    </div>
  )
}
