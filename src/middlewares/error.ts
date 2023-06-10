import express from 'express';

export const errorMiddleware = (
  err: any,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const { message, code } = err;
  if (code !== 500) {
    return res.status(code).json({
      success: false,
      message,
    });
  }

  return res.status(500).json({
    success: false,
    message,
  });
};
