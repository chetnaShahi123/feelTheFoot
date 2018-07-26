import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit{
  message : String;

  constructor() { 
    
    localStorage.setItem('email','chetnashahi@gmail.com');
    localStorage.setItem('password','Admin1234');
  }

   ngOnInit() {
    // localStorage.setItem('email','chetnashahi@gmail.com');
    // localStorage.setItem('password','Admin1234');
   }
  
  validateLoginUser(userCredential) {
    // message : String;

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

  RegisterUser(userDetail) {

    function subscriber (observer) {
      localStorage.setItem('id',userDetail.id);
      localStorage.setItem('name',userDetail.name);
      localStorage.setItem('email',userDetail.email);
      localStorage.setItem('password',userDetail.password);
      localStorage.setItem('dob',userDetail.dob);
      localStorage.setItem('age',userDetail.age);
      localStorage.setItem('danceStyle',userDetail.danceStyle);
      localStorage.setItem('coursetype',userDetail.coursetype);
      observer.next('You are successfully registered');
    }
    let registerObservable = new Observable(subscriber);
    return registerObservable;
  }
}


