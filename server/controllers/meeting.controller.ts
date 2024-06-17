import { Request, Response } from 'express';
import { IMeeting } from "../models/meeting.models";
import {createMeeting, deleteMeeting, getAllMeeting, getMeetingById, updateMeeting } from "../services/meeting.service"

export const createMeetingController = async (req: Request, res: Response) =>{
    try{
        const meeting: IMeeting = req.body;
        const newMeeting = await createMeeting(meeting);
        res.status(201).json(newMeeting);
    }
    catch(error){
        res.status(500).json({ message: 'Error creating meeting', error });
    }
}

export const getMeetingByIdController = async (req: Request, res: Response) => {
    try{
    const { id } = req.params;
    const Meeting: IMeeting |null = await getMeetingById(id);
    if(Meeting)
        res.status(200).json(Meeting);
    else
        res.status(404).json({message: 'not exsist this meeting'});
    }
    catch(error){
        res.status(500).json({message: 'Error fetching meeting', error});
    }
}

export const getAllMeetingController = async (req: Request, res: Response) => {
    try{
    const allMeeting: IMeeting []|null = await getAllMeeting();
    if(allMeeting.length>0)
        res.status(200).json(allMeeting);
    else
        res.status(404).json({message: 'not exsist meeting'});
    }
    catch(error){
        res.status(500).json({message: 'Error fetching meeting', error});
    }
}

export const updateMeetingController = async (req: Request, res: Response) => {
    try{
        const { id } = req.params;
        const meetingData: IMeeting = req.body;
        const newMeeting = await updateMeeting(id, meetingData);
        res.status(200).json(newMeeting);
    }
    catch(error){
        res.status(500).json({message: 'Error updating meeting', error});
    }
}

export const deleteMeetingController = async (req: Request, res: Response) => {
    try{
        const { id } = req.params;
        const deletedMeeting = await deleteMeeting(id);
        if (deletedMeeting) {
            res.status(200).json({ message: 'Meeting deleted' });
        } else {
            res.status(404).json({ message: 'Meeting not found' });
        }
    }
    catch(error){
        res.status(500).json({message: 'Error deleting meeting', error});
    }
}
