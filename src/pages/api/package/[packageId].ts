import Country from "@/models/Country";
import Package from "@/models/Package"
import State from "@/models/State";
import PackageDayWise from "@/models/package/PackageDayWise";
import PackageDeparture from "@/models/package/PackageDeparture";
import PackageFaqWise from "@/models/package/PackageFaq";
import PackageHighlight from "@/models/package/PackageHighlight";
import PackagePrice from "@/models/package/PackagePrice";
import Inclusion from "@/models/package/TourInfo/Inclusion";//inclusion code is here
import { NextApiRequest, NextApiResponse } from "next";

// find By Id And Update
 const packageIds= async (req: NextApiRequest, res: NextApiResponse) => {

    try {

        const { packageId } = req.query;
        if (!packageId) {
            return res.status(400).json({ message: 'Package ID is required' });
        }
        let updatedPackage
        switch (req.method) {
            case 'PUT':
                const { name, price, status, location,category } = req.body;
                updatedPackage = await Package.findByIdAndUpdate(packageId, { name, price, status, location }, { new: true });

                if (!updatedPackage) {
                    return res.status(404).json({ message: 'Package not found' });
                }
                break;

            default:
                updatedPackage = await Package.findById(packageId).populate('location');
                const associateState = await State.findById(updatedPackage.location?.state);
                const associateCountry = await Country.findById(associateState?.country);
                const highlightDetails = await PackageHighlight.findOne({ package: updatedPackage._id }, 'highlights');
                const dayDetails = await PackageDayWise.findOne({ package: updatedPackage._id }, 'days');
                const faqs = await PackageFaqWise.findOne({ package: updatedPackage._id }, 'days');
                const priceDetails = await PackagePrice.findOne({ package: updatedPackage._id });
                const inclusionDetails = await Inclusion.findOne({ package: updatedPackage._id });
                const priceDeparture = await PackageDeparture.findOne({ package: updatedPackage._id });
                //inclusion code is here
                // console.log("inclusion details show is here",updatedPackage)
                updatedPackage._doc.highlights = highlightDetails ? highlightDetails.highlights : [];
                updatedPackage._doc.days = dayDetails ? dayDetails.days : [];
                updatedPackage._doc.titles = faqs ;
                updatedPackage._doc.prices = priceDetails||priceDeparture;
                updatedPackage._doc.inclusion = inclusionDetails; //inclusion code is here
                updatedPackage._doc.associateState = associateState;
                updatedPackage._doc.associateCountry = associateCountry;
                break;
        }

        return res.status(200).json({ updatedPackage, method: req.method });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default packageIds