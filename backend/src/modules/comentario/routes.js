import { Router } from 'express';

import * as commentController from './controller.js';

const router = Router();

router.post('/', commentController.create);

router.get('/read-all', commentController.readAll);

router.get('/read/:id', commentController.readById);

router.put('/', commentController.update);

router.delete('/:id', commentController.deleteById);

export default router;