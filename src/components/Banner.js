import React from 'react'
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <div className='container'>
            {/* <h2 className='text-6xl mb-24'>Naman</h2> */}
            <div className='h-screen w-full bg-cover' style={{
                backgroundImage: 'url(justice2.jpg)'
            }}>
                <div className='w-full h-full mx-auto py-20 text-center backdrop-brightness-50 backdrop-blur-sm text-white md:space-y-10 space-y-16'>
                    <h3 className='md:text-5xl text-3xl text- font-semibold'>We Are Specialized In</h3>
                    <h2 className='text-5xl font-semibold text-amber-500'>
                        <Typewriter
                            options={{
                                strings: ['Civil', 'Criminal', 'Matrimonial', 'Income Tax', 'GST & Intellectual Property Rights'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>
                    <p className='md:w-[50%] mx-auto px-5'>Our goal is to become the foremost global law firm, providing uniform services throughout our diverse range of practices.</p>

                    <div className='lg:flex mx-auto w-fit space-x-10'>
                        <a href='#about' className='font-semibold p-3 px-10 rounded-sm bg-black'>
                            Learn More
                        </a>
                        {/* <a href='#contact' className='font-semibold p-3 px-10 rounded border text-black border-black'> */}
                        {/* Contact Us */}
                        {/* </a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
