import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <section className='flex items-center justify-center h-[100vh] bg-[#202F4D]'>
        <div className='relative w-[35%] bg-[#1B2538] p-10 rounded-lg overflow-hidden'>
          <div className='absolute top-0 right-0 -translate-y-10 translate-x-10 h-32 w-32 rounded-full bg-yellow-400' />

          {/* Icon */}
          <div className='flex flex-col items-center justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" className='fill-[#F7E135]'><path d="M7.599 17.399c0-.729-.591-1.32-1.32-1.32s-1.32.591-1.32 1.32c0 .729.591 1.32 1.32 1.32s1.32-.591 1.32-1.32zm7.922.88c0-.243-.197-.44-.44-.44h-6.162c-.243 0-.44.197-.44.44s.197.44.44.44h6.161c.244 0 .441-.197.441-.44zm3.521-.88c0-.729-.591-1.32-1.32-1.32-.729 0-1.32.591-1.32 1.32 0 .729.591 1.32 1.32 1.32.728 0 1.32-.591 1.32-1.32zm-15.226-5.722h-1.938c-.243 0-.44.197-.44.44v.45c0 .698.815.871 1.422.871l.956-1.761zm17.003 2.789c-.67-1.244-1.496-2.79-2.362-4.236-.692-1.154-1.206-1.706-2.421-1.925-1.228-.219-2.36-.305-4.036-.305s-2.808.086-4.036.306c-1.215.218-1.729.77-2.421 1.925-.864 1.441-1.684 2.977-2.362 4.236-.605 1.121-.863 2.123-.863 3.35 0 1.16.37 2.125.88 3.36v1.944c0 .486.394.88.88.88h1.32c.486 0 .88-.394.88-.88v-.88h11.443v.88c0 .486.394.88.88.88h1.32c.486 0 .88-.394.88-.88v-1.944c.511-1.235.88-2.2.88-3.36.001-1.229-.257-2.23-.862-3.351zm-13.767-3.331c.59-.983.75-1.012 1.223-1.097 1.117-.2 2.161-.278 3.725-.278s2.608.078 3.725.278c.474.085.634.113 1.223 1.097.359.6.713 1.222 1.051 1.831-1.281.194-3.538.471-5.999.471-2.683 0-4.856-.295-5.99-.488.336-.603.686-1.22 1.042-1.814zm10.206 9.344h-10.516c-1.471 0-2.664-1.192-2.664-2.664 0-1.445.446-2.131 1.042-3.237.916.181 3.492.62 6.88.62 3.064 0 5.775-.4 6.895-.591.584 1.083 1.026 1.769 1.026 3.209.001 1.471-1.192 2.663-2.663 2.663zm4.864-8.802c.243 0 .44.197.44.44v.45c0 .698-.815.871-1.422.871l-.956-1.76h1.938zm-4.419-9.677h-5.709v-.608c.001-.814-.708-1.455-1.532-1.387l-4.172.464c-.733.061-1.29.664-1.29 1.387v3.286c0 .723.556 1.325 1.288 1.386l4.171.466c.825.069 1.535-.572 1.535-1.388v-.607h2.224l.808-.988.815.989.871-.988.812.988 1.476-1.294-1.297-1.706zm-10.709 3.534l-.664-.059c-.187-.016-.336-.167-.335-.345v-3.286c0-.177.148-.329.335-.344l.663-.06v4.094z"/></svg>
            <h1 className='font-bold text-4xl text-[#F7E135] mt-2'>SEVVA</h1>
            <p className='text-[#f7e135]'>Sign In and Start Driving!</p>
          </div>
          {/* End of Icon */}

          <form className='flex flex-col gap-7 mt-8'>
            <div className='flex items-center bg-[#c9c9c9] bg-opacity-10 rounded-lg pl-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-white'><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"/></svg>
              <input type='text' placeholder='Username' name='username' className='px-4 py-3 w-full bg-transparent text-white focus:outline-none' />
            </div>

            <div className='flex items-center bg-[#c9c9c9] bg-opacity-10 rounded-lg pl-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-white'><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.707 13.946l-1.035 1.054h-.672v1h-1v1h-3v-2.292l3.146-3.185c.496 1.111 1.419 1.988 2.561 2.423zm5.293-4.279c0 2.025-1.642 3.667-3.667 3.667-2.024 0-3.666-1.642-3.666-3.667s1.642-3.667 3.666-3.667c2.025 0 3.667 1.642 3.667 3.667zm-1.375-1.375c0-.506-.41-.917-.917-.917s-.916.411-.916.917.409.917.916.917.917-.411.917-.917z"/></svg>
              <input type='password' placeholder='Password' name='password' className='px-4 py-3 w-full bg-transparent text-white focus:outline-none' />
            </div>

            <div className='flex flex-col gap-2'>
              <div className='flex items-center justify-center mt-5'>
                <button className='text-[#1b2538] px-8 py-2 rounded-lg bg-[#f7e135] font-semibold tracking-wide duration-200 hover:bg-white'>
                  SIGN IN
                </button>
              </div>
              <Link href={'/Login/RegisterPage'} className='text-white text-center text-[13px] duration-200 hover:text-[#f7e135]'>
                Belum Punya Akun?
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default page