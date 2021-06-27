import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthentication(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(
      token,
      "cf0ae2f97f7f852f8cdede8ac4ccfc21" // generated with `md5sum`
    ) as IPayload;

    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }
}