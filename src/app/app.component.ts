import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { DataService } from './data.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //title = 'app';
  currentUrl : string ;

  constructor(private router : Router, private fireauth: AngularFireAuth, private data: DataService,private auth: AuthService) {
    router.events.subscribe((_:NavigationEnd) => this.currentUrl = _.url);
    //let status: boolean = this.auth.getLoggedInStatus();console.log(status);
    // if(status == false) {
    //   this.router.navigate(['/login']);
    // }
   
  }

  ngOnInit() {
      this.fireauth.auth.onAuthStateChanged(
        user=>{
          if(user){
          let route_url:string = this.data.getUrl();
       //   this.router.navigateByUrl(route_url);
       console.log(route_url);
            this.auth.setLoggedInStatus(true);
            this.router.navigate([route_url]);
           
          }
          else {
            this.router.navigate(['/login']);
          }
        }
      )
  }


}
