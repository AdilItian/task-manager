import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-server-task',
  templateUrl: './server-task.component.html',
  styleUrls: ['./server-task.component.scss']
})
export class ServerTaskComponent implements OnInit {

  constructor(private modalService: NgbModal){}

  ngOnInit(): void {
  }

  cancel() {
    return this.modalService.dismissAll();
  }
  save() {
    return this.modalService.dismissAll();
  }

}
