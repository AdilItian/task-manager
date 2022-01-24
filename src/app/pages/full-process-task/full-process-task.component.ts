import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskService, TASK_TYPES } from 'src/app/services/task.service';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store';
import { TASK_ADD } from '../../actions';
import { ToastService } from 'src/app/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full-process-task',
  templateUrl: './full-process-task.component.html',
  styleUrls: ['./full-process-task.component.scss'],
})
export class FullProcessTaskComponent implements OnInit {
  public task: any = {
    connectionId: '',
  };
  public isLoading: boolean = false;
  connections: any = [];

  constructor(
    private modalService: NgbModal,
    private taskService: TaskService,
    private ngRedux: NgRedux<IAppState>,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ngRedux.select('connections').subscribe((data) => {
      this.connections = data;
    });
  }

  async save() {
    try {
      this.isLoading = true;
      const data = await this.taskService.createFullProcessTask(this.task);
      // const data = {};
      if (data) {
        this.toastService.show('Task added successfully', {
          classname: 'bg-success text-light',
        });
        this.ngRedux.dispatch({
          type: TASK_ADD,
          payload: {
            task: {
              ...this.task,
              id: data.response,
              type: TASK_TYPES.FULL_PROCESS,
            },
          },
        });
        this.task = {};
        // return this.modalService.dismissAll();
      }
    } catch (ex) {
    } finally {
      this.isLoading = false;
    }
  }
}
