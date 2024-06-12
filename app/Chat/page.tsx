import Navbar from '@/components/Navbar'
import { CHAT_LIST, PROFILE_SETTINGS } from '@/constant'
import React from 'react'

const page = () => {
    return (
        <>
            <Navbar visibility='hidden' />
            <div className='flex items-center justify-center p-10'>
                <h1 className='font-bold text-3xl text-[#202f4b] w-[85%]'>CHAT</h1>
            </div>
    
            <section className='px-10 pb-20 flex gap-5 justify-center'>
                {/* Option */}
                <div className='w-[25%]'>
                    <div className='flex items-center gap-2 border-2 rounded-lg pl-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"/></svg>
                        <input type='text' placeholder='Cari Pengguna' name='user' className='w-full py-2 focus:outline-none rounded-lg'/>
                    </div>

                    <ul className='mt-3 border-2 rounded-lg shadow-xl h-fit'>
                        {CHAT_LIST.map((chat) => (
                        <li key={chat.key} className='flex items-center gap-3 px-4 py-5 border-b border-black duration-200 hover:bg-gray-200'>
                            <img src={chat.img} alt='profile-img' className='w-16 rounded-full' />
                            <div className='flex flex-col gap-1 w-full'>
                                <div className='flex items-center justify-between'>
                                    <h3 className='font-semibold'>{chat.name}</h3>
                                    <p className='bg-[#202f4b] py-1 px-2 rounded-full text-[#F7E135] text-[10px]'>{chat.status}</p>
                                </div>
                                <p className='text-[12px] font-medium text-gray-500'>{chat.text.length > 20 ? chat.text.slice(0, 20) + '...' : chat.text}</p>
                            </div>
                        </li>
                        ))}
                    </ul>
                </div>
                {/* End of Option */}
    
                {/* Profile */}
                <div className='w-[60%] border rounded-lg shadow-md'>
                    {/* chat header */}
                    <div className='flex items-center justify-between border-b-2 py-3 px-6 border-black'>
                        <div className='flex items-center gap-3'>
                            <img src='/testimoni_img/person1.jpeg' alt='profile-pict' className='w-14 rounded-full' />
                            <div className='flex flex-col gap-2 w-full'>
                                <div className='flex items-center gap-5'>
                                    <h3 className='font-semibold'>BIMOSEWA</h3>
                                    <p className='bg-[#202f4b] py-1 px-2 rounded-full text-[#F7E135] text-[12px]'>Penjual</p>
                                </div>
                                <p className='text-[12px] font-medium text-gray-500'>Terakhir Dilihat 5 Jam yang Lalu</p>
                            </div>
                        </div>
                        
                        <svg className='fill-[#202f4b] duration-200 hover:fill-yellow-500' clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" width={24} height={24} xmlns="http://www.w3.org/2000/svg"><path d="m12 16.495c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm0-6.75c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm0-6.75c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25z"/></svg>
                    </div>
                    {/* end of chat header */}
    
                    <div className='px-10 py-6 flex flex-col justify-between'>
                        <div className='h-96'>
                            
                        </div>

                        <div className='flex items-center gap-2 bg-gray-200 rounded-lg pr-4'>
                            <input type='text' placeholder='Kirim Pesan' name='chat' className='bg-transparent py-2 px-4 w-full rounded-lg focus:outline-none' />
                            <button className='fill-[#202f4b] duration-200 hover:fill-yellow-500'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"/></svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* End of Profile */}
            </section>
        </>
    )
  }
  
  export default page