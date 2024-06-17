import { Request, Response } from 'express';
import { IService } from "../models/service.models";
import {createService, deleteService, getAllService, getServiceById, updateService } from "../services/service.service"

export const createServiceController = async (req: Request, res: Response) =>{
    try{
        const service: IService = req.body;
        const newService = await createService(service);
        res.status(201).json(newService);
    }
    catch(error){
        res.status(500).json({ message: 'Error creating service', error });
    }
}

export const getServiceByIdController = async (req: Request, res: Response) => {
    try{
    const { id } = req.params;
    const Service: IService |null = await getServiceById(id);
    if(Service)
        res.status(200).json(Service);
    else
        res.status(404).json({message: 'not exsist this service'});
    }
    catch(error){
        res.status(500).json({message: 'Error fetching service', error});
    }
}

export const getAllServiceController = async (req: Request, res: Response) => {
    try{
    const allService: IService []|null = await getAllService();
    if(allService.length>0)
        res.status(200).json(allService);
    else
        res.status(404).json({message: 'not exsist service'});
    }
    catch(error){
        res.status(500).json({message: 'Error fetching service', error});
    }
}

export const updateServiceController = async (req: Request, res: Response) => {
    try{
        const { id } = req.params;
        const serviceData: IService = req.body;
        const newService = await updateService(id, serviceData);
        res.status(200).json(newService);
    }
    catch(error){
        res.status(500).json({message: 'Error updating service', error});
    }
}

export const deleteServiceController = async (req: Request, res: Response) => {
    try{
        const { id } = req.params;
        const deletedService = await deleteService(id);
        if (deletedService) {
            res.status(200).json({ message: 'Service deleted' });
        } else {
            res.status(404).json({ message: 'Service not found' });
        }
    }
    catch(error){
        res.status(500).json({message: 'Error deleting service', error});
    }
}
