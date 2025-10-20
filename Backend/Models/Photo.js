import mongoose from 'mongoose';

const photoSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true, 
        trim: true,
        match:[/^[^<>]+$/, 'Title can only contain alphanumeric characters and spaces']
    },
    description: {
        type: String, 
        trim: true,
        match:[/^[^<>]*$/, 'Description can only contain alphanumeric characters, spaces, and basic punctuation']
    },
    url: {
        type: String,
        required: true,
    },

    cloudinaryId: {
        type: String,
        required: true,
},

owner:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
},

}, { timestamps: true });
const Photo=mongoose.model('Photo', photoSchema);
export default Photo;
