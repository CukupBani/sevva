import Link from 'next/link'
import React from 'react'

type headerProps = {
    title: string,
    placeholder: string,
    buttonVisibility: 'hidden' | 'visible',
    name: string,
    link: string,
}

const SectionHeader = ({title, placeholder, buttonVisibility, name, link}: headerProps) => {
  return (
    <div className='px-10 py-3 bg-[#202f4b] rounded-tl-lg flex items-center justify-between'>
      <h1 className='text-[#f7e135] font-bold text-lg tracking-wide'>{title}</h1>

      <div className='flex items-center gap-3'>
        <div className='flex items-center gap-2 bg-slate-700 pl-3 rounded-full'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className='fill-white'><path d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z"/></svg>
          <input type='text' placeholder={placeholder} name={name} className='py-1 bg-transparent rounded-r-full text-white text-[15px] focus:outline-none' />
        </div>
        <Link href={link} className={`flex items-center gap-2 bg-[#f7e135] rounded-full py-1 font-semibold px-2 text-[#202f4b] duration-200 hover:bg-black hover:text-white ${buttonVisibility}`}>
          <p className='text-[14px]'>+ Tambah</p>
        </Link>
      </div>
    </div>
  )
}

export default SectionHeader