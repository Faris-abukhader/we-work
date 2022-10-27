import Image from 'next/image'
export default function SortingBar() {
  return (
    <div className='w-full px-2'>
      <div className='w-full flex justify-end sm:justify-between pt-1 pb-2'>
        <div className='text-gray-500 hidden sm:block'>Showing 41-60 of 4566 jobs</div>
        <div className='flex space-x-2'>
          <div className='px-2 py-1 border rounded-md sp flex items-center justify-center'>
            <h1 className='pr-1 text-gray-500'>Show: <span className='text-black'>13</span></h1>
            <Image src={`/icons/chevronDown.svg`} width={8} height={8} alt='down' />
          </div>
          <div className='px-2 py-1 border rounded-md sp flex items-center justify-center'>
            <h1 className='pr-1 text-gray-500'>Sort by: <span className='text-black'>Newest Post</span></h1>
            <Image src={`/icons/chevronDown.svg`} width={8} height={8} alt='down' />
          </div>
        </div>
      </div>
      <hr/>
    </div>
  )
}
