import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firauth : AngularFireAuth, private db: AngularFirestore) { }

  validateLoginUser(userCredential) {
    return new Promise((resolve, reject)=> {
      this.firauth.auth.signInWithEmailAndPassword(userCredential.email, userCredential.password)
    .then(result=>{
     resolve("You are registered login !");
    
    })
    .catch(err=> {
      reject(err);
    })
  })
    
    // message : String;

    // function subscriber (observer) {
    //   //const handler = (e) => observer.next(e.keyCode);
    //   if(userCredential.email == localStorage.getItem('email') && userCredential.password == localStorage.getItem('password')) {
    //     this.message = 'You are successfully logIn';
    //     observer.next(this.message);
    //   }
    //   else {
    //     this.message = 'Invalid credentials !';
    //     observer.error(this.message);
    //   }
    // }
    // let LoginObservable= new Observable(subscriber);
    //  return LoginObservable;
  }

}
