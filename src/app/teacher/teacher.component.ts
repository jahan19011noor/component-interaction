import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-teacher',
  template: `
    <h1>Teacher</h1>
    <button (click)="greetStudent()">Greet Student</button>
    <button (click)="appreciateStudent()">Appreciate Student</button>
    <app-student></app-student>
  `,
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private _interactionService: InteractionService) { }

  ngOnInit() {
  }

  greetStudent()
  {
    this._interactionService.sendMessage("Good Morning");
  }

  appreciateStudent() {
    this._interactionService.sendMessage("Well Done")
  }

}
