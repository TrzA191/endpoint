import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
    host: '172.29.10.40',
    port: 3306,
    user: 'Fury',
    password: '12345',
    database: 'Microservicio'
});

async function checkConnection() {
    try {
        const connection = await pool.getConnection();
        console.log('Connected to MySQL');
        connection.release();
    } catch (err) {
        console.error('Error connecting to MySQL', err);
    }
}

checkConnection();

export default pool;
