import express from "express";
import { getAllTodo,getTodo, createTodo, updateTodo, deleteTodo} from '../controllers/todo.js'

const router = express.Router();

router.get("/",getAllTodo)
router.post("/", createTodo)
router.get("/:id", getTodo)
router.patch("/:id", updateTodo)
router.delete("/:id", deleteTodo)

export default router;