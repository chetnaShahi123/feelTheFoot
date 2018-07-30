import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

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

  constructor(private data: DataService) { }

  ngOnInit() {
    this.choreographer = 'choreographer';
    this.data.getDancers(this.choreographer).subscribe(
      data => {
        this.users$ = data; 
      }
    );
    // this.data.getUsers().subscribe(
    //   // data => this.users$ = data
    //   data => {
    //     this.users$ = data;
    //     console.log(data);
    //   }
    // );
  }


}
