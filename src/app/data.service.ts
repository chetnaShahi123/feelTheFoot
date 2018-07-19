import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit{

  constructor() { 
    
    // localStorage.setItem('email','chetnashahi@gmail.com');
    // localStorage.setItem('password','Admin1234');
  }

   ngOnInit() {
    localStorage.setItem('email','chetnashahi@gmail.com');
    localStorage.setItem('password','Admin1234');
   }
  
  validateLoginUser(userCredential) {
    message : String;

    function subscriber (observer) {
      //const handler = (e) => observer.next(e.keyCode);
      if(userCredential.email == localStorage.getItem('email') && userCredential.password == localStorage.getItem('password')) {
        this.message = 'You are successfully logIn';
        observer.next(this.message);
      }
      else {
        this.message = 'Invalid credentials !';
        observer.error(this.message);
      }
    }
    let LoginObservable= new Observable(subscriber);
     return LoginObservable;
  }
}
