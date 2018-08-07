import { Component, OnInit } from '@angular/core';
import { UserDetail } from '../user-detail';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 userDetails : Object;
 // ud: UserDetails;
 message : string;
 submitted : boolean;
 err_submitted:boolean;

  constructor(private data : DataService, private db: AngularFirestore,private router : Router) { }

  ngOnInit() {
    this.userDetails = new UserDetail (1,'name', 'email', '', new Date(1234-11-1), 1, 'salsa','regular','role','available Day');
    this.submitted = false;
    this.err_submitted = false;
  }

  mySubmit() { 
    // dancers : Observable;
   // console.log("done");
  //  let observer = {
  //     next : (next) => {console.log(next);this.submitted = true;this.message = next; }
  //  }
  // this.data.RegisterUser(this.userDetails).subscribe (observer);
  if(this.userDetails['role'] != 'dancer' && this.userDetails['role'] != 'choreographer') {
    this.err_submitted = true;
    this.message = "Please choose role as mentioned.plz check with the spelling also if needed !";
  } else {
   this.data.RegisterUser(this.userDetails).then(abc=>{
    //  console.log(abc);
     // this.message = abc;
     this.router.navigate(['login']);
      //this.submitted = true;
   })
   .catch(errorr=>{
    this.err_submitted = true;
    this.message = errorr;
   })
  }
  //  db.collection('dancers').valueChanges();

  }

  updateRole(role) {
    this.userDetails['role'] = role;
  }

}
