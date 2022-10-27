import Image from 'next/image'
export default function NoDataFound({label}) {
  return (
    <div className='w-full flex items-center justify-center py-10'>
        <div className='text-center text-gray-600 text-sm'>
        <Image src={`/illustrations/noDataFound.svg`} width={120} height={120} layout='responsive' alt='no_data' />
        <p>{label}</p>
        </div>

    </div>
  )
}
