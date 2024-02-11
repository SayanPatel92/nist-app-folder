import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as xmlJs from 'xml-js';

@Injectable({
  providedIn: 'root'
})
export class XmlDataFetchService {

  constructor(private http: HttpClient) {}

  getXmlData(url: string): Observable<any> {
    const urlWithCount = `${url}`;
    return this.http.get(urlWithCount, { responseType: 'text' });
  }
}
