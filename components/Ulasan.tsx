'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react';
import { TESTIMONI } from '@/constant';
import TestimoniCard from './template/TestimoniCard';
import Autoplay from 'embla-carousel-autoplay';

const Ulasan = () => {
    const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay({delay: 3000})]);

  return (
    <>
        <section className='p-10'>
            {/* Judul Section */}
            <div className='flex flex-col gap-3 mb-8'>
                <h1 className='font-bold text-5xl text-[#202F4D] text-center'>ULASAN PENGGUNA</h1>
                <div className='flex gap-3 items-center justify-center'>
                    <div id='line-1' className='border-b-2 border-[#202F4D] w-[40px]' />
                    <p className='text-[#202F4D] font-medium'>Apa yang Orang-Orang Katakan Tentang Kami?</p>
                    <div id='line-1' className='border-b-2 border-[#202F4D] w-[40px]' />
                </div>
            </div>
            {/* End of Judul Section */}

            {/* Content */}
            <div className='embla'>
                <div className='embla__viewport' ref={emblaRef}>
                    <div className='embla__container'>
                        {TESTIMONI.map((testi) => (
                            <div key={testi.key} className='embla__slide__testi mx-5'>
                                <TestimoniCard img={testi.img} name={testi.name} review={testi.review} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* End of Content */}
        </section>
    </>
  )
}

export default Ulasan