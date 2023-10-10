import express from "express";
import { addComment, deleteComment, getComments, updateComment } from "../controllers/comment.js";
import { verifyToken } from "../verifyToken.js"
const router = express.Router();

router.post("/", verifyToken, addComment)
router.delete("/:id", verifyToken, deleteComment)
router.put("/:id", verifyToken, updateComment)
router.get("/:videoId", getComments)

export default router;