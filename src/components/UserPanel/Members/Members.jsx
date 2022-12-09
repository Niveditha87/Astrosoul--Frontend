import React from 'react'
import UsersideBar from '../UsersideBar'

const Members = () => {
  return (
    <>
    <div className=" dashboard parent md:h-screen md:grid md:grid-cols-6">
    <section class="sidebar md:col-span-1">
        {" "}
        <UsersideBar />
    </section>

    <div className="dashboardContainer">
    <div className=" container dashboardSummary flex justify-between items-center">
        <div className='font-bold'>Members</div>
        <div className=''><button className='border bg-orange-400 rounded-md p-1'>+Add another Members</button></div>
</div>
<hr className='  border-1 border-black border-dotted ' size={30}/>
<div className=' flex justify-center'><button className='border shadow-md p-2 m-5 w-3/4'>No Members Available</button></div>
<hr />
</div>
</div>
    </>
  )
}

export default Members