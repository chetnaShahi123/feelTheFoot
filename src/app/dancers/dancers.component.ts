import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dancers',
  templateUrl: './dancers.component.html',
  styleUrls: ['./dancers.component.css'],
  animations: [
    trigger('listStagger', [    //start off by defining an animation by giving it a trigger with a name listStagger.
      transition('* <=> *', [    //ransition to define when the animations will take place, from one animation state to the other. 
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true            //At the end, we define an optional :leave animation.
        })
      ])
    ])
  ]
})
export class DancersComponent implements OnInit {
  dancers :Object;
  dancer : string;
  currentUrl : string;
 

  constructor(private db:AngularFirestore, private data: DataService , private router: Router, private auth: AuthService) { 
    router.events.subscribe((route) => {
      this.currentUrl = router.url;
      this.data.storeUrl(this.currentUrl);
    });
    this.dancers_list();

    setTimeout((function(){
      this.loggout();
      console.log(this.currentUrl);
   }).bind(this), 43200000);
  }

  ngOnInit() {
    // this.dancer = 'dancer';
    // this.data.getDancers(this.dancer).subscribe(
    //   data => {
    //     this.dancers = data; 
    //   }
    // );
    // this.dancers = this.db.collection('DancerDetail').valueChanges();
  }
  dancers_list() {
    this.dancer = 'dancer';
    this.data.getDancers(this.dancer).subscribe(
      data => {
        this.dancers = data; 
      }
    );
  }

  loggout() { 
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}
