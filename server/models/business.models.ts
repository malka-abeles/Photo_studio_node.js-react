import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BusinessSchema = new Schema({
    _id:mongoose.Schema.Types.ObjectId,
    id: { type: String },
    name: { type: String, required: true, maxLength: 100 },
    description: { type: String },
    userId: {type: String}
});

// Export model
module.exports = mongoose.model("Business", BusinessSchema);
