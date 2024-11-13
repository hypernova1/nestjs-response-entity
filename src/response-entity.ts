import { HttpHeaders } from "./http-headers";

export class ResponseEntity<T> {

    private readonly _statusCode: number;
    private readonly _body?: T;
    private readonly _headers: HttpHeaders = new HttpHeaders();

    constructor(statusCode: number, data?: T, headers?: Record<string, string>) {
        this._statusCode = statusCode;
        this._body = data;
        if (headers) {
            this._headers.addAll(headers);
        }
    }

    get statusCode(): number {
        return this._statusCode;
    }

    get body(): T | undefined {
        return this._body;
    }

    static ok<T>(data?: T) {
        return new ResponseEntity(200, data);
    }

    static created<T>(data?: T) {
        return new ResponseEntity(201, data);
    }

    static noContent() {
        return new ResponseEntity(204);
    }

    headers(headers: HttpHeaders): void {
        this._headers.addAll(headers.getAll);
    }

    get getHeaders() {
        return this._headers;
    }

}