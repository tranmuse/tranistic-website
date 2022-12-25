import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import propertyImg from '../public/assets/projects/Redbubble.png'

const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] w-full mx-auto px-4 py-16'>
            <h2 className='uppercase pt-4 pb-10 tracking-widest'>My Works</h2>
            <div className='grid md:grid-cols-3 gap-8'>
                <div className='relative flex items-center justify-center h-auto w-full p-4 hovereffect'>
                    <Image className='hover:opacity-5' src={propertyImg} alt='/' />
                    <div className='block group-hover:hidden'>
                        <h3>RedBubble</h3>
                        <p>My online marketplace</p>
                        <Link href='/'>
                            <p>See More</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects