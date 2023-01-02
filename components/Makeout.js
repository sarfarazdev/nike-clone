import React from 'react'

function Makeout() {
  return (
    <>
       <section className="text-gray-600 body-font bg-white">
       <p className='text-2xl font-normal text-[#111] ml-4 mb-4'>Don't Miss</p>
              <div className='m-3'>
              <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1426,c_limit/c8400ef8-76bd-4c9b-9f66-b1af3ae7ba78/nike-just-do-it.png" alt="" className="object-cover " />
                </div> 
                <div className='text-center space-y-6 w-3/4 mx-auto items-center flex flex-col bg-white py-16'>
                    <p className='text-6xl font-black font-sans text-[#111]'>Make The Cut</p>
                    <span className='text-[#111]'>Cut with quickness on the court like Detroit Pistons Point Guard Cade Cunningham. Designed with advanced traction, dynamic responsiveness, and on-court comfort, the Air Zoom G.T. Cut 2 elevates his style of play.</span>
                    <button className='bg-[#111] px-4 py-1.5 rounded-full text-white w-16 hover:bg-slate-500'>Spon</button>
                </div>

            </section>
    </>
  )
}

export default Makeout