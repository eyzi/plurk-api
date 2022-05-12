import express from "express"

export const logCallback = (port: number) => {
  console.log(`API server running at port ${ port }\nhttp://localhost:${port}`)
}

export default (port: string | number = 80) =>
  (app: express.Application) => {
    const parsedPort = +port
    app.listen(parsedPort, () => logCallback(parsedPort))
    return app
  }
