import Exclusion from "@/models/package/TourInfo/Exclusion";
import { NextApiRequest, NextApiResponse } from "next";
 const packageTourinfoExEdit= async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        const { group_id, groupName, description } = req.body;

        // Find the Exclusion group by ID and update it
        const ExclusionGroupData = await Exclusion.findByIdAndUpdate(
            group_id,
            { groupName, description },
            { new: true } // Return the updated document
        );

        if (!ExclusionGroupData) {
            return res.status(404).json({ message: 'Exclusion group not found' });
        }

        return res.status(200).json({
            message: 'Exclusion group updated successfully',
            ExclusionGroupData
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  packageTourinfoExEdit