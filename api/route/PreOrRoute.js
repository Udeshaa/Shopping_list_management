import express from 'express';
import { addPreorder,getAllPreorder,updatePreorder,deletePreorder,getSinglePreorder } from '../controller/PreOrController.js';

const router = express.Router();


router.post('/addPre-order', addPreorder);
router.get('/getAll-order', getAllPreorder);
router.delete('/deleteOrder/:id', deletePreorder);
router.put('/update-order/:id', updatePreorder);
router.get('/SinglePreorder/:id',getSinglePreorder );

export default router;
