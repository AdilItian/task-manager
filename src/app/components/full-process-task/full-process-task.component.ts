import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-full-process-task',
  templateUrl: './full-process-task.component.html',
  styleUrls: ['./full-process-task.component.scss']
})
export class FullProcessTaskComponent implements OnInit {

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
