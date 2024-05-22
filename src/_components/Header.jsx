import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='p-4 shadow-md flex justify-between'>
      <div className='flex items-center gap-8'>
        <Image src='/logo.svg' alt='logo' width={160} height={80} />
        <div className='md:flex items-center gap-6 hidden'>
          <h2 className='group hover:scale-105 hover:text-primary cursor-pointer'>Home
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
          </h2>
          <h2 className='group hover:scale-105 hover:text-primary cursor-pointer'>Sevices
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
          </h2>
          <h2 className='group hover:scale-105 hover:text-primary cursor-pointer'>Explore
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
          </h2>
          <h2 className='group hover:scale-105 hover:text-primary cursor-pointer'>About Us
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
          </h2>
        </div>
      </div>
      <div>
        <Button>Get Started</Button>
      </div>
    </div>
  )
}

export default Header