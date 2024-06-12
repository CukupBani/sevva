import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar visibility='hidden' />
      <section className='p-10 flex h-[32rem]'>
        <Link href={'/Product'}>
          <button className='bg-[#1B2538] mr-3 w-10 h-10 fill-white rounded-lg hover:bg-black'>
            <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.978 14.999v3.251c0 .412-.335.75-.752.75-.188 0-.375-.071-.518-.206-1.775-1.685-4.945-4.692-6.396-6.069-.2-.189-.312-.452-.312-.725 0-.274.112-.536.312-.725 1.451-1.377 4.621-4.385 6.396-6.068.143-.136.33-.207.518-.207.417 0 .752.337.752.75v3.251h9.02c.531 0 1.002.47 1.002 1v3.998c0 .53-.471 1-1.002 1zm-1.5-7.506-4.751 4.507 4.751 4.507v-3.008h10.022v-2.998h-10.022z" fillRule="nonzero"/></svg>
          </button>
        </Link>

        {/* Image */}
        <div className='relative w-[45%] mr-8'>
          <img src="/productImage/car1.jpeg" alt='product-iamge' className='w-full h-full object-cover' />
          <div className='absolute z-10 w-full h-full top-0 flex items-center justify-between px-3'>
            <button className='embla__prev h-10 w-10 rounded-full bg-black flex items-center justify-center opacity-30 duration-300 hover:opacity-100'>
                <svg width={26} height={26} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='fill-white'><path d="m13.789 7.155c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591 1.299-1.002 3.945-3.044 5.498-4.243z"/></svg>
            </button>
            <button className='embla__next h-10 w-10 rounded-full bg-black flex items-center justify-center opacity-30 duration-300 hover:opacity-100'>
              <svg width={26} height={26} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='fill-white'><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"/></svg>
            </button>
          </div>
        </div>
        {/* End of Image */}
        
        {/* Content */}
        <div className='w-1/2'>
          {/* Title */}
          <div className='flex items-center justify-between'>
            <h1 className='font-bold text-3xl'>Ford Mustang GT-500</h1>
            <div className='flex items-center gap-5'>
              <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" height={28} width={28} xmlns="http://www.w3.org/2000/svg" className='fill-white stroke-2 stroke-black duration-200 hover:stroke-none hover:fill-red-500'><path d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z" fillRule="nonzero"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M5 9c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.762 0-5 2.239-5 5s2.238 5 5 5 5-2.239 5-5-2.238-5-5-5zm15 9c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.944 1.764l5.488 2.927c-.072.301-.121.611-.121.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-22c-2.209 0-4 1.791-4 4 0 .324.049.634.121.935l-5.488 2.927c.395.536.713 1.128.944 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4s-1.791-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"/></svg>
            </div>
          </div>
          {/* End of Title */}

          <div>
            <div className='flex items-center gap-1'>
              <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" width={22} height={22} xmlns="http://www.w3.org/2000/svg" className='fill-yellow-500'><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fillRule="nonzero"/></svg>
              <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" width={22} height={22} xmlns="http://www.w3.org/2000/svg" className='fill-yellow-500'><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fillRule="nonzero"/></svg>
              <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" width={22} height={22} xmlns="http://www.w3.org/2000/svg" className='fill-yellow-500'><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fillRule="nonzero"/></svg>
              <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" width={22} height={22} xmlns="http://www.w3.org/2000/svg" className='fill-yellow-500'><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fillRule="nonzero"/></svg>
              <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" width={22} height={22} xmlns="http://www.w3.org/2000/svg" className='fill-yellow-500'><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fillRule="nonzero"/></svg>
            </div>
            
            <p className='font-semibold text-xl mt-8'>Rp 400.000,00 / Hari</p>

            {/* Product Description */}
            <div className='mt-8 h-[13rem] overflow-auto'>
              <p className='font-medium text-[14px] text-gray-500 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolor blanditiis ipsam numquam, magnam ab cupiditate praesentium, in culpa laborum atque distinctio a hic deserunt cumque maxime fugiat expedita, voluptatem veritatis sit provident! Doloribus cupiditate et culpa nemo possimus accusantium dolorem, minus explicabo facilis illum error recusandae. Ullam ad nostrum, delectus, perspiciatis est ducimus accusantium obcaecati quaerat totam ratione odit sapiente consectetur voluptatem. Eveniet eos incidunt quam sunt vitae nam autem consectetur, dolore aliquam, debitis, odio minus. Pariatur facere maiores labore perspiciatis id repellat voluptatem rerum suscipit sequi quibusdam? Non tempora quibusdam, vel amet dignissimos ea iusto in dolore accusantium.</p>
              <p className='font-medium text-[14px] text-gray-500 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolor blanditiis ipsam numquam, magnam ab cupiditate praesentium, in culpa laborum atque distinctio a hic deserunt cumque maxime fugiat expedita, voluptatem veritatis sit provident! Doloribus cupiditate et culpa nemo possimus accusantium dolorem, minus explicabo facilis illum error recusandae. Ullam ad nostrum, delectus, perspiciatis est ducimus accusantium obcaecati quaerat totam ratione odit sapiente consectetur voluptatem. Eveniet eos incidunt quam sunt vitae nam autem consectetur, dolore aliquam, debitis, odio minus. Pariatur facere maiores labore perspiciatis id repellat voluptatem rerum suscipit sequi quibusdam? Non tempora quibusdam, vel amet dignissimos ea iusto in dolore accusantium.</p>
            </div>
            {/* End of Product Description */}
          </div>

          {/* Button */}
          <div className='flex items-center gap-4 justify-center mt-8'>
          <Link href={'/Chat'}>
              <button className='px-4 py-2 bg-white rounded-lg border border-black font-medium text-black duration-200 hover:bg-black hover:text-white'>
                Chat Penyedia Jasa
              </button>
            </Link>
          <Link href={'/SewaKendaraan'}>
              <button className='px-4 py-2 bg-[#1B2538] rounded-lg font-medium text-white duration-200 hover:bg-black'>
                Sewa Sekarang
              </button>
            </Link>
          </div>
          {/* End of Button */}
        </div>
        {/* End of Content */}
      </section>
    </>
  )
}

export default page