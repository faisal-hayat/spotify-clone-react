import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import React from 'react';
import { FreeMode } from 'swiper';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector, useDispatch } from 'react-redux';
import PlayPause from "./PlayPause";
import { playPause, setActivfeSong } from "../redux/features/playerSlice";
import { useGetTopChartQuery } from "../redux/services/shzamCore";


function TopPlay() {
  const dispatch = useDispatch();
  const [activeSong, isPlaying] = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartQuery();
  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollIntoView({behaviour: 'smooth'})
  })
  const topPlays = data?.slice(0, 5);
  const handlePauseClick = () => {

    dispatch(playPause(false));
  }

  const handlePlayClick = () => {

    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  }

  function TopChartCard({song, i}){
    return(
      <div className='w-full flex flex-row items-center hover:bg-[#4c426e] py-2p-4 rounded-lg cursor-pointer mb-2'>
        {song.title}
      </div>
    )
  }

  return (
    <div ref={divRef} className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col " >
      <div className='w-full flex flex-col'>
        <div className='flex flex-row justify-between items-center'>
          <h2 className='text-white font-bold text-2xl'>
            Top Charts
          </h2>
          <Link to="/top-charts">
            <p className='text-gray-300 text-base cursor-pointer'>
              See More
            </p>
          </Link>
        </div>
        <div className='mt-4 flex flex-col gap-1'>
          {topPlays?.map((song, i) => (
            <TopChartCard song={song} i={i} key={song.key} />
          ))}
        </div>
      </div>
      <div className='w-full flex flex-col mt-8'>
        <div className='flex flex-row justify-between items-center'>
            <h2 className='text-white font-bold text-2xl'>
              Top Artists
            </h2>
            <Link to="/top-artists">
              <p className='text-gray-300 text-base cursor-pointer'>
                See More
              </p>
            </Link>
        </div>
        <Swiper slidePerView="auto" spaceBetween={15} freeMode centeredSlides centeredSlidesBounds modules={[FreeMode]} className="mt-4" >
          {topPlays?.map()}
        </Swiper>
      </div>
    </div>
  )
}

export default TopPlay;