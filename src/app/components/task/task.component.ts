import { Component, OnInit, Input } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store';
import { SELECT_TASK, TASK_DELETE } from '../../actions';
import { TaskService } from 'src/app/services/task.service';
import { ToastService } from 'src/app/toast.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  isLoading: boolean = false;
  @Input()
  data: any = {
    id: '',
    title: '',
  };
  @Input()
  onSelect!: (args: any) => void;

  @Input()
  loadTask!: (args: any) => void;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private toastService: ToastService,
    private taskService: TaskService
  ) {}

  onSelectTask(task: any) {
    this.loadTask({ componentName: 'task', payload: task });
    this.ngRedux.dispatch({
      type: SELECT_TASK,
      payload: {
        task,
      },
    });
  }

  async deleteTask() {
    try {
      const r = confirm(`Are you sure you want to delete ${this.data.taskName}`);
      if (!r) {
        return false;
      }
      this.isLoading = true;
      const data = await this.taskService.deleteTask(this.data.id);
      if (data) {
        this.toastService.show(`${this.data.taskName} deleted successfully`, {
          classname: 'bg-success text-light',
        });
        this.ngRedux.dispatch({
          type: TASK_DELETE,
          payload: {
            taskId: this.data.id,
          },
        });
      }
    } catch (ex) {
      return this.toastService.show('Failed to delete task', {
        classname: 'bg-danger text-light',
      });
    } finally {
      this.isLoading = false;
    }
  }

  ngOnInit(): void {}
}
