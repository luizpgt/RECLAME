import { Router } from 'express';
import * as userController from './controller';

const router = Router();

router.get('/', () => {});

router.post('/', userController.create);

router.put('/', () => {});

router.delete('/', () => {});

export default router;