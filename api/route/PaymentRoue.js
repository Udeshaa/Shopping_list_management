import express from 'express';
import { addpayment,getAllPayments,getSinglePayment } from '../controller/PaymentController.js';

const router = express.Router();


router.post('/addpayment', addpayment);
router.get('/gettallpayment', getAllPayments);
router.get('/get-single-payment/:id', getSinglePayment);

export default router;
