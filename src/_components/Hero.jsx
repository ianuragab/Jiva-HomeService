import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

const Hero = () => {
   return (
      <div className='flex flex-col gap-2 items-center justify-center pt-14 pb-7'>
         <h1 className='font-bold text-[48px] text-center'>Find Home <span className='text-primary'>Service/Repair</span> <br /> Near You</h1>
         <h3 className='text-xl text-gray-500'>Explore Best Home Service & Reapir near you</h3>
         <div className='mt-5 flex gap-2 items-center'>
            <Input placeholder='Search...' className='rounded-full md:w-[360px]' />
            <Button className='rounded-full h-[44px]'><Search className='h-4 w-4' /></Button>
         </div>
      </div>
   )
}

export default Hero