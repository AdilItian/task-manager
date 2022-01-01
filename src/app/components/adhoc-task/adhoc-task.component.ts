import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-adhoc-task',
  templateUrl: './adhoc-task.component.html',
  styleUrls: ['./adhoc-task.component.scss']
})
export class AdhocTaskComponent implements OnInit {

  public task: any = {};

  constructor(private modalService: NgbModal, private taskService: TaskService){}

  ngOnInit(): void {
  }

  cancel() {
    return this.modalService.dismissAll();
  }
  async save() {
    const data = await this.taskService.createAdhocTask(this.task);
    if (data) {
      return this.modalService.dismissAll();
    }
  }
}
