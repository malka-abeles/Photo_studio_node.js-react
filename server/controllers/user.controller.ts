import { Request, Response } from 'express';
import { IUser } from "../models/user.model";
import {createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../services/users.service"

export const createUserController = async (req: Request, res: Response) =>{
    try{
        const user: IUser = req.body;
        const newUser = await createUser(user);
        res.status(201).json(newUser);
    }
    catch(error){
        res.status(500).json({ message: 'Error creating user', error });
    }
}

export const getUserByIdController = async (req: Request, res: Response) => {
    try{
    const { id } = req.params;
    const User: IUser |null = await getUserById(id);
    if(User)
        res.status(200).json(User);
    else
        res.status(404).json({message: 'not exsist this user'});
    }
    catch(error){
        res.status(500).json({message: 'Error fetching user', error});
    }
}

export const getAllUserController = async (req: Request, res: Response) => {
    try{
    const allUser: IUser []|null = await getAllUsers();
    if(allUser.length>0)
        res.status(200).json(allUser);
    else
        res.status(404).json({message: 'not exsist user'});
    }
    catch(error){
        res.status(500).json({message: 'Error fetching user', error});
    }
}

export const updateUserController = async (req: Request, res: Response) => {
    try{
        const { id } = req.params;
        const userData: IUser = req.body;
        const newUser = await updateUser(id, userData);
        res.status(200).json(newUser);
    }
    catch(error){
        res.status(500).json({message: 'Error updating user', error});
    }
}

export const deleteUserController = async (req: Request, res: Response) => {
    try{
        const { id } = req.params;
        const deletedUser = await deleteUser(id);
        if (deletedUser) {
            res.status(200).json({ message: 'User deleted' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    }
    catch(error){
        res.status(500).json({message: 'Error deleting user', error});
    }
}
