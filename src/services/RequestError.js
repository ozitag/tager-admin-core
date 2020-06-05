export default class RequestError extends Error {
  constructor(status, body) {
    super(JSON.stringify({ status, body }, null, 2));

    this.status = status;
    this.body = body;

    console.error(this);
  }
}
