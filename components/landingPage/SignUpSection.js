import React from 'react'
import SignUpCard from './SignUpCard'

export default function SignUpSection() {
  return (
    <div style={{height:'70vh'}} className='sm:flex justify-center items-center px-5 gap-3 overflow-hidden space-y-4 sm:space-y-0 '>
     <SignUpCard title={`I Want to Work`} subtitle={`1,63,352 Jobs are Available Now`} description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiumod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim amar sonar veniam.`} colorSchema={1}/>
     <SignUpCard title={`I Want to Hire`} subtitle={`1,63,352 Jobs are Available Now`} description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiumod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim amar sonar veniam.`} colorSchema={2}/>
    </div>
  )
}
