import { KENDARAAN_DISEWAKAN } from '@/constant'
import React from 'react'
import ProductCard from './template/ProductCard'

const ProductPreview = () => {
  return (
    <>
        <section className='p-10'>
            {/* Judul Section */}
            <div className='flex flex-col gap-3 mb-8'>
                <h1 className='text-[#202F4D] font-bold text-5xl text-center'>KENDARAAN TERPOPULER</h1>
                <div className='flex items-center justify-center gap-3'>
                    <div id='line-1' className='w-[40px] border-b-2 border-[#202F4D]' />
                    <p className='font-medium text-[#202F4D]'>Rekomendasi Kendaraan Paling Sering Disewa Dari Kami</p>
                    <div id='line-2' className='w-[40px] border-b-2 border-[#202F4D]' />
                </div>
            </div>
            {/* End of Judul Section */}

            {/* Content */}
            <div className='grid grid-cols-4 gap-5 mt-8'>
                {KENDARAAN_DISEWAKAN.slice(0,4).map((kendaraan) => (
                    <ProductCard key={kendaraan.key} img={kendaraan.img} title={kendaraan.title} kategori={kendaraan.kategori} transmisi={kendaraan.transmisi} kapasitas={kendaraan.kapasitas} penyedia_jasa={kendaraan.penyedia_jasa} harga={kendaraan.harga} lokasi={kendaraan.lokasi} />
                ))}
            </div>
            {/* End of Content */}
        </section>
    </>
  )
}

export default ProductPreview