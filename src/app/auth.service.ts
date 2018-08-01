import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { promise } from 'protractor';
import { auth } from 'firebase/app';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInStatus: boolean = false;
  loggedIn: any;
  redirectUrl: string = '/choreographers';

  constructor(private firauth : AngularFireAuth, private db: AngularFirestore) { }

  validateLoginUser(userCredential) {
    return new Promise((resolve, reject)=> {
      this.firauth.auth.signInWithEmailAndPassword(userCredential.email, userCredential.password)
    .then(result=>{
      this.setLoggedInStatus(true);
     resolve("You are registered login !");
    
    })
    .catch(err=> {
      reject(err.message);
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

  // logout() {
  //   this.firauth.auth.signOut();
  //   var user = this.firauth.a;
  // }

  getLoggedInStatus () : boolean {
    return this.loggedInStatus;
  }

  setLoggedInStatus (isLoggedIn: boolean) : void {
    this.loggedInStatus = isLoggedIn
  }

  getCurrentUser() {
    return this.firauth.auth.currentUser;
  }

  logout() {
    this.setLoggedInStatus(false);
    return this.firauth.auth.signOut();
  }

  googleLogin() {
    return new Promise((resolve, reject)=> {
    this.firauth.auth.signInWithPopup(new auth.GoogleAuthProvider)
    .then(data => {
      this.setLoggedInStatus(true);
      resolve(data);
    })
    .catch(err => {
      reject(err.message);
    });
  })
  }

}
