import React from 'react'
import img1 from '../images/1.png'
import img2 from '../images/2.png'
import img3 from '../images/3.png'
import img4 from '../images/4.png'
import img5 from '../images/5.png'
import img6 from '../images/6.png'

const Stone = () => {
    return (
        <div className='container'>
            <h1>Gemstone</h1>
            <p>gotoastro provides all types of gemstone. It is online showcase where you can choose gemstone as per your choice and the same piece will be delivered to you. All gemstone are natural, original, lab certified and energized. The wearing method is sent along with the gemstone.</p>
            <br />
            <div className="grid grid-cols-4 p-6 ">
                <div class="max-w-sm rounded overflow-hidden shadow-lg transform transition duration-300 hover:scale-110 m-2">
                    <img src={img4} alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-center">Ruby</div>
                    </div>
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg transform transition duration-300 hover:scale-110 m-2">
                    <img src={img1} alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-center">Ruby</div>
                    </div>
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg transform transition duration-300 hover:scale-110 m-2">
                    <img src={img2} alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-center">Ruby</div>
                    </div>
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg transform transition duration-300 hover:scale-110 m-2">
                    <img src={img3} alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-center">Ruby</div>
                    </div>
                </div>
            </div>
            <br /><br />
            <div className="grid grid-cols-4 p-6 ">
                <div class="max-w-sm rounded overflow-hidden shadow-lg transform transition duration-300 hover:scale-110 m-2">
                    <img src={img6} alt="Sunset in the mountains h-10" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-center">Ruby</div>
                    </div>
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg transform transition duration-300 hover:scale-110 m-2">
                    <img src={img5} alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-center">Ruby</div>
                    </div>
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg transform transition duration-300 hover:scale-110 m-2">
                    <img src={img4} alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-center">Ruby</div>
                    </div>
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg transform transition duration-300 hover:scale-110 m-2">
                    <img src={img2} alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-center">Ruby</div>
                    </div>
                </div>
            </div>
            <br />
            <div className="grid grid-cols-4 p-6 ">
                <div class="max-w-sm rounded overflow-hidden shadow-lg transform transition duration-300 hover:scale-110 m-2">
                    <img src={img1} alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-center">Ruby</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stone