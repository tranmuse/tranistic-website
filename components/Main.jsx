import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { SiRedbubble } from 'react-icons/si'

function Main() {
  return (
    <div className=' w-full text-center pt-20 md:pt-48 items-center'>
        <div className='max-w-[1240px] w-full mx-auto p-2 flex justify-center items-center flex-col md:flex-row content-center'>
            <div className='basis-1/2 md:mx-2 mt-40 md:mt-0 leading-loose'>
              <p className=" text-sm tracking-widest uppercase text-slate-400">AI Tools, Motion Design, Web Design, 3D Printing, and More.  </p>
              <h1 className='py-4 text-gray-400'>TRANMUSE</h1>
              <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                <Link href='https://twitter.com/tranmuse'>
                  <div className='p-3 m-2 cursor-pointer hovereffect'>
                    <FaTwitter />
                  </div>
                </Link>
                <Link href='https://www.instagram.com/tranmuse/'>
                  <div className='p-3 m-2 cursor-pointer hovereffect'>
                    <FaInstagram />
                  </div>
                </Link>
                <Link href='https://www.youtube.com/@tranmuse'>
                  <div className='p-3 m-2 cursor-pointer hovereffect'>
                    <FaYoutube />
                  </div>
                </Link>
                <Link href='https://www.redbubble.com/people/TranMuse/shop'>
                  <div className='p-3 m-2 cursor-pointer hovereffect'>
                    <SiRedbubble />
                  </div>
                </Link>
                <Link href='https://github.com/tranmuse'>
                  <div className='p-3 m-2 cursor-pointer hovereffect'>
                    <FaGithub />
                  </div>
                </Link>
              </div>
            </div>
            <div className='basis-1/2 md:mx-2 inline-block'>
              <Image src='/glowgirl.png' alt='Glow Girl' width='1500' height='1500'/>
            </div>
        </div>
    </div>
  )
}

export default Main