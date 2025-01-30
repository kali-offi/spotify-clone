import React, { useContext } from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import Albumitem from './Albumitem'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { playerContext } from '../context/Playercontext';

const Displayhome = () => {
  const navigate=useNavigate()
  const {playWithId}=useContext(playerContext)
  return (
    <div>
      <Navbar />
      {/* <div className="mb-4">
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className="flex overflow-auto">
        {albumsData.map((item,index)=>(
          <Albumitem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>
        ))}
        </div>
      </div> */}
      <div className="mb-4">
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        < Swiper
          autoplay={true}
          slidesPerView={4}
          spaceBetween={8}
          fadeEffect={true}
          grabCursor={true}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            520: {
              slidesPerView: 3,
            },
            950: {
              slidesPerView: 5,
            },
            1200: {
              slidesPerView: 5,
            },
            1400: {
              slidesPerView: 5,
            },
          }}
          modules={[Pagination, EffectCoverflow, Navigation]}
          className="mySwiper"
        >
          {albumsData.map((item) => (
               <SwiperSlide className=''>
                <div onClick={()=>navigate(`/album/${item.id}`)} className=' p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>

                  <img className='rounded ' src={item.image} alt="" />
                  <p className='font-bold mt-2 mb-1'>{item.name}</p>
                  <p className='text-slate-200  text-sm'>{item.desc}</p>
                </div>
              </SwiperSlide> 
          ))} 
        </Swiper >
      </div>
      <div className="mb-4">
        <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
        < Swiper
          autoplay={true}
          slidesPerView={4}
          spaceBetween={8}
          fadeEffect={true}
          grabCursor={true}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            520: {
              slidesPerView: 3,
            },
            950: {
              slidesPerView: 5,
            },
            1200: {
              slidesPerView: 5,
            },
            1400: {
              slidesPerView: 5,
            },
          }}
          modules={[Pagination, EffectCoverflow, Navigation]}
          className="mySwiper"
        >
          {songsData.map((item) => (
               <SwiperSlide className=''>
                <div onClick={()=>playWithId(item.id)}  className=' p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>

                  <img className='rounded ' src={item.image} alt="" />
                  <p className='font-bold mt-2 mb-1'>{item.name}</p>
                  <p className='text-slate-200  text-sm'>{item.desc}</p>
                </div>
              </SwiperSlide> 
          ))} 
        </Swiper >
      </div>
    </div>
  )
}

export default Displayhome
