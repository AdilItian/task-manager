import {
  Component,
  NgModule,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
} from '@angular/core';
import { TaskService } from './services/task.service';
import { ConnectionService } from './services/connection.service';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from './store';
import Task from './models/task';
import { INCREMENT, TASK_SET_LIST, CONNECTION_SET_LIST } from './actions';

const COMPONENTS = {
  TASK: 'task',
  CONNECTION: 'Configure Connection',
  ADHOC_TASK: 'Adhoc Task',
  TASK_FROM_SERVER: 'Task from Server',
  FULL_PROCESS_TASK: 'Full Process Task',
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentTasks: Array<Task> = [];

  @select()
  counter: any;
  @select()
  tasks: any;

  @ViewChild('parent', { read: ViewContainerRef })
  parent!: ViewContainerRef;
  @ViewChild('content', { read: ViewContainerRef })
  content!: ViewContainerRef;

  constructor(
    private taskService: TaskService,
    private connectionService: ConnectionService,
    private ngRedux: NgRedux<IAppState>,
    private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {}

  public selectedTask = null;
  public configureConnection: boolean = false;

  public currentTab = null;

  components: any = [];

  title = 'task-manager';
  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }

  ngOnInit(): void {
    this.getAllTasks();
    this.getAllConnections();
  }

  async getAllTasks() {
    const data = await this.taskService.getAll();
    this.ngRedux.dispatch({
      type: TASK_SET_LIST,
      payload: {
        tasks: data,
      },
    });
    return (this.currentTasks = data as unknown as Array<Task>);
  }

  async getAllConnections() {
    const data = await this.connectionService.getAll();
    this.ngRedux.dispatch({
      type: CONNECTION_SET_LIST,
      payload: {
        connections: data,
      },
    });
    return (this.currentTasks = data as unknown as Array<Task>);
  }

  handleConfigureConnection = (val: boolean): void => {
    this.configureConnection = val;
  };

  handleSelectTask = (task: any): void => {
    this.selectedTask = task;
  };

  isComponentAdded(component: string) {
    return this.components.find(
      (f: { component: any }) => f.component === component
    );
  }

  async loadComponent(title: string) {
    alert(title);
  }

  getComponent = async (componentName: string) => {
    let component;
    switch (componentName) {
      case COMPONENTS.TASK:
        const { TabComponent } = await import('./components/tab/tab.component');
        component = TabComponent;
        break;
    }
    return component;
  };

  handleLoadTask = async (data: any) => {
    this.content.clear();
    const { TaskDetailsComponent } = await import(
      './pages/task-details/task-details.component'
    );
    let childComponent = this.cfr.resolveComponentFactory(TaskDetailsComponent);
    const ref = this.content.createComponent(childComponent);
    ref.instance.task = data;
  };

  handleLoadConnection = async () => {
    this.content.clear();
    const { ConfigureConnectionComponent } = await import(
      './pages/configure-connection/configure-connection.component'
    );
    let childComponent = this.cfr.resolveComponentFactory(
      ConfigureConnectionComponent
    );
    this.content.createComponent(childComponent);
  };

  handleLoadAdhocTask = async () => {
    this.content.clear();
    const { AdhocTaskComponent } = await import(
      './pages/adhoc-task/adhoc-task.component'
    );
    let childComponent = this.cfr.resolveComponentFactory(AdhocTaskComponent);
    this.content.createComponent(childComponent);
  };

  handleLoadTaskFromServer = async () => {
    this.content.clear();
    const { ServerTaskComponent } = await import(
      './pages/server-task/server-task.component'
    );
    let childComponent = this.cfr.resolveComponentFactory(ServerTaskComponent);
    this.content.createComponent(childComponent);
  };

  handleLoadFullProcessTask = async () => {
    this.content.clear();
    const { FullProcessTaskComponent } = await import(
      './pages/full-process-task/full-process-task.component'
    );
    let childComponent = this.cfr.resolveComponentFactory(
      FullProcessTaskComponent
    );
    this.content.createComponent(childComponent);
  };

  handleTabClick = async (data: any) => {
    switch (data.componentName) {
      case COMPONENTS.TASK:
        await this.handleLoadTask(data.payload);
        break;
      case COMPONENTS.CONNECTION:
        await this.handleLoadConnection();
        break;
      case COMPONENTS.ADHOC_TASK:
        await this.handleLoadAdhocTask();
        break;
      case COMPONENTS.FULL_PROCESS_TASK:
        await this.handleLoadFullProcessTask();
        break;
      case COMPONENTS.TASK_FROM_SERVER:
        await this.handleLoadTaskFromServer();
        break;
    }
    const tabButtons = document.querySelectorAll('button.component-tab');
    tabButtons.forEach(item => {
      item.classList.remove('active');
    })
    const currentTabButton = document.querySelector(`button[title='${data.title}']`);
    currentTabButton?.classList.add('active');
    return (this.currentTab = data.title);
  };

  handleTabClose = (title: any) => {
    const tabIndex = this.components.findIndex(
      (f: any) => f.component === title
    );
    if (tabIndex === -1) {
      return false;
    }
    this.parent.remove(tabIndex);
    if (title === this.currentTab) {
      this.content.remove();
    }
    this.currentTab = null;
    return this.components.splice(tabIndex, 1);
  };

  loadTab = async (data: any) => {
    let title = '';
    let componentName = '';
    switch (data.componentName) {
      case COMPONENTS.TASK:
        title = data.payload.taskName;
        componentName = COMPONENTS.TASK;
        break;
      case COMPONENTS.CONNECTION:
        title = COMPONENTS.CONNECTION;
        componentName = COMPONENTS.CONNECTION;
        break;
      case COMPONENTS.ADHOC_TASK:
        title = COMPONENTS.ADHOC_TASK;
        componentName = COMPONENTS.ADHOC_TASK;
        break;
      case COMPONENTS.TASK_FROM_SERVER:
        title = COMPONENTS.TASK_FROM_SERVER;
        componentName = COMPONENTS.TASK_FROM_SERVER;
        break;
      case COMPONENTS.FULL_PROCESS_TASK:
        title = COMPONENTS.FULL_PROCESS_TASK;
        componentName = COMPONENTS.FULL_PROCESS_TASK;
        break;
    }

    if (this.isComponentAdded(title)) {
      return false;
    }
    const { TabComponent } = await import('./components/tab/tab.component');
    let ref = this.parent.createComponent(
      this.cfr.resolveComponentFactory(TabComponent)
    );
    ref.instance.title = title;
    ref.instance.payload = data.payload;
    ref.instance.componentName = componentName;
    ref.instance.onClick = this.handleTabClick;
    ref.instance.onClose = this.handleTabClose;
    ref.instance.isActive = this.currentTab === title;
    return this.components.push({
      component: title,
    });
  };
}
