import React from 'react'
import Slider from '../components/Slider';
import call from '../images/call.png'
import chat from '../images/chat.png'
import live from '../images/live.png'
import Astrologers from '../components/Astrologers'
import Services from '../components/Services'
import Store from '../components/Store'
import Puja from '../components/Puja'
import '../components/Slider.css'


function HomePage() {
  const slides = [
    { url: 'https://img.freepik.com/premium-photo/zodiac-signs-horoscope-background-concept-fantasy-mystery-black_521059-7580.jpg?w=2000', title: "beach" },
    { url: "https://theastrologypodcast.com/wp-content/uploads/2017/07/tropical-zodiac-indian-astrology-1200-1200x500.jpg", title: "boat" },
    { url: "https://media.istockphoto.com/id/1417193727/photo/astrological-zodiac-signs-inside-of-horoscope-circle-astrology-knowledge-of-stars-in-the-sky.jpg?b=1&s=170667a&w=0&k=20&c=26xz3OhRSdR-pARB9ydGMaqFA5YSAIK2L3QRp88EiSI=", title: "forest" },
    { url: "https://www.astroanilvats.com/images/service-bannner.jpg", title: "city" },
    { url: "https://www.templepurohit.com/wp-content/uploads/2016/12/What-is-Hindu-Astrology-or-Jyotisham.jpg", title: "italy" },
  ];
  const containerStyles = {
    height: "300px",
    margin: "0 auto",
  };

  return (
     <div className=''>
       <div className="sliderBackground">
        <div style={containerStyles} className="lg:w-[900px]">

          <Slider slides={slides} />
          
          <div className='pl-3 pr-3 mt-10 md:mt-14 flex flex-row gap-10 justify-center '>
            <div className=' h-[6rem] text-sm md:text-lg rounded-lg bg-orange-400 w-[10rem] md:h-[5rem]'>
              <img src={call} className="h-10 flex mx-auto mt-2"/>
              <a href="" className='flex justify-center font-semibold font-Paprika text-white text-center '>Call  Astrologers</a>
            </div>
            <div className='h-[6rem] text-sm md:text-lg rounded-lg bg-orange-400 w-[12rem] md:h-[5rem] '>
              <img src={chat}  className="h-10 flex mx-auto mt-2 " />
              <a href="" className='flex justify-center font-semibold font-Paprika text-white text-center '>Chat With  Astrologers</a>
            </div>
            <div className=' h-[6rem] text-sm md:text-lg rounded-lg bg-orange-400 w-[10rem] md:h-[5rem] '>
              <img src={live} className="h-10 flex mx-auto mt-2" />
              <a href="" className='flex justify-center font-semibold font-Paprika text-white text-center '>Live  Astrologers</a>
            </div>
          </div>
        </div>
      </div>
   
      <div className='container '>
        <Services/>
        <Astrologers />
        <Store />
        <Puja/>
      </div>


    </div>
  )
}

export default HomePage