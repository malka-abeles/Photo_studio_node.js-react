import Business, {IBusiness} from '../models/business.models';


export const createBusiness = async (businessData: IBusiness): Promise<IBusiness>  => {
    const business = new Business({
        ...businessData,
    });
    return await business.save();
};

export const getAllBusiness = async (): Promise<IBusiness []>  => {
    return await Business.find();
};

export const getBusinessById = async (id: string): Promise<IBusiness |null> => {
    return await Business.findById(id);
}

export const updateBusiness = async (id: string, business: IBusiness): Promise<IBusiness | null> =>{
    return await Business.findByIdAndUpdate(id,business, { new: true });
}

export const deleteBusiness= async (id: string): Promise<IBusiness | null> => {
    return await Business.findByIdAndDelete(id);
}
