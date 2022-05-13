import { Request } from "express";
export default (req: Request, key: string) => req.app.locals[key]