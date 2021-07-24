import { Router } from 'express';
const router = Router();
import { getDataUserInfo } from './controller';


router.post('/', getDataUserInfo );


export default router;