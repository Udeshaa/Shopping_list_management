import Preorder from '../models/Preorder.js';


export const addPreorder = async (req, res) => {
  try {
    const { fullname, email, productname, quantity, expecteddate, notes } = req.body;

    const newPreorder = new Preorder({
      fullname,
      email,
      productname,
      quantity,
      expecteddate,
      notes
    });

    await newPreorder.save();
    res.status(201).json({ message: 'Preorder added successfully', preorder: newPreorder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding preorder' });
  }
};

export const getAllPreorder = async (req, res) => {
  try {
    const preorder = await Preorder.find();
    res.status(200).json(preorder);
  } catch (error) {
    console.error("Error fetching preorder:", error);
    res.status(500).json({ message: "Server error while retrieving payments" });
  }
};



export const updatePreorder = async (req, res) => {
  try {
    const preorderId = req.params.id;
    const updatedData = req.body;

    const updatedPreorder = await Preorder.findByIdAndUpdate(preorderId, updatedData, {
      new: true,
      runValidators: true
    });

    if (!updatedPreorder) {
      return res.status(404).json({ message: 'Preorder not found' });
    }

    res.status(200).json({ message: 'Preorder updated successfully', preorder: updatedPreorder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating preorder' });
  }
};


export const deletePreorder = async (req, res) => {
  try {
    const preorderId = req.params.id;

    const deleted = await Preorder.findByIdAndDelete(preorderId);

    if (!deleted) {
      return res.status(404).json({ message: 'Preorder not found' });
    }

    res.status(200).json({ message: 'Preorder deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting preorder' });
  }
};

export const getSinglePreorder = async (req, res) => {
  const { id } = req.params;

  try {
    const preorder = await Preorder.findById(id);
    if (!preorder) {
      return res.status(404).json({ message: "Preorder not found" });
    }
    res.status(200).json(preorder);
  } catch (error) {
    console.error("Error fetching preorder:", error);
    res.status(500).json({ message: "Server error" });
  }
};
