// import Addguest from '@/components/addguest';

import ItineraryHeroSection from '@/components/ItineraryDetail/ItineraryHeroSection';
import '../../../app/globals.css';
import DepartureSection from '@/components/ItineraryDetail/Departure&Booking/DepartureSection';
import ItineraryPricingCard from '@/components/ItineraryDetail/Departure&Booking/ItineraryPricingCard';
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Itinerary from '@/components/ItineraryDetail/Itinerarypackage/Itinerary';
import ItineraryTourDetails from '@/components/ItineraryDetail/Itinerarypackage/ItineraryTourDetails';
import ItineraryPaymentTerms from '@/components/ItineraryDetail/Itinerarypackage/ItineraryPaymentTerms';
import ItinerarySideCard from '@/components/ItineraryDetail/Itinerarypackage/ItinerarySideCard';
import Itinerarymap from '@/components/ItineraryDetail/Itinerarypackage/Itinerarymap';
import ReviewsCard from '@/components/ReviewsCard';
// import primaryCard from '@/components/primaryCard';
import PrimaryCard from '@/components/primaryCard';
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
// import Header from '@/components/Header';
import BottomLink from '@/components/ItineraryDetail/BottomLink';
import Footer from '@/components/Footer';

// upgrades available




// Itinerary
// const [isItinerary,setIsItinerary]=useState(true)
// const openCloseItinerary=()=>{
//     setIsItinerary(!isItinerary)
//     console.log(isItinerary)
// }

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "gray", borderRadius: "20px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "gray", borderRadius: "20px" }}
            onClick={onClick}
        />
    );
}







const Details = () => {

    // primary card crousel with react silk
    const settings = {


        infinite: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 375,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },

        ]
    };




    return (
        <>
            <div>
                {/* <Header /> */}
                {/* <PrimaryCard/> */}
                <ItineraryHeroSection />


                {/* Departure city */}
                <div className="bg-gray-100 mt-[20px]">
                    <div className="container-wrapper">
                        <div className="mb-[20px] pt-[40px]">
                            <h1 className="text-lg font-medium">Select departure city, dates & add guest to book your tour</h1>
                            <p className="italic text-slate-600 text-sm">As seats fill, prices increase! So book today!</p>
                        </div>
                        <div className="grid grid-cols-1 xl:grid-cols-[2fr,1fr] gap-x-3">
                            {/*Select departure city */}
                            <DepartureSection />
                            {/* Pricing */}
                            <ItineraryPricingCard />
                            <div className="flex gap-5 py-4 mb-5 bg-green">
                                <p className="text-xxs font-semibold">Terms and Conditions apply</p>
                                <p className="text-xxs font-semibold">5% GST is applicable on given tour price</p>
                                <p className="text-xxs font-semibold">Mentioned tour prices are Per Person for Indian Nationals
                                    only.
                                </p>
                            </div>
                        </div>
                    </div>
                </div> 
                {/* Departure city End */}
                <div>
                    <div id="ItinerarySection" className="bg-white py-3 shadow-md sticky top-[140px] z-40">
                        <div className="container-wrapper gap-5 md:gap-12 xs:pb-5 md:pb-0  flex justity-start overflow-x-auto ">
                            <div>
                                <ScrollLink
                                    to="ItinerarySubSection" // The ID of the section you want to scroll to
                                    spy={true}
                                    smooth={true}
                                    offset={-70} // Adjust this offset based on your layout (navbar height, etc.)
                                    duration={500}
                                >
                                    <p className=" text-para cursor-pointer hover:border-b-2 font-semibold border-amber-600 py-2 hover:text-orange-800">Itinerary</p>
                                </ScrollLink>
                            </div>
                            <div>
                                <ScrollLink
                                    to="TourDetailsSection" // The ID of the section you want to scroll to
                                    spy={true}
                                    smooth={true}
                                    offset={-70} // Adjust this offset based on your layout (navbar height, etc.)
                                    duration={500}
                                >
                                    <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2 font-semibold border-amber-600 py-2 hover:text-orange-800">Tour Details</p>
                                </ScrollLink>
                            </div>
                            <div>
                                <ScrollLink
                                    to="TourInformationSection" // The ID of the section you want to scroll to
                                    spy={true}
                                    smooth={true}
                                    offset={-70} // Adjust this offset based on your layout (navbar height, etc.)
                                    duration={500}
                                >
                                    <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2 font-semibold border-amber-600 py-2 hover:text-orange-800">Inclusion</p>
                                </ScrollLink>
                            </div>
                            <div>
                                <ScrollLink
                                    to="NeedToKnowSection" // The ID of the section you want to scroll to
                                    spy={true}
                                    smooth={true}
                                    offset={-70} // Adjust this offset based on your layout (navbar height, etc.)
                                    duration={500}
                                >
                                    <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2 font-semibold border-amber-600 py-2 hover:text-orange-800">Exclusion</p>
                                </ScrollLink>
                            </div>
                            <div>
                                <ScrollLink
                                    to="Policy&TermsSection" // The ID of the section you want to scroll to
                                    spy={true}
                                    smooth={true}
                                    offset={-70} // Adjust this offset based on your layout (navbar height, etc.)
                                    duration={500}
                                >
                                    <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2 font-semibold border-amber-600 py-2 hover:text-orange-800"> Policy</p>
                                </ScrollLink>
                            </div>
                            <div>
                                <ScrollLink
                                    to="UpgradesSection" // The ID of the section you want to scroll to
                                    spy={true}
                                    smooth={true}
                                    offset={-70} // Adjust this offset based on your layout (navbar height, etc.)
                                    duration={500}
                                >
                                    <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2 font-semibold border-amber-600 py-2 hover:text-orange-800">Need to Know</p>
                                </ScrollLink>
                            </div>
                        </div>
                    </div>

                    <div className="container-wrapper  grid grid-cols-1 xl:grid-cols-[2fr,1fr]">
                        <div>


                            <div id='ItinerarySubSection' className="flex justify-between my-5">
                                <p className="text-lg font-semibold">Itinerary <span
                                    className="text-[13px] italic text-slate-600 ">(Day Wise)</span></p>
                                {/* <p onClick={()=>setIsItinerary(!isItinerary)} className="cursor-pointer text-[14px] text-blue font-medium underline">View all days</p> */}
                            </div>
                            <div>
                                <p className='text-para' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, id quibusdam! Veritatis qui,
                                    nostrum praesentium labore corrupti consequatur sapiente provident. Omnis saepe laborum eveniet,
                                    animi deleniti odit quisquam, sapiente voluptate expedita maiores voluptatum, illo rerum.</p>
                            </div>


                            {/* <Itinerary/>    */}
                            <Itinerary />
                            {/* Itinerary map */}
                            <Itinerarymap />

                            {/* <!-- TOUR DETAILS IS HERE --> */}
                            <ItineraryTourDetails />


                            {/* Privacy policy Terms */}
                            <div id='Policy&TermsSection' className='pt-12'>
                                <ItineraryPaymentTerms />

                                {/*<!-- Upgrade section --> */}


                            </div>

                        </div>
                        <div className="hidden xl:block mt-10">
                            <div className='sticky top-[220px] z-20'>

                                <div className="flex gap-1 items-center  justify-end ">
                                    <div className="items-center flex flex-col p-2 text-center">
                                        <Image className="w-4" src="https://www.svgrepo.com/show/475692/whatsapp-color.svg" alt="" />
                                        <p className="text-[12px]">Send Itinerary</p>
                                    </div>

                                    <div className="border-l h-full items-center flex flex-col p-2 text-center">
                                        <Image className="w-4" src="https://www.svgrepo.com/show/522439/printer.svg" alt="" />
                                        <p className="text-[12px]">Print Itinerary</p>
                                    </div>
                                    <div className="border-l h-full items-center flex flex-col p-2 text-center">
                                        <Image className="w-4" src="https://www.svgrepo.com/show/522399/envelope-closed.svg" alt="" />
                                        <p className="text-[12px]">Email Itinerary</p>
                                    </div>

                                </div>
                                {/* card is here */}
                                <ItinerarySideCard />
                            </div>

                        </div>
                    </div>

                </div>
                <ReviewsCard />




                {/* <div className="container-wrapper mx-auto p-4">
      <div className=" overflow-x-auto flex-shrink-0 flex gap-5">
        <PrimaryCard />
        <PrimaryCard />
        
        </div>
    </div> */}
                <div className='container-wrapper pt-10'>
                    <div>
                        <h2 className='text-2xl'>Similar Tour Packages</h2>
                        <h2 className='text-md italic'>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                    </div>
                </div>
                <div className=" container-wrapper p-6 ">


                    <Slider {...settings}>
                        <div className='px-1'>
                            <PrimaryCard />
                        </div>
                        <div className='px-1'>
                            <PrimaryCard />
                        </div>
                        <div className='px-1'>
                            <PrimaryCard />
                        </div>


                    </Slider>
                </div>



                {/* bottom link */}
                <BottomLink />



                {/* footer */}

                {/* <Footer/> */}







            </div>
        </>

    );
};

export default Details;