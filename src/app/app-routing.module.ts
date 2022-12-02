import { UpdateInstructorComponent } from './components/instructor/update-instructor/update-instructor.component';
import { GetAllInstructorComponent } from './components/instructor/get-all-instructor/get-all-instructor.component';
import { GetInstructorComponent } from './components/instructor/get-instructor/get-instructor.component';
import { CreateInstructorComponent } from './components/instructor/create-instructor/create-instructor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'create-intructor', component: CreateInstructorComponent },
  { path: 'instructor/:id', component: GetInstructorComponent },
  { path: 'instructors', component: GetAllInstructorComponent },
  { path: 'update-instructor/:id', component: UpdateInstructorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
