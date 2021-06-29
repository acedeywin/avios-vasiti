import pool from "./db-config"

class SetupDatabase {
  static async createDatabase(req, res) {
    const sql = `CREATE DATABASE vasiti;`

    await pool.query(sql).then(() => {
      return res.send("Database created...")
    })
  }

  static async createTables(req, res) {
    const sql = `
 
  CREATE TABLE IF NOT EXISTS product (
    p_id BIGINT NOT NULL PRIMARY KEY,
    p_uuid VARCHAR(250) UNIQUE NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    product_description VARCHAR(250) NOT NULL,
    product_varieties VARCHAR(250) NOT NULL,
    date_uploaded TIMESTAMP NOT NULL DEFAULT now(), 
    date_edited TIMESTAMP NOT NULL DEFAULT now()
);
`
    await pool.query(sql).then(() => {
      return res.send("Tables created...")
    })
  }
}

export default SetupDatabase
