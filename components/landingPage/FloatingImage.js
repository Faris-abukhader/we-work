import Image from 'next/image'
export default function FloatingImage({floatingY=true,position,image='/images/bezos.webp',width=140,height=140}) {
 
  return (
    <div className={`${floatingY ? 'react-floater-animated-y':'react-floater-animated-x'} w-[${(width)}px] h-[${(height)}px] rounded-full`}>

    <style jsx>
        {
            `
            @keyframes floatingY {
                0% {
                    transform: translatey(0px);
                }
                50% {
                    transform: translatey(-20px);
                }
                100% {
                    transform: translatey(0px);
                }
            }

            @keyframes floatingX {
                0% {
                    transform: translatex(0px);
                }
                50% {
                    transform: translatex(-20px);
                }
                100% {
                    transform: translatex(0px);
                }
            }
            .react-floater-animated-y {
                animation: floatingY 3s ease infinite;
                will-change: transform;
              }
            .react-floater-animated-x {
            animation: floatingX 3s ease infinite;
            will-change: transform;
            }
            `
        }
    </style>  
        <Image src={image} className={`rounded-full ${position}`}  width={width} height={height} alt='image'/>
    </div>
  )  
}
