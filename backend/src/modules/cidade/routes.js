import { Router } from 'express';

import * as cityController from './controller.js';

const router = Router();

router.post('/', cityController.create);

router.get('/read-all', cityController.readAll);

router.get('/read/:id', cityController.readById);

router.put('/', cityController.update);

export default router;