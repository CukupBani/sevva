import React from 'react'

const CompanyProfile = () => {
  return (
    <>
      <section className='p-10'>
        <div className='flex items-center justify-center gap-5'>
          <div className='border-b-[4px] rounded-lg border-[#202f4b] w-20' />
          <h1 className='text-5xl font-bold text-[#202f4b]'>TENTANG SEVVA</h1>
          <div className='border-b-[4px] rounded-lg border-[#202f4b] w-20' />
        </div>

        <div className='mt-8 flex items-center justify-center'>
          <p className=' w-[80%] text-center font-medium'>PT. BPJ Interactive Studio atau biasa dikenal sebagai SEVVA merupakan salah satu perusahaan penyewaan kendaraan terbesar di Indonesia, berkat jaringan dan jangkauan area distribusinya yang mencakup lebih dari 52.000 kota, termasuk kabupaten, desa, dan pulau terluar, dengan jumlah penyewea berjumlah lebih dari 4.000 orang dan mempekerjakan lebih dari 100 karyawan di seluruh Indonesia.</p>
        </div>
      </section>
    </>
  )
}

export default CompanyProfile