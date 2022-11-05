import React from 'react'
import Image from 'next/image'

function Main() {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <Image src='/glowgirl.png' alt='Tranistic logo' width='800' height='1000'/>
        </div>
    </div>
  )
}

export default Main