import React from 'react'
import CategoryCard from './CategoryCard'

export default function PopularCategories() {
  return (
    <div className='w-full h-screen'>
        <section className=' text-center pb-10'>
                <h1 className='text-3xl font-bold'>Popular Categories</h1>
                <h1 className='text-3xl font-bold rounded-md py-3 text-blue-700'>____</h1>
                <div className='w-full text-center flex justify-center py-2'>
                    <p className='text-gray-500 w-6/12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </section>
            <section className='grid grid-cols-2 md:grid-cols-4 gap-2 px-5'>
        <CategoryCard icon={`graphicDesign.svg`} title={`Graphic Design`} totalAvailable={`3215`}/>
        <CategoryCard icon={`webDesign.svg`} title={`Web Design`} totalAvailable={`3215`}/>
        <CategoryCard icon={`webDevelopment.svg`} title={`Web Development`} totalAvailable={`3215`}/>
        <CategoryCard icon={`teaching.svg`} title={`Teacher's and Monitors`} totalAvailable={`3215`}/>
        <CategoryCard icon={`accounting.svg`} title={`Accounts & Finance`} totalAvailable={`3215`}/>
        <CategoryCard icon={`contentWriting.svg`} title={`Content Writing`} totalAvailable={`3215`}/>
        <CategoryCard icon={`telecommunication.svg`} title={`Telecommunication`} totalAvailable={`3215`}/>
        <CategoryCard icon={`healthcare.svg`} title={`Healthcare`} totalAvailable={`3215`}/>

    </section>

    </div>
  )
}
