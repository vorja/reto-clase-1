
import mysql from 'mysql2/promise';
import 'dotenv/config';

const dbconn = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
});

try {
    await dbconn.connect();
    console.log('Conexión exitosa a la base de datos');

} catch (err) {
    console.log('Error al conectar a la base de datos:', err);
}

export default dbconn;