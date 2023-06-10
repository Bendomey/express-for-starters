export class BadRequestError extends Error {
  public code = 400;
  constructor(message: string) {
    super();
    this.message = message;
  }
}

export class NotFoundError extends Error {
    public code = 404;
    constructor(message: string) {
      super();
      this.message = message;
    }
}
