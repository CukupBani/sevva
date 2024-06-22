import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar visibility='hidden'/>
      <div className='flex items-center justify-center px-10 gap-5 pt-10'>
        <Link href='/Market' className='fill-[#202f4b] duration-200 hover:fill-black'>
          <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" width={40} height={40} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.012 2c5.518 0 9.997 4.48 9.997 9.998 0 5.517-4.479 9.997-9.997 9.997s-9.998-4.48-9.998-9.997c0-5.518 4.48-9.998 9.998-9.998zm-1.523 6.21s-1.502 1.505-3.255 3.259c-.147.147-.22.339-.22.531s.073.383.22.53c1.753 1.754 3.254 3.258 3.254 3.258.145.145.335.217.526.217.192-.001.384-.074.531-.221.292-.293.294-.766.003-1.057l-1.977-1.977h6.693c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-6.693l1.978-1.979c.29-.289.287-.762-.006-1.054-.147-.147-.339-.221-.53-.222-.19 0-.38.071-.524.215z" fillRule="nonzero"/></svg>
        </Link>
        <h1 className='font-bold w-[95%] text-3xl text-[#202f4b]'>FORM TAMBAH KENDARAAN</h1>
      </div>

      <section className='p-10 flex items-center justify-center'>
        <div className='w-1/2 border shadow-lg rounded-tl-lg rounded-b-lg'>
          {/* Header */}
          <h1 className='bg-[#202f4b] py-6 px-8 text-xl text-[#f7e135] font-semibold rounded-tl-lg'>Tambah Kendaraan</h1>
          {/* End of Header */}

          {/* Content */}
          <form className='flex flex-col gap-7 px-8 py-5'>
            <div className='flex flex-col gap-1'>
              <p className='font-semibold text-gray-800'>Jenis Kendaraan</p>
              <select className='py-2 px-4 border border-gray-300 rounded-lg focus:outline-none'>
                <option value='Mobil'>Mobil</option>
                <option value='Motor'>Motor</option>
                <option value='Electric Vehicle'>Electric Vehicle</option>
                <option value='Truk'>Truk</option>
                <option value='Travel'>Travel</option>
              </select>
            </div>

            <div className='flex flex-col gap-1'>
              <p className='font-semibold text-gray-800'>Nama Kendaraan</p>
              <input type='text' name='nama_kendaraan' className='py-2 px-4 border border-gray-300 rounded-lg focus:outline-none' />
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex flex-col gap-1 w-[40%]'>
                <p className='font-semibold text-gray-800'>Transmisi Kendaraan</p>
                <select className='py-2 px-4 border border-gray-300 rounded-lg focus:outline-none'>
                  <option value='Manual'>Manual</option>
                  <option value='Automatic'>Automatic</option>
                </select>
              </div>

              <div className='flex flex-col gap-1 w-[40%]'>
                <p className='font-semibold text-gray-800'>Kapasitas Kendaraan</p>
                <input type='number' name='kapasitas' className='py-2 px-4 border border-gray-300 rounded-lg focus:outline-none' />
              </div>
            </div>

            <div className='flex flex-col gap-1'>
              <p className='font-semibold text-gray-800'>Harga/Hari</p>
              <input type='number' name='harga' className='py-2 px-4 border border-gray-300 rounded-lg focus:outline-none' />
            </div>

            <div className='flex flex-col gap-1'>
              <p className='font-semibold text-gray-800'>Deskripsi Kendaraan</p>
              <textarea name='deskripsi' rows={8} cols={4} className='py-2 px-4 border border-gray-300 rounded-lg focus:outline-none resize-none'></textarea>
            </div>

            <div className='flex flex-col gap-2'>
              <p className='font-semibold text-gray-800'>Unggah Foto Kendaraan</p>
              <button className='rounded-xl bg-green-500 py-4 px-8 text-center w-1/2 text-white font-semibold duration-200 hover:bg-black'>
                Upload Here
              </button>
            </div>

            <div className='flex items-center justify-end mt-4'>
              <button className='rounded-full text-lg px-5 py-2 bg-[#202f4b] text-[#f7e135] font-medium duration-200 hover:bg-black'>
                Simpan
              </button>
            </div>
          </form>
          {/* End of Content */}
        </div>
      </section>
    </>
  )
}

export default page