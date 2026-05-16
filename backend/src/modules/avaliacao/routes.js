import { Router } from "express";

import * as ratingController from "./controller.js";

const router = Router();

router.post('/', ratingController.create);

router.get('/read-all', ratingController.readAll);

router.get('/read/:id', ratingController.readById);

router.delete('/:id', ratingController.deleteById);

export default router;