import { Component, OnInit } from '@angular/core';
import { NegotiateService } from '../negotiate.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  negtiate_variable : any;

  constructor(private negotiate: NegotiateService) { }

  ngOnInit() {
    this.negotiate.eventSink().subscribe(events=>{
      console.log(events);
      this.negtiate_variable = events;
    })
  }

}
