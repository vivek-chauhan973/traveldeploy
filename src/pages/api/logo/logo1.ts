import multer from 'multer';
import path from 'path';
import fs from 'fs';
import dbConnect from '@/utils/db'; // Adjust path as per your project structure
import File from '@/models/logo/Main'; // Adjust path as per your project structure
import { NextApiRequest, NextApiResponse } from 'next';

const uploadDirectory = './public/uploads/logo'; // Define your upload directory

// Ensure upload directory exists
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true });
}

const storage = multer.diskStorage({
  destination: uploadDirectory,
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const fileName = `${file.fieldname}-${Date.now()}${ext}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

const apiRoute = async (req:NextApiRequest, res:NextApiResponse) => {
  await dbConnect(); // Ensure database connection

  if (req.method === 'POST') {
    upload.single('file')(req, file, async (err) => {
      if (err instanceof multer.MulterError) {
        console.error('Multer error:', err);
        return res.status(500).json({ error: 'File upload failed' });
      } else if (err) {
        console.error('Unknown error during file upload:', err);
        return res.status(500).json({ error: 'File upload failed' });
      }

      const { title, alt } = req.body;
      const fileData = req.file ? {
        title,
        alt,
        filename: req.file.filename,
        path: `/uploads/logo/${req.file.filename}`,
      } : {
        title,
        alt,
      };

      try {
        const existingFile = await File.findOne({});
        if (existingFile) {
          // Update the existing entry
          const updatedFile = await File.findOneAndUpdate(
            { _id: existingFile._id },
            { $set: fileData },
            { new: true }
          );
          return res.status(200).json({ data: updatedFile });
        } else {
          // Create a new entry
          const file = new File(fileData);
          await file.save();
          return res.status(200).json({ data: file });
        }
      } catch (error) {
        console.error('Error updating or saving file:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  } else if (req.method === 'GET') {
    try {
      const files = await File.find({});
      return res.status(200).json({ data: files });
    } catch (error) {
      console.error('Error fetching files:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
};

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Ensure to disable default bodyParser
  },
};
