import { Router } from 'express';
const router = Router();
import { getResponseTeacher, getAllTeacher } from './controller';


router.get('/allTeachers', getAllTeacher );

export default router;