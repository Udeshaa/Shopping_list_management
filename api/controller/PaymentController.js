import Payment from '../models/Payment.js';

export const addpayment = async (req, res) => {
  const { fullName, cartItems, totalAmount, paymentMethod, cardNumber, cardCVC, cardExpiry,date, phone,termsAccepted } = req.body;

  try {

    if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
      return res.status(400).json({ message: 'Cart items are required.' });
    }
    if (totalAmount === undefined || totalAmount < 0) {
      return res.status(400).json({ message: 'Total amount is invalid.' });
    }


    const payment = new Payment({
      fullName,
      cartItems,
      totalAmount,
      paymentMethod,
      cardNumber,
      cardCVC,
      cardExpiry,
      date,
      phone,
      termsAccepted,
    });


    await payment.save();


    res.status(201).json({ message: 'Payment processed successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error processing payment' });
  }
};

export const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.status(200).json(payments);
  } catch (error) {
    console.error("Error fetching payments:", error);
    res.status(500).json({ message: "Server error while retrieving payments" });
  }
};


export const getSinglePayment = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);

    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }

    res.status(200).json(payment);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};