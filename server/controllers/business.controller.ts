import { Request, Response } from 'express';
import { IBusiness } from "../models/business.models";
import {createBusiness, deleteBusiness, getAllBusiness, getBusinessById, updateBusiness } from "../services/business.service"

export const createBuinessController = async (req: Request, res: Response) =>{
    try{
        const business: IBusiness = req.body;
        const newBusiness = await createBusiness(business);
        res.status(201).json(newBusiness);
    }
    catch(error){
        res.status(500).json({ message: 'Error creating business', error });
    }
}

export const getBusinessByIdController = async (req: Request, res: Response) => {
    try{
    const { id } = req.params;
    const Business: IBusiness |null = await getBusinessById(id);
    if(Business)
        res.status(200).json(Business);
    else
        res.status(404).json({message: 'not exsist this business'});
    }
    catch(error){
        res.status(500).json({message: 'Error fetching business', error});
    }
}

export const getAllBusinessController = async (req: Request, res: Response) => {
    try{
    const allBusiness: IBusiness []|null = await getAllBusiness();
    if(allBusiness.length>0)
        res.status(200).json(allBusiness);
    else
        res.status(404).json({message: 'not exsist business'});
    }
    catch(error){
        res.status(500).json({message: 'Error fetching business', error});
    }
}

export const updateBusinessController = async (req: Request, res: Response) => {
    try{
        const { id } = req.params;
        const businessData: IBusiness = req.body;
        const newBusiness = await updateBusiness(id, businessData);
        res.status(200).json(newBusiness);
    }
    catch(error){
        res.status(500).json({message: 'Error updating business', error});
    }
}

export const deleteBusinessController = async (req: Request, res: Response) => {
    try{
        const { id } = req.params;
        const deletedBusiness = await deleteBusiness(id);
        if (deletedBusiness) {
            res.status(200).json({ message: 'Business deleted' });
        } else {
            res.status(404).json({ message: 'Business not found' });
        }
    }
    catch(error){
        res.status(500).json({message: 'Error deleting business', error});
    }
}
