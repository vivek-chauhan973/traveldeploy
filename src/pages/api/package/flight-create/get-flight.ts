import FlightBookingSchema from "@/models/package/FlightBooking";
import { NextApiRequest, NextApiResponse } from "next";

 const packageFlightGet= async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        
        const flightBooking = await FlightBookingSchema.find();

        return res.status(200).json({
            message: 'flight booking find Successful',
            flightBooking
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  packageFlightGet