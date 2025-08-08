// src/modules/ciudadanos/ciudadano.model.js
import dbconn from "../../config/dbconeccion.js"; // Importar la conexión a la base de datos


export async function getAllProveedorDB() {
  const [rows] = await dbconn.query("SELECT * FROM proveedor ORDER BY apellido1 DESC");
  return rows;
}


export async function createProveedorDB(ProveedorData) {
  const [result] = await dbconn.query("INSERT INTO proveedor SET ?", [ProveedorData]);
  return result;
}

export async function updateProveedorDB(codigo, ProveedorData) {
  const [result] = await dbconn.query("UPDATE proveedor SET ? WHERE codigo = ?", [
    ProveedorData,
    codigo,
  ]);
  return result;
}

export async function deleteProveedorDB(codigo) {
  const [result] = await dbconn.query(
    "DELETE From proveedor WHERE codigo = ?",
    [codigo]
  );
  return result;
}



export async function getProveedorPorApellidoDB(apellido1) {
  const [rows] = await dbconn.query("SELECT * FROM proveedor WHERE apellido1 = ?", [apellido1]);
  return rows;
}