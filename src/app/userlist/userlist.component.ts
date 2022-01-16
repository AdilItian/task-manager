import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  @Input() name: any;

  constructor() { }

  ngOnInit(): void {
  }

}