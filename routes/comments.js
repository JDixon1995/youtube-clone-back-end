import express from "express";
import { addComment, deleteComment, getComments, updateComment } from "../controllers/comment.js";
import { verifyToken } from "../verifyToken.js"
const router = express.Router();

// post comment
router.post("/", verifyToken, addComment)

// delete comment
router.delete("/:id", verifyToken, deleteComment)

// update comment
router.put("/:id", verifyToken, updateComment)

// get comments
router.get("/:videoId", getComments)

export default router;