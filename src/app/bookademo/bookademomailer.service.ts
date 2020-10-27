import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";


@Injectable()
export class BookademomailerService {
  // apiPath: any = 'http://localhost:3200/';
  // apiPath: any = 'http://52.25.21.10:3200/';
  apiPath: any = 'https://www.revolutiones.com:8443/';
  constructor(private _http: Http) { }
  emailService(newvalue: any) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this._http
      .post(this.apiPath + 'bookademoform', newvalue)
      .map((res: Response) => res.text());
  }
}
