import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votetaker',
  template: `
    <h2>Should mankind colonize the Universe?</h2>
    <h3>Agree: {{agreed}}, Disagree: {{disagreed}}</h3>
    <app-voter *ngFor="let voter of voters"
      [name]="voter"
      (voted)="onVoted($event)">
    </app-voter>
  `,
  styleUrls: ['./votetaker.component.css']
})
export class VotetakerComponent implements OnInit {

  agreed = 0;
  disagreed = 0;
  voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];
 
  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
  constructor() { }

  ngOnInit() {
  }

}
