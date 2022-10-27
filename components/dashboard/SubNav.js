import Link from 'next/link'
import { useState, useEffect } from 'react'
import { getUserList } from '../../utils/utils'
export default function SubNav({ userAccountType, current = '' }) {
  const [pageList, setPageList] = useState([])
  const [selectedPage, setSelectedPage] = useState('jobList')
  useEffect(() => {
    setPageList(getUserList(userAccountType))
  }, [userAccountType])
  return (
    <div className='flex justify-center space-x-3 md:space-x-6 text-xs sm:text-sm md:text-lg'>
      {pageList.map((page, index) => {
        return <Link href={`/dashboard/${page.url}`} key={index}><a onClick={() => setSelectedPage(page.title)} className={` text-blue-700 hover:-translate-y-1 transition-all duration-500 ${current == page.title && 'font-bold border-b-2'} border-blue-700 hover:cursor-pointer`}>{page.title}</a></Link>
      })}
    </div>
  )
}
