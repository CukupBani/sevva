import Link from 'next/link'
import React from 'react'

type cardProps = {
    sewaID: string,
    penyewa: string,
    lamaSewa: number,
    mulaiSewa: string,
    selesaiSewa: string,
    total: number,
    img: string,
    kendaraan: string,
}

const PengajuanSewaCard = ({sewaID, penyewa, lamaSewa, mulaiSewa, selesaiSewa, total, img, kendaraan}: cardProps) => {
  return (
    <div className='bg-white w-full border shadow-md rounded-lg p-6'>
        {/* Bagian atas */}
        <div className='flex gap-8'>
            <img src={img} alt='pengajuan-img' className='object-cover h-24 w-36 rounded-xl'/>

            <div className='flex justify-between w-full'>
                <div className='flex flex-col'>
                    <h3 className='font-semibold text-gray-500 text-[14px]'>Kendaraan</h3>
                    <p className='font-semibold text-[14px]'>{kendaraan}</p>
                    <p className='font-medium text-[12px] text-gray-500 mt-1'>Dari {penyewa}</p>
                    <p className='font-medium text-[12px] text-gray-500'>{lamaSewa} Hari</p>
                </div>

                <div className='flex flex-col'>
                    <h3 className='font-semibold text-gray-500 text-[14px]'>ID Sewa</h3>
                    <p className='font-semibold text-[14px]'>{sewaID}</p>
                </div>

                <div className='flex flex-col'>
                    <h3 className='font-semibold text-gray-500 text-[14px]'>Tanggal Sewa</h3>
                    <p className='font-semibold text-[14px]'>{mulaiSewa}</p>
                    <p className='font-semibold text-[14px]'>{selesaiSewa}</p>
                </div>

                <div className='flex flex-col items-center gap-1 font-semibold text-[14px]'>
                    <h3 className='text-gray-500'>Berkas</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M11.363 2c4.155 0 2.637 6 2.637 6s6-1.65 6 2.457v11.543h-16v-20h7.363zm.826-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-2.628v3.686h.907v-1.472h1.49v-.732h-1.49v-.698h1.721v-.784zm-4.9 0h-1.599v3.686h1.599c.537 0 .961-.181 1.262-.535.555-.658.587-2.034-.062-2.692-.298-.3-.712-.459-1.2-.459zm-.692.783h.496c.473 0 .802.173.915.644.064.267.077.679-.021.948-.128.351-.381.528-.754.528h-.637v-2.12zm-2.74-.783h-1.668v3.686h.907v-1.277h.761c.619 0 1.064-.277 1.224-.763.095-.291.095-.597 0-.885-.16-.484-.606-.761-1.224-.761zm-.761.732h.546c.235 0 .467.028.576.228.067.123.067.366 0 .489-.109.199-.341.227-.576.227h-.546v-.944z"/></svg>
                </div>
                
                <div className='flex flex-col gap-1'>
                    <h3 className='font-semibold text-[14px] text-gray-500'>Chat</h3>
                    <Link href='/Chat' className='flex items-center gap-1 h-fit px-3 py-1 rounded-full text-[14px] font-semibold bg-[#F7E135] duration-200 hover:bg-black hover:text-white hover:fill-white'>
                        <p>Chat</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M22 3v13h-11.643l-4.357 3.105v-3.105h-4v-13h20zm2-2h-24v16.981h4v5.019l7-5.019h13v-16.981zm-5 6h-14v-1h14v1zm0 2h-14v1h14v-1zm-6 3h-8v1h8v-1z"/></svg>
                    </Link>
                </div>
            </div>

        </div>
        {/* End of Bagian atas */}

        {/* Bagian bawah */}
        <div className='flex items-center justify-end mt-3 gap-2'>
            <div className='flex flex-col items-center font-semibold text-[14px] mr-5'>
                <h3 className='text-gray-500'>Total</h3>
                <p>{(total).toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</p>
            </div>
            
            <button className='fill-white rounded-full bg-green-500 px-5 py-1 duration-200 hover:bg-black'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.25 8.891l-1.421-1.409-6.105 6.218-3.078-2.937-1.396 1.436 4.5 4.319 7.5-7.627z"/></svg>
            </button>

            <button className='fill-white rounded-full bg-red-500 px-5 py-1 duration-200 hover:bg-black'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5 15.538l-3.592-3.548 3.546-3.587-1.416-1.403-3.545 3.589-3.588-3.543-1.405 1.405 3.593 3.552-3.547 3.592 1.405 1.405 3.555-3.596 3.591 3.55 1.403-1.416z"/></svg>
            </button>
        </div>
        {/* End of Bagaian bawah */}
    </div>
  )
}

export default PengajuanSewaCard