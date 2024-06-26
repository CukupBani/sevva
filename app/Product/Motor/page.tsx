import Navbar from '@/components/Navbar'
import FilterBox from '@/components/template/FilterBox'
import ProductCardMotor from '@/components/template/ProductCardMotor'
import { MOTOR_DISEWAKAN } from '@/constant'
import React from 'react'

const page = () => {
  return (
    <>
        <Navbar visibility='visible' />
        <section>
          <div className="bg-[url('/productImage/bg-motor.jpg')] bg-cover bg-no-repeat bg-center min-h-[346px]">
            <div className='w-full min-h-[346px] bg-black bg-opacity-50 flex flex-col items-center justify-center gap-3'>
              <h1 className='font-bold text-white text-5xl tracking-wide'>MOTOR</h1>
            </div>
          </div>
          <div className='p-10 flex gap-5'>
            <FilterBox />

            <div className='grid grid-cols-4 gap-5'>
                {MOTOR_DISEWAKAN.map((kendaraan) => (
                  <ProductCardMotor key={kendaraan.key} img={kendaraan.img} title={kendaraan.title} kategori={kendaraan.kategori} transmisi={kendaraan.transmisi} kapasitas={kendaraan.kapasitas} penyedia_jasa={kendaraan.penyedia_jasa} harga={kendaraan.harga} lokasi={kendaraan.lokasi} />
                ))}
            </div>
          </div>
        </section>
    </>
  )
}

export default page