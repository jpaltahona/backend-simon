import { Router } from 'express';
const router = Router();
import { getFiltersTeachers, getAllTeacher } from './controller';

router.get('/allTeachers', getAllTeacher );
router.post('/filters', getFiltersTeachers);

export default router;