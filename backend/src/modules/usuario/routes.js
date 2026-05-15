import { Router } from 'express';

import * as userController from './controller.js';

const router = Router();

router.post('/', userController.create);

router.get('/read-all', userController.readAll);

router.get('/read/:id', userController.readById);

router.put('/', userController.update);

router.put('/update-password', userController.updatePassword);

router.delete('/delete/:id', userController.deleteById);

export default router;