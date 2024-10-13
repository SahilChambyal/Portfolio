'use client'

import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        My Projects

      </h1>
      <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
        <ProjectCard 
        src='/food-order.png'
        title='Food Delivery Website'
        description='Multivendor Food Website lets you explore and order food from multiple restaurants and vendors in one place. Enjoy a variety of cuisines, read reviews, and track your order—all with easy navigation and secure payments for a seamless food delivery experience.'
        url='https://customer-live.vercel.app/'
        />
        <ProjectCard 
        src='/notes.png'
        title='Cloud Notes App'
        description='Cloud Notes App helps you easily create, organize, and access your notes anytime, anywhere. With real-time syncing across devices, secure storage, and simple navigation, it ensures your ideas and to-do lists are always at your fingertips'
        url='https://notes-nextjs-ts.vercel.app/'
        />
        <ProjectCard 
        src='/SpaceWebsite.png'
        title='Space Themed Portfolio'
        description='Space-Themed Portfolio showcases your work in a unique, cosmic design. Navigate through projects like youre exploring the stars, with sleek animations and an out-of-this-world layout that highlights your skills and creativity in an engaging and visually captivating way.'
        url='https://portfolio-lac-pi-29.vercel.app/'
        />
      </div>

    </div>
  )
}

export default Projects