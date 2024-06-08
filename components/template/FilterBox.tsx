import { FILTER_LOKASI, FILTER_MOBIL } from '@/constant'
import React from 'react'

const FilterBox = () => {
  return (
    <div className='h-fit w-[25%] px-6 pb-6'>
        <h1 className='font-bold text-lg'>FILTER</h1>

        <div className='mt-2 bg-gray-200 rounded-t-2xl rounded-b-md pb-1'>
            <h3 className='font-semibold px-4 py-1 bg-[#1B2538] text-[#F7E135] rounded-full'>Jenis</h3>
        
            <form className='px-4 py-2 flex flex-col gap-2'>
                {FILTER_MOBIL.map((jenis) => (
                    <div key={jenis.key} className='flex items-center gap-2 font-medium text-[14px]'>
                        <input type='checkbox' id={jenis.key} name={jenis.key} value={jenis.title} />
                        <label htmlFor={jenis.key}>{jenis.title}</label>
                    </div>
                ))}
            </form>
        </div>

        <div className='mt-2 bg-gray-200 rounded-t-2xl rounded-b-md pb-1'>
            <h3 className='font-semibold px-4 py-1 bg-[#1B2538] text-[#F7E135] rounded-full'>Lokasi</h3>
        
            <form className='px-4 py-2 flex flex-col gap-2'>
                <select required className='text-[14px] p-1'>
                    {FILTER_LOKASI.map((lokasi) => (
                        <option key={lokasi.key} value={lokasi.key}>{lokasi.value}</option>
                    ))}
                </select>
            </form>
        </div>

        <div className='mt-2 bg-gray-200 rounded-t-2xl rounded-b-md pb-1'>
            <h3 className='font-semibold px-4 py-1 bg-[#1B2538] text-[#F7E135] rounded-full'>Harga</h3>
        
            <form className='px-4 py-2 flex flex-col gap-3'>
                <div className='flex items-center gap-1 bg-gray-50 rounded-lg pl-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-gray-400'><path d="M22 7v10h-20v-10h20m2-2h-24v14h24v-14zm-12 3c-2.208 0-4 1.792-4 4s1.792 4 4 4 4-1.792 4-4-1.792-4-4-4zm.2 5.979v.42h-.4v-.399c-.414-.007-.843-.105-1.2-.29l.181-.657c.383.146.891.305 1.29.215.46-.104.555-.577.046-.805-.372-.172-1.512-.322-1.512-1.296 0-.546.417-1.034 1.194-1.141v-.425h.401v.407c.29.007.616.058.977.168l-.145.658c-.307-.107-.646-.205-.977-.185-.595.035-.648.551-.232.766.684.322 1.576.561 1.576 1.418.002.687-.536 1.054-1.199 1.146z"/></svg>
                    <input type='number' name='hargaMin' placeholder='Harga Minimum' className='rounded-lg bg-transparent text-[14px] p-1 focus:outline-none' />
                </div>
                <div className='flex items-center gap-1 bg-gray-50 rounded-lg pl-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-gray-400'><path d="M22 7v10h-20v-10h20m2-2h-24v14h24v-14zm-12 3c-2.208 0-4 1.792-4 4s1.792 4 4 4 4-1.792 4-4-1.792-4-4-4zm.2 5.979v.42h-.4v-.399c-.414-.007-.843-.105-1.2-.29l.181-.657c.383.146.891.305 1.29.215.46-.104.555-.577.046-.805-.372-.172-1.512-.322-1.512-1.296 0-.546.417-1.034 1.194-1.141v-.425h.401v.407c.29.007.616.058.977.168l-.145.658c-.307-.107-.646-.205-.977-.185-.595.035-.648.551-.232.766.684.322 1.576.561 1.576 1.418.002.687-.536 1.054-1.199 1.146z"/></svg>
                    <input type='number' name='hargaMax' placeholder='Harga Maksimum' className='rounded-lg bg-transparent text-[14px] p-1 focus:outline-none' />
                </div>
            </form>
        </div>
     </div>
  )
}

export default FilterBox