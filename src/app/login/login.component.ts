import { Component, OnInit } from '@angular/core';
import { User }    from '../user';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
// import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
submitted: boolean;
model : object;
message : string;

  constructor(private data: DataService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
  this.model = new User(1, 'a ', 'b ');
   this.submitted = false;
  }

  
  onSubmit() {
    this.auth.validateLoginUser(this.model).then(result=>{
      this.router.navigate(['choreographers']);
    })
    .catch(err=>{
      this.submitted = true; 
      this.message = err;
    })
    // this.submitted = true; 

    // let observer = {
    //   next : (result) => { 
    //       this.submitted = true; 
    //   this.message = result;
    //   },
    //   error: (error) => { alert(error),
    //     console.log("adadsf"),
    //     this.message = error;
    //    }
    // }
    // this.data.validateLoginUser(this.model).subscribe(
    // observer
    // );

  }



}
