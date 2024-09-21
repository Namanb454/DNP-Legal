import React from 'react'
import { FaCheck } from 'react-icons/fa'

const About = () => {
    const about = [
        {
            'point': 'Member of Delhi High Court Bar Association'
        },
        {
            'point': 'Member of BNI'
        },
        {
            'point': 'Punjab & Haryana High Court Bar Association Member.'
        },
        {
            'point': 'Uphold the highest ethical standards.'
        },
        {
            'point': 'No Compromise on Quality of our Services.'
        },
        {
            'point': 'Honesty & Winning Client Trust.'
        },
    ]
    return (
        <div id='about'>
            {/* Features */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Grid */}
                <h2 className='md:text-5xl text-3xl font-semibold text-center p-10'>About Us</h2>
                <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                    <div>
                        <img className="rounded-xl" src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80" alt="about" />
                    </div>
                    {/* End Col */}
                    <div className="mt-5 sm:mt-10 lg:mt-0">
                        <div className="space-y-6 sm:space-y-8">
                            {/* Title */}
                            <div className="space-y-2 md:space-y-4">
                                <h2 className="font-bold text-3xl lg:text-4xl text-neutral-500">
                                    Who we are<span className='text-amber-500'>?</span>
                                </h2>
                                <p className="text-neutral-800 font-light">
                                    Founded in 1986 by the esteemed Late Sh. Surender Kumar Dagar, our law firm has established itself as a leading authority in civil and criminal law for over forty years. Our skilled team is renowned for its commitment and expertise, consistently representing clients in high-profile cases and navigating intricate legal issues with accuracy and ethical integrity.
                                    <br />
                                    We are proud to be recognized as one of the premier legal teams in the nation, adept at advocating for clients across various judicial levels, including District and Session Courts, the High Court, and the Supreme Court. Our extensive range of legal services encompasses civil litigation, criminal defense, contract analysis, real estate matters, and more, providing personalized legal guidance that meets the distinct needs of each client.
                                    <br />
                                    Dedicated to maintaining ethical standards, we emphasize quality and client confidence in every case we undertake. Our enduring legacy of success reflects the hard work of our founder and the unwavering commitment of our team to uphold the highest standards of legal excellence.
                                </p>
                            </div>
                            {/* End Title */}
                            {/* List */}
                            <ul className="space-y-2 sm:space-y-4">
                                {about.map((data, index) => {
                                    return (
                                        <li className="flex gap-x-3">
                                            <span className="mt-0.5 size-5 flex justify-center items-center rounded-full text-white font-bold dark:bg-amber-500">
                                                <FaCheck className='text-xs' />
                                            </span>
                                            <div className="grow">
                                                <span className="font-semibold capitalize text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                                                    {data.point}
                                                </span>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                            {/* End List */}
                        </div>
                    </div>
                    {/* End Col */}
                </div>
                {/* End Grid */}
            </div>
            {/* End Features */}
        </div>

    )
}

export default About
