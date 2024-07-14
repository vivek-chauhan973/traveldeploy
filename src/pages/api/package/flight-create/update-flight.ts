import FlightBookingSchema from "@/models/package/FlightBooking";
import { NextApiRequest, NextApiResponse } from "next";

 const packageFlightUpdate= async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'PUT') {
            return res.status(405).json({ message: 'Method Not Allowed' });
        }

        const { id } = req.query;
        const { start, end } = req.body;

        if (!id) {
            return res.status(400).json({ message: 'Missing flight booking ID' });
        }

        const updatedFlightBooking = await FlightBookingSchema.findByIdAndUpdate(
            id,
            { start, end },
            { new: true, runValidators: true }
        );

        if (!updatedFlightBooking) {
            return res.status(404).json({ message: 'Flight Booking not found' });
        }

        return res.status(200).json({
            message: 'Flight Booking updated successfully',
            flightBooking: updatedFlightBooking
        });
    } catch (error) {
        console.error('Error handling API request:', error);
        return res.status(500).json({ message: error.message });
    }
}
export default  packageFlightUpdate