'use client'

import React, { useState } from 'react';

const Page = () => {
  const [formData, setFormData] = useState({
    namaDepan: '',
    namaBelakang: '',
    email: '',
    username: '',
    password: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (response.ok) {
        console.log('Registration successful:', result);
      } else {
        console.error('Registration error:', result);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <>
      <section className='flex items-center justify-center bg-[#202F4D]'>
        <div className='my-10 relative w-[50%] bg-[#1B2538] p-10 rounded-lg overflow-hidden'>
          <div className='absolute top-0 right-0 -translate-y-10 translate-x-10 h-32 w-32 rounded-full bg-yellow-400' />
          <div className='flex flex-col items-center justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" className='fill-[#F7E135]'><path d="M7.599 17.399c0-.729-.591-1.32-1.32-1.32s-1.32.591-1.32 1.32c0 .729.591 1.32 1.32 1.32s1.32-.591 1.32-1.32zm7.922.88c0-.243-.197-.44-.44-.44h-6.162c-.243 0-.44.197-.44.44s.197.44.44.44h6.161c.244 0 .441-.197.441-.44zm3.521-.88c0-.729-.591-1.32-1.32-1.32-.729 0-1.32.591-1.32 1.32 0 .729.591 1.32 1.32 1.32.728 0 1.32-.591 1.32-1.32zm-15.226-5.722h-1.938c-.243 0-.44.197-.44.44v.45c0 .698.815.871 1.422.871l.956-1.761zm17.003 2.789c-.67-1.244-1.496-2.79-2.362-4.236-.692-1.154-1.206-1.706-2.421-1.925-1.228-.219-2.36-.305-4.036-.305s-2.808.086-4.036.306c-1.215.218-1.729.77-2.421 1.925-.864 1.441-1.684 2.977-2.362 4.236-.605 1.121-.863 2.123-.863 3.35 0 1.16.37 2.125.88 3.36v1.944c0 .486.394.88.88.88h1.32c.486 0 .88-.394.88-.88v-.88h11.443v.88c0 .486.394.88.88.88h1.32c.486 0 .88-.394.88-.88v-1.944c.511-1.235.88-2.2.88-3.36.001-1.229-.257-2.23-.862-3.351zm-13.767-3.331c.59-.983.75-1.012 1.223-1.097 1.117-.2 2.161-.278 3.725-.278s2.608.078 3.725.278c.474.085.634.113 1.223 1.097.359.6.713 1.222 1.051 1.831-1.281.194-3.538.471-5.999.471-2.683 0-4.856-.295-5.99-.488.336-.603.686-1.22 1.042-1.814zm10.206 9.344h-10.516c-1.471 0-2.664-1.192-2.664-2.664 0-1.445.446-2.131 1.042-3.237.916.181 3.492.62 6.88.62 3.064 0 5.775-.4 6.895-.591.584 1.083 1.026 1.769 1.026 3.209.001 1.471-1.192 2.663-2.663 2.663zm4.864-8.802c.243 0 .44.197.44.44v.45c0 .698-.815.871-1.422.871l-.956-1.76h1.938zm-4.419-9.677h-5.709v-.608c.001-.814-.708-1.455-1.532-1.387l-4.172.464c-.733.061-1.29.664-1.29 1.387v3.286c0 .723.556 1.325 1.288 1.386l4.171.466c.825.069 1.535-.572 1.535-1.388v-.607h2.224l.808-.988.815.989.871-.988.812.988 1.476-1.294-1.297-1.706zm-10.709 3.534l-.664-.059c-.187-.016-.336-.167-.335-.345v-3.286c0-.177.148-.329.335-.344l.663-.06v4.094z"/></svg>
            <h1 className='font-bold text-4xl text-[#F7E135] mt-2'>SEVVA</h1>
            <p className='text-[#f7e135]'>Sign Up</p>
          </div>

          <form className='flex flex-col gap-4 mt-8' onSubmit={handleSubmit}>
            <div className='flex items-center gap-5'>
              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor='namaDepan' className='text-white text-[14px]'>Nama Depan</label>
                <input type='text' placeholder='Nama Depan' name='namaDepan' className='bg-[#c9c9c9] bg-opacity-10 rounded-lg px-4 py-3 w-full text-white focus:outline-none' onChange={handleChange} />
              </div>

              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor='namaBelakang' className='text-white text-[14px]'>Nama Belakang</label>
                <input type='text' placeholder='Nama Belakang' name='namaBelakang' className='bg-[#c9c9c9] bg-opacity-10 rounded-lg px-4 py-3 w-full text-white focus:outline-none' onChange={handleChange} />
              </div>
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor='email' className='text-white text-[14px]'>Email</label>
              <input type='text' placeholder='Email' name='email' className='bg-[#c9c9c9] bg-opacity-10 rounded-lg px-4 py-3 w-full text-white focus:outline-none' onChange={handleChange} />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor='username' className='text-white text-[14px]'>Username</label>
              <input type='text' placeholder='Username' name='username' className='bg-[#c9c9c9] bg-opacity-10 rounded-lg px-4 py-3 w-full text-white focus:outline-none' onChange={handleChange} />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor='password' className='text-white text-[14px]'>Password</label>
              <input type='password' placeholder='Password' name='password' className='bg-[#c9c9c9] bg-opacity-10 rounded-lg px-4 py-3 w-full text-white focus:outline-none' onChange={handleChange} />
            </div>

            <div className='flex flex-col gap-2'>
              <div className='flex items-center justify-center mt-5'>
                <button type='submit' className='text-[#1b2538] px-8 py-2 rounded-lg bg-[#f7e135] font-semibold tracking-wide duration-200 hover:bg-white'>
                  SIGN UP
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Page;
