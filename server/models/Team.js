import mongoose, { Mongoose } from "mongoose";

const TeamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    tags: [String],
    tools: [
        {
            name: String,
            icon: String,
            link: String,
        },
    ],
    members: [
        {
            userId: String,
            role: String,
            access: String,
        },
    ],
    img: String,
}, { timestamps: true });

export default mongoose.model("Team", TeamSchema);
