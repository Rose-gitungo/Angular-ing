import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { TaskDetailsComponent } from './pages/task-details/task-details.component';

const routes: Routes = [
  { path: 'taskdetails/:id', component: TaskDetailsComponent },
  { path: 'addtask', component: AddTaskComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/edit/:id', component: EditTaskComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
