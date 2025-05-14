import express from 'express';
import { addUser, loginUser} from '../controller/UserController.js';

const router = express.Router();


router.post('/user-register', addUser);


router.post('/user-login', loginUser);

export default router;
