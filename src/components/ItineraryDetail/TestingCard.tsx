
import Image from 'next/image'
import React, { useRef, useEffect } from 'react';
import "../../app/globals.css"
import { IoIosArrowForward } from "react-icons/io";

const TestingCard = () => {
    const carouselRef = useRef(null);

    const scrollNext = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: carouselRef.current.clientWidth, behavior: 'smooth' });
        }
    };

    const scrollPrev = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -carouselRef.current.clientWidth, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                // Enable mouse scroll for small devices
                carouselRef.current.style.overflowX = 'scroll';
            } else {
                // Disable mouse scroll for medium and larger devices
                carouselRef.current.style.overflowX = 'hidden';
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initialize on mount

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="carousel-container relative container-wrapper">
            <div className="carousel gap-5 " ref={carouselRef}>
                {/* start is here code  */}
                <div className="relative flex-shrink-0 w-72 md:w-80  flex-col rounded-md bg-white bg-clip-border text-gray-700 shadow-md border">
                    <div
                        className="relative mx-4 mt-4 overflow-hidden text-white rounded-md bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                        <Image className=' h-40 w-full object-cover' src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                            alt="ui/ux review check" />
                        <div
                            className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
                        </div>

                    </div>
                    <div className="px-6 py-3">
                        <div className="flex items-center justify-between mb-1 md:mb-3">
                            <h5 className="block text-md md:text-lg font-semibold  leading-snug ">
                                Wooden House, Florida
                            </h5>
                            <p
                                className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="-mt-0.5 h-5 w-5 text-primary">
                                    <path fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"></path>
                                </svg>
                                5.0
                            </p>
                        </div>
                        <div className='line-clamp-2'>
                            <p className="block font-sans text-para text-gray-700">
                                Enter a freshly updated and thoughtfully furnished peaceful home
                                surrounded by ancient trees, stone walls, and open meadows.
                            </p>
                        </div>
                        <div className="flex justify-between mt-3 md:mt-5">
                            <div>

                                <div className="hidden md:flex">
                                    <div className="z-30">
                                        <p
                                            className="rounded-full bg-white w-[30px] h-[30px] text-center border-2 border-x-primary">
                                            ₹
                                        </p>
                                    </div>
                                    <div className="bg-indigo-200 p-1 px-3 mx-[-10px] rounded-sm">
                                        <p className="text-indigo-800 items-center mt-1 flex text-[10px] font-semibold ">Quick Quote</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-sm leading-5 text-green-700 font-bold">SUPER DEAL PRICE</p>
                                <p className="text-xxs leading-5">Starts From <span className="text-md font-semibold ">₹
                                    3,50,000</span></p>

                                <p className="text-sm leading-5 font-medium underline text-blue">from ₹ 19,423/months
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 pt-1 pb-3 mb-1">
                        <button className="text-white bg-primary w-full py-2 rounded-md  text-base " type="button">
                            View details
                        </button>
                    </div>
                </div>
                <div className="relative flex-shrink-0 w-72 md:w-80  flex-col rounded-md bg-white bg-clip-border text-gray-700 shadow-md border">
                    <div
                        className="relative mx-4 mt-4 overflow-hidden text-white rounded-md bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                        <Image className=' h-40 w-full object-cover' src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                            alt="ui/ux review check" />
                        <div
                            className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
                        </div>

                    </div>
                    <div className="px-6 py-3">
                        <div className="flex items-center justify-between mb-1 md:mb-3">
                            <h5 className="block  text-md md:text-lg  font-semibold  leading-snug ">
                                Wooden House, Florida
                            </h5>
                            <p
                                className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="-mt-0.5 h-5 w-5 text-primary">
                                    <path fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"></path>
                                </svg>
                                5.0
                            </p>
                        </div>
                        <div className='line-clamp-2'>
                            <p className="block font-sans text-para text-gray-700">
                                Enter a freshly updated and thoughtfully furnished peaceful home
                                surrounded by ancient trees, stone walls, and open meadows.
                            </p>
                        </div>
                        <div className="flex justify-between mt-3 md:mt-5">
                            <div>

                                <div className="hidden md:flex">
                                    <div className="z-30">
                                        <p
                                            className="rounded-full bg-white w-[30px] h-[30px] text-center border-2 border-x-primary">
                                            ₹
                                        </p>
                                    </div>
                                    <div className="bg-indigo-200 p-1 px-3 mx-[-10px] rounded-sm">
                                        <p className="text-indigo-800 items-center mt-1 flex text-[10px] font-semibold ">Quick Quote</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-sm leading-5 text-green-700 font-bold">SUPER DEAL PRICE</p>
                                <p className="text-xxs leading-5">Starts From <span className="text-md font-semibold ">₹
                                    3,50,000</span></p>

                                <p className="text-sm leading-5 font-medium underline text-blue">from ₹ 19,423/months
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 pt-1 pb-3 mb-1">
                        <button className="text-white bg-primary w-full py-2 rounded-md  text-base " type="button">
                            View details
                        </button>
                    </div>
                </div>
                <div className="relative flex-shrink-0 w-72 md:w-80  flex-col rounded-md bg-white bg-clip-border text-gray-700 shadow-md border">
                    <div
                        className="relative mx-4 mt-4 overflow-hidden text-white rounded-md bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                        <Image className=' h-40 w-full object-cover' src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                            alt="ui/ux review check" />
                        <div
                            className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
                        </div>

                    </div>
                    <div className="px-6 py-3">
                        <div className="flex items-center justify-between mb-1 md:mb-3">
                            <h5 className="block  text-md md:text-lg  font-semibold  leading-snug ">
                                Wooden House, Florida
                            </h5>
                            <p
                                className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="-mt-0.5 h-5 w-5 text-primary">
                                    <path fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"></path>
                                </svg>
                                5.0
                            </p>
                        </div>
                        <div className='line-clamp-2'>
                            <p className="block font-sans text-para text-gray-700">
                                Enter a freshly updated and thoughtfully furnished peaceful home
                                surrounded by ancient trees, stone walls, and open meadows.
                            </p>
                        </div>
                        <div className="flex justify-between mt-3 md:mt-5">
                            <div>

                                <div className="hidden md:flex">
                                    <div className="z-30">
                                        <p
                                            className="rounded-full bg-white w-[30px] h-[30px] text-center border-2 border-x-primary">
                                            ₹
                                        </p>
                                    </div>
                                    <div className="bg-indigo-200 p-1 px-3 mx-[-10px] rounded-sm">
                                        <p className="text-indigo-800 items-center mt-1 flex text-[10px] font-semibold ">Quick Quote</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-sm leading-5 text-green-700 font-bold">SUPER DEAL PRICE</p>
                                <p className="text-xxs leading-5">Starts From <span className="text-md font-semibold ">₹
                                    3,50,000</span></p>

                                <p className="text-sm leading-5 font-medium underline text-blue">from ₹ 19,423/months
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 pt-1 pb-3 mb-1">
                        <button className="text-white bg-primary w-full py-2 rounded-md  text-base " type="button">
                            View details
                        </button>
                    </div>
                </div>
                <div className="relative flex-shrink-0 w-72 md:w-80  flex-col rounded-md bg-white bg-clip-border text-gray-700 shadow-md border">
                    <div
                        className="relative mx-4 mt-4 overflow-hidden text-white rounded-md bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                        <Image className=' h-40 w-full object-cover' src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                            alt="ui/ux review check" />
                        <div
                            className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
                        </div>

                    </div>
                    <div className="px-6 py-3">
                        <div className="flex items-center justify-between mb-1 md:mb-3">
                            <h5 className="block text-md md:text-lg  font-semibold  leading-snug ">
                                Wooden House, Florida
                            </h5>
                            <p
                                className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="-mt-0.5 h-5 w-5 text-primary">
                                    <path fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"></path>
                                </svg>
                                5.0
                            </p>
                        </div>
                        <div className='line-clamp-2'>
                            <p className="block font-sans text-para text-gray-700">
                                Enter a freshly updated and thoughtfully furnished peaceful home
                                surrounded by ancient trees, stone walls, and open meadows.
                            </p>
                        </div>
                        <div className="flex justify-between mt-3 md:mt-5">
                            <div>

                                <div className="hidden md:flex">
                                    <div className="z-30">
                                        <p
                                            className="rounded-full bg-white w-[30px] h-[30px] text-center border-2 border-x-primary">
                                            ₹
                                        </p>
                                    </div>
                                    <div className="bg-indigo-200 p-1 px-3 mx-[-10px] rounded-sm">
                                        <p className="text-indigo-800 items-center mt-1 flex text-[10px] font-semibold ">Quick Quote</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-sm leading-5 text-green-700 font-bold">SUPER DEAL PRICE</p>
                                <p className="text-xxs leading-5">Starts From <span className="text-md font-semibold ">₹
                                    3,50,000</span></p>

                                <p className="text-sm leading-5 font-medium underline text-blue">from ₹ 19,423/months
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 pt-1 pb-3 mb-1">
                        <button className="text-white bg-primary w-full py-2 rounded-md  text-base " type="button">
                            View details
                        </button>
                    </div>
                </div>
                <div className="relative flex-shrink-0 w-72 md:w-80  flex-col rounded-md bg-white bg-clip-border text-gray-700 shadow-md border">
                    <div
                        className="relative mx-4 mt-4 overflow-hidden text-white rounded-md bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                        <Image className=' h-40 w-full object-cover' src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                            alt="ui/ux review check" />
                        <div
                            className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
                        </div>

                    </div>
                    <div className="px-6 py-3">
                        <div className="flex items-center gap-[2px] justify-between mb-1 md:mb-3">
                            <h5 className="block  text-md md:text-lg  font-semibold  leading-snug ">
                                Wooden House, Florida
                            </h5>
                            <p
                                className="flex items-center  gap-1 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="-mt-0.5 h-5 w-5 text-primary">
                                    <path fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"></path>
                                </svg>
                                5.0
                            </p>
                        </div>
                        <div className='line-clamp-2'>
                            <p className="block font-sans text-para text-gray-700">
                                Enter a freshly updated and thoughtfully furnished peaceful home
                                surrounded by ancient trees, stone walls, and open meadows.
                            </p>
                        </div>
                        <div className="flex justify-between mt-3 md:mt-5">
                            <div>

                                <div className="hidden md:flex">
                                    <div className="z-30">
                                        <p
                                            className="rounded-full bg-white w-[30px] h-[30px] text-center border-2 border-x-primary">
                                            ₹
                                        </p>
                                    </div>
                                    <div className="bg-indigo-200 p-1 px-3 mx-[-10px] rounded-sm">
                                        <p className="text-indigo-800 items-center mt-1 flex text-[10px] font-semibold ">Quick Quote</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-sm leading-5 text-green-700 font-bold">SUPER DEAL PRICE</p>
                                <p className="text-xxs leading-5">Starts From <span className="text-md font-semibold ">₹
                                    3,50,000</span></p>

                                <p className="text-sm leading-5 font-medium underline text-blue">from ₹ 19,423/months
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 pt-1 pb-3 mb-1">
                        <button className="text-white bg-primary w-full py-2 rounded-md  text-base " type="button">
                            View details
                        </button>
                    </div>
                </div>
                {/* end is here code */}

            </div>
            <div className=" hidden md:block absolute top-2/4 -translate-y-[60px] justify-between w-full">
                <div className=' justify-between flex pl-2 '>

                    <button onClick={scrollPrev} className="rounded-full bg-black/50 hover:bg-black p-2 text-white rotate-180"><IoIosArrowForward size={20} /></button>
                    <button onClick={scrollNext} className="rounded-full bg-black/50 hover:bg-black p-2 text-white"><IoIosArrowForward size={20} /></button>
                </div>
            </div>
            <div className=" md:hidden bg-gradient-to-l from-[#fafafa] opacity-100 w-10 h-full -right-[1px] absolute z-30  top-0"></div>
        </div>
    );
}

export default TestingCard;
