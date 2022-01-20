import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export const TASK_TYPES = {
  ADHOC: 'adhoc',
  FULL_PROCESS: 'full process',
  TASK_FROM_SERVER: 'task from server'
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  async getAll(): Promise<Array<any>> {
    return new Promise((resolve, reject) => {
      this.http.get(`${environment.apiBaseUrl}/task`).subscribe(resp => {
        resolve(resp as Array<Task>);
      })
      // resolve([
      //   {id: 1, taskName: 'Task 1'},
      //   {id: 2, taskName: 'Task 2'},
      //   {id: 3, taskName: 'Task 3'},
      //   {id: 4, taskName: 'Task 4'}
      // ])
    })
  }

  async createAdhocTask(data: any): Promise<any> {
    let formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    formData.append('type', TASK_TYPES.ADHOC);
    return new Promise((resolve, reject) => {
      this.http.post(`${environment.apiBaseUrl}/task`, formData).subscribe(resp => {
        resolve(resp);
      })
    })
  }

  async createTaskFromServer(data: any): Promise<any> {
    let formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    formData.append('type', TASK_TYPES.TASK_FROM_SERVER);
    return new Promise((resolve, reject) => {
      this.http.post(`${environment.apiBaseUrl}/task`, formData).subscribe(resp => {
        resolve(resp);
      })
    })
  }

  async createFullProcessTask(data: any): Promise<any> {
    let formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    formData.append('type', TASK_TYPES.FULL_PROCESS);
    return new Promise((resolve, reject) => {
      this.http.post(`${environment.apiBaseUrl}/task`, formData).subscribe(resp => {
        resolve(resp);
      })
    })
  }

  async deleteTask(taskId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(`${environment.apiBaseUrl}/task/${taskId}`).subscribe(resp => {
        resolve(resp);
      })
    })
  }

}
