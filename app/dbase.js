import mysql from "mysql2/promise";

export default async function handler(req, res) {
  // Configure your database connection
  const dbConfig = {
    host: "localhost",
    user: "root",
    password: "", // Add your MySQL root password here
    database: "credit", // Replace with your database name
  };

  try {
    // Connect to the database
    const connection = await mysql.createConnection(dbConfig);

    // Example query (fetching data)
    const [rows] = await connection.query("SELECT * FROM your_table"); // Replace "your_table" with a valid table name

    // Send response
    res.status(200).json({ success: true, data: rows });
  } catch (error) {
    console.error("Database connection error:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
}