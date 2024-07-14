import Cancellation from "@/models/package/TourInfo/Cancellation";
import { NextApiRequest, NextApiResponse } from "next";
  const packageTourinfoCanAdd= async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        const { groupName,description} = req.body
        const CancellationGroupData = await Cancellation.create({
            groupName,description
        })
        return res.status(201).json({
            message: 'created Cancellation group',
            CancellationGroupData
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  packageTourinfoCanAdd