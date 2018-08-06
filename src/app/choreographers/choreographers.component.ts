import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { NegotiateService } from '../negotiate.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-choreographers',
  templateUrl: './choreographers.component.html',
  styleUrls: ['./choreographers.component.css'],
    //for Animations (list of user's on the user's page to fade in when the component loads)
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
export class ChoreographersComponent implements OnInit {
  users$ : object;
  choreographer: string;
  currentUrl : string;
  _router : any;


  constructor(private data: DataService, private router: Router, private negotiate : NegotiateService, private auth: AuthService) { 
    this._router = router;
    this._router.events.subscribe((route) => {
      this.currentUrl = this._router.url;
      this.data.storeUrl(this.currentUrl);
    });

      this.choreographer = 'choreographer';
    this.data.getDancers(this.choreographer).subscribe(
      data => {
        this.users$ = data; 
        console.log(data);
      }
    );

    setTimeout((function(){
      this.loggout();
      console.log(this.currentUrl);
   }).bind(this), 43200000);
  }

  ngOnInit() {
    // this.choreographer = 'choreographer';
    // this.data.getDancers(this.choreographer).subscribe(
    //   data => {
    //     this.users$ = data; 
    //     console.log(data);
    //   }
    // );
    // this.data.getUsers().subscribe(
    //   // data => this.users$ = data
    //   data => {
    //     this.users$ = data;
    //     console.log(data);
    //   }
    // );
    const demo:string = "Its an 'Inter Component Communication' variable";
    this.negotiate.createEvent('data added : ' + demo);
  }

  loggout() { 
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}
