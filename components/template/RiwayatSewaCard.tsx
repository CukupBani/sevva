import Link from 'next/link'
import React from 'react'

type cardProps = {
    sewaID: string;
    img: string;
    kendaraan: string;
    tanggalPengajuan: string;
    tanggalPengembalian: string;
    penyewa: string;
    lamaSewa: number
}

const RiwayatSewaCard = ({sewaID, kendaraan, img, tanggalPengajuan, tanggalPengembalian, penyewa, lamaSewa}: cardProps) => {
  return (
    <div className='bg-white w-full border shadow-md rounded-lg p-6'>
        {/* Bagian atas */}
        <div className='flex gap-8'>
            <img src={img} alt='pengajuan-img' className='object-cover h-24 w-36 rounded-xl'/>

            <div className='flex flex-col'>
                <h3 className='font-semibold text-gray-500 text-[12px]'>Kendaraan</h3>
                <p className='font-semibold text-[14px]'>{kendaraan}</p>
                <p className='font-medium text-[12px] text-gray-500 mt-1'>Dari {penyewa}</p>
                <p className='font-medium text-[12px] text-gray-500'>{lamaSewa} Hari</p>
            </div>

            <div className='flex flex-col'>
                <h3 className='font-semibold text-gray-500 text-[12px]'>ID Sewa</h3>
                <p className='font-semibold text-[14px]'>{sewaID}</p>
            </div>

            <div className='flex flex-col'>
                <h3 className='font-semibold text-gray-500 text-[12px]'>Tanggal Pengajuan</h3>
                <p className='font-semibold text-[14px]'>{tanggalPengajuan}</p>
            </div>

            <div className='flex flex-col'>
                <h3 className='font-semibold text-gray-500 text-[12px]'>Tanggal Pengembalian</h3>
                <p className='font-semibold text-[14px]'>{tanggalPengembalian}</p>
            </div>

            <div className='flex flex-col items-center gap-1 font-semibold text-[12px]'>
                <h3 className='text-gray-500'>Detail</h3>
                <Link href='/' className='duration-200 hover:fill-[#f7e135]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M11.363 2c4.155 0 2.637 6 2.637 6s6-1.65 6 2.457v11.543h-16v-20h7.363zm.826-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-2.628v3.686h.907v-1.472h1.49v-.732h-1.49v-.698h1.721v-.784zm-4.9 0h-1.599v3.686h1.599c.537 0 .961-.181 1.262-.535.555-.658.587-2.034-.062-2.692-.298-.3-.712-.459-1.2-.459zm-.692.783h.496c.473 0 .802.173.915.644.064.267.077.679-.021.948-.128.351-.381.528-.754.528h-.637v-2.12zm-2.74-.783h-1.668v3.686h.907v-1.277h.761c.619 0 1.064-.277 1.224-.763.095-.291.095-.597 0-.885-.16-.484-.606-.761-1.224-.761zm-.761.732h.546c.235 0 .467.028.576.228.067.123.067.366 0 .489-.109.199-.341.227-.576.227h-.546v-.944z"/></svg>
                </Link>
            </div>

        </div>
        {/* End of Bagian atas */}
    </div>
  )
}

export default RiwayatSewaCard