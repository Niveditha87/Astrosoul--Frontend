import { useState } from "react";
import pic from '../images/new.png'

const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
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
        <div style={sliderStyles} className="container flex justify-center">
          <div className="w-[100%] mx-auto ">
            <div>
                <div onClick={goToPrevious} style={leftArrowStyles}>
                    ❰
                </div>
                <div onClick={goToNext} style={rightArrowStyles}>
                    ❱
                </div>
            </div>
            <div style={slideStylesWidthBackground}>
                <div className="text-black flex justify-between ">
                <div className='ml-10 mt-10 font-extrabold'>
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
                <img
                    className=' h-48 mb-8 mt-14 mr-96'
                    src={pic}
                />
                <div className='mb-16'>
                    <h1 className='text-3xl font-bold mt-10 '>Pandit Online</h1>
                    <div className=' bg-orange-600 mt-5 border rounded-md'>
                        <button className='flex mx-auto p-2 font-bold text-white'>Book Now</button>
                    </div>

                </div>
                {/* </div> */}

                <div className=' font-bold mt-44 mb-5 mr-5'>

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
            <div style={dotsContainerStyles} className="flex justify-center">
                
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
        </div>
    );
};

export default Slider;