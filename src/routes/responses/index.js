import { Router } from 'express';
const router = Router();
import { getResponseTeacher } from './controller';


router.get('/:id', getResponseTeacher );


export default router;