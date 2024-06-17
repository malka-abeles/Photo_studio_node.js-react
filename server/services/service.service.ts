import Service, {IService} from '../models/service.models';


export const createBuiness = async (serviceData: IService): Promise<IService>  => {
    const service = new Service({
        ...serviceData,
    });
    return await service.save();
};

export const getAllService = async (): Promise<IService []>  => {
    return await Service.find();
};

export const getServiceById = async (id: string): Promise<IService |null> => {
    return await Service.findById(id);
}

export const updateService = async (id: string, service: IService): Promise<IService | null> =>{
    return await Service.findByIdAndUpdate(id,service, { new: true });
}

export const deleteService= async (id: string): Promise<IService | null> => {
    return await Service.findByIdAndDelete(id);
}
