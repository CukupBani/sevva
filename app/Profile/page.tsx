import Navbar from '@/components/Navbar'
import { PROFILE_SETTINGS } from '@/constant'
import React from 'react'

const page = () => {
  return (
    <>
        <Navbar visibility='hidden' />
        <section className='px-10 py-20 flex gap-5 justify-center'>
            {/* Option */}
            <div className='w-[20%] border-2 rounded-lg shadow-xl h-fit'>
                <ul>
                   {PROFILE_SETTINGS.map((profil) => (
                    <li key={profil.key} className='flex items-center gap-4 py-4 px-6 font-semibold text-xl border-b-2 border-black'>
                        <img src={profil.img} alt='icon' className='w-7'/>
                        <p>{profil.title}</p>
                    </li>
                   ))}
                </ul>
            </div>
            {/* End of Option */}

            {/* Profile */}
            <div className='w-[60%] border rounded-lg shadow-md'>
                <h1 className='bg-[#1B2538] py-6 px-10 font-bold text-[#F7E135] tracking-wide text-xl rounded-t-lg'>Informasi Pengguna</h1>

                <div className='px-10 py-6'>
                    {/* Image and Name */}
                    <div className='flex items-center gap-4'>
                        <img src='/testimoni_img/person1.jpeg' alt='profile-img' className='w-48 h-48 rounded-full object-cover' />
                        <div className='flex flex-col'>
                            <h3 className='font-bold text-[#202f4b] text-3xl'>Fulano binti Fulani</h3>
                            <p className='font-medium text-gray-500'>fulani.fulano@gmail.com</p>
                        </div>
                    </div>
                    {/* End of Image and Name */}

                    {/* Form */}
                    <form className='mt-8 flex flex-col gap-5'>
                        <div className='flex items-center gap-16'>
                            <div className='flex flex-col gap-1 w-full'>
                                <label className='font-medium'>Nama Depan</label>
                                <input type='text' placeholder='Name Depan' name='namaDepan' className='px-4 py-2 bg-gray-200 rounded-lg focus:outline-none'/>
                            </div>
                            <div className='flex flex-col gap-1 w-full'>
                                <label className='font-medium'>Nama Belakang</label>
                                <input type='text' placeholder='Name Belakang' name='namaBelakang' className='px-4 py-2 bg-gray-200 rounded-lg focus:outline-none'/>
                            </div>
                        </div>

                        <div className='flex flex-col gap-1 w-[45%]'>
                            <label className='font-medium'>Username</label>
                            <input type='text' placeholder='Username' name='username' className='px-4 py-2 bg-gray-200 rounded-lg focus:outline-none'/>
                        </div>

                        <div className='flex flex-col gap-1 w-[45%]'>
                            <label className='font-medium'>Email</label>
                            <input type='text' placeholder='Email' name='email' className='px-4 py-2 bg-gray-200 rounded-lg focus:outline-none'/>
                        </div>

                        <div className='flex flex-col gap-1 w-[45%]'>
                            <label className='font-medium'>Nomer Telepon</label>
                            <input type='text' placeholder='No. Telp' name='noTelp' className='px-4 py-2 bg-gray-200 rounded-lg focus:outline-none'/>
                        </div>

                        <button className='mt-8 bg-[#202f4b] rounded-lg px-4 py-2 w-fit font-medium text-[#F7E135] duration-200 hover:bg-black'>
                            Simpan
                        </button>
                    </form>
                    {/* End of Form */}
                </div>
            </div>
            {/* End of Profile */}
        </section>
    </>
  )
}

export default page