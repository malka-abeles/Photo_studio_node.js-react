import Meeting, {IMeeting} from '../models/meeting.models';


export const createMeeting = async (meetingData: IMeeting): Promise<IMeeting>  => {
    const meeting = new Meeting({
        ...meetingData,
    });
    return await meeting.save();
};

export const getAllMeeting = async (): Promise<IMeeting []>  => {
    return await Meeting.find();
};

export const getMeetingById = async (id: string): Promise<IMeeting |null> => {
    return await Meeting.findById(id);
}

export const updateMeeting = async (id: string, meeting: IMeeting): Promise<IMeeting | null> =>{
    return await Meeting.findByIdAndUpdate(id,meeting, { new: true });
}

export const deleteMeeting= async (id: string): Promise<IMeeting | null> => {
    return await Meeting.findByIdAndDelete(id);
}
