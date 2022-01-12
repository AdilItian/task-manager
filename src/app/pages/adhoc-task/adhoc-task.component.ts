import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskService, TASK_TYPES } from 'src/app/services/task.service';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store';
import { TASK_ADD } from '../../actions';
import { ToastService } from 'src/app/toast.service';
import { Router } from '@angular/router';
import { APP_URLS } from 'src/app/app-routing.module';

@Component({
  selector: 'app-adhoc-task',
  templateUrl: './adhoc-task.component.html',
  styleUrls: ['./adhoc-task.component.scss']
})
export class AdhocTaskComponent implements OnInit {

  public task: any = {};
  public isLoading: boolean = false;

  constructor(private modalService: NgbModal, 
    private taskService: TaskService,
    private ngRedux: NgRedux<IAppState>,
    private toastService: ToastService,
    private router: Router){}

  ngOnInit(): void {
  }

  cancel() {
    return this.router.navigateByUrl(APP_URLS.HOME);
  }
  async save() {
    try {
      this.isLoading = true;
      // const data = await this.taskService.createAdhocTask(this.task);
      const data = {};
      if (data) {
        this.toastService.show('Task added successfully', {classname: 'bg-success text-light'});
        this.ngRedux.dispatch({
          type: TASK_ADD,
          payload: {
            task: { ...data, type: TASK_TYPES.ADHOC },
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
