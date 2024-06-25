import React from 'react'

const CompanyProfile = () => {
  return (
    <>
      <section className='py-10 px-16'>
        <div className='flex items-center justify-center gap-5'>
          <div className='border-b-[4px] rounded-lg border-[#202f4b] w-20' />
          <h1 className='text-5xl font-bold text-[#202f4b]'>TENTANG SEVVA</h1>
          <div className='border-b-[4px] rounded-lg border-[#202f4b] w-20' />
        </div>

        <div className='mt-10 grid grid-cols-2 gap-8 items-center'>
          <img src='/aboutus/img-company-profile.jpg' alt='company-profile' className='h-96 object-cover rounded-md'/>
          <div className='text-justify font-medium flex flex-col gap-4'>
            <p className='indent-10'>PT. BPJ Interactive Studio atau biasa dikenal sebagai SEVVA merupakan salah satu perusahaan penyewaan kendaraan terbesar di Indonesia, berkat jaringan dan jangkauan area distribusinya yang mencakup lebih dari 52.000 kota, termasuk kabupaten, desa, dan pulau terluar, dengan jumlah penyewea berjumlah lebih dari 4.000 orang dan mempekerjakan lebih dari 100 karyawan di seluruh Indonesia.</p>
            <p className='indent-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sit eaque est perferendis minima sed laboriosam nisi, a possimus minus! Alias accusamus corrupti tempore cumque quo perspiciatis ab sequi, perferendis placeat omnis ex in recusandae pariatur commodi quis sapiente aliquid voluptas deleniti minus? Amet nostrum mollitia et saepe molestiae fugit!</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default CompanyProfile