import Image from 'next/image'
import React from 'react'

interface Props{
    src: string,
    title: string,
    description: string,
    url: string,
}

const ProjectCard = ({src, title, description,url}: Props) => {
  const handleClick = () => {
    window.open(url,'_blank');
  } 
  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2a0e61]'>
      <div className='hover:cursor-pointer hover:scale-105 transition-all' onClick={handleClick}>
      <Image 
      src={src}
      alt={title}
      width={1000}
      height={1000}
      className='w-full object-contain opacity-60 hover:opacity-100 transition-all'
      />
      </div>

      <div className='relative p-4'>
        <h1 className='text-2xl font-semibold text-white'>{title}</h1>
        <p className='mt-2 text-gray-300'>{description} </p>

      </div>
      
    </div>
  )
}

export default ProjectCard