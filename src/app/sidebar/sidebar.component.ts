import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnChanges {
  @Input() tasks: any = [];
  @Input()
  onSelectTask!: (args: any) => void;
  public filteredTasks: any = [];
  constructor() {
  }
  ngOnChanges(): void {
    this.filteredTasks = [...this.tasks];
  }

  ngOnInit(): void {
    this.filteredTasks = [...this.tasks];
  }

  searchTasks(e: any) {
    const val = e.target.value;
    if (!val) {
      return (this.filteredTasks = [...this.tasks]);
    }
    return (this.filteredTasks = this.tasks.filter(
      (f: any) => f.taskName.toLowerCase().indexOf(val.toLowerCase()) > -1
    ));
  }
}
