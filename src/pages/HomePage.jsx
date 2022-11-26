import React from 'react'
import Home from "../components/Home";
import Slider from '../components/Slider';
import Category from '../components/Categories';
import image from '../images/new.png'
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
      <div style={containerStyles} className="md:w-full">
        <Slider slides={slides} />
      </div>
      <Category />  
    </div>
  )
}

export default HomePage