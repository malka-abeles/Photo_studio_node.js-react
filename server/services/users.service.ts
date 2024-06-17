import User , { IUser } from "../models/user.model";



export const createUser = async (userData: IUser): Promise<IUser> => {
    const user = new User({
        ...userData
    });
    return await user.save();
};

export const getAllUsers = async (): Promise<IUser []> => {
    return await User.find();
};

export const getUserById = async (id: string): Promise<IUser | null> => {
    return await User.findById(id);
};

export const updateUser = async (id: string, userData: Partial<IUser>): Promise<IUser| null> => {
    return await User.findByIdAndUpdate(id, userData, { new: true });
};

export const deleteUser = async (id: string): Promise<IUser|null> => {
    return await User.findByIdAndDelete(id);
};
