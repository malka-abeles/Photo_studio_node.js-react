import mongoose from "mongoose";

const Schema = mongoose.Schema;

enum Status  {
    Scheduled = 'SCHEDULED',
    Completed = 'COMPLETED',
    Cancelled = 'CANCELLED',
    InProgress = 'IN_PROGRESS',
}

export interface IMeeting{
    id: String,
    status: Status,
    serviceId: String,
    userId: String,
}

const MeetingSchema = new Schema({
    id: { type: String },
    status: {type: String, enum: Object.values(Status) },
    serviceId:{type: String},
    userId: { type: String },
});

// Export model
const Meeting = mongoose.model<IMeeting>("Meeting", MeetingSchema);
export default Meeting;