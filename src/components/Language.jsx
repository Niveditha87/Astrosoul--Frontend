import React from 'react';
// import PublicNavbar from '../Navbar/PublicNavbar';
import { TbLetterA, TbLetterE, TbLetterH, TbLetterB, TbLetterT, TbLetterM, TbLetterU, TbLetterG, TbLetterK, TbLetterO } from "react-icons/tb"
const Language = () => {
    const language = [
        { name: "English", icon: TbLetterE },
        { name: "Hindi", icon: TbLetterH },
        { name: "Bangla", icon: TbLetterB },
        { name: "Telugu", icon: TbLetterT },
        { name: "Marathi", icon: TbLetterM },
        { name: "Tamil", icon: TbLetterT },
        { name: "Urdu", icon: TbLetterU },
        { name: "Gujarati", icon: TbLetterG },
        { name: "Kannada", icon: TbLetterK },
        { name: "Malayalam", icon: TbLetterM },
        { name: "Oida", icon: TbLetterO },
        { name: "Assamese", icon: TbLetterA }


    ]
    return (
        <>
            {/* <PublicNavbar /> */}
            <section className="min-h-screen bg-bg_light_primary">
                <div className='md:container px-5 py-14'>
                    <h2 className='md:text-3xl text-2xl'>Pick Your Language</h2>
                    <h4 className='text-gray'>fghj</h4>
                    <br />
                    <div>
                        {
                            language.map((lang, i) => (
                                <div key={i}>
                                    <div>
                                        <img src={lang.icon} alt="" />
                                    </div>
                                    <div>
                                        <h6>{lang.name}</h6>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default Language;