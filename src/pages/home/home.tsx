import "../../app/globals.css";
import Card1 from "@/components/Home/Cards/Card1";
import Card2 from "@/components/Home/Cards/Card2";
import Card3 from "@/components/Home/Cards/Card3";
import HeroSection from "@/components/Home/HeroSection";
import HorizontalCard from "@/components/Home/Cards/HorizontalCard";
import Card4 from "@/components/Home/Cards/Card4";
import ReviewsCard from "@/components/ReviewsCard";
import Footer from "@/components/Footer";
import Cardwork from "@/components/Home/Cards/cardwork";
import ArrowSection from "@/components/Home/Cards/ArrowSection";
import AdminReview from "@/components/admin/AdminReview";
import Tostify from "@/components/Toaster/Tostify";
import Image from 'next/image'
// import VideoBackground from '../../../public/video/'
// import VideoBackground from '../../../public/assets/video/travel.mp4';

//  icons
// import { CiStar } from "react-icons/ci";
// import { FaHotel } from "react-icons/fa6";
// import { FaIdeal } from "react-icons/fa";
// import { MdCall } from "react-icons/md";
// import { FaHandPaper } from "react-icons/fa";
// import { MdOutlineAddHomeWork } from "react-icons/md";
// import { FcCustomerSupport } from "react-icons/fc";
//import goa from '../../../public/assests/goa.jpg'


export default function home() {
    return (
        <>

            {/* <HeroSection /> */}
            <Tostify/>
            <AdminReview/>


            {/*  home page skeleton   start* flex flex-col-reverse */}

            <div className=" mt-9 container-wrapper  bg-slate-200  shadow-sm rounded-lg p-5 md:h-[400px] h-[510px] w-full mx-auto">
                <div className="animate-pulse  space-y-4 md:space-x-4">
                    <div className=" grid-flow-col    md:grid md:grid-cols-2 rounded  bg-slate-200 h-56 w-full">
                        <div className=" mt-16  h-40 ml-9  w-48 grid grid-cols-3 ">
                            <div className="  h-2 md:w-72 w-60 mt-3  bg-slate-100 rounded col-span-3"></div>
                            <div className=" h-2 md:w-52 w-56   bg-slate-100 rounded col-span-2"></div>
                            <div className=" h-2 md:w-48 w-48   bg-slate-100 rounded col-span-2"></div>
                            <div className=" h-2 w-48   bg-slate-100 rounded col-span-2"></div>
                            <div className=" h-2 w-48   bg-slate-100 rounded col-span-2"></div>
                            <div className=" h-10  w-32  mt-7  bg-slate-100 rounded-[17px] col-span-2"></div>
                        </div>
                        <div className="">
                            <div className=" md:h-80  h-56 w-full py-10 mt-7  bg-slate-100 rounded-[17px] col-span-2"></div>
                        </div>

                    </div>

                </div>
            </div>
            <br />
            <div className="  container-wrapper mt-96 bg-slate-200  shadow-sm rounded-lg p-5 h-full w-full mx-auto" >

                <div className=" grid md:grid grid-cols-2 gap-4   lg:grid-cols-4">
                    <div className=" md:h-60 h-40 md:w-60 w-36  bg-slate-100 rounded-[17px] "></div>
                    <div className="  md:h-60 h-40 md:w-60 w-36  bg-slate-100 rounded-[17px] "></div>
                    <div className=" md:h-60 h-40 md:w-60 w-36   bg-slate-100 rounded-[17px] "></div>
                    <div className=" md:h-60 h-40 md:w-60 w-36   bg-slate-100 rounded-[17px] "></div>
                </div>

            </div>
            <br />
            <div className=" mt-9 container-wrapper  bg-slate-200  shadow-sm rounded-lg p-5 md:h-[400px] h-[510px] w-full mx-auto">
                <div className="animate-pulse  space-y-4 md:space-x-4">
                    <div className=" grid-flow-col md:grid md:grid-cols-2 rounded  bg-slate-200 h-56 w-full">

                        <div className=" mt-16  h-40 ml-9  w-48 grid grid-cols-3 ">

                            <div className="  h-2   md:w-72 w-60  mt-3  bg-slate-100 rounded col-span-3"></div>
                            <div className=" h-2 w-52   bg-slate-100 rounded col-span-2"></div>
                            <div className=" h-2 w-48   bg-slate-100 rounded col-span-2"></div>
                            <div className=" h-2 w-48   bg-slate-100 rounded col-span-2"></div>
                            <div className=" h-2 w-48   bg-slate-100 rounded col-span-2"></div>

                            <div className=" h-10  w-32  mt-7  bg-slate-100 rounded-[17px] col-span-2"></div>

                        </div>
                        <div>
                            <div className=" md:h-80  h-56 w-full py-10 mt-7  bg-slate-100 rounded-[17px] col-span-2"></div>
                        </div>
                    </div>

                </div>
            </div>

            {/* home page skeletn done */}


            <div className="container-wrapper  md:py-16 py-5">
                <div className=" md:grid flex md:flex-col flex-col-reverse md:grid-cols-2 w-full md:gap-5  text-wrap md:items-center ">

                    <div className=" md:shrink-0">
                        <p className=" text-amber-600   font-semibold mt-2">Holi Celebration Packages for 2024</p>
                        <h1 className=" md:text-[25px] text-xl  font-medium">Holi Tour</h1>
                        <h1 className="md:text-[16px] text-para line-clamp-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, eligendi sed hic provident enim, rerum tempore aliquam numquam vitae, earum doloremque. Nam!
                            Indulge in the vibrant celebrations of Holi with our premier Holi Packages of 2024 near to Delhi, tailored to offer an unforgettable experience in some of India’s most iconic destinations. Whether you’re drawn to the spiritual aura of Rishikesh, the
                        </h1>
                        <button className="ml-2 mt-3 hover:bg-[#fb2056] shadow-md bg-amber-600 text-white py-2 md:px-[50px] px-5 rounded-full">Know more</button>
                    </div>


                    <div className="">
                        <Image className="md:h-80 md:w-[720px]   object-cover rounded-[17px]" src="https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>

                </div>
            </div>
            {/*  image */}

            {/* relative text-center w-full  h-40 md:h-52 lg:h-44 xl:h-52  overflow-hidden rounded-2xl" */}
            <div className="container-wrapper grid md:grid grid-cols-2 gap-4 mt-2  lg:grid-cols-4">
                <div className="relative mb-2">
                    <Image className="md:h-72 h-40 md:w-[300px] w-full object-cover rounded-[17px] transition-transform duration-300 transform hover:scale-110" src="https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className="absolute  inset-x-2 bottom-0 bg-opacity-50 text-white text-center py-2">
                        <p className="text-[25px] font-bold">himacahl</p>
                    </div>
                </div>
                <div className="relative mb-2">
                    <Image className="md:h-72 h-40 md:w-[300px] w-full object-cover rounded-[17px] transition-transform duration-300 transform hover:scale-110" src="https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className="absolute  inset-x-2 bottom-0 bg-opacity-50 text-white text-center py-2">
                        <p className=" text-[25px]	 font-bold">Kerala</p>
                    </div>
                </div>
                <div className="relative mb-2">
                    <Image className="md:h-72 h-40 md:w-[300px] w-full object-cover rounded-[17px] transition-transform duration-300 transform hover:scale-110" src="https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className="absolute  inset-x-2 bottom-0 bg-opacity-50 text-white text-center py-2">
                        <p className="text-[25px] font-bold">Uttarakhand</p>
                    </div>
                </div>
                <div className="relative mb-2">
                    <Image className="md:h-72 h-40 md:w-[300px] w-full object-cover rounded-[17px] transition-transform duration-300 transform hover:scale-110" src="https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className="absolute  inset-x-0 bottom-0 bg-opacity-50 text-white text-center py-2">
                        <p className="text-[25px] font-bold">  Rajastan</p>
                    </div>
                </div>

            </div>

            {/* image and text */}

            <div className="container-wrapper md:py-10 py-4">
                <div className=" md:grid flex md:flex-col flex-col-reverse md:grid-cols-2 w-full md:gap-5  text-wrap md:items-center ">

                    <div className="">
                        <p className=" text-amber-600  font-semibold mt-2">Indiafe</p>
                        <h1 className="md:text-[25px] text-xl font-medium">HEAVENLY HIMALAYS</h1>
                        <h1 className="md:text-[16px] text-para line-clamp-3 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, eligendi sed hic provident enim, rerum tempore aliquam numquam vitae, earum doloremque. Nam!
                            Indulge in the vibrant celebrations of Holi with our premier Holi Packages of 2024 near to Delhi, tailored to offer an unforgettable experience in some of India’s most iconic destinations. Whether you’re drawn to the spiritual aura of Rishikesh, the
                        </h1>

                        <div className=" mt-4 flex md:justify-between gap-3  ">
                            <button className="  hover:bg-[#fb2056] shadow-md bg-amber-600 text-white py-2 md:px-[50px] px-5   rounded-full">Ker;a</button>
                            <button className="  hover:bg-[#fb2056] shadow-md bg-amber-600 text-white py-2 md:px-[50px] px-5   rounded-full">Himalay</button>

                        </div>
                    </div>


                    <div className="">
                        <Image className="h-72 w-[720px] object-cover rounded-[17px]" src="https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>

                </div>
            </div>

            {/*  */}
            <div className="container-wrapper md:py-10  py-4">
                <div className=" md:grid flex md:flex-col flex-col md:grid-cols-2 w-full md:gap-5  text-wrap md:items-center ">


                    <div className="">
                        <Image className="h-72 w-[720px] object-cover rounded-[17px]" src="https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>

                    <div className="">
                        <p className=" text-amber-600  font-semibold mt-2">Indiafe</p>
                        <h1 className="md:text-[25px] text-xl font-medium">HEAVENLY HIMALAYS</h1>
                        <h1 className="md:text-[16px] text-para line-clamp-3 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, eligendi sed hic provident enim, rerum tempore aliquam numquam vitae, earum doloremque. Nam!
                            Indulge in the vibrant celebrations of Holi with our premier Holi Packages of 2024 near to Delhi, tailored to offer an unforgettable experience in some of India’s most iconic destinations. Whether you’re drawn to the spiritual aura of Rishikesh, the
                        </h1>

                        <div className=" mt-4 mb-4 flex md:justify-between gap-3  ">
                            <button className="  hover:bg-[#fb2056] shadow-md bg-amber-600 text-white py-2 md:px-[50px] px-5   rounded-full">Know more</button>
                            <button className="  hover:bg-[#fb2056] shadow-md bg-amber-600 text-white py-2 md:px-[50px] px-5   rounded-full">Know more</button>

                        </div>
                    </div>

                </div>
            </div>


            {/* image */}

            <div className=" container-wrapper md:grid md:grid-cols-2 mt-5 md:mb-16 md:mt-8 gap-1">
                <div className="relative mb-3">
                    <Image className="md:h-72 w-full h-56 md:w-[550px] object-cover rounded-md  transition-transform duration-300 transform hover:scale-110 " src="https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                </div>
                <div className="relative ">
                    <Image className="md:h-72 md:w-[550px] h-56 w-full object-cover rounded-md transition-transform duration-300 transform hover:scale-110" src="https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                </div>

            </div>

            {/* weekend package */}


            {/* Card testimonial */}
            {/* <div className="container-wrapper mt-2 ">
                <div className="grid grid-cols-2 gap-10 items-center">
                    <div>
                        <Image className="w-full my-2 shadow-md h-72 rounded-lg object-cover" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
            {/* <div className="flex h-48 gap-2">
                            <Image className="w-full rounded-l-lg object-cover shadow-md " src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <Image className="w-full rounded-r-lg object-cover shadow-md " src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                //         </div> */}
            {/* </div> */}

            {/* //  </div> */}
            {/* <div className=""> 
                        <p className="">Holi Celebration Packages for 2024</p>
                        <h1 className="text-[32px]">Holi Tour</h1>
                        <h1 className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, eligendi sed hic provident enim, rerum tempore aliquam numquam vitae, earum doloremque. Nam!
                        Indulge in the vibrant celebrations of Holi with our premier Holi Packages of 2024 near to Delhi, tailored to offer an unforgettable experience in some of India’s most iconic destinations. Whether you’re drawn to the spiritual aura of Rishikesh, the
                        </h1>
                        <button className="shadow-md bg-amber-600 text-white py-2 px-[50px]  rounded-full">Know more</button>
         
                    </div>
            </div> */}

            {/* card and text heading */}
            {/* <div className="container-wrapper py-10">
                <div className="grid grid-cols-2 w-full gap-5 items-center">

                    <div className="">
                        <h1 className="text-[32px] font-semibold">Hello i am a new citys</h1>
                        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quo molestias nulla tenetur quaerat corrupti alias molestiae natus dolorem, maiores illo rerum.</h1>
                    </div>
                    <div className="">
                        <Image className="h-80 w-[720px] object-cover rounded-lg" src="https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                </div>
            </div> */}





            {/* card and text heading */}
            {/* <div className="container-wrapper py-10">
                <div className="grid grid-cols-2  w-full gap-5 items-center">
                    <div className="">
                        <h1 className="text-[32px] font-semibold">Hello i am a new citys</h1>
                        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quo molestias nulla tenetur quaerat corrupti alias molestiae natus dolorem, maiores illo rerum.</h1>
                    </div>
                    <div className="">
                        <Image className="h-80 w-[720px] object-cover rounded-lg" src="https://images.unsplash.com/photo-1565402170291-8491f14678db?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>

                </div>
            </div> */}



            <Cardwork />

            {/* horizontal card */}
            <div className="">


                <div className="container-wrapper  md:mt-8">
                    <p className="text-center md:font-medium  text-xl font-medium md:text-[25px]">Plan an unforgettable trip from your city</p>
                </div>

                {/* very small horizontal card */}
                <div className="container-wrapper justify-center  flex flex-wrap">
                    {/* each small horizontal card */}
                    <HorizontalCard />
                    {/* each small horizontal card */}

                    <HorizontalCard />
                    {/* each small horizontal card */}

                    <HorizontalCard />
                    {/* each small horizontal card */}
                    <HorizontalCard />

                    {/* each small horizontal card */}
                    <HorizontalCard />

                </div>

            </div>


            <div className="md:mt-5  mt-2 py-2 bg-slate-100">
                <div className="container-wrapper text-xl md:text-[25px] font-medium text-center pb-7">
                    <p>Lorem, ipsum dolor.</p>
                    <p className="md:text-md text-para font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo cupiditate nobis minus?</p>
                </div>
                <Card4 />
            </div>


            {/* Card Kuoni copy */}
            <div className="container-wrapper mt-10  md:py-14">

                <div className=" md:mt-4 mt-4 mb-6">
                    <ArrowSection />
                </div>
                {/*  <div className="block md:flex gap-3 -mt-10">
                        <div className="max-w-[450px] px-5 items-center pt-20">
                            <p className="md:text-[25px] md:font-medium">Looking for a specific style for holiday</p>
                            <p className="text-para pt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. In consequatur
                                adipisci aliquam rerum error odio, nam, atque nostrum labore harum possimus nesciunt!</p>
                        </div>
                        <div className="relative">

                            <div className=" overflow-x-auto ">

                                <div className=" flex gap-3">
                                    <div className=" shrink-0 relative max-w-[290px] rounded-lg overflow-hidden">
                                        <Image className="relative object-cover h-96"
                                            src="https://images.unsplash.com/photo-1627640268913-91cfd4675b65?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt="" />
                                        <div className="absolute bottom-0 px-5 py-2">
                                            <p className="text-xl text-white">Self Drive</p>
                                            <div className=" line-clamp-2 text-para text-white rounded-md">
                                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque aperiam
                                                    exercitationem aliquid!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" shrink-0 relative max-w-[290px] rounded-lg overflow-hidden">
                                        <Image className="relative object-cover h-96"
                                            src="https://images.unsplash.com/photo-1627640268913-91cfd4675b65?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt="" />
                                        <div className="absolute bottom-0 px-5 py-2">
                                            <p className="text-xl text-white">Self Drive</p>
                                            <div className=" line-clamp-2 text-para text-white rounded-md">
                                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque aperiam
                                                    exercitationem aliquid!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" shrink-0 relative max-w-[290px] rounded-lg overflow-hidden">
                                        <Image className="relative object-cover h-96"
                                            src="https://images.unsplash.com/photo-1627640268913-91cfd4675b65?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt="" />
                                        <div className="absolute bottom-0 px-5 py-2">
                                            <p className="text-xl text-white">Self Drive</p>
                                            <div className=" line-clamp-2 text-para text-white rounded-md">
                                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque aperiam
                                                    exercitationem aliquid!</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className=" bg-gradient-to-l from-white opacity-100 w-10 h-full right-0 absolute z-30  top-0"></div>

                        </div>
                    </div> */}
            </div>



            {/* card tab section */}
            <div className="my-1 mt-6 md:my-10 ">
                <div className="container-wrapper text-xl font-medium md:text-[25px]  text-center">
                    <p>Lorem, ipsum dolor.</p>
                    <p className="md:text-md text-para font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo cupiditate nobis minus?</p>
                </div>
                <div className="container-wrapper grid grid-cols-5 gap-3 overflow-hidden">


                    <div className="flex md:flex-col md:mt-14 gap-2 py-5">
                        <div>
                            <button className="shadow-md bg-amber-600 text-white md:text-[16px] md:py-2 md:px-[80px] py-1 px-[30px] rounded-md">Europe</button>
                        </div>
                        <div>
                            <button className="shadow-md bg-amber-600 text-white md:text-[16px] md:py-2 md:px-[80px] py-1 px-[30px]  rounded-md">Europe</button>
                        </div>
                        <div>
                            <button className="shadow-md bg-amber-600 text-white md:text-[16px] md:py-2  md:px-[80px] py-1 px-[30px]  rounded-md">Europe</button>
                        </div>
                        <div>
                            <button className="shadow-md bg-amber-600 text-white md:text-[16px] md:py-2  md:px-[80px] py-1 px-[30px]  rounded-md">Europe</button>
                        </div>
                        <div>
                            <button className="shadow-md bg-amber-600 text-white md:text-[16px] text-para md:py-2 md:px-[80px] py-1 px-[30px]  rounded-md">Europe</button>
                        </div>

                    </div>

                    <div className="relative col-span-4 w-full overflow-auto">
                        <div className="flex gap-4 ">
                            {/*
                    <!-- card 1 --> */}
                            <Card3 />

                        </div>
                        <div className=" bg-gradient-to-l from-white opacity-100 w-10 h-full right-0 absolute z-30  top-0"></div>
                    </div>

                </div>
            </div>

            <div>

            </div>

            <div className="pb-5 -mt-1  md:pb-10">

                {/* rounded card */}
                <div className="container-wrapper md:text-[25px] text-xl font-medium text-center pb-2 md:pb-7">
                    <p>Lorem, ipsum dolor.</p>
                    <p className="md:text-md text-para font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo cupiditate nobis minus?</p>
                </div>
                <div className="container-wrapper  grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3">
                    {/* card multiple */}
                    <Card2 />
                    <Card2 />
                    <Card2 />
                    <Card2 />
                    <Card2 />
                    <Card2 />
                    <Card2 />
                    <Card2 />
                    <Card2 />
                    <Card2 />
                </div>
            </div>


            {/* slider card here */}
            {/* <div className=" container-wrapper block lg:grid grid-cols-[390px,2fr] items-center h-[420px] px-12 pb-40">
        <div className="relative py-[150px] shrink-0 w-[370px] m-auto">
            <div className="absolute z-40 left-6 shadow-xl top-2 rounded-2xl overflow-hidden">
                <Image className="w-80 h-[320px] object-cover "
                    src="https://images.unsplash.com/photo-1524026986132-000404263b59?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="" />
            </div>
            <div className="absolute z-30 left-12 top-5 shadow-xl rounded-2xl overflow-hidden">
                <Image className="w-80 h-[290px] object-cover "
                    src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="" />
            </div>
            <div className="absolute z-20 left-0 top-5 shadow-xl rounded-2xl overflow-hidden">
                <Image className="w-80 h-[290px] object-cover"
                    src="https://images.unsplash.com/photo-1512699355324-f07e3106dae5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="" />
            </div>
        </div>
        <div className=" mt-12 px-16">
            <p className="text-[26px] text-black font-semibold pb-5">Discover the World, specially curated for you!</p>
            <p className="text-[14px] pb-3">Our exclusive customized holidays division can cater to every travel need:
                hotel, air tickets, VISA, sightseeings, transfer or the entire package, all designed keeping in mind
                your interests!</p>
            <button className="p-3 bg-yellow-500 rounded-md px-10">Enquire now</button>
        </div>
    </div> */}






            {/* card and small banner */}
            {/* <div className="container-wrapper text-[32px] font-semibold text-center pb-5">
                    <p>Lorem, ipsum dolor..</p>
                    <p className="text-md font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo cupiditate nobis minus?</p>
                </div>

                <div className="container-wrapper   relative">
                    <div className="ml-10 flex max-w-[620px] p-5 pr-20 shadow-lg bg-cover bg-center rounded-xl overflow-hidden "
                        style={{ backgroundColor: 'rgb(153, 199, 221)', width: '550px', height: '320px' }}>
                        <div className="">
                            <p style={{ fontSize: '32px', margin: '10px 0', fontFamily: 'italic' }}>Lorem, ipsum dolor.</p>
                            <h1 className=" font-bold" style={{ fontSize: '20px' }}>Lorem ipsum dolor sit amet consectetur.</h1>
                            <p className="text-sm mt-2 mb-10 line-clamp-2">Lorem ipsum dolor sinsectetur nam assumenda, voluptas,
                                commodi ipsam dignissimos dolor, excepturi vitae. Atque sunt rem laudantium est ducimus aliquam
                                fuga!</p>
                            <a href="" style={{ fontSize: '20px', marginTop: '20px' }}>More Information</a>
                        </div>
                    </div>
                    <Card1 />

                </div> */}

            <div className="md:pb-10 pb-5">
                <ReviewsCard />
            </div>


            <div className="py-14  bg-slate-200 mb:6 md:mb-10">
                <div className="container-wrapper md:text-[25px] text-xl font-medium text-center pb-10">
                    <p>Lorem, ipsum dolor.</p>
                    <p className="md:text-md  text-para font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo cupiditate nobis minus?</p>
                </div>
                <div className="grid grid-cols-3 container-wrapper gap-x-3 gap-y-10 ">
                    {/* multiple card */}
                    <div className="flex gap-2  ">
                        <div className=" overflow-hidden ">
                            <Image className=" object-cover w-14 h-14 rounded-full"
                                src="https://images.unsplash.com/photo-1496644256288-2bb0a65f32f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="" />
                        </div>
                        <div>
                            <p className="text-md font-semibold pb-1">Accom</p>
                            <p className="text-para font-light">Lorem ipsum dolor sit amet </p>
                        </div>
                    </div>
                    {/* multiple card */}
                    <div className="flex gap-2  ">
                        <div className=" overflow-hidden h-6 w-6">
                            <Image className=" object-cover w-5 h-5 rounded-full"
                                src="https://images.unsplash.com/photo-1496644256288-2bb0a65f32f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="" />
                        </div>
                        <div>
                            <p className="text-md font-semibold pb-1">Accom</p>
                            <p className="text-para font-light">Lorem ipsum dolor sit amet .</p>
                        </div>
                    </div>
                    {/* multiple card */}
                    <div className="flex gap-2  ">
                        <div className=" overflow-hidden ">
                            <Image className=" object-cover w-14 h-14 rounded-full"
                                src="https://images.unsplash.com/photo-1496644256288-2bb0a65f32f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="" />
                        </div>
                        <div>
                            <p className="text-md font-semibold pb-1">abc</p>
                            <p className="text-para font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    {/* multiple card */}
                    <div className="flex gap-2  ">
                        <div className=" overflow-hidden ">
                            <Image className=" object-cover w-14 h-14 rounded-full"
                                src="https://images.unsplash.com/photo-1496644256288-2bb0a65f32f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="" />
                        </div>
                        <div>
                            <p className="text-md font-semibold pb-1">Accomondation</p>
                            <p className="text-para font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    {/* multiple card */}
                    <div className="flex gap-2  ">
                        <div className=" overflow-hidden ">
                            <Image className=" object-cover w-14 h-14 rounded-full"
                                src="https://images.unsplash.com/photo-1496644256288-2bb0a65f32f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="" />
                        </div>
                        <div>
                            <p className="text-md font-semibold pb-1">abc</p>
                            <p className="text-para font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    {/* multiple card */}
                    <div className="flex gap-2  ">
                        <div className=" overflow-hidden ">
                            <Image className=" object-cover w-14 h-14 rounded-full"
                                src="https://images.unsplash.com/photo-1496644256288-2bb0a65f32f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="" />
                        </div>
                        <div>
                            <p className="text-md font-semibold pb-1">Abc</p>
                            <p className="text-para font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />

        </>
    )
}