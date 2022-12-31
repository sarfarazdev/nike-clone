import Link from 'next/link'
import React from 'react'
import data from '../utiliti/data'


function SpotLight() {

    console.log(data.products)

    return (
        <>
            <section className=' pb-24'>
                <p className='text-2xl font-normal text-[#111] ml-4 mb-4'>In the Spotlight</p>
                <div className="carousel carousel-center  p-4 space-x-4">

                    {data?.products?.map((product) => (
                        <div className="carousel-item flex flex-col" key={product.slug}>
                            <Link href={`/product/${product.slug}`}>
                                <img src={product.image} className="lg:h-[500px] lg:w-[450px] object-cover h-[300px] w-[300px]" />
                            </Link>
                            <div className="flex flex-col mt-4">
                                <div className='flex justify-between '>
                                    <p>{product.name}</p>
                                    <p>${product.price}</p>
                                </div>
                                <p className='text-slate-500'>
                                    {product.category}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            </section>

        </>
    )
}

export default SpotLight

