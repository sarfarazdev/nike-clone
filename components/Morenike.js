import React from 'react'

function Morenike() {
  return (
    <>
      <section className="pt-4 pb-24">
                <p className='text-2xl font-normal text-[#111] ml-4 mb-4'>New Arrivals</p>
                <div className=' w-full grid lg:grid-cols-3 md:grid-cols-2 px-3 gap-2 items-center mx-auto'>
                <div className='relative'>
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_468,c_limit/cb91797a-6054-4201-8bee-c08700c83e47/nike-just-do-it.png" className='lg:h-[500px] md:h-[500px] h-auto object-cover' alt="" />
                    <button className='absolute bottom-4 left-8 bg-white px-4 py-1.5 rounded-full text-black w-auto hover:bg-stone-400'>Shop Men's</button>
                </div>
                <div className='relative'>
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_468,c_limit/b47f5049-1b86-4642-b50c-310ce59b5940/nike-just-do-it.png" className='lg:h-[500px] md:h-[500px] h-auto object-cover' alt="" />
                    <button className='absolute bottom-4 left-8 bg-white px-4 py-1.5 rounded-full text-black w-auto hover:bg-stone-400'>Shop Women's</button>
                </div>
                <div className='relative'>
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_468,c_limit/44c84aa3-702f-49fd-80e0-a74258b9b0b6/nike-just-do-it.png" className='lg:h-[500px] md:h-[500px] h-auto object-cover' alt="" />
                    <button className='absolute bottom-4 left-8 bg-white px-4 py-1.5 rounded-full text-black w-auto hover:bg-stone-400'>Shop Kid's</button>
                </div>
                </div>
            </section>
    </>
  )
}

export default Morenike