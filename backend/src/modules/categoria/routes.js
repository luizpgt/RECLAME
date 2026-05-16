import { Router } from 'express';

import * as categoryController from './controller.js';

const router = Router();

router.post('/', categoryController.create);

router.get('/read-all', categoryController.readAll);

router.get('/read/:id', categoryController.readById);

router.put('/', categoryController.update);

router.delete('/:id', categoryController.deleteById);

export default router;