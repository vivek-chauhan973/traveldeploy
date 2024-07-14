/**
 * Updates package information including day-wise information.
 * @param {NextApiRequest} req - The Next.js API request object.
 * @param {NextApiResponse} res - The Next.js API response object.
 * @returns {Promise<void>} - Promise representing the asynchronous operation.
 */

import Package from "@/models/Package";
import PackageDayWise from "@/models/package/PackageDayWise";
import { NextApiRequest, NextApiResponse } from "next";

 const packageDayWise= async (req: NextApiRequest, res: NextApiResponse) => {
    const { packageId } = req.query;
    const { days, information } = req.body;
//     console.log("day wise ssss",days)
//  console.log("days aaa",days);
    try {
        const [tourPackage, packageDays] = await Promise.all([
            Package.findByIdAndUpdate(packageId, { dayWiseInformation: information }),
            PackageDayWise.findOneAndUpdate({ package: packageId }, { days }, { upsert: true, new: true }),
            // console.log("days destruct",{days})
        ]);
        return res.status(201).json({ packageDays, tourPackage });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }

}
export default  packageDayWise