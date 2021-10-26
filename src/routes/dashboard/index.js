import { Router } from 'express';
const router = Router();
import { getFiltersTeachers, getAllTeacher, exportData } from './controller';

router.get('/allTeachers', getAllTeacher );
router.post('/filters', getFiltersTeachers);
router.post('/exports', exportData);

export default router;
