import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConfigureConnectionComponent} from './pages/configure-connection/configure-connection.component';
import { AdhocTaskComponent } from './pages/adhoc-task/adhoc-task.component';
import { ServerTaskComponent } from './pages/server-task/server-task.component';
import { FullProcessTaskComponent } from './pages/full-process-task/full-process-task.component';
import { TaskDetailsComponent } from './pages/task-details/task-details.component';
import { HomeComponent } from './pages/home/home.component';

export const APP_URLS = {
  HOME: '/',
  CONFIGURE_CONNECTION: '/configure-connection',
  ADHOC_TASK: '/adhoc-task',
  FULL_PROCESS_TASK: '/full-process-task',
  TASK_FROM_SERVER: '/task-from-server',
  TASK_DETAILS: '/task-details'
}

const getPath = (path: string) => {
  return path.substr(1);
}

const routes: Routes = [
  {
    path: getPath(APP_URLS.HOME),
    component: HomeComponent
  },
  {
    path: getPath(APP_URLS.CONFIGURE_CONNECTION),
    component: ConfigureConnectionComponent
  },
  {
    path: getPath(APP_URLS.ADHOC_TASK),
    component: AdhocTaskComponent
  },
  {
    path: getPath(APP_URLS.FULL_PROCESS_TASK),
    component: FullProcessTaskComponent
  },
  {
    path: getPath(APP_URLS.TASK_FROM_SERVER),
    component: ServerTaskComponent
  },
  {
    path: getPath(APP_URLS.TASK_DETAILS),
    component: TaskDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
