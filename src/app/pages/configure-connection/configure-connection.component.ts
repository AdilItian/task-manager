import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../store';
import Task from '../../models/task';
import { INCREMENT, TASK_SET_LIST } from '../../actions';

@Component({
  selector: 'app-configure-connection',
  templateUrl: './configure-connection.component.html',
  styleUrls: ['./configure-connection.component.scss']
})
export class ConfigureConnectionComponent implements OnInit {

  task: any;


  constructor(private ngRedux: NgRedux<IAppState>) {}

  ngOnInit(): void {
    this.ngRedux.select('selectedTask').subscribe(response => {
      this.task = response;
    })
  }

  public existingConnections = ['Localhost', 'LiveDb'];
  public authenticationTypes = ['LDAP', 'TD2', '0Auth', 'OKTA'];

  private connectionInitialValues = {
    name: '',
    server: '',
    database: '',
    username: '',
    password: '',
    authentication:
      this.authenticationTypes && this.authenticationTypes.length
        ? this.authenticationTypes[0]
        : null,
    dwh: '',
    schema: '',
  };
  public myValue = '';
  public connection = { ...this.connectionInitialValues };

  handleSave() {
    console.log('data', this.connection);
    this.connection = { ...this.connectionInitialValues };
  }

}
