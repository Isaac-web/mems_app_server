import mongoose from 'mongoose';


const postSchema = new mongoose.Schema({
    title: {
        type: String, 
        min: 3,
        max: 100, 
    }
})