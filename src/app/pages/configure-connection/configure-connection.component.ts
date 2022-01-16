import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store';
import { APP_URLS } from 'src/app/app-routing.module';
import { Router } from '@angular/router';
import {
  CONNECTION_TYPES,
  ConnectionService,
} from 'src/app/services/connection.service';
import { ToastService } from 'src/app/toast.service';
import { CONNECTION_ADD, CONNECTION_REMOVE } from 'src/app/actions';

@Component({
  selector: 'app-configure-connection',
  templateUrl: './configure-connection.component.html',
  styleUrls: ['./configure-connection.component.scss'],
})
export class ConfigureConnectionComponent implements OnInit {
  public existingConnections = ['Localhost', 'LiveDb'];
  public authenticationTypes = ['LDAP', 'TD2', '0Auth', 'OKTA', 'LDMA'];
  public isLoading: boolean = false;

  selectedConnectionId: string | null = null;

  private connectionInitialValues = {
    connectionName: '',
    server: '',
    database: '',
    userName: '',
    password: '',
    authentication: '',
  };
  public myValue = '';
  public connection = { ...this.connectionInitialValues };

  task: any;
  connections: any = [];
  teraData: any = { ...this.connectionInitialValues };
  snowFlake: any = { ...this.connectionInitialValues, dwh: '', schemaName: '' };

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private router: Router,
    private connectionService: ConnectionService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.ngRedux.select('selectedTask').subscribe((response) => {
      this.task = response;
    });
    this.ngRedux.select('connections').subscribe((data) => {
      this.connections = data;
    });
  }

  handleSave() {
    this.connection = { ...this.connectionInitialValues };
  }

  cancel() {
    return this.router.navigateByUrl(APP_URLS.HOME);
  }

  handleSelectConnection(event: any) {
    this.ngRedux.select('connections').subscribe((connections) => {
      const conn = (connections as any).find(
        (f: any) => f.id === event.target.value
      );
      if (conn) {
        this.selectedConnectionId = event.target.value;
        if (conn.type === CONNECTION_TYPES.TERA_DATA) {
          this.teraData = conn;
        } else if (conn.type === CONNECTION_TYPES.SNOW_FLAKE) {
          this.snowFlake = conn;
          console.log('snowFlake', this.snowFlake);
        }
      }
    });
  }

  async handleCreateTera() {
    try {
      if (this.teraData) {
        this.isLoading = true;
        const data = await this.connectionService.createTera(this.teraData);
        if (data) {
          this.toastService.show('Connection created successfully', {
            classname: 'bg-success text-light',
          });
          this.ngRedux.dispatch({
            type: CONNECTION_ADD,
            payload: {
              connection: {
                ...this.teraData,
                type: CONNECTION_TYPES.TERA_DATA,
              },
            },
          });
          this.teraData = { ...this.connectionInitialValues };
        }
      }
    } catch (ex) {
      this.toastService.show('Failed to create connection', {
        classname: 'bg-danger text-light',
      });
    } finally {
      this.isLoading = false;
    }
  }

  async handleCreateFlake() {
    try {
      if (this.teraData) {
        this.isLoading = true;
        const data = await this.connectionService.createFlake(this.snowFlake);
        if (data) {
          this.toastService.show('Connection created successfully', {
            classname: 'bg-success text-light',
          });
          this.ngRedux.dispatch({
            type: CONNECTION_ADD,
            payload: {
              connection: {
                ...this.snowFlake,
                type: CONNECTION_TYPES.SNOW_FLAKE,
              },
            },
          });
          this.snowFlake = {
            ...this.connectionInitialValues,
            dwh: '',
            schemaName: '',
          };
        }
      }
    } catch (ex) {
      this.toastService.show('Failed to create connection', {
        classname: 'bg-danger text-light',
      });
    } finally {
      this.isLoading = false;
    }
  }

  resetTerData() {
    return this.teraData = {...this.connectionInitialValues};
  }

  handleDelete = async (type: string) => {
    try {
      if (this.selectedConnectionId) {
        const r = confirm('Are you sure you want to delete connection?');
        if (!r) {
          return false;
        }
        this.isLoading = true;
        const res = await this.connectionService.deleteById(
          this.selectedConnectionId
        );
        if (res) {
          if (type === CONNECTION_TYPES.SNOW_FLAKE) {
            this.snowFlake = {
              ...this.connectionInitialValues,
              dwh: '',
              schemaName: '',
            };
          } else if (type === CONNECTION_TYPES.TERA_DATA) {
            this.resetTerData();
          }
          this.toastService.show('Connection deleted successfully', {
            classname: 'bg-success text-light',
          });
          this.ngRedux.dispatch({
            type: CONNECTION_REMOVE,
            payload: {
              connectionId: this.selectedConnectionId
            }
          })
          this.selectedConnectionId = null;
        }
      }
    } catch (ex) {
      this.toastService.show('Failed to delete connection', {
        classname: 'bg-danger text-light',
      });
    } finally {
      this.isLoading = false;
    }
    return false;
  }
}
