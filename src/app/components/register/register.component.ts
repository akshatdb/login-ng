import { Component, OnInit } from '@angular/core';
import { ROLES } from 'src/app/app.constants';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  roles = [];
  registerForm: FormGroup;
  ngOnInit() {
    this.roles = ROLES;
    this.createForm();
  }
  createForm() {
    this.registerForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      email: new FormControl(),
      roles: new FormControl()
    })
  }

}
