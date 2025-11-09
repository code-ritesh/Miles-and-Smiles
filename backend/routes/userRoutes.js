import { Router } from "express";
import { getFavorites, toggleFavorite } from "../controllers/userController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/favorites", verifyToken, getFavorites);
router.post("/favorites", verifyToken, toggleFavorite);

export default router;
