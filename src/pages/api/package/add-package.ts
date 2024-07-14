import Package from "@/models/Package"
import { NextApiRequest, NextApiResponse } from "next";

 const addPackage= async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }
        const { name, price, status, location, category } = req.body;
        const missingFields = [];
        if (!name) missingFields.push('name');
        if (!price) missingFields.push('price');
        // if (!status) missingFields.push('status');
        // if (!location) missingFields.push('location');
        // if (!category) missingFields.push('category');
        if (missingFields.length > 0) {
            return res.status(400).json({ message: `Missing required fields: ${missingFields.join(', ')}` });
        }
        const url = name.replace(/[^\w\s]/gi, '-').toLowerCase().replace(/\s+/g, '-');
        const packageBasic = await Package.create({ name, price, status, url, location, category })
        console.log('Package created', packageBasic)
        return res.status(201).json({ message: 'Package created', packageBasic });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default addPackage