import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NegotiateService {
  private eventSource = new Subject<string>();
  eventSink$ = this.eventSource.asObservable();

  constructor() { }

  createEvent(event) {
    this.eventSource.next(event);
  }

  eventSink() {
    return this.eventSink$;
  }
}
