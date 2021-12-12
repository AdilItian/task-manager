import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public tasks = [
    {id: 1, title: 'Association  with database'},
    {id: 2, title: 'Databse linking'},
    {id: 3, title: 'Frontend development'},
    {id: 4, title: 'Laptop environment'}
  ]
  public filteredTasks = [...this.tasks];
  constructor() { }

  ngOnInit(): void {
  }

  searchTasks(e: any) {
    const val = e.target.value;
    if (!val) {
      return this.filteredTasks = [...this.tasks];
    }
    return this.filteredTasks = this.tasks.filter(f => f.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
    
  }

}
