import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TaskComponent } from './components/task/task.component';
import { FormsModule } from '@angular/forms';
import { TaskDetailsComponent } from './pages/task-details/task-details.component';
import { AdhocTaskComponent } from './pages/adhoc-task/adhoc-task.component';
import { ServerTaskComponent } from './pages/server-task/server-task.component';
import { FullProcessTaskComponent } from './pages/full-process-task/full-process-task.component';
import { ToastsContainer } from './toast-container-component';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ConfigureConnectionComponent } from './pages/configure-connection/configure-connection.component';
import { DefaultLayoutComponent } from './layouts/default/default-layout/default-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AppTabDirective } from './app-tab.directive';
import { TabComponent } from './components/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    TaskComponent,
    TaskDetailsComponent,
    AdhocTaskComponent,
    ServerTaskComponent,
    FullProcessTaskComponent,
    ToastsContainer,
    SpinnerComponent,
    ConfigureConnectionComponent,
    DefaultLayoutComponent,
    HomeComponent,
    AppTabDirective,
    TabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    NgReduxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AdminlistComponent,
    UserlistComponent,
  ]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
