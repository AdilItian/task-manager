import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-adhoc-task',
  templateUrl: './adhoc-task.component.html',
  styleUrls: ['./adhoc-task.component.scss']
})
export class AdhocTaskComponent implements OnInit {

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
