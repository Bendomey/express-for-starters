import express from 'express';

export type PossiblyUndefined<T> = T | undefined;

export type Maybe<T> = T | null;

export type Empty = {};

// TODO: Add support for requestID so that people can track requests.
// declare global {
//   namespace Express {
//     export interface Request {
//       requestID?: string
//     }
//   }
// }

export {};
