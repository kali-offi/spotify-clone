import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { playerContext } from '../context/Playercontext';

const Albumitem = ({ image, name, desc, id }) => {
    const {playWithId}=useContext(playerContext)
    return (
        // <SwiperSlide className=''>
        //     <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>

        //         <img className='rounded ' src={image} alt="" />
        //         <p className='font-bold mt-2 mb-1'>{name}</p>
        //         <p className='text-slate-200  text-sm'>{desc}</p>

        //     </div>
        // </SwiperSlide>

            <SwiperSlide className=''>
                <div onClick={()=>playWithId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>

                    <img className='rounded ' src={image} alt="" />
                    <p className='font-bold mt-2 mb-1'>{name}</p>
                    <p className='text-slate-200  text-sm'>{desc}</p>
                </div>
            </SwiperSlide>

    )
}

export default Albumitem
