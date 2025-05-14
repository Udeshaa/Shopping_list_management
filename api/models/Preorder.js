import mongoose from 'mongoose';


const PreorderSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,

    },
    productname: {
        type: String,
        required: true,

    },
    quantity: {
        type: Number,
        required: true,
    },
    expecteddate: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

export default mongoose.model('Preorder', PreorderSchema);