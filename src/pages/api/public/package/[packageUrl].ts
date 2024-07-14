import Package from "@/models/Package";
import PackageHighlight from "@/models/package/PackageHighlight";
import PackageDayWise from "@/models/package/PackageDayWise";
import PackageFaqWise from "@/models/package/PackageFaq";
import PackagePrice from "@/models/package/PackagePrice";
import PackageDeparture from "@/models/package/PackageDeparture";

import SeoData from '@/models/package/PackageSeo';
import PackageMap from "@/models/package/PackageMap";
import { NextApiRequest, NextApiResponse } from "next";
import TourInformation from "@/models/package/TourInformation";
import FlightBookingSchema from "@/models/package/FlightBooking";

 const packagePublicPackageUrl= async (req: NextApiRequest, res: NextApiResponse) => {
    const { method, query } = req;

    if (method !== 'GET') {
        res.setHeader('Allow', ['GET']);
        return res.status(405).json({ message: `Method ${method} not allowed` });
    }

    try {
        const packageDetails = await Package.findOne({ url: query.packageUrl }).populate("category").exec();
        if (!packageDetails) {
            return res.status(404).json({ message: 'Package not found.' });
        }

        const highlightDetails = await PackageHighlight.findOne({ package: packageDetails._id }, 'highlights');
        const dayDetails = await PackageDayWise.findOne({ package: packageDetails._id }, 'days');
        const faqs = await PackageFaqWise.findOne({ package: packageDetails._id }, 'days');
        const map = await PackageMap.findOne({ package: packageDetails._id });
        const flights = await FlightBookingSchema.findOne({ package: packageDetails._id });
        const priceDetails = await PackagePrice.findOne({ package: packageDetails._id });
        const seoDataDetails = await SeoData.findOne({ package: packageDetails._id });
        const packageDepartures = await PackageDeparture.findOne({ package: packageDetails._id });
        const packageTourInformations = await TourInformation.findOne({ package: packageDetails._id });


        packageDetails._doc.highlights = highlightDetails ? highlightDetails.highlights : [];
        packageDetails._doc.days = dayDetails ? dayDetails.days : [];
        packageDetails._doc.map = map;
        packageDetails._doc.flights = flights;
        packageDetails._doc.faqs = faqs;
        packageDetails._doc.prices = priceDetails ||packageDepartures;
        packageDetails._doc.seoData = seoDataDetails;
        // packageDetails._doc.departures = packageDepartures;
        packageDetails._doc.TourInformations = packageTourInformations;

        return res.status(200).json(packageDetails);
    } catch (error) {
        console.error('Error handling GET request:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};
export default  packagePublicPackageUrl