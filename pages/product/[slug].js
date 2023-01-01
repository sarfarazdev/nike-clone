import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SpotLight from '../../components/SpotLight';
import data from '../../utiliti/data'

function ProductSlug() {
    const { query } = useRouter();
    const { slug } = query;
    const product = data.products.find((x) => x.slug === slug);
    if (!product) {
        return <div>Product Not Found </div>
    }
    return (
        <>
            <div>
                <Header/>
                <div className=' mb-12 mt-4 text-lg flex flex-col justify-evenly lg:flex-row'>
                    <div className='md:col-span-2'>
                      <img src={product.image} alt={product.name} className="" />
                    </div>
                    <div>
                        <div className='ml-5 mt-4'>
                            <ul className='space-y-5 text-base'>
                                <li>
                                    <h1 className='text-3xl font-semibold'>{product.name}</h1>
                                </li>
                                <li className=''><span className='font-semibold text-lg'>Category : </span> {product.category}</li>
                                <li>{product.rating} of {product.numReviews} reviews</li>
                                <li>Description: {product.description}</li>
                            </ul>
                        </div>
                        <div>
                            <div className='card p-5 space-y-5'>
                                <div className='mb-2 flex justify-between'>
                                    <div>Price</div>
                                    <div>${product.price}</div>
                                </div>
                                <div className='mb-2 flex justify-between'>
                                    <div>Status</div>
                                    <div>{product.countInStock > 0 ? 'In Stock' : 'Unavailable'}</div>
                                </div>
                                <div className='mb-2 flex justify-between'>
                                    <button className=' py-2 rounded-3xl px-3 text-xl hover:bg-cyan-700 text hover:text-white text-cyan-700 font-extrabold  border-2 '>Add to cart</button>
                                    <div className=' py-2 rounded-3xl px-3 text-xl hover:bg-cyan-700 text hover:text-white text-cyan-700 font-extrabold  border-2 '>
                                        <Link href={"/"}>Back to Home</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <SpotLight />
                <Footer/>
            </div>
        </>
    )
}

export default ProductSlug