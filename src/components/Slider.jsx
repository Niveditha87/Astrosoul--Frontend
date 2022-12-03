import { useState } from "react";
import pic from '../images/new.png'
import { Link } from 'react-router-dom';


const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "20px",
    backgroundSize: "cover",
    backgroundPosition: "center",
};

const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#ff0000",
    zIndex: 1,
    cursor: "pointer",
};

const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#ff0000",
    zIndex: 1,
    cursor: "pointer",
};

const sliderStyles = {
    position: "relative",
    // position: "absolute",
    height: "100%",
};

const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
};

const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
};

const Slider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${slides[currentIndex].url})`,
    };

    return (
        <div style={sliderStyles} className=" container-fluid   pt-10 md:w-[40rem] lg:w-[56rem] md:ml-14 lg:ml-0 ">
                <div className="  w-[100%] mx-auto  ">
                
                    <div onClick={goToPrevious} style={leftArrowStyles}>
                        ❰
                    </div>
                    {/* <div className=""> */}
                        <div style={slideStylesWidthBackground} className="">
                            <div className="text-white flex w-full flex-row md:flex-row md:justify-between ">
                                <div className='ml-10  font-extrabold'>
                                    <div>
                                        <a href="" >e-Pooja</a>
                                    </div>
                                    <div>
                                        <a href="" >Marriage Ceremony</a>
                                    </div>
                                    <div>
                                        <a href="" >Sanskar Vidhi</a>
                                    </div>
                                </div>
                                       {/* <img
                                className=' h-48 mb-8 mt-14 mr-96'
                                src={pic}
                                       /> */}
                                <div className='mb-16'>
                                  
                                    <h1 className='text-3xl font-bold mt-10 '>Pandit Online</h1>
                                  {/* <div className=' bg-orange-600 mt-5 border rounded-md'> */}
                                  <Link to='/bookPanditji'>
                                    <button className=' bg-orange-600 flex mx-auto p-2 font-bold text-white w-200'>Book Now</button>
                                    {/* </div> */}
                                  </Link>

                                </div>


                                <div className=' font-bold mt-5 md:mt-44 mb-5 mr-5'>

                                    <div>
                                        <a href="" >Kath</a>
                                    </div>
                                    <div>
                                        <a href="" >Festival Pooja</a>
                                    </div>
                                    <div>
                                        <a href="" >Diwali Aarti</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                    <div onClick={goToNext} style={rightArrowStyles}>
                        ❱
                    </div>
               
                </div>

            <div style={dotsContainerStyles} className="flex w-full">

                {slides.map((slide, slideIndex) => (
                    <div
                        style={dotStyle}
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                    >
                        ●
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;