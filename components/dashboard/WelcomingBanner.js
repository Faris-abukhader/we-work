import Image from "next/image"
export default function WelcomingBanner({ username = '', worksNum = 0 }) {
  return (
    <div className='w-full p-5'>
      <div className='relative bg-customDarkPurple flex justify-center items-center rounded-lg w-full h-[350px] shadow-md'>
        <div className="absolute top-0 left-0 w-full flex items-start justify-between">
          <Image src={'/images/bannerLeft.png'} width={225} height={116} alt='line' />
          <Image src={'/images/bannerRight.png'} width={197} height={83} alt='line' />
        </div>
        <div className='rounded-full shadow-xl border-t border-x-purple-800 w-[50px] h-[50px] flex items-center justify-center absolute top-10 left-1/2 transform -translate-x-1/2'>
          <Image src={`/icons/welcome.svg`} width={28} height={28} alt='welcome' />
        </div>
        <div className="text-center text-gray-100 space-y-4 px-5 pt-20">
          <h1 className="text-3xl">Welcome <b>{username}</b></h1>
          <p>You have done {worksNum} works. Check your new workds in your profile.</p>
        </div>
      </div>
    </div>
  )
}
