import express from "express"

import {
    createMeetingController,
    deleteMeetingController,
    getAllMeetingController,
    getMeetingByIdController,
    updateMeetingController
}
    from "../controllers/meeting.controller"

const router = express.Router();

router.post('/meeting', createMeetingController);
router.get('/meeting', getAllMeetingController);
router.get('/meeting/:id', getMeetingByIdController);
router.put('/meeting/:id', updateMeetingController);
router.delete('/meeting/:id', deleteMeetingController);

export default router;

