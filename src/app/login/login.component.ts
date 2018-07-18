import { Component, OnInit } from '@angular/core';
import { User }    from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
submitted: boolean;
model : object;

  constructor() { }

  ngOnInit() {
  this.model = new User(1, 'a ', 'b ');
  this.submitted = false;
  }

  
  onSubmit() {this.submitted = true; }



}
