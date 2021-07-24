import { Router } from 'express';
const router = Router();
import { saveQuestios, getResponseTeacher } from './controller';


router.post('/', saveQuestios );
router.get('/:id', getResponseTeacher );


export default router;