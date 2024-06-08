import Navbar from '@/components/Navbar'
import FilterBox from '@/components/template/FilterBox'
import ProductCard from '@/components/template/ProductCard'
import SearchNavbar from '@/components/template/SearchNavbar'
import { KENDARAAN_DISEWAKAN } from '@/constant'
import React from 'react'

const page = () => {
  return (
    <>
        <Navbar visibility='visible' />
        <section>
          <div className="bg-[url('/productImage/bg-product.jpg')] bg-no-repeat bg-center min-h-[346px]">
            <div className='w-full min-h-[346px] bg-black bg-opacity-50 flex flex-col items-center justify-center gap-3'>
              <h1 className='font-bold text-white text-5xl tracking-wide'>MOBIL</h1>
              <p className='font-medium text-xl text-white'>Home &gt; Mobil</p>
            </div>
          </div>
          <div className='p-10 flex gap-5'>
            <FilterBox />

            <div className='grid grid-cols-4 gap-5'>
                {KENDARAAN_DISEWAKAN.map((kendaraan) => (
                    <ProductCard key={kendaraan.key} img={kendaraan.img} title={kendaraan.title} kategori={kendaraan.kategori} transmisi={kendaraan.transmisi} kapasitas={kendaraan.kapasitas} penyedia_jasa={kendaraan.penyedia_jasa} harga={kendaraan.harga} lokasi={kendaraan.lokasi} />
                ))}
            </div>
          </div>
        </section>
    </>
  )
}

export default page