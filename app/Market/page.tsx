import ProductCardSewa from '@/components/template/ProductCardSewa'
import SectionHeader from '@/components/template/SectionHeader'
import Sidebar from '@/components/template/Sidebar'
import { KENDARAAN_DISEWAKAN } from '@/constant'
import React from 'react'

const page = () => {
  return (
    <>
      <section className='flex bg-gray-200'>
        <Sidebar />

        <div className='bg-white m-6 w-full rounded-lg shadow-md p-10'>
            <SectionHeader title='DAFTAR KENDARAAN' placeholder='Cari Kendaraan' buttonVisibility='visible' name='kendaraan' link='/Market/Vehicle/AddVehicle' />

            <div className='mt-8 grid grid-cols-4 gap-5'>
              {KENDARAAN_DISEWAKAN.map((kendaraan) => (
                <ProductCardSewa key={kendaraan.key} img={kendaraan.img} title={kendaraan.title} harga={kendaraan.harga} />
              ))}
            </div>
        </div>
      </section>
    </>
  )
}

export default page