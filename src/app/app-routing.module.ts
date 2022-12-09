import { AdminComponent } from './components/admin/admin.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { GetAllBlacklistComponent } from './components/blacklist/get-all-blacklist/get-all-blacklist.component';
import { GetAllEmployeeComponent } from './components/employee/get-all-employee/get-all-employee.component';
import { GetEmployeeComponent } from './components/employee/get-employee/get-employee.component';
import { GetAllBootcampComponent } from './components/bootcamp/get-all-bootcamp/get-all-bootcamp.component';
import { GetBootcampComponent } from './components/bootcamp/get-bootcamp/get-bootcamp.component';
import { GetBlacklistComponent } from './components/blacklist/get-blacklist/get-blacklist.component';
import { GetAllApplicationComponent } from './components/application/get-all-application/get-all-application.component';
import { GetApplicationComponent } from './components/application/get-application/get-application.component';
import { GetAllApplicantComponent } from './components/applicant/get-all-applicant/get-all-applicant.component';
import { GetApplicantComponent } from './components/applicant/get-applicant/get-applicant.component';
import { UpdateInstructorComponent } from './components/instructor/update-instructor/update-instructor.component';
import { GetAllInstructorComponent } from './components/instructor/get-all-instructor/get-all-instructor.component';
import { GetInstructorComponent } from './components/instructor/get-instructor/get-instructor.component';
import { CreateInstructorComponent } from './components/instructor/create-instructor/create-instructor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateApplicantComponent } from './components/applicant/create-applicant/create-applicant.component';
import { UpdateApplicantComponent } from './components/applicant/update-applicant/update-applicant.component';
import { CreateApplicationComponent } from './components/application/create-application/create-application.component';
import { UpdateApplicationComponent } from './components/application/update-application/update-application.component';
import { CreateBlacklistComponent } from './components/blacklist/create-blacklist/create-blacklist.component';
import { UpdateBlacklistComponent } from './components/blacklist/update-blacklist/update-blacklist.component';
import { CreateBootcampComponent } from './components/bootcamp/create-bootcamp/create-bootcamp.component';
import { UpdateBootcampComponent } from './components/bootcamp/update-bootcamp/update-bootcamp.component';
import { CreateEmployeeComponent } from './components/employee/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './components/employee/update-employee/update-employee.component';
import { LoginguardGuard } from './guards/loginguard.guard';

const routes: Routes = [
  //admin start
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [LoginguardGuard],
    children: [
      { path: 'admin-instructor', component: GetAllInstructorComponent },
      { path: 'admin-applicants', component: GetAllApplicantComponent },
      { path: 'admin-application', component: GetAllApplicationComponent },
      { path: 'admin-blacklist', component: GetAllBlacklistComponent },
      { path: 'admin-bootcamp', component: GetAllBootcampComponent },
      { path: 'admin-employee', component: GetAllEmployeeComponent },

      //Main Child Finish

      //Child of admin instructor
      {
        path: 'admin-instructor/create-intructor',
        component: CreateInstructorComponent,
      },
      {
        path: 'admin-instructor/instructor/:id',
        component: GetInstructorComponent,
      },
      {
        path: 'admin-instructor/update-instructor/:id',
        component: UpdateInstructorComponent,
      },
      //End of admin instructor

      //Child of admin applicant
      {
        path: 'admin-applicant/create-applicant',
        component: CreateApplicantComponent,
      },
      {
        path: 'admin-applicant/update-applicant/:id',
        component: UpdateApplicantComponent,
      },
      {
        path: 'admin-applicant/applicant/:id',
        component: GetApplicantComponent,
      },
      //End of admin applicant

      //Child of admin application
      {
        path: 'admin-application/create-application',
        component: CreateApplicationComponent,
      },
      {
        path: 'admin-application/application/:id',
        component: GetApplicationComponent,
      },
      {
        path: 'admin-application/update-application/:id',
        component: UpdateApplicationComponent,
      },
      //End of admin application

      //Child of admin blacklist
      {
        path: 'admin-blacklist/create-blacklist',
        component: CreateBlacklistComponent,
      },
      {
        path: 'admin-blacklist/blacklist/:id',
        component: GetBlacklistComponent,
      },
      {
        path: 'admin-blacklist/update-blacklist/:id',
        component: UpdateBlacklistComponent,
      },
      //End of admin blacklist

      //Child of admin bootcamp
      {
        path: 'admin-bootcamp/create-bootcamp',
        component: CreateBootcampComponent,
      },
      { path: 'admin-bootcamp/bootcamp/:id', component: GetBootcampComponent },
      {
        path: 'admin-bootcamp/update-bootcamp/:id',
        component: UpdateBootcampComponent,
      },
      //End of admin bootcamp

      //Child of admin employee
      {
        path: 'admin-employee/create-employee',
        component: CreateEmployeeComponent,
      },
      { path: 'admin-employee/employee/:id', component: GetEmployeeComponent },
      {
        path: 'admin-employee/update-employee/:id',
        component: UpdateEmployeeComponent,
      },
    ],
  },

  // Employee

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: '', component: HomepageComponent },
  { path: 'instructors', component: GetAllInstructorComponent },
  { path: 'instructors/instructor/:id', component: GetInstructorComponent },
  {path: 'admin/applicants', component: GetAllApplicantComponent},
  {path: 'admin/applicant/:id', component: GetApplicantComponent},
  {path: 'applicants/admin-bootcamp', component: GetAllApplicantComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
