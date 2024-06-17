import mongoose from "mongoose";

const Schema = mongoose.Schema;

export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
}

const UserSchema = new Schema({
    id: { type: String },
    name: { type: String, required: true, maxLength: 100 },
    email: { type: String },
    password: { type: String },
});

// Export model
const User = mongoose.model<IUser>('User', UserSchema);
export default User;
