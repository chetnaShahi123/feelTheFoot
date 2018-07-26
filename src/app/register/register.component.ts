import { Component, OnInit } from '@angular/core';
import { UserDetail } from '../user-detail';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 userDetails : Object;
 message : string;
 submitted : boolean;

  constructor(private data : DataService) { }

  ngOnInit() {
    this.userDetails = new UserDetail (1,'name', 'email', '', new Date(1234-11-1), 1, 'salsa','regular');
    this.submitted = false;
  }

  onSubmit() { 
    
   // console.log("done");
   let observer = {
      next : (next) => {console.log(next);this.submitted = true;this.message = next; }
   }
  this.data.RegisterUser(this.userDetails).subscribe (observer);
  }

}
