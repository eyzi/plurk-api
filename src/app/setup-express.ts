import express from "express"
import cors from "cors"

export default (): express.Application => {
  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.disable('x-powered-by')
  return app
}
