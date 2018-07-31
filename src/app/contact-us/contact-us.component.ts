import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  name : string;
  email: string;
  message: string;
  currency: number;
  response: Object;
  submitted: boolean;
  error:boolean;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.currency = 200;
    this.submitted= false;
    this.error= false;
  }

  processForm() {
    //const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`; 
// if(this.name == " " || this.email == " " || this.message ==" ") {
//   this.error = true;
//   this.response = "Please fill all the fields";
// }
// else {
    this.data.contactUs(this.name,this.email,this.message).then(resp=>{
        this.response = resp;
        this.submitted = true;
    })
    .catch(err=>{
      this.response = err;
      this.error = true;
    })
 // }
    // this.data.RegisterUser(this.userDetails).then(abc=>{
    //   //  console.log(abc);
    //    // this.message = abc;
    //    this.router.navigate(['login']);
    //     //this.submitted = true;
    //  });
  }

}
