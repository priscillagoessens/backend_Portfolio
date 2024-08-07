import express from "express";
import mongoose from "mongoose";

import Projet from "../models/projets.js";
import { getProjets } from "../controllers/projet.controller.js";

const router = express.Router();

router.get("/", getProjets)

export default router