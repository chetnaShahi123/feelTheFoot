import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit{
  message : String;
  firedata :object;

  constructor(private firauth : AngularFireAuth, private db: AngularFirestore, private http: HttpClient) { 
    
    // localStorage.setItem('email','chetnashahi@gmail.com');
    // localStorage.setItem('password','Admin1234');
  }

   ngOnInit() {
   }

  // RegisterUser(userDetail) {
  //   this.firedata = this.firauth.auth.createUserWithEmailAndPassword(userDetail.email, userDetail.password);
  //   console.log(this.firedata);
  //   function subscriber (observer) {
  //     // localStorage.setItem('id',userDetail.id);
  //     // localStorage.setItem('name',userDetail.name);
  //     // localStorage.setItem('email',userDetail.email);
  //     // localStorage.setItem('password',userDetail.password);
  //     // localStorage.setItem('dob',userDetail.dob);
  //     // localStorage.setItem('age',userDetail.age);
  //     // localStorage.setItem('danceStyle',userDetail.danceStyle);
  //     // localStorage.setItem('coursetype',userDetail.coursetype);
  //     // observer.next('You are successfully registered');

  //     // this.firedata = this.firauth.auth.createUserWithEmailAndPassword(userDetail.email, userDetail.password);
  //     //console.log(this.firedata);
  //   }
  //   let registerObservable = new Observable(subscriber);
  //   return registerObservable;
  // }

  RegisterUser(userDetail) { 
    
     return new Promise((resolve, reject)=> {
        this.firauth.auth.createUserWithEmailAndPassword(userDetail.email, userDetail.password)
      .then(result=>{
       // resolve(result);
       const userId = result.user.uid; 
       const itemRef =  this.db.collection('DancerDetail');
       const detail:any = {'name':userDetail.name, 'dob':userDetail.dob, 'age':userDetail.age, 'dancestyle':userDetail.danceStyle, 'coursetype':userDetail.coursetype,role:userDetail.role,available:userDetail.available , choreographerId: userId};
       itemRef.add(detail)
       .then(result=>{
        resolve("You are registered successfully !");
       })
       .catch (err=>{
        reject(err);
       })
      })
      .catch(err=> {
        reject(err);
      })
    })
  }

  getUsers() {
    // return this.http.get('https://reqres.in/api/users');
    return this.http.get<Object[]>('https://jsonplaceholder.typicode.com/users')
  }

  getDancers(role) {
    // return new Promise((resolve,reject)=> {
      // return this.db.collection('DancerDetail').valueChanges();
       return this.db.collection("DancerDetail", ref=>ref.where('role', '==', role)).valueChanges();

// let query = dancersRef.where("role", "==", role);
    //   .then(result=>{
    //     resolve(result);
    //   })
    //   .catch(error=>{
    //     reject(error);
    //   })
    // })
  }

}


