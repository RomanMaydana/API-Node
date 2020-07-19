import { Router } from "express";

import {
  getUsuarios,
  creaUsuarios,
  updateUsuario,
  deleteUsuario,
} from "../controllers/usuario.controller";

const router = Router();

router.get("/", getUsuarios);
router.post("/", creaUsuarios);
router.patch("/:id", updateUsuario);
router.delete("/:id", deleteUsuario);
export default router;
