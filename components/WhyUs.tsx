import { WHY_US } from '@/constant'
import React from 'react'

const WhyUs = () => {
  return (
    <>
        <section className='p-10'>
            {/* Judul Section */}
            <h1 className='mb-8 font-bold text-5xl text-[#202F4D] text-center'>KENAPA MEMILIH KAMI?</h1>
            {/* End of Judul Section */}

            {/* Content */}
            <div className='grid grid-cols-3 gap-5 place-items-center mt-16'>
              {WHY_US.map((why) => (
                <div key={why.key} className='bg-[#1B2538] rounded-lg h-96 w-[22rem]'>
                  {/* Icon */}
                  <div className='relative flex items-center justify-center'>
                    <div className='absolute w-24 h-24 bg-white flex justify-center items-center rounded-full border'>
                      <img src={why.icon} alt='why-icon' className='w-14' />
                    </div>
                  </div>
                  {/* End of Icon */}

                  <div className='px-10 mt-16 text-white'>
                    <h1 className='font-bold text-center text-2xl'>{why.title}</h1>
                    <p className='text-justify mt-3 text-[14px] font-medium'>{why.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* End of Content */}
        </section>
    </>
  )
}

export default WhyUs