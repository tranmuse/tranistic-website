import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='w-full p-2 flex items-center py-2 '>
        <div className='max-w-[1240px] w-full m-auto md:grid place-content-center leading-loose'>
            <div className='col-span-3'>
                <h2 className='uppercase pt-4 pb-10 tracking-widest'>About me</h2>
                <p>Hello, my name is Tran Nguyen. I would describe myself as being interested in a wide range of professions including AI Art, Motion Design, Web Design, 3D Printing, and much more.</p>
                <p>As you might have guessed, I don't have any titles to define myself. I have a Bachelor of Business Administration in Marketing from International University (Vietnam National University) and a Master of Science in Information Systems from University of Missouri - Saint Louis. I also have a graduate certificate in Information Security. I have three years of experience as a web content specialist before taking a break to find my passion.</p>
                <p>Here are the things I am learning and will share on this website.</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div>
                        <h3 className='text-center py-4'>Web Development</h3>
                        {/* <Image className='flex justify-center' src='/Hotpot.png' alt='TranMuse logo' width='200' height='200'/> */}
                        <ul className='list-disc pl-4'>
                            <li>Next.JS</li>
                            <li>TailwindCSS</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-center py-4'>AI Tools</h3>
                        <ul className='list-disc pl-4'>
                            <li>MidJourney</li>
                            <li>Synthsizer V Studio</li>
                        </ul>
                    </div>
                    <div>
                    <h3 className='text-center py-4'>Motion and Graphic Design</h3>
                        <ul className='list-disc pl-4'>
                            <li>Adobe Photoshop</li>
                            <li>Adobe Illustrator</li>
                            <li>Adobe After Effects</li>
                            <li>Blender</li>
                            <li>Canva</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About