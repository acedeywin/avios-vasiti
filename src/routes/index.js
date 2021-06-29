import express from "express"
import databaseRoutes from "./db-routes"

const routes = express.Router()

routes.use("/api/v1", databaseRoutes)

export default routes
