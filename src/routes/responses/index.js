import { Router } from 'express';
const router = Router();
import { getResponseTeacher, getAllTeacher } from './controller';


router.get('/:id', getResponseTeacher );
router.post('/all', getAllTeacher );

export default router;