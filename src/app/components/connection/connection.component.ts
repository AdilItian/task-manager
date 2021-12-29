import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss'],
})
export class ConnectionComponent implements OnInit {
  @Input() task: any = null;
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

  constructor() {}

  ngOnInit(): void {}

  handleSave() {
    console.log('data', this.connection);
    this.connection = { ...this.connectionInitialValues };
  }
}
