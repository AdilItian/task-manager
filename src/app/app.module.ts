import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TaskComponent } from './components/task/task.component';
import { ConnectionComponent } from './components/connection/connection.component';
import { FormsModule } from '@angular/forms';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { AdhocTaskComponent } from './components/adhoc-task/adhoc-task.component';
import { ServerTaskComponent } from './components/server-task/server-task.component';
import { FullProcessTaskComponent } from './components/full-process-task/full-process-task.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    TaskComponent,
    ConnectionComponent,
    TaskDetailsComponent,
    AdhocTaskComponent,
    ServerTaskComponent,
    FullProcessTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
