import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedAuthService {

  constructor() { }

  login(data) {
    console.log(data);
  }
}
