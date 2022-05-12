import express from "express"
import { initialize as initializeOpenapi } from "express-openapi"
import { readFileSync } from "fs"
import { resolve } from "path"
import { load } from "js-yaml"
import * as operations from "../operations"
import oAuthenticated from "../middlewares/oauthenticated"
import createOauth from "../services/oauth/create-oauth"

export default (app: express.Application) => {
  const { CONSUMER_KEY, CONSUMER_SECRET, CALLBACK_URL } = process.env
  if (!CONSUMER_KEY || !CONSUMER_SECRET)
    throw new Error("Consumer key and secret are required")
  app.locals.oauth = createOauth(CONSUMER_KEY, CONSUMER_SECRET, CALLBACK_URL)

  const apiDocFilePath = resolve(__dirname, "..", "..", "lib", "docs", "openapi.yml")
  const apiDocContent = readFileSync(apiDocFilePath, "utf8")
  const apiDocJson = load(apiDocContent) as any
  initializeOpenapi({
    app,
    apiDoc: {
      ...apiDocJson,
      "x-express-openapi-additional-middleware": [
        oAuthenticated
      ],
    },
    docsPath: "/oas3",
    operations,
  })
  return app
}