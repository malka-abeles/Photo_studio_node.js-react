import mongoose from "mongoose";

const Schema = mongoose.Schema;

enum Status  {
    Scheduled = 'SCHEDULED',
    Completed = 'COMPLETED',
    Cancelled = 'CANCELLED',
    InProgress = 'IN_PROGRESS',
}

const MeetingSchema = new Schema({
    _id:mongoose.Schema.Types.ObjectId,
    id: { type: String },
    status: {type: String, enum: Object.values(Status) },
    serviceId:{type: String},
    userId: { type: String },
});

// Export model
module.exports = mongoose.model("Meeting", MeetingSchema);
