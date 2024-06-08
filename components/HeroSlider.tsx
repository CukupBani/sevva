'use client'

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { SLIDER_ELEMENT } from '@/constant';
import Autoplay from 'embla-carousel-autoplay';

const HeroSlider = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [Autoplay({delay: 5000})]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
      }, [emblaApi])
    
      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
      }, [emblaApi])

  return (
    <>
        <section className='relative'>
            <div className="embla mx-auto" ref={emblaRef}>
                <div className="embla__container">
                    {SLIDER_ELEMENT.map((slide) => (
                        <div key={slide.key} className='embla__slide'>
                            <img src={slide.img} alt='slide-img' width={1440} className='object-cover h-[24rem]' />
                        </div>
                    ))}
                </div>
                
                <div className='absolute z-10 w-full h-full top-0 flex items-center justify-between px-10'>
                        <button className='embla__prev h-10 w-10 rounded-full bg-black flex items-center justify-center opacity-30 duration-300 hover:opacity-100' onClick={scrollPrev}>
                            <svg width={26} height={26} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='fill-white'><path d="m13.789 7.155c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591 1.299-1.002 3.945-3.044 5.498-4.243z"/></svg>
                        </button>
                        <button className='embla__next h-10 w-10 rounded-full bg-black flex items-center justify-center opacity-30 duration-300 hover:opacity-100' onClick={scrollNext}>
                            <svg width={26} height={26} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='fill-white'><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"/></svg>
                        </button>
                    </div>
                </div>
        </section>
    </>
  )
}

export default HeroSlider