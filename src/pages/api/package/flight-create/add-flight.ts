import FlightBookingSchema from "@/models/package/FlightBooking";
import { NextApiRequest, NextApiResponse } from "next";
 const packageFlightAdd= async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        const { start,end } = req.body
        // console.log("booking schema request body",req.body)
        const flightBooking = await FlightBookingSchema.create({
            // faqheading
            start,
            end
        })
        return res.status(201).json({
            message: 'created new fligh booking',
            flightBooking
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  packageFlightAdd