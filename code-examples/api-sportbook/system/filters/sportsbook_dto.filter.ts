import { SportsbookErrors, SportsbookException } from "@app/shared/api/exceptions/sportbook.exception";
import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter } from "@nestjs/common";
import { isArray } from "class-validator";
import { Response } from "express";

@Catch(BadRequestException)
export class SportsbookDtoFilter implements ExceptionFilter {

  catch(exception: BadRequestException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (exception instanceof SportsbookException) {
      response
        .status(exception.getStatus())
        .json(exception.getResponse());
      return;
    }

    const _ex = exception.getResponse();

    let message = 'Client passed invalid request parameters';
    if (typeof _ex === 'object' && 'message' in _ex) {
      message = isArray(_ex.message) 
        ? (_ex.message.length > 0 ? _ex.message[0] : message) 
        : (_ex.message as string);
    }

    const apiException = new SportsbookException(SportsbookErrors.invalid_request, message);
    response
      .status(apiException.getStatus())
      .json(apiException.getResponse());
  }
}