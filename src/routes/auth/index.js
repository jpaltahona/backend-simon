import { Router } from 'express';
const router = Router();
import { login } from './controller';


router.post('/', login );


export default router;