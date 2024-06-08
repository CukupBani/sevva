import { TIPE_KENDARAAN } from '@/constant'
import React from 'react'

const CarTypeList = () => {
  return (
    <>
        <section className='p-10'>
            {/* Judul Section */}
            <div className='flex flex-col gap-3 my-8'>
                <h1 className='text-[#202F4D] font-bold text-center text-5xl'>TIPE KENDARAAN</h1>
                <div className='flex items-center justify-center gap-3'>
                    <div id='line-1' className='w-[40px] border-b-2 border-[#202F4D]' />
                    <p className='font-medium text-[#202F4D]'>Pilih Kendaraan Berdasarkan Tipe yang Anda Inginkan</p>
                    <div id='line-2' className='w-[40px] border-b-2 border-[#202F4D]' />
                </div>
            </div>
            {/* End of Judul Section */}

            {/* Content */}
            <div className='grid grid-cols-5 mt-8 gap-5'>
                {TIPE_KENDARAAN.map((tipe) => (
                    <div key={tipe.key} className='px-6 bg-gray-200 rounded-lg shadow-md flex flex-col items-center justify-center gap-3 h-40 duration-500 hover:shadow-xl hover:-translate-y-1.5'>
                        <img src={tipe.img} alt='icon-tipe' className='w-14' />
                        <p className='text-2xl font-semibold text-center'>{tipe.title}</p>
                    </div>
                ))}
            </div>
            {/* End of Content */}
        </section>
    </>
  )
}

export default CarTypeList