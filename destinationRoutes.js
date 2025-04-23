import express from "express";
import { addDestination, getDestinations } from "../controllers/destinationController.js";

const router = express.Router();
router.post("/", addDestination);
router.get("/", getDestinations);

export default router;
