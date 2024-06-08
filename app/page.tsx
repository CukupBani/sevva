import CarTypeList from '@/components/CarTypeList'
import HeroSlider from '@/components/HeroSlider'
import Navbar from '@/components/Navbar'
import ProductPreview from '@/components/ProductPreview'
import Ulasan from '@/components/Ulasan'
import WhyUs from '@/components/WhyUs'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar visibility='hidden' />
      <HeroSlider />
      <CarTypeList />
      <ProductPreview />
      <WhyUs />
      <Ulasan />
    </>
  )
}

export default page