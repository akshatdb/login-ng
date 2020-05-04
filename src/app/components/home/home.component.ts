import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormControl, Form } from '@angular/forms';
import { SharedHttpService } from 'src/app/services/shared-http.service';
import { SharedAuthService } from 'src/app/services/shared-auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

declare var pdfjsLib: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: SharedHttpService, private auth: SharedAuthService, private snackbar: MatSnackBar) { }
  username: FormControl = new FormControl();
  password: FormControl = new FormControl();
  ngOnInit() {
  }
  login(user, pass) {
    this.http.post('signin', {
      username: user,
      password: pass
    }).subscribe(res => {
      this.auth.login(res);
    }, err => {
      this.snackbar.open('Invalid Credentials');
      this.username.reset();
      this.password.reset();
    })
  }
}
