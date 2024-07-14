import { useEffect, useState, useCallback } from "react";
import PrimaryItinerary from "@/components/admin/itineraryCreate/PrimaryItinerary";
import { useRouter } from "next/router";
import Layout from "@/components/admin/Layout";
import HighlightAbout from "@/components/admin/itineraryCreate/HighlightAbout";
import ItineraryText from "@/components/admin/itineraryCreate/ItineraryText_Faq";
import PackageFaq from "@/components/admin/itineraryCreate/PackageFaq";
import FlightBooking from "@/components/admin/itineraryCreate/FlightBooking";
import TourInformation from "@/components/admin/itineraryCreate/TourInformation";
import SeoField from "@/components/admin/itineraryCreate/SeoField";
import { useSearchParams } from "next/navigation";
import GoogleMap from "@/components/admin/itineraryCreate/GoogleMap";
import PricingManagement from "@/components/admin/itineraryCreate/PricingManagement";
import PricingManagementPopup from '@/components/admin/itineraryCreate/PricingManagementPopup';
import { LuPackagePlus } from "react-icons/lu";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import FixedDeparture from "@/components/admin/itineraryCreate/FixedDeparture";
import { AppProvider, useAppContext } from "@/components/admin/context/Package/AddGuest";
import PriceRange from "@/components/admin/itineraryCreate/PriceRange";

export default function CreatePackage() {
    const [pricingPopup, setPricingPopup] = useState(true);

    const { edit } = useRouter().query;
    const formType = useSearchParams()?.get("type");

    const [itinerary, setItinerary] = useState();
    const [activeTab, setActiveTab] = useState(formType ? 'Tab1' : 'Tab1');

    const handleTabClick = (tabname: any) => {
        setActiveTab(tabname);
    };

    const getItinerary = useCallback(async () => {
        try {
            const itinerary = await (await fetch('/api/package/' + edit)).json();
            setItinerary(itinerary.updatedPackage);
        } catch (error) {
            console.log(error);
        }
    }, [edit]);

    useEffect(() => {
        if (edit) {
            getItinerary();
        }
    }, [edit, getItinerary]);

    const [select, setSelect] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    
    const handleOnChange = (e) => {
        setSelect(e.target.value);
    };

    const handleCleckbox = (a) => {
        if (a) {
            setSelectedOption(select);
            setPricingPopup(false);
        }
    };

    useEffect(() => {}, [select]);

    return (
        <AppProvider>
            <Layout>
                <div className="flex items-center gap-5 text-primary pb-3">
                    <LuPackagePlus size={28} className="font-semibold" />
                    <p className="text-[28px] text-black">Create Package</p>
                    <HiOutlineArrowNarrowRight size={28} className=" text-teal-700" />
                </div>
                <div className="border-b border-slate-300 mb-5">
                    <div className="flex gap-2 text-[14px] pt-5 pb-2 flex-wrap">
                        <button onClick={() => handleTabClick('Tab1')} className={`${activeTab === "Tab1" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} px-3 py-1`}>Basic info</button>
                        <button onClick={() => handleTabClick('Tab2')} className={`${activeTab === "Tab2" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} px-3 py-1`}>Highlight About</button>
                        <button onClick={() => handleTabClick('Tab3')} className={`${activeTab === 'Tab3' ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} px-3 py-1`}>Itinerary Text</button>
                        <button onClick={() => handleTabClick('Tab4')} className={`${activeTab === 'Tab4' ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} px-3 py-1`}>Map Embedded</button>
                        <button onClick={() => handleTabClick('Tab5')} className={`${activeTab === "Tab5" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} px-3 py-1`}>Flight</button>
                        <button onClick={() => handleTabClick('Tab6')} className={`${activeTab === "Tab6" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} px-3 py-1`}>Tour Info</button>
                        <button onClick={() => handleTabClick('Tab7')} className={`${activeTab === "Tab7" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} px-3 py-1`}>SEO Field</button>
                        <button onClick={() => handleTabClick('Tab8')} className={`${activeTab === "Tab8" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} px-3 py-1`}>Pricing Management</button>
                        <button onClick={() => handleTabClick('Tab9')} className={`${activeTab === "Tab9" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} px-3 py-1`}>FAQ</button>
                        <button onClick={() => handleTabClick('Tab10')} className={`${activeTab === "Tab10" ? "border-b-2 scale-105 border-black text-black" : "border-black text-slate-400"} px-3 py-1`}>Time Range date</button>
                    </div>
                </div>
                <div className={`tab-content ${activeTab === 'Tab1' ? 'block' : 'hidden'}`}>
                    <PrimaryItinerary setActiveTab={setActiveTab} itinerary={itinerary} itineraryInfo={undefined} setItineraryInfo={undefined} />
                </div>
                <div className={` ${activeTab === 'Tab2' ? 'block' : 'hidden'}`}>
                    <HighlightAbout setActiveTab={setActiveTab} itinerary={itinerary} itineraryInfo={undefined} setItineraryInfo={undefined} />
                </div>
                <div className={` ${activeTab === 'Tab3' ? 'block' : 'hidden'}`}>
                    <div className="my-5">
                        <div className="bg-white rounded-md px-3m p-2">
                            <ItineraryText setActiveTab={setActiveTab} itinerary={itinerary} />
                        </div>
                    </div>
                </div>
                <div className={` ${activeTab === 'Tab4' ? 'block' : 'hidden'}`}>
                    <GoogleMap setActiveTab={setActiveTab} itinerary={itinerary} />
                </div> 
                <div className={` ${activeTab === 'Tab5' ? 'block' : 'hidden'}`}>
                    <FlightBooking setActiveTab={setActiveTab} itinerary={itinerary}/>
                </div>
                <div className={` ${activeTab === 'Tab6' ? 'block' : 'hidden'}`}>
                    <TourInformation itinerary={itinerary} />
                </div>
                <div className={` ${activeTab === 'Tab7' ? 'block' : 'hidden'}`}>
                    <SeoField itinerary={itinerary}/>
                </div>
                <div className={` ${activeTab === 'Tab8' ? 'block' : 'hidden'}`}>
                    <div className="relative">
                        {itinerary?.prices === null && pricingPopup && <PricingManagementPopup setPricingPopup={setPricingPopup} handleOnChange={handleOnChange} handleCleckbox={handleCleckbox} />}
                        {(itinerary?.prices?.addguest === "addGuest" || selectedOption === "addGuest") && <PricingManagement itinerary={itinerary} />}
                        {(itinerary?.prices?.departure1 === "fixedDeparture" || selectedOption === "fixedDeparture") && (
                            <div>
                                <p><FixedDeparture itinerary={itinerary} /></p>
                            </div>
                        )}
                    </div>
                </div>
                <div className={` ${activeTab === 'Tab9' ? 'block' : 'hidden'}`}>
                    <PackageFaq itinerary={itinerary} />
                </div>
                <div className={` ${activeTab === 'Tab10' ? 'block' : 'hidden'}`}>
                    <PriceRange itinerary={itinerary} />
                </div>
            </Layout>
        </AppProvider>
    );
}
