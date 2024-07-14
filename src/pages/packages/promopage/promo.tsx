import SearchPageTopSeoContent from "@/components/SearchPageTopSeoContent"
import "../../../app/globals.css"
import SearchHeaderWpr from "@/components/SearchHeaderWpr"
import Itineraryapi from "@/components/itineraryapi"
import ItineraryCard from "@/components/itinerarylist/itineraryCard"
// import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ItineraryFilter from "@/components/itinerarylist/ItineraryFilter"
import FooterFaq from "@/components/itinerarylist/FooterFaq"
import ItiineraryBanner from "@/components/itinerarylist/ItineraryBanner"
import ItineraryFaq from "@/components/itinerarylist/ItineraryFaq"
import BottomLink from "@/components/ItineraryDetail/BottomLink"



 
export default function promopage() {
    return (
        <>
        {/* <Header/> */}

            <div className="bg-slate-50">
                {/*top banner */}
                <ItiineraryBanner/>
                {/* <SearchPageTopSeoContent country={undefined} />
                <SearchHeaderWpr /> */}
                <div className="container-wrapper grid grid-cols-1 xl:grid-cols-[0.7fr,2fr] gap-x-10">
                    <ItineraryFilter/>

                    <div>
                        {/* <!-- package card 1 --> */}
                        



                        {/* <!-- package card 2 --> */}
                        
                        {/* <!-- package card 3 --> */}
                        
                        {/* <!-- package card 4 --> */}
                        <ItineraryCard/>
                        <ItineraryCard/>
                        <ItineraryCard/>
                        <ItineraryCard/>
                        <ItineraryCard/>
                        <ItineraryCard/>
                        <ItineraryCard/>
                        <ItineraryCard/>
                    </div>

                </div>
                <div className="container-wrapper py-12 w-52">
                <ItineraryFaq/>

                </div>
            </div>
            {/* bottom link */}
            <div className="border-t border">
                <BottomLink/>   
            </div>
            <Footer/>
        </>
    )
}