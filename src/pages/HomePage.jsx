import React from 'react'
import Home from "../components/Home";
import Slider from '../components/Slider';
import Category from '../components/Categories';
import image from '../images/new.png'
import '../components/Home.css';
import Vedic from '../components/Vedic'
import panditji from '../images/panditji.png'
import store from '../images/store.png'
import horoscope from '../images/horoscope.png'
// import StarRating from '../components/StarRating'
// import PublicNavbar from '../components/Navigation/PublicNavbar';
function HomePage() {
  const slides = [
    { url: 'https://www.colorcombos.com/images/colors/FFA700.png', title: "beach" },
    { url: "https://astropanditji.files.wordpress.com/2018/08/cropped-header.png", title: "boat" },
    { url: "https://vibesxp.com/wp-content/uploads/2022/05/Best-Astrologer-In-Bangalore.jpg", title: "forest" },
    { url: "https://www.astroanilvats.com/images/service-bannner.jpg", title: "city" },
    { url: "https://www.clickastro.com/blog/wp-content/uploads/2021/03/blog_famous-astrologers-1-1.jpg", title: "italy" },
  ];
  const containerStyles = {
    // width: "1200px",
    // height: "300px",
    // margin: "0 auto",
    
  };
  return (
    <div className='container mt-5 w-full'>
      {/* <PublicNavbar /> */}
      {/* <div style={containerStyles} className="container-fluid md:w-full"> */}
        <Slider slides={slides} />
      {/* </div> */}
      <Category />  

      <div className='banner w-full bg-orange-200'>
        <div className=' p-40 '>
          <button className=' bg-orange-600 flex mx-auto p-3 font-bold text-white border rounded-xl'>Book Now</button>
        </div>
      </div>
      <div>
        <div>
          <div className='flex justify-between'>
            <h1 className='h-10 mt-5 text-xl font-bold flex '>
              Vedic
            </h1>
       
            <h1 className='h-10 mt-5 text-xl font-bold '>
              View More
            </h1>
          </div>
        </div>
      


        <div className="  grid grid-cols-4 gap-4 justify-center  mt-5  ">

          <div
            className=' h-44 w-60  bg-white flex justify-center flex-col  m-10 border  '
          // src={banner}
          >
            <div className='flex mx-auto '>
              <img src={panditji} className="h-24 border rounded-full " />
            </div>
            <div>
              <h1 className='flex justify-center mx-auto mt-5 text-lg'>Find Panditji</h1>
            </div>


          </div>
          <div
            className=' h-36 w-60  bg-white flex justify-center flex-col m-10 '
          // src={banner}
          >
            <div className='flex mx-auto '>
              <img src={store} className="h-24 border rounded-full" />
            </div>
            <div>
              <h1 className='flex justify-center mx-auto mt-5 text-lg'>Pooja Samagthi/Store</h1>
            </div>
            {/* <div> */}
              {/* <StarRating/> */}


          </div>
          <div
            className=' h-36 w-60  bg-white flex justify-center flex-col m-10 '
          // src={banner}
          >
            <div className='flex mx-auto '>
              <img src={horoscope} className="h-24 border rounded-full" />
            </div>
            <div>
              <h1 className='flex justify-center mx-auto mt-5 text-lg'>Horoscope</h1>
            </div>


          </div>
          <div
            className=' h-36 w-60  bg-white flex justify-center flex-col m-10 '
          // src={banner}
          >
            <div className='flex mx-auto '>
              <img src={horoscope} className="h-24 border rounded-full" />
            </div>
            <div>
              <h1 className='flex justify-center mx-auto mt-5 text-lg'>Horoscope</h1>
            </div>


          </div>

        </div>

      </div>
   
  
    </div>
  )
}

export default HomePage