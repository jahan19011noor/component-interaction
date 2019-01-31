import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-student',
  template: `
    <h2>Student</h2>
  `,
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private _interactionService: InteractionService) { }

  ngOnInit() {
    this._interactionService.teacherMessage$.subscribe(
      message => {
        if(message === "Good Morning")
        {
          alert("Good Morning Teacher")
        }
        else if(message === "Well Done") {
          alert("Thank you teacher;");
        }
      }
    )
  }

}
