import express from "express"

import {
    createBuinessController,
    deleteBusinessController,
    getAllBusinessController,
    getBusinessByIdController,
    updateBusinessController
}
    from "../controllers/business.controller"

const router = express.Router();

router.post('/buiness', createBuinessController);
router.get('/buiness', getAllBusinessController);
router.get('/buiness/:id', getBusinessByIdController);
router.put('/buiness/:id', updateBusinessController);
router.delete('/buiness/:id', deleteBusinessController);

export default router;

