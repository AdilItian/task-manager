import { Component, OnInit, Input } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { TASK_FILTER_SIDEBAR } from '../actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  @Input()
  loadTask!: (args: any) => void;
  @select((store) => store.sidebarTasks)
  tasks: any;

  areTasksVisible: boolean = true;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  public filteredTasks: any = [];

  ngOnInit(): void {
    this.filteredTasks = this.tasks;
  }

  toggleTasksVisibility() {
    this.areTasksVisible = !this.areTasksVisible;
  }

  searchTasks(e: any) {
    this.ngRedux.dispatch({
      type: TASK_FILTER_SIDEBAR,
      payload: {
        searchText: e.target.value,
      },
    });
  }
}
