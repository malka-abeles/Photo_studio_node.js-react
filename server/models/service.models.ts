import mongoose from "mongoose";

const Schema = mongoose.Schema;

export interface IService{
    id: String ,
    name: String,
    description: String ,
    userId: String
}

const ServiceSchema = new Schema({
    id: { type: String },
    name: { type: String, required: true, maxLength: 100 },
    description: { type: String },
    userId: {type: String}
});

// Export model
const Service = mongoose.model<IService>("Service", ServiceSchema);
export default Service;
