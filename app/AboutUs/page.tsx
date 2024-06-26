import Navbar from '@/components/Navbar'
import CompanyProfile from '@/components/aboutUs_component/CompanyProfile'
import HeroAboutUs from '@/components/aboutUs_component/HeroAboutUs'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar visibility='hidden' />  
      <HeroAboutUs />
      <CompanyProfile />
    </>
  )
}

export default page