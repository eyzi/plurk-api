import express from "express"
import { serve as swaggerServe, setup as swaggerSetup } from "swagger-ui-express"

export default (app: express.Application) => {
  app.use("/docs", swaggerServe, swaggerSetup(undefined, {
    customSiteTitle: "Plurk API",
    customfavIcon: "https://s.plurk.com/be45b40bbfce01bb2d8a.png",
    customCss: 
      '.swagger-container > .topbar, .swagger-container' +
      '> .wrapper, .info > .main > .link { display: none }',
    swaggerOptions: {
      url: "/oas3",
      displayOperationId: true,
    },
  }))
  return app
}
