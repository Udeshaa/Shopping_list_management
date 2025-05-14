import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  cartItems: [
    {
      item: { type: String, required: true },
      price: { type: Number, required: true },
      amount: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
  paymentMethod: { type: String, required: true },
  cardNumber: { type: String, required: true },
  cardCVC: { type: String, required: true },
  cardExpiry: { type: String, required: true }, 
  date:{type:String,required:true},
  phone:{type:String,required:true},
  termsAccepted: { type: Boolean, required: true },
});

export default mongoose.model('Payment', paymentSchema);
