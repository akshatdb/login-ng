import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { APIS } from '../app.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedHttpService {

  constructor(private http: HttpClient) { }

  get(url): Observable<any> {
    return this.http.get(environment.base + APIS[url]);
  }

  post(url, data): Observable<any> {
    return this.http.post(environment.base + APIS[url], data);
  }
}
