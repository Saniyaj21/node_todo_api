import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

export const Todo = mongoose.model("Todo", schema)












