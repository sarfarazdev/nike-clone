import Link from 'next/link'
import React from 'react'
import data from '../utiliti/data'


function SpotLight() {

    console.log(data.products)

    return (
        <>
            {/* <section className=' pb-24'>
                <p className='text-2xl font-normal text-[#111] ml-4 mb-4'>In the Spotlight</p>
                <div className="carousel carousel-center  p-4 space-x-4">

                    {data?.products?.map((product) => (
                        <div className="carousel-item flex flex-col" key={product.slug}>
                            <Link href={`/product/${product.slug}`}>
                                <img src={product.image} className="lg:h-[500px] lg:w-[450px] object-cover h-[300px] w-[300px]" />
                            </Link>
                            <div className="flex flex-col mt-4">
                                <div className='flex justify-between '>
                                    <p>{.name}</p>
                                    <p>${product.price}</p>
                                </div>
                                <p className='text-slate-500'>
                                    {product.category}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            </section> */}
<section class="overflow-hidden text-gray-700 mb-12 ">
<p className='text-2xl font-normal text-[#111] lg:ml-[100px] ml-4 mb-4'>In the Spotlight</p>

  <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-24 lg:h-[800px] overflow-y-auto no-scrollbar">
    <div class="flex flex-wrap -m-1 md:-m-2">
{data?.products?.map((product)=>(
    <div class="flex flex-wrap w-1/3" key={product.slug}>
    <div class="w-full p-1 md:p-2">
    <Link href={`/product/${product.slug}`}>
      <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
        src={product.image}/>
        </Link>
    </div>
  </div>
))}
     
    </div>
  </div>
</section>
        </>
    )
}

export default SpotLight

