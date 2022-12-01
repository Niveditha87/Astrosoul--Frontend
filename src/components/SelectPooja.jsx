import React from 'react'
import { MdArrowBackIosNew } from "react-icons/md"
import kalasa from "../images/kalasa.jpg"
import satya from "../images/satya.jpg"
import kedara from "../images/kedara.jpg"
import namakarana1 from "../images/namakarana1.jpg"
import ganesha2 from "../images/ganesha2.jpg"
import durga1 from "../images/durga1.png"
import office from "../images/office.PNG"
import nischitaram from "../images/nischitaram.jpg"
import homa from "../images/homa.jpg"
import kuja from "../images/kuja.PNG"
import abdikam from "../images/abdikam.PNG"
import more from "../images/more.PNG"

function SelectPooja() {
    return (
        <>
            <div className=''>

                <div className="text-center flex items-center gap-96 p-3 bg-red-600 rounded-b-lg ">
                    <MdArrowBackIosNew className="text-center ml-10" size={25} color={"white"} />
                    <div className="text-center text-white text-2xl font-bold ml-20">Select Pooja</div>
                </div>

                <div class="grid grid-cols-4  gap-9 mt-20 mx-40">
                    <div>
                        <img src={kalasa} alt='no' height={100} width={100} />
                        <h3>Gruhapravesham</h3>
                    </div>
                    <div className=''>
                        <img src={satya} alt='no' height={100} width={100} className="border rounded-full" />
                        <h3>Satyanarayana <br /> vratham</h3>
                    </div>
                    <div>
                        <img src={kedara} alt='no' height={100} width={100} className="border rounded-full mb-3" />
                        <h3>Kedareswara <br /> Nomu</h3>
                    </div>
                    <div>
                        <img src={namakarana1} alt='no' height={100} width={100} className="border rounded-full" />
                        <h3>barasala <br /> Namakaranam</h3>
                    </div>
                    <div>
                        <img src={ganesha2} alt='no' height={100} width={100} className="border rounded-full " />
                        <h3>Ganesha pooja</h3>
                    </div>
                    <div>
                        <img src={office} alt='no' height={100} width={100} className="border rounded-full" />
                        <h3>Office/ opening<br />pooja</h3></div>
                    <div>
                        <img src={durga1} alt='no' height={100} width={100} className="border rounded-full" />
                        <h3>Durga pooja</h3>
                    </div>
                    <div>
                        <img src={nischitaram} alt='no' height={100} width={100} className="border rounded-full" />
                        <h3>Nischitartamu</h3>
                    </div>
                    <div>
                        <img src={homa} alt='no' height={100} width={100} className="border rounded-full" />
                        <h3>Chandi Homam</h3>
                    </div>
                    <div>
                        <img src={abdikam} alt='no' height={100} width={100} className="border rounded-full" />
                        <h3>Abdikam</h3>
                    </div>
                    <div>
                        <img src={kuja} alt='no' height={100} width={100} className="border rounded-full" />
                        <h3>Kuja</h3>
                    </div>
                    <div>
                        <img src={more} alt='no' height={100} width={100} className="border rounded-full" />
                        <h3>More pooja</h3>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SelectPooja