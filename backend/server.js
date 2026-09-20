import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const { Pool } = pg;

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});


app.get("/api/tasks", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM tasks ORDER BY created_at DESC"
    );

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});


app.post("/api/tasks", async (req, res) => {
  try {
    const { title } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({
        error: "Task title is required",
      });
    }

    const result = await pool.query(
      `INSERT INTO tasks (title)
       VALUES ($1)
       RETURNING *`,
      [title.trim()]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create task" });
  }
});


app.patch("/api/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;

    const result = await pool.query(
      `UPDATE tasks
       SET completed = $1
       WHERE id = $2
       RETURNING *`,
      [completed, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: "Task not found",
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update task" });
  }
});


app.delete("/api/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM tasks WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: "Task not found",
      });
    }

    res.json({
      message: "Task deleted",
      task: result.rows[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete task" });
  }
});


const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});