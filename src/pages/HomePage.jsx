import React from 'react'
import { data } from '../components/mockData';
import Slider from '../components/Slider';
import Category from '../components/Categories';
import image from '../images/new.png'

import Astrologers from '../components/Astrologers'
import Services from '../components/Services'
import Store from '../components/Store'
import Puja from '../components/Puja'

function HomePage() {
  const slides = [
    { url: 'https://www.colorcombos.com/images/colors/FFA700.png', title: "beach" },
    { url: "https://astropanditji.files.wordpress.com/2018/08/cropped-header.png", title: "boat" },
    { url: "https://vibesxp.com/wp-content/uploads/2022/05/Best-Astrologer-In-Bangalore.jpg", title: "forest" },
    { url: "https://www.astroanilvats.com/images/service-bannner.jpg", title: "city" },
    { url: "https://www.clickastro.com/blog/wp-content/uploads/2021/03/blog_famous-astrologers-1-1.jpg", title: "italy" },
  ];
  const containerStyles = {
    width: "1200px",
    height: "300px",
    margin: "0 auto",

  };
  return (
    <div className=' mt-5 w-full'>
      {/* <PublicNavbar /> */}
      {/* <div style={containerStyles} className="container-fluid md:w-full"> */}
      <Slider slides={slides} />
      {/* </div> */}
      {/* <Category /> */}

      {/* <div className='banner w-full bg-orange-200'>
        <div className=' p-40 '>
          <button className=' bg-orange-600 flex mx-auto p-3 font-bold text-white border rounded-xl'>Book Now</button>
        </div>
      </div> */}
      <div>
        <Services/>
        <Astrologers />
        <Store />
        <Puja/>

      </div>


    </div>
  )
}

export default HomePage