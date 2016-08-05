"use strict";

const httpErrors = {
  BadRequest: BadRequest,
  Forbidden: Forbidden,
  NotFound: NotFound,
  Conflict: Conflict
};

function BadRequest (message, inner) {
  HttpError.call(this, message, inner, 400);
}

function Forbidden (message, inner) {
  HttpError.call(this, message, inner, 403);
}

function NotFound (message, inner) {
  HttpError.call(this, message, inner, 404);
}

function Conflict (message, inner) {
  HttpError.call(this, message, inner, 409);
}

function HttpError (message, inner, status) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.status = status;
  this.message = message;
  this.inner = inner;
}

module.exports = httpErrors;
