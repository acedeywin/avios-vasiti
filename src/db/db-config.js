import mysql from "mysql"
import dotenv from "dotenv-safe"
import express from "express"

dotenv.config({ silent: true })

//const app = express()

const db = mysql.createConnection({
  host: "localhost",
  user: "acedeywin",
  password: "12345",
  database: "vasiti",
})

db.connect(err => {
  if (err) throw err
  console.log("Database connected...")
})

export default {
  query(sql, params) {
    return new Promise((resolve, reject) => {
      try {
        const setup = db.query(sql, params)

        if (setup) resolve(setup)
      } catch (err) {
        reject(err)
      }
    })
  },
}
