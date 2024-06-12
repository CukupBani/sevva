import React from 'react'

const page = () => {
  return (
    <>
        <section className='p-10 flex gap-5'>
            {/* Rent Detail */}
            <div className='w-[70%] flex flex-col gap-5'>
                {/* Detail Barang */}
                <div className='border rounded-lg p-4 shadow-md'>
                    <h1 className='font-bold text-xl'>Detail Kendaraan Dibooking</h1>
                    <div className='flex mt-3 gap-5'>
                        
                        <img src='/productImage/car1.jpeg' alt='foto-sewaan' className='h-36 w-72 object-cover'/>
                        <div className='flex flex-col justify-between'>
                            <div className='flex flex-col gap-1.5'>
                                <h3 className='text-xl font-bold'>Ford Mustang GT-500</h3>
                                <p className='font-medium text-gray-500'>Rp 400.000,00 / Hari</p>
                            </div>

                            <div className='flex items-center gap-2'>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-gray-500 font-medium'>Mulai Sewa</label>
                                    <input type='date' name='mulaiSewa' className='border border-gray-400 px-2 py-1 rounded-lg' /> 
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-gray-500 font-medium'>Selesai Sewa</label>
                                    <input type='date' name='selesaiSewa' className='border border-gray-400 px-2 py-1 rounded-lg' /> 
                                </div>
                                <div className='ml-4 flex flex-col gap-1'>
                                    <label className='text-gray-500 font-medium'>Lama Sewa</label>
                                    <p className='font-bold py-1 text-center'>3 Hari</p> 
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                {/* End of Detail Barang */}

                {/* Lokasi Kendaraan */}
                <div className='border rounded-lg p-4 shadow-md'>
                    <h1 className='font-bold text-xl'>Lokasi Kendaraan</h1>

                    <div className='flex items-end mt-3 gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M12 3c2.131 0 4 1.73 4 3.702 0 2.05-1.714 4.941-4 8.561-2.286-3.62-4-6.511-4-8.561 0-1.972 1.869-3.702 4-3.702zm0-2c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm8 6h-3.135c-.385.641-.798 1.309-1.232 2h3.131l.5 1h-4.264l-.344.544-.289.456h.558l.858 2h-7.488l.858-2h.479l-.289-.456-.343-.544h-2.042l-1.011-1h2.42c-.435-.691-.848-1.359-1.232-2h-3.135l-4 8h24l-4-8zm-12.794 6h-3.97l1.764-3.528 1.516 1.528h1.549l-.859 2zm8.808-2h3.75l1 2h-3.892l-.858-2z"/></svg>
                        <p className='font-medium text-lg'>Kentingan Jl. Ir. Sutami No.36, Jebres, Kec. Jebres, Kota Surakarta, Jawa Tengah 57126</p>
                    </div>
                </div>
                {/* End of Lokasi Kendaraan */}

                {/* Detail Penyewa */}
                <div className='border rounded-lg p-4 shadow-md'>
                    <h1 className='font-bold text-xl'>Detail Penyewa</h1>

                    <table className='w-1/2 mt-2'>
                        <tbody className='font-medium'>
                            <tr>
                                <td className='py-1'>Nama</td>
                                <td className='py-1'>: Fulan bin Fulano</td>
                            </tr>

                            <tr>
                                <td className='py-1'>Email</td>
                                <td className='py-1'>: fulan.fulano@gmail.com</td>
                            </tr>

                            <tr>
                                <td className='py-1'>No. Telp</td>
                                <td className='py-1'>: +62 882-2345-1234</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* End of Detail Penyewa */}

                {/* Metode Pembayaran */}
                <div className='border rounded-lg p-4 shadow-md'>
                    <h1 className='font-bold text-xl'>Metode Pembayaran</h1>
                    
                    <form className='w-[30%] mt-3 flex flex-col gap-3'>
                        <div className='flex items-center justify-between text-[18px]'>
                            <label className='font-medium'>BRI</label>
                            <input type='radio' name='metodeBayar' value={'BRI'} className='scale-125' />
                        </div>

                        <div className='flex items-center justify-between text-[18px]'>
                            <label className='font-medium'>BNI</label>
                            <input type='radio' name='metodeBayar' value={'BNI'} className='scale-125' />
                        </div>

                        <div className='flex items-center justify-between text-[18px]'>
                            <label className='font-medium'>Mandiri</label>
                            <input type='radio' name='metodeBayar' value={'Mandiri'} className='scale-125' />
                        </div>

                        <div className='flex items-center justify-between text-[18px]'>
                            <label className='font-medium'>BCA</label>
                            <input type='radio' name='metodeBayar' value={'BCA'} className='scale-125' />
                        </div>
                    </form>
                </div>
                {/* End of Metode Pembayaran */}
            </div>
            {/* End of Rent Detail */}

            {/* Tagihan */}
            <div className='flex flex-col w-[30%]'>
                <div className='h-fit border rounded-lg shadow-md p-6'>
                    <h1 className='text-center font-bold'>Total Biaya</h1>

                    <div className='flex items-center justify-between mt-8 font-semibold'>
                        <h3>Ford Mustang GT-500</h3>
                        <p>3 Hari</p>
                    </div>

                    <div className='flex items-center justify-end mt-8 font-semibold'>
                        Rp 400.000,00
                    </div>
                </div>

                <div className='flex items-center justify-end'>
                    <button className='bg-[#1B2538] px-4 py-2 text-white w-fit mt-3 rounded-lg duration-200 hover:bg-black'>
                        Bayar Sekarang
                    </button>
                </div>
            </div>
            {/* End of Tagihan */}
        </section>
    </>
  )
}

export default page