import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn, FaTwitter, FaFacebookF, FaBehance, FaYoutube, FaVimeoSquare, FaDribbble, FaPatreon} from 'react-icons/fa'
import {SiGumroad, SiInstagram} from 'react-icons/si'
import {GrPinterest} from 'react-icons/gr'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav);
  }
  return (
    <div className='fixed w-full h-20 shadow-sm shadow-zinc/20 z-[100]'>
      <div className='flex items-center justify-between w-full h-full px-4 2xl:px-2 mx-4'>
        <div className=''><Image src='/logo.png' alt="Tranistic Logo" width='150' height='215'/></div>
        <div className='grow'></div>
        <div className='mx-10'>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-md uppercase font-bold'><span class="link link-underline link-underline-white py-2">Home</span></li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-md uppercase font-bold'><span class="link link-underline link-underline-white py-2">Projects</span></li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-md uppercase font-bold'><span class="link link-underline link-underline-white py-2">About</span></li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-md uppercase font-bold'><span class="link link-underline link-underline-white py-2">Contact</span></li>
            </Link>
          </ul>
          <div onClick ={handleNav} className='md:hidden mx-2'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/80' :'' }>
          <div className=
          {nav 
            ? 'fixed left-0 top-0 w-[75%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[25%] h-screen bg-inherit p-10 ease-in duration-100 shadow-md shadow-white/20' 
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500 ' 
          }>
            
            <div className='flex w-full items-center justify-between'>
              <Image src='/logo.png' alt='Tranistic logo' width='200' height='1000'/>
              
              <div onClick ={handleNav} className='p-2 cursor-pointer hovereffect'>
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-neutral-800 my-7 py-2'>
              <p className=' text-md py-4 w-[85%] md:w-[90%] opacity-70'>AI Artist | Motion Graphic Designer</p>
            </div>
            <div className='flex flex-col'>
              <ul className='uppercase mb-10'>
                <Link href='/'>
                <li className='py-4 font-bold text-lg'>Home</li>
                </Link>
                <Link href='/'>
                <li className='py-4 font-bold text-lg'>Works</li>
                </Link>
                <Link href='/'>
                <li className='py-4 font-bold text-lg'>About</li>
                </Link>
                <Link href='/'>
                <li className='py-4 font-bold text-lg'>Contact</li>
                </Link>
              </ul>
            <div className='mt-5 pt-4 border-t border-neutral-800'>
              <p className='opacity-50'>Let's Connect</p>
              <div className='flex flex-row items-center justify-between my-4 w-full sm:w-[80]'>
                <div className='p-2 mr-2 cursor-pointer hovereffect'>
                  <FaLinkedinIn />
                </div>
                <div className='p-2 m-2 cursor-pointer hovereffect'>
                  <FaGithub />
                </div>
                <div className='p-2 m-2 cursor-pointer hovereffect'>
                  <FaFacebookF />
                </div>
                <div className='p-2 m-2 cursor-pointer hovereffect'>
                  <FaTwitter />
                </div>
              </div>
              <div className='flex flex-row items-center justify-between my-4 w-full sm:w-[80]'>
                <div className='p-2 mr-2 cursor-pointer hovereffect'>
                  <SiInstagram />
                </div>
                <div className='p-2 m-2 cursor-pointer hovereffect'>
                  <GrPinterest />
                </div>
                <div className='p-2 m-2 cursor-pointer hovereffect'>
                  <FaBehance />
                </div>
                <div className='p-2 m-2 cursor-pointer hovereffect'>
                  <FaDribbble />
                </div>
              </div>
              <div className='flex flex-row items-center justify-between my-4 w-full sm:w-[80]'>
                <div className='p-2 mr-2 cursor-pointer hovereffect'>
                  <FaYoutube />
                </div>
                <div className='p-2 m-2 cursor-pointer hovereffect'>
                  <FaVimeoSquare />
                </div>
                <div className='p-2 m-2 cursor-pointer hovereffect'>
                  <FaPatreon />
                </div>
                <div className='p-2 m-2 cursor-pointer hovereffect'>
                  <SiGumroad />
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Navbar