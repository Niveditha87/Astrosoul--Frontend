import React from 'react'
import UsersideBar from '../UsersideBar'

const DailyHoroscope = () => {
  return (
    <>
    <div className=" dashboard parent md:h-screen md:grid md:grid-cols-6">
    <section class="sidebar md:col-span-1">
        {" "}
        <UsersideBar />
    </section>

    <div className="dashboardContainer">
    <div className=" container dashboardSummary">
        <div className='font-bold'>Daily Horoscope</div>
<hr className='  border-1 border-black border-dotted ' size={30}/>
</div>
</div>
</div>
    </>
  )
}

export default DailyHoroscope