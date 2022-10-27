import Image from 'next/image'
import NewsLetter from './NewsLetter'
import FooterSection from './FooterSection'
import { footerSections } from '../../../utils/utils'
export default function Footer() {
  return (
    <div className='w-full flex-row justify-center px-2 md:px-20'>
      <NewsLetter />
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-4 sm:space-x-3'>
        <section className='w-full '>
          <div name='pageName' className={`flex items-center text-3xl font-bold pb-2`}>
            <Image src={`/icons/logo.svg`} width={30} height={30} alt='logo' />
            <div>e work</div>
          </div>
          <p className='text-xs text-gray-500'>WeWork is the Freelancing platform , where talend and professional people can find there Full time part time job . It also make it easier to employer to find him/her suitable employee fast and easy.</p>
          <div className='w-full flex justify-center space-x-4 items-center py-2'>
            <button>
              <Image src={`/icons/facebook.svg`} width={30} height={30} alt='facebook' />
            </button>
            <button>
              <Image src={`/icons/twitter.svg`} width={30} height={30} alt='twitter' />
            </button>
            <button>
              <Image src={`/icons/linkedIn.svg`} width={30} height={30} alt='linkedIn' />
            </button>
          </div>
        </section>
        {
          footerSections.length > 0 && footerSections.map((section, index) => {
            return <FooterSection key={index} title={section.title} items={section.items} />
          })
        }
      </div>
    </div>
  )
}
