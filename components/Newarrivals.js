import React from 'react'

function Newarrivals() {
    return (
        <>
            <section className="pt-12 pb-24">
                <p className='text-2xl font-normal text-[#111] ml-4 mb-4'>New Arrivals</p>
                <div className=' w-full grid lg:grid-cols-3 md:grid-cols-2 px-3 gap-2 items-center mx-auto'>
                <div className='relative'>
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_700,c_limit/ab68fd91-5995-4c1d-9810-987e4603b8df/nike-just-do-it.png" className='h-[700px] object-cover' alt="" />
                    <button className='absolute bottom-4 left-8 bg-[#111] px-4 py-1.5 rounded-full text-white w-auto hover:bg-stone-600'>Shop Men's</button>
                </div>
                <div className='relative'>
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_700,c_limit/7b87ceab-592a-483b-8ebd-f70abdad0765/nike-just-do-it.png" className='h-[700px] object-cover' alt="" />
                    <button className='absolute bottom-4 left-8 bg-[#111] px-4 py-1.5 rounded-full text-white w-auto hover:bg-stone-600'>Shop Women's</button>
                </div>
                <div className='relative'>
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_700,c_limit/b91f36d2-6015-4267-856e-8d7d74f349ba/nike-just-do-it.png" className='h-[700px] object-cover' alt="" />
                    <button className='absolute bottom-4 left-8 bg-[#111] px-4 py-1.5 rounded-full text-white w-auto hover:bg-stone-600'>Shop Kid's</button>
                </div>
                </div>
            </section>
        </>
    )
}

export default Newarrivals


























