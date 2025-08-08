// src/modules//proveedor.controller.js
import {
  getAllProveedorDB,
  createProveedorDB,
  updateProveedorDB,
  deleteProveedorDB,
  getProveedorPorApellidoDB,
} from "./proveedor.model.js";

export async function getAllProveedor(req, res) {
  try {
    const proveedor = await getAllProveedorDB();
    res.status(200).json({
      status: "ok",
      data: proveedor,
    });
  } catch (error) {
    console.error('Error al listar proveedor:', error);
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}


export async function createProveedor(req, res) {
  try {
    let datosFormulario = {
      nombre: req.body.nombre,
      apellido1: req.body.apellido1,
      apellido2: req.body.apellido2,
      direccionPrincipal: req.body.direccionPrincipal,
      numeroDireccion: req.body.numeroDireccion,
      email: req.body.email,
      telefono: req.body.telefono,
      ciudad: req.body.ciudad,
      estado: 1
    };

    const resultado = await createProveedorDB(datosFormulario);
    
    res.status(201).json({
      status: "ok",
      data: resultado
    });
  } catch (error) {
    console.error('Error al crear proveedor:', error);
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}


//borrado fisico para proveedor
export async function deleteProveedor(req, res) { 
  try {
    const { codigo } = req.params;
    const resultado = await deleteProveedorDB(codigo);
    
    res.status(200).json({
      status: "ok",
      data: resultado,
    });
  } catch (error) {
    console.error('Error al eliminar proveedor:', error);
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}



//actualizar proveedor
export async function updateProveedor(req, res) {
  try {
    const { codigo } = req.params;
    const datosFormulario = {
      nombre: req.body.nombre,
      apellido1: req.body.apellido1,
      apellido2: req.body.apellido2,
      direccionPrincipal: req.body.direccionPrincipal,
      numeroDireccion: req.body.numeroDireccion,
      email: req.body.email,
      telefono: req.body.telefono,
      ciudad: req.body.ciudad
    };

    const resultado = await updateProveedorDB(codigo, datosFormulario);

    res.status(200).json({
      status: "ok",
      data: resultado
    });
  } catch (error) {
    console.error('Error al actualizar proveedor:', error);
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}


export async function createCiudadano(req, res) {
  try {
    const codigo = 'C-' + Date.now();
    let datosFormulario = {
      nombre: req.body.nombre,
      apellidos: req.body.apellidos,
      apodo: req.body.apodo,
      fecha_nacimiento: req.body.fecha_nacimiento,
      planeta_origen: req.body.planeta_origen,
      planeta_residencia: req.body.planeta_residencia,
      foto: req.file ? `/fotos/${req.file.filename}` : null,
      estado: 1
    };

    const codigoQR = await generarQR(datosFormulario, codigo);
    datosFormulario.codigo_qr = codigoQR;

    const resultado = await createCiudadanoDB(datosFormulario);
    
    res.status(201).json({
      status: "ok",
      data: resultado,
      qr: codigoQR,
    });
  } catch (error) {
    console.error('Error al crear ciudadano:', error);
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}

export async function updateCiudadano(req, res) {
  try {
    const { codigo } = req.params;
    const datosFormulario = {
      nombre: req.body.nombre,
      apellidos: req.body.apellidos,
      apodo: req.body.apodo,
      fecha_nacimiento: req.body.fecha_nacimiento,
      planeta_origen: req.body.planeta_origen,
      planeta_residencia: req.body.planeta_residencia,
    };

    if (req.file) {
      datosFormulario.foto = `/fotos/${req.file.filename}`;
    }

    const nuevoQR = await generarQR(datosFormulario, codigo);
    datosFormulario.codigo_qr = nuevoQR;

    const resultado = await updateCiudadanoDB(codigo, datosFormulario);

    res.status(200).json({
      status: "ok",
      data: resultado,
      qr_actualizado: nuevoQR,
    });
  } catch (error) {
    console.error('Error al actualizar ciudadano:', error);
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}

export async function deleteCiudadano(req, res) {
  try {
    const { codigo } = req.params;
    const resultado = await deleteCiudadanoDB(codigo);
    
    res.status(200).json({
      status: "ok",
      data: resultado,
    });
  } catch (error) {
    console.error('Error al eliminar ciudadano:', error);
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}



export async function getProveedorPorApellido(req, res) {
  try {
    const { apellido1 } = req.body;
    const proveedor = await getProveedorPorApellidoDB(apellido1);

    res.status(200).json({
      status: "ok",
      data: proveedor,
    });
  } catch (error) {
    console.error('Error al buscar proveedor por apellido:', error);
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}