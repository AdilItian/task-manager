import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input()
  data: any = {
    id: '',
    title: ''
  };

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
