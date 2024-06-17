import express from "express"

import {
    createServiceController,
    deleteServiceController,
    getAllServiceController,
    getServiceByIdController,
    updateServiceController,
}
    from "../controllers/service.controller"

const router = express.Router();

router.post('/service', createServiceController);
router.get('/service', getAllServiceController);
router.get('/service/:id', getServiceByIdController);
router.put('/service/:id', updateServiceController);
router.delete('/service/:id', deleteServiceController);

export default router;

