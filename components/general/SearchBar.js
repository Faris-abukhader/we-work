import Image from 'next/image'
export default function SearchBar({hasBorder=true}) {
  return (
    <div className={`w-11/12 sm:w-9/12 md:w-6/12 bg-white mx-auto rounded-md flex space-x-1 space-y-3 p-4 ${hasBorder && 'ring-8'} ring-gray-50 ring-opacity-40 z-50`}>
    <div className='flex w-full'>
    <Image src={`/icons/search.svg`} width={20} height={20} className='text-gray-500' alt='search' />
    <input className='bg-transparent text-lg font-bold px-1 hover:border-none focus:border-none hover:outline-none focus:outline-none w-full border-none sm:border-r border-gray-300' placeholder='Job Title or Keywords' />
    </div>
    <div className='flex'>
    <div className='border-l border-gray-300 px-3'>
      <button className='bg-blue-500 p-2 rounded-md text-gray-100'>Search</button>
    </div>
    
    </div>
  </div>
)
}
