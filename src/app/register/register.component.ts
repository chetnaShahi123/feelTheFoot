import { Component, OnInit } from '@angular/core';
import { UserDetail } from '../user-detail';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 userDetails : Object;

  constructor() { }

  ngOnInit() {
    this.userDetails = new UserDetail (1,'name', 'email', '', new Date(1234-11-1), 1, 'salsa','regular');
  }

  onSubmit() { }

}
