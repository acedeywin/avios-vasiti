import express from "express"
import expressValidator from "express-validator"
import dotenv from "dotenv-safe"
import { errorResponse, successResponse } from "./utils/helpers"
import routes from "./routes"

dotenv.config({ silent: true })

const app = express()
const PORT = process.env.PORT || 5100

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(expressValidator())

app.use("/", routes)

app.get("/", (req, res) => {
  return successResponse(res, 200, true, "Welcome to Avios")
})

app.get("*", (req, res) => {
  return errorResponse(res, 404, false, "Invalid request")
})

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }
  console.log(err)
  return errorResponse(res, 500, false, "Something went wrong")
})

app.listen(PORT, () => {
  console.log(`Serving is running on ${PORT}`)
})

export default app
