import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { ToastService } from 'src/app/toast.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent implements OnInit {
  isLoading: boolean = false;
  @Input()
  task: any = {};

  public users: any = [
    { label: 'User1' },
    { label: 'User2' },
    { label: 'User3' },
    { label: 'User4', isAllowed: true },
    { label: 'User5' },
    { label: 'User6', isAllowed: true },
    { label: 'User7', isAllowed: true },
    { label: 'User8' },
    { label: 'User9' },
    { label: 'User10' },
  ];
  public details: any = [];
  public configs: any = [
    { key: 'Config 1', value: 'Value' },
    { key: 'Config2', value: 'Value' },
    { key: 'Config3', value: 'Value' },
  ];
  constructor(
    private router: Router,
    private taskService: TaskService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.getTaskDetails();
  }

  async getTaskDetails() {
    try {
      const data = await this.taskService.getTaskDetails(this.task.id);
      if (data) {
        console.log('data', data);
        if (data.length > 1) {
          this.details = JSON.parse(data[data.length - 1].description);
        } else {
          this.details = JSON.parse(data[0].description);
        }
      }
    } catch (ex: any) {
      console.error(ex.message);
    }
  }

  onRemoveDetail(index: number) {
    this.details.splice(index, 1);
  }
  onAddDetail() {
    this.details.push({});
  }
  onRemoveConfig(index: number) {
    this.configs.splice(index, 1);
  }
  onAddConfig() {
    this.configs.push({});
  }
  async onSaveDetails() {
    try {
      this.isLoading = true;
      const data = await this.taskService.saveTaskDetails({
        taskId: this.task.id,
        description: JSON.stringify(this.details),
      });
      if (data) {
        this.toastService.show('Task details saved successfully', {
          classname: 'bg-success text-light',
        });
      }
    } catch (ex: any) {
      this.toastService.show(ex.message, {
        classname: 'bg-danger text-light',
      });
    } finally {
      this.isLoading = false;
    }
  }
}
