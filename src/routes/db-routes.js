import { Router } from "express"
import SetupDatabase from "../db/setupDatabase"

const databaseRoutes = Router()

databaseRoutes.get("/createdb", SetupDatabase.createDatabase)
databaseRoutes.get("/create-tables", SetupDatabase.createTables)

export default databaseRoutes
