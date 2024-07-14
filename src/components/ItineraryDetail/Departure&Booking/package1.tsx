import "../../../app/globals.css";
import DepartureSection from "@/components/ItineraryDetail/Departure&Booking/DepartureSection";
import ItineraryPricingCard from "@/components/ItineraryDetail/Departure&Booking/ItineraryPricingCard";
import ItineraryHeroSection from "@/components/ItineraryDetail/ItineraryHeroSection";
import { Link as ScrollLink } from "react-scroll";
import Itinerary from "@/components/ItineraryDetail/Itinerarypackage/Itinerary";
import ItineraryTourDetails from "@/components/ItineraryDetail/Itinerarypackage/ItineraryTourDetails";
import ItineraryPaymentTerms from "@/components/ItineraryDetail/Itinerarypackage/ItineraryPaymentTerms";
import ItinerarySideCard from "@/components/ItineraryDetail/Itinerarypackage/ItinerarySideCard";
import Itinerarymap from "@/components/ItineraryDetail/Itinerarypackage/Itinerarymap";
import ReviewsCard from "@/components/ReviewsCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BottomLink from "@/components/ItineraryDetail/BottomLink";
import CustomiseTour from "@/components/ItineraryDetail/CustomiseTour";
import Breadcrumbs from "@/components/Breadcrumbs";
import Addguest from "@/components/addguest";
import TestingCard from "@/components/ItineraryDetail/TestingCard";
import { useAppContext } from "@/components/admin/context/Package/AddGuest";
import DesktopHeader from "@/components/Header/DesktopHeader/desktopHeader";
import { useEffect, useState,useCallback } from "react";
import Image from 'next/image'

const Package1 = () => {

    // const [selectedPackage,setSelectedPackage]=useState(null);
    const {addPackage,guestPrice,inputData,setInputData,closeBtn,setCloseBtn,showAddguest}=useAppContext();
    // setSelectedPackage(addPackage);
    // console.log("guestPrice111111111111111111",guestPrice)
    const [images,setImages]=useState(null);
    const fetchImages = useCallback(async () => {
      const res = await fetch(`/api/package/image-upload/${addPackage?._id}`);
      const data = await res.json();
      return data;
    }, [addPackage]);
    
    useEffect(()=>{
fetchImages().then(res=>setImages(res));
    },[addPackage,fetchImages])
    // console.log("add packages ",addPackage)
    
  return (
    <div>
      <div className=" absolute w-full ">
        <DesktopHeader/>
      </div>
      <div className=" container-wrapper -z-10">{/* <Reviews /> */}</div>
      
      {/* <Caraousel /> */}
      <Breadcrumbs />
      <div className="md:mt-20 mt-3">
      <ItineraryHeroSection addPackage={addPackage} closeBtn={closeBtn}  guestPrice={guestPrice} setInputData={setInputData} inputData={inputData}  setCloseBtn={setCloseBtn} images={images}/>
      </div>
      {/* <ItineraryHeroSection addPackage={addPackage} closeBtn={closeBtn}  guestPrice={guestPrice} setInputData={setInputData} inputData={inputData}  setCloseBtn={setCloseBtn} /> */}
      {/* departure city */}
      <div className="bg-gray-100  mt-[20px] pb-10">
        <div className="container-wrapper mb-4">
          <div className="mb-[20px] pt-[40px]">
            <h1 className="text-lg font-medium text-graytext">
              Select departure city, dates & add guest to book your tour
            </h1>
            <p className="italic  text-sm">
              As seats fill, prices increase! So book today!
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-[2fr,1fr] gap-x-3 ">
            {/*Select departure city */}
           
            <div id="departure">
              <DepartureSection />
            </div>
          
            {/* Pricing */}
           
            <div className="hidden xl:block">
              <ItineraryPricingCard />
            </div>
          
          </div>
        </div>
      </div>
      {/* Departure city End */}
      <div className="">
        <div
          id="ItinerarySection"
          className="bg-white py-1 shadow-md sticky top-0 z-40"
        >
          <div className="container-wrapper gap-3  md:gap-12 xs:pb-5 md:pb-0  flex justity-start overflow-x-auto ">
            <div>
              <ScrollLink
                to="ItinerarySubSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p className=" text-para cursor-pointer hover:border-b-2  border-amber-600 py-2 hover:text-orange-800">
                  Itinerary
                </p>
              </ScrollLink>
            </div>
            <div>
              <ScrollLink
                to="TourDetailsSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2  border-amber-600 py-2 hover:text-orange-800">
                  Tour Details
                </p>
              </ScrollLink>
            </div>
            <div>
              <ScrollLink
                to="TourInformationSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2  border-amber-600 py-2 hover:text-orange-800">
                  Inclusion
                </p>
              </ScrollLink>
            </div>
            <div>
              <ScrollLink
                to="NeedToKnowSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2  border-amber-600 py-2 hover:text-orange-800">
                  Exclusion
                </p>
              </ScrollLink>
            </div>
            <div>
              <ScrollLink
                to="Policy&TermsSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2  border-amber-600 py-2 hover:text-orange-800">
                  {" "}
                  Policy
                </p>
              </ScrollLink>
            </div>
            <div>
              <ScrollLink
                to="UpgradesSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2  border-amber-600 py-2 hover:text-orange-800">
                  Need to Know
                </p>
              </ScrollLink>
            </div>
          </div>
        </div>
        <div className="container-wrapper  grid grid-cols-1 xl:grid-cols-[2fr,1fr]">
          <div>
            <div
              id="ItinerarySubSection"
              className="flex  justify-between my-5"
            >
              <p className="text-lg font-semibold text-graytext">
                Itinerary{" "}
                <span className="text-[13px] italic text-slate-600 ">
                  (Day Wise)
                </span>
              </p>
            </div>
            <div>
              <p className="text-para leading-relaxed">
                {addPackage?.dayWiseInformation}
              </p>
            </div>
            {/* <Itinerary/>    */}
            <Itinerary  />
            {/* Itinerary map */}
            <Itinerarymap />
            {/* <!- TOUR DETAILS IS HERE --> */}
            <ItineraryTourDetails />
            {/* Privacy policy Terms */}
            <div id="Policy&TermsSection" className="pt-9">
              <ItineraryPaymentTerms />
            </div>
          </div>
          <div className=" mt-10">
            <div className="sticky top-[220px] z-20">
              <div className="flex gap-1 items-center  justify-end ">
                <div className="items-center flex flex-col p-2 text-center">
                  <Image
                    className="w-4"
                    src="https://www.svgrepo.com/show/475692/whatsapp-color.svg"
                    alt=""
                  />
                  <p className="text-[12px]">Send Itinerary</p>
                </div>
                <div className="border-l h-full items-center flex flex-col p-2 text-center">
                  <Image
                    className="w-4"
                    src="https://www.svgrepo.com/show/522439/printer.svg"
                    alt=""
                  />
                  <p className="text-[12px]">Print Itinerary</p>
                </div>
                <div className="border-l h-full items-center flex flex-col p-2 text-center">
                  <Image
                    className="w-4"
                    src="https://www.svgrepo.com/show/522399/envelope-closed.svg"
                    alt=""
                  />
                  <p className="text-[12px]">Email Itinerary</p>
                </div>
              </div>
              {/* card is here */}
              <ItinerarySideCard />
            </div>
          </div>
        </div>
      </div>
      {/* review card */}
      <ReviewsCard />
      <div className="container-wrapper pt-6 md:pt-10">
        <div>
          <h2 className="md:text-xl font-semibold  text-lg">Similar Tour Packages</h2>
          <h2 className="md:text-md text-[15px] italic">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h2>
        </div>
      </div>
      <div className=" mt-2">
        <TestingCard />
      </div>
      {/* bottom link */}
      <BottomLink />
      <div className=" flex xl:hidden z-[999]  sticky bottom-0 bg-white border-t-2 border-primary">
        <div className=" container-wrapper sm:grid grid-cols-[1fr,2fr]">
          <div className="hidden sm:flex items-center">
            <p className=" text-[20px] font-semibold">Lucknow Tour Package</p>
            <div>
              <span></span>
            </div>
          </div>
          <div className="flex gap-1 justify-end">
            <div className="text-right flex flex-col items-end justify-center ">
              <p className="text-base leading-5 text-green-600 font-semibold uppercase">
                best deal price
              </p>
              {/* <div className='flex gap-1 items-end'> */}
              {/* <p className='text-sm line-through'>₹20,000</p> */}
              {/* <button className='uppercase text-xxs text-white bg-navyblack px-1 py-1 rounded-sm text-center'>37% Off</button> */}
              {/* </div> */}
              <p className="text-sm leading-5">
                Starts From{" "}
                <span className="text-lg text-graytext font-medium">
                  ₹ 5454
                </span>
              </p>
              <p className="text-xxs leading-5">per person on twin sharing</p>
            </div>
            
            <div className=" flex-col  align-middle my-auto pl-2 gap-2 py-2">
           
            <ScrollLink
                to="departure"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                <Addguest guestPrice={guestPrice} setInputData={setInputData} inputData={inputData}  setCloseBtn={setCloseBtn}>
                <p className={` ${showAddguest?"bg-primary cursor-pointer":"bg-orange-200"} px-5 py-2 rounded-md text-white text-center text-para`}>
                  <span className="disabled:opacity-75">{closeBtn?"Book Now":"Add Guest & Room"}</span>

                </p>
              </Addguest>
           
              </ScrollLink>
            
              <CustomiseTour>
                <p className="border px-5 cursor-pointer py-1 mt-2 rounded-md text-center text-para">
                  <span>Customise</span>
                </p>
              </CustomiseTour>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Package1