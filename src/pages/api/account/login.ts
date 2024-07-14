import User from "@/models/User";
import connectToDatabase from "@/utils/db";
import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from "next";

connectToDatabase()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        try {

            const user = await User.findOne({ username });

            if (!user || !(await user.comparePassword(password))) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            const token = jwt.sign({ userId: user._id, username: user.username }, "secretKey", { expiresIn: '1h' });

            res.status(200).json({ message: 'User logged in successfully', token, user });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}