import mongoose from "mongoose";

const Schema = mongoose.Schema;

export interface IBusiness{
    id: String ,
    name: String,
    description: String,
    userId: String,
}

const BusinessSchema = new Schema({
    id: { type: String },
    name: { type: String, required: true, maxLength: 100 },
    description: { type: String },
    userId: {type: String},
});

// Export model

const Business = mongoose.model<IBusiness>("Business", BusinessSchema);
export default Business;
