import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskService, TASK_TYPES } from 'src/app/services/task.service';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../../store';
import { TASK_ADD } from '../../actions';
import { ToastService } from 'src/app/toast.service';

@Component({
  selector: 'app-server-task',
  templateUrl: './server-task.component.html',
  styleUrls: ['./server-task.component.scss']
})
export class ServerTaskComponent implements OnInit {

  public task: any = {};
  public isLoading: boolean = false;

  constructor(
    private modalService: NgbModal,
    private taskService: TaskService,
    private ngRedux: NgRedux<IAppState>,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
  }

  cancel() {
    return this.modalService.dismissAll();
  }
  async save() {
    try {
      this.isLoading = true;
      const data = await this.taskService.createTaskFromServer(this.task);
      if (data) {
        this.toastService.show('Task added successfully', {classname: 'bg-success text-light'});
        this.ngRedux.dispatch({
          type: TASK_ADD,
          payload: {
            task: { ...data, type: TASK_TYPES.TASK_FROM_SERVER },
          },
        });
        return this.modalService.dismissAll();
      }
    } catch (ex) {
    } finally {
      this.isLoading = false;
    }
  }

}
