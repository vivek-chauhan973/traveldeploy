import FlightBookingSchema from "@/models/package/FlightBooking";
import { NextApiRequest, NextApiResponse } from "next";

 const packageFlightDelete=async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }
        const { flightBooking_id } = req.body; 
        await FlightBookingSchema.findByIdAndDelete(flightBooking_id)
        return res.status(200).json({ message: 'Flight Booking deleted' });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  packageFlightDelete