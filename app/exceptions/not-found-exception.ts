export class NotFoundException extends Error {
  status: number;

  constructor(message = 'Not Found') {
    super(message);
    this.status = 404;
    this.name = 'NotFoundException';
  }
}
