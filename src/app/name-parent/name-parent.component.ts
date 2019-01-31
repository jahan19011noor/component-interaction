import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-parent',
  template: `
    <h2>Master controls {{ names.length }} names</h2>
    <app-name-child *ngFor="let name of names"
        [name]="name">
    </app-name-child>
  `,
  styleUrls: ['./name-parent.component.css']
})
export class NameParentComponent implements OnInit {

  names = ['Mr. IQ', '   ', '  Bombasto  ']
  constructor() { }

  ngOnInit() {
  }

}
