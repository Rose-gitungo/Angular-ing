import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { DataServiceService } from './services/dataService.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { FloatingButtonComponent } from './pages/floating-button/floating-button.component';
import { TaskDetailsComponent } from './pages/task-details/task-details.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TaskDetailsComponent,
    DashboardComponent,
    NavbarComponent,
    EditTaskComponent,
    FloatingButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DataServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
