import React from 'react'

function LanguageModal({ visible, onclose }) {
    if (!visible) return null;
    return (
        <div className='fixed top-0 inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center '>
            <div className='block rounded-lg bg-white'>
                <div className='bg-orange-500 p-2 flex justify-evenly items-center '>
                    <h1>Select Languages You Know</h1>
                    <button onClick={onclose} className="text-2xl">x</button>
                </div>
                <div className='grid grid-cols-4 grid-rows-7 gap-8 p-3 bg-white text-white  '>
                    <div className=' border rounded-md bg-blue-400   hover:bg-orange-400 p-2'>english</div>
                    <div className=' border rounded-md bg-blue-400   hover:bg-orange-400  p-2'>english</div>
                    <div className=' border rounded-md bg-blue-400   hover:bg-orange-400  p-2'>english</div>
                    <div className=' border rounded-md bg-blue-400   hover:bg-orange-400  p-2'>english</div>
                    <div className=' border rounded-md bg-blue-400   hover:bg-orange-400  p-2'>english</div>
                    <div className=' border rounded-md bg-blue-400   hover:bg-orange-400  p-2'>english</div>
                    <div className=' border rounded-md bg-blue-400   hover:bg-orange-400  p-2'>english</div>
                    <div className=' border rounded-md bg-blue-400   hover:bg-orange-400  p-2'>english</div>
                    <div className=' border rounded-md bg-blue-400   hover:bg-orange-400  p-2'>english</div>
                    <div className=' border rounded-md bg-blue-400   hover:bg-orange-400  p-2'>english</div>
                    <div className=' border rounded-md bg-blue-400   hover:bg-orange-400  p-2'>english</div>
                    <div className=' border rounded-md bg-blue-400   hover:bg-orange-400  p-2'>english</div>
                    <div className=' border rounded-md bg-blue-400   hover:bg-orange-400  p-2'>english</div>
                    <div className=' border rounded-md bg-blue-400   hover:bg-orange-400  p-2'>english</div>
                    <div className=' border rounded-md bg-blue-400   hover:bg-orange-400  p-2'>english</div>
                    <div className=' border rounded-md bg-blue-400   hover:bg-orange-400  p-2'>english</div>
                    <div className=' border rounded-md bg-blue-400   hover:bg-orange-400  p-2'>english</div>
                    <div className=' border rounded-md bg-blue-400   hover:bg-orange-400   p-2'>english</div>
                    <div className=' border rounded-md bg-blue-400   hover:bg-orange-400  p-2'>english</div>
                    <div className=' border rounded-md bg-blue-400   hover:bg-orange-400  p-2'>english</div>
                    <div className=' border rounded-md bg-blue-400   hover:bg-orange-400  p-2'>english</div>
                    <div className=' border rounded-md bg-blue-400   hover:bg-orange-400  p-2'>english</div>
                    <div className=' border rounded-md bg-blue-400   hover:bg-orange-400  p-2'>english</div>
                    <div className=' border rounded-md bg-blue-400   hover:bg-orange-400  p-2'>english</div>
                    <div className=' border rounded-md bg-blue-400   hover:bg-orange-400  p-2'>english</div>

                </div>
                <hr />
                <button
                    className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none m-2 ease-linear transition-all duration-150"
                    type="button"
                    onClick={onclose}
                >
                    Done
                </button>
            </div>
        </div>
    )
}

export default LanguageModal