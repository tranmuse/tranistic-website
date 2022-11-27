import React from 'react'
import Image from 'next/image'

function Main() {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center flex-col md:flex-row'>
            
            <div className='basis-1/2 md:mx-2 mt-40 md:mt-0 leading-loose'>
                <h1 className='py-4 uppercase'>TranMuse</h1>
                <p className=" text-md tracking-widest">AI Arts, Motion Graphics, and a hint of me.  </p>
            </div>
            <div className='basis-1/2 md:mx-2'>
              <Image src='/glowgirl.png' alt='TranMuse logo' width='1000' height='1000'/>
            </div>
        </div>
    </div>
  )
}

export default Main