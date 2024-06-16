import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id:mongoose.Schema.Types.ObjectId,
    id: { type: String },
    name: { type: String, required: true, maxLength: 100 },
    email: { type: String },
    password: { type: String },
});

// Export model
module.exports = mongoose.model("User", UserSchema);
