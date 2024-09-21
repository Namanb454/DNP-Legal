import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { FaFacebookF, FaPhoneAlt } from 'react-icons/fa'
import { FaLinkedinIn, FaPinterest, FaXTwitter } from 'react-icons/fa6'
import { IoMail } from 'react-icons/io5'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    let menuRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    })
    return (
        <div>
            <header className="md:flex hidden flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200  ">
                <nav className=" md:w-full w-fit mx-auto md:flex items-center md:space-x-10 gap-3 py-0 px-4 sm:px-6 lg:px-8">
                    <div className='md:w-full w-fit mx-auto flex items-center space-x-16 gap-3 py-3 '>
                        <FaFacebookF className='hover:text-amber-500' />
                        <FaXTwitter className='hover:text-amber-500' />
                        <FaLinkedinIn className='hover:text-amber-500' />
                        <FaPinterest className='hover:text-amber-500' />
                    </div>

                    <div className='grid grid-cols-2 ml-auto w-full mx-auto text-sm'>
                        <a href='mailto:yrisdagar@gmail.com' className='flex mx-auto items-center font-semibold'>
                            <IoMail className='mx-2 text-base text-amber-500' />yrisdagar@gmail.com
                        </a>
                        <a href='tel:9971968029' className='flex items-center font-semibold mx-auto'>
                            <FaPhoneAlt className='mx-2 text-base text-amber-500' />
                            Call Us
                        </a>
                    </div>
                </nav>
            </header>


            {/* ========== END HEADER ========== */}
            {/* Nav */}
            <nav className="bg-neutral-900 flex items-center">
                <div className="max-w-[85rem] w-full mx-auto sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-x-3 py-5 px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center gap-x-3">
                        <div className="grow">
                            <span className="whitespace-nowrap text-white text-2xl font-bold">DNP Legal</span>
                        </div>
                    </div>
                    <div id="hs-nav-secondary" className="md:block hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block">
                        <div className="py-2 sm:py-0 flex flex-col sm:flex-row sm:justify-end gap-y-2 sm:gap-y-0 sm:gap-x-6">
                            <a className="text-white hover:text-amber-500 text-left hover:tracking-widest scroll-smooth hover:scroll-auto transition-all block px-3 p-2 w-fit" href="#">Home</a>
                            <a className="text-white hover:text-amber-500 text-left hover:tracking-widest scroll-smooth hover:scroll-auto transition-all block px-3 p-2 w-fit" href="#about">About Us</a>
                            <a className="text-white hover:text-amber-500 text-left hover:tracking-widest scroll-smooth hover:scroll-auto transition-all block px-3 p-2 w-fit" href="#services">Services</a>
                            <a className="text-white hover:text-amber-500 text-left hover:tracking-widest scroll-smooth hover:scroll-auto transition-all block px-3 p-2 w-fit" href="#team">Our Team</a>
                            <a className="text-white hover:text-amber-500 text-left hover:tracking-widest scroll-smooth hover:scroll-auto transition-all block px-3 p-2 w-fit" href="#cliens">Clients</a>
                            <a className="text-white border border-amber-500 hover:text-amber-500 text-left hover:tracking-widest scroll-smooth hover:scroll-auto transition-all block px-3 p-2 w-fit" href="#contact">Contact Us</a>
                        </div>
                    </div>
                </div>
                {/* End Nav */}

                <div className="px-5 items-center lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className={` inline-flex items- rounded-md text-white focus:outline-none`}>
                        {isOpen ?
                            <motion.svg
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                whileTap={{ scale: 0 }}
                                transform={{ duration: 0.5 }}
                                className="h-6 w-6 block text-white "
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </motion.svg>
                            :
                            <motion.svg
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                whileTap={{ scale: 0 }}
                                transform={{ duration: 0.5 }}
                                className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </motion.svg>}
                    </button>

                </div>

            </nav>

            <motion.div
                initial={{ x: 300 }}
                whileInView={{ x: 100 }}
                transition={{ duration: 0.3 }}
                className={isOpen ? "showMenuNav h-screen w-screen bg-neutral-900" : "hideMenuNav"}>
                <div
                    className={`${isOpen ? 'block ' : 'hidden'
                        } lg:hidden transition-all w-full px-2`}
                    id="mobile-Homeu"
                    ref={menuRef}
                >
                    <motion.div
                        variants={{
                            open: {
                                clipPath: "inset(0% 0% 0% 0% round 10px)",
                                transition: {
                                    type: "spring",
                                    bounce: 0,
                                    duration: 0.7,
                                    delayChildren: 0.3,
                                    staggerChildren: 0.05
                                }
                            },
                        }}
                        style={{ pointerEvents: isOpen ? "auto" : "none" }}
                        className="py-[5vh] pb-3 space-y-[10vh] h-screen sm:px-3 transition-all ease-in-out duration-1000" ref={menuRef}>


                        <motion.a
                            href='/'
                            onClick={() => setIsOpen(false)}
                            ref={menuRef}
                            initial={{ x: 100, opacity: 0, scale: 0 }}
                            whileInView={{ y: 0, x: 0, opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: 0.1, easi: [0.33, 1, 0.68, 1] }}
                            className="text-white hover:text-amber-500 text-left hover:tracking-widest scroll-smooth hover:scroll-auto transition-all block px-3 p-2 w-fit"
                        >
                            Home
                        </motion.a>
                        <motion.a
                            href='/'
                            onClick={() => setIsOpen(false)}
                            ref={menuRef}
                            initial={{ x: 100, opacity: 0, scale: 0 }}
                            whileInView={{ y: 0, x: 0, opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: 0.1, easi: [0.33, 1, 0.68, 1] }}
                            className="text-white hover:text-amber-500 text-left hover:tracking-widest scroll-smooth hover:scroll-auto transition-all block px-3 p-2 w-fit"
                        >
                            About Us
                        </motion.a>
                        <motion.a
                            href='/'
                            onClick={() => setIsOpen(false)}
                            ref={menuRef}
                            initial={{ x: 100, opacity: 0, scale: 0 }}
                            whileInView={{ y: 0, x: 0, opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: 0.1, easi: [0.33, 1, 0.68, 1] }}
                            className="text-white hover:text-amber-500 text-left hover:tracking-widest scroll-smooth hover:scroll-auto transition-all block px-3 p-2 w-fit"
                        >
                            Services
                        </motion.a>
                        <motion.a
                            href='/'
                            onClick={() => setIsOpen(false)}
                            ref={menuRef}
                            initial={{ x: 100, opacity: 0, scale: 0 }}
                            whileInView={{ y: 0, x: 0, opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: 0.1, easi: [0.33, 1, 0.68, 1] }}
                            className="text-white hover:text-amber-500 text-left hover:tracking-widest scroll-smooth hover:scroll-auto transition-all block px-3 p-2 w-fit"
                        >
                            Our Team
                        </motion.a>
                        <motion.a
                            href='/'
                            onClick={() => setIsOpen(false)}
                            ref={menuRef}
                            initial={{ x: 100, opacity: 0, scale: 0 }}
                            whileInView={{ y: 0, x: 0, opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: 0.1, easi: [0.33, 1, 0.68, 1] }}
                            className="text-white hover:text-amber-500 text-left hover:tracking-widest scroll-smooth hover:scroll-auto transition-all block px-3 p-2 w-fit"
                        >
                            Clients
                        </motion.a>
                        <motion.a
                            href='/'
                            onClick={() => setIsOpen(false)}
                            ref={menuRef}
                            initial={{ x: 100, opacity: 0, scale: 0 }}
                            whileInView={{ y: 0, x: 0, opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: 0.1, easi: [0.33, 1, 0.68, 1] }}
                            className="text-white hover:text-amber-500 border border-amber-500 text-left hover:tracking-widest scroll-smooth hover:scroll-auto transition-all block px-3 p-2 w-fit"
                        >
                            Contact Us
                        </motion.a>
                    </motion.div>
                    <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        // justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
                </div>
            </motion.div>

        </div>


    )
}

export default Header
