import { Router } from 'express';
import * as complaintController from './controller.js';

const router = Router();

router.post('/', complaintController.create);

router.get('/read-all', complaintController.readAll);

router.get('/read/:id', complaintController.readById);

router.put('/', complaintController.update);

router.delete('/delete/:id', complaintController.deleteById);

export default router;