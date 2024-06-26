import Navbar from '@/components/Navbar'
import ProductCardSewa from '@/components/template/ProductCardSewa'
import SectionHeader from '@/components/template/SectionHeader'
import { KENDARAAN_DISEWAKAN, SIDEBAR_LIST } from '@/constant'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar visibility='hidden' />
      <div className='flex items-center justify-center px-10 gap-5 pt-10'>
        <Link href='/' className='fill-[#202f4b] duration-200 hover:fill-black'>
          <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" width={40} height={40} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.012 2c5.518 0 9.997 4.48 9.997 9.998 0 5.517-4.479 9.997-9.997 9.997s-9.998-4.48-9.998-9.997c0-5.518 4.48-9.998 9.998-9.998zm-1.523 6.21s-1.502 1.505-3.255 3.259c-.147.147-.22.339-.22.531s.073.383.22.53c1.753 1.754 3.254 3.258 3.254 3.258.145.145.335.217.526.217.192-.001.384-.074.531-.221.292-.293.294-.766.003-1.057l-1.977-1.977h6.693c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-6.693l1.978-1.979c.29-.289.287-.762-.006-1.054-.147-.147-.339-.221-.53-.222-.19 0-.38.071-.524.215z" fillRule="nonzero"/></svg>
        </Link>
        <h1 className='font-bold w-[95%] text-3xl text-[#202f4b]'>MENU PENYEWA</h1>
      </div>

      <section className='flex justify-center px-5 pt-8 pb-20 gap-5'>
        {/* Sidebar */}
        <div className='w-[25%] border rounded-tl-lg shadow-lg h-fit'>
          <div className='flex flex-col'>
            {/* Header */}
            <div className='bg-[#202f4b] py-3 px-6 flex gap-2 rounded-tl-lg'>
              <img src='/testimoni_img/person1.jpeg' alt='profile-pict' className='w-14 h-14 object-cover rounded-full' />

              <div className='flex flex-col gap-1'>
                <h1 className='text-[#F7E135] font-semibold text-[14px] tracking-wide'>BIMOPRAWIRA</h1>
                <div className='flex items-center'>
                  <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" width={16} height={16} viewBox="0 0 24 24" className='fill-yellow-500' xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fillRule="nonzero"/></svg>
                  <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" width={16} height={16} viewBox="0 0 24 24" className='fill-yellow-500' xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fillRule="nonzero"/></svg>
                  <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" width={16} height={16} viewBox="0 0 24 24" className='fill-yellow-500' xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fillRule="nonzero"/></svg>
                  <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" width={16} height={16} viewBox="0 0 24 24" className='fill-yellow-500' xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fillRule="nonzero"/></svg>
                </div>
              </div>
              
              <p className='bg-[#1B2538] text-[#f7e135] font-semibold text-[12px] h-fit px-2 py-1 rounded-full ml-4'>Penyewa</p>
            </div>
            {/* End of Header */}

            {/* Content List */}
            {SIDEBAR_LIST.map((sidebar) => (
              <Link href={sidebar.link} key={sidebar.key} className='flex items-center gap-3 px-10 py-4 border-b-2 border-black duration-200 hover:bg-gray-200'>
                <img src={sidebar.icon} alt='icon' className='w-8 h-8' />
                <p className='font-bold text-lg'>{sidebar.title}</p>
              </Link>
            ))}
            {/* End of Content List */}
          </div>
        </div>
        {/* End of Sidebar */}

        <div className='w-[70%] border rounded-tl-lg rounded-b-lg shadow-lg'>
          {/* Header */}
          <SectionHeader title='Daftar Kendaraan' placeholder='Cari Kendaraan' buttonVisibility='visible' name='mobil' link='/Market/Vehicle/AddVehicle'/>
          {/* End of Header */}

          <div className='grid grid-cols-3 gap-5 p-6'>
            {KENDARAAN_DISEWAKAN.map((kendaraan) => (
              <Link key={kendaraan.key} href='/' >
                <ProductCardSewa img={kendaraan.img} title={kendaraan.title} harga={kendaraan.harga} transmisi={kendaraan.transmisi} kapasitas={kendaraan.kapasitas} kategori={kendaraan.kategori} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default page