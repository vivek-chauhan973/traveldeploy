import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const packageMasterCategory = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
},
    {
        timestamps: true,
    }
);

const PackageMasterCategory = mongoose.models.PackageMasterCategory || mongoose.model('PackageMasterCategory', packageMasterCategory)

export default PackageMasterCategory;