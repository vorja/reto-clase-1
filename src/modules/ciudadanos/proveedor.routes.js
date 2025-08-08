// src/modules/ciudadanos/ciudadano.routes.js
import express from "express";
import {
  getAllProveedor,
  getProveedorPorApellido,
  createProveedor,
  updateProveedor,
  deleteProveedor,
} from "./proveedor.controller.js";

const router = express.Router();

// Rutas para Ciudadanos
router.get("/listartodos", getAllProveedor);
router.post("/crear", createProveedor);
router.put("/actualizar/:codigo", updateProveedor);
router.delete("/eliminar/:codigo", deleteProveedor);
router.post("/buscarXapellido", getProveedorPorApellido)

export default router;