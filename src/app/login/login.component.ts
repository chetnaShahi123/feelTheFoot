import { Component, OnInit } from '@angular/core';
import { User }    from '../user';
import { DataService } from '../data.service';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
submitted: boolean;
model : object;
message : string;

  constructor(private data: DataService) { }

  ngOnInit() {
  this.model = new User(1, 'a ', 'b ');
  // this.submitted = false;
  }

  
  onSubmit() {
    // this.submitted = true; 

    let observer = {
      next : (result) => { alert(result),
      this.message = result;
      },
      err: (error) => { alert(error),
        console.log("adadsf"),
        this.message = error;
       }
    }
    this.data.validateLoginUser(this.model).subscribe(
    observer
    );

  }



}
