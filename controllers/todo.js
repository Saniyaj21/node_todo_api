import { Todo } from '../models/todo.js'


export const getAllTodo = async (req, res) => {
    try {
        const allTodos= await Todo.find({})
        res.status(200).json({
            success: true,
            allTodos,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Can't get todos"
        });
    }
}

export const createTodo = async(req, res) => {
    try {
        const { title} = req.body;

        await Todo.create({
            title,
        });

        res.status(201).json({
            success: true,
            message: "Todo added Successfully",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Can't create todos"
        });
    }
}

export const getTodo = async (req, res) => {
    const { id } = req.params
    try {
        const todo = await Todo.find({_id:id})
        res.status(200).json({
            success: true,
            todo,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Can't get todo"
        });
    }
}

export const updateTodo =async (req, res) => {
    const { id } = req.params
    try {
        const todo = await Todo.findOneAndUpdate({ _id: id }, req.body, { new: true }) // return updated todo
        res.status(200).json(
            {
                success: true,
                todo,
            })
    } catch (error) {
        res.status(400).json(error)
    }
}
export const deleteTodo =async (req, res) => {
    const { id } = req.params
    try {
        const todo = await Todo.findOneAndDelete({ _id: id })
        res.status(200).json({
            success: true,
            todo,
        })
    } catch (error) {
        res.status(400).json(error)
    }
}