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
    <div className='flex items-center justify-between'>
      <h1 className='font-bold text-3xl text-[#202f4b]'>{title}</h1>

      <div className='flex items-center gap-3'>
        <div className='flex items-center gap-2 border-2 rounded-lg pl-4'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"/></svg>
          <input type='text' placeholder={placeholder} name={name} className='pr-4 py-2 rounded-lg focus:outline-none'/>
        </div>
        <Link href={link} className={`bg-[#202f4b] ${buttonVisibility} px-4 py-2 rounded-lg text-[#F7E135] fill-[#F7E135] flex items-center gap-2 duration-200 hover:bg-black`}>
          <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fillRule="nonzero"/></svg>
          <p>Tambah</p>
        </Link>
      </div>
    </div>
  )
}

export default SectionHeader