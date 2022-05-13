import { Request } from "express";
export default (req: Request, key: string) => {
  delete req.app.locals[key]
}
  