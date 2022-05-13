import { Request } from "express";
export default (req: Request, key: string, secret: string) => {
  req.app.locals[key] = secret
}
  