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

const routes: Routes = [
  //instructor
  { path: 'create-intructor', component: CreateInstructorComponent },
  { path: 'instructor/:id', component: GetInstructorComponent },
  { path: 'instructors', component: GetAllInstructorComponent },
  { path: 'update-instructor/:id', component: UpdateInstructorComponent },
  //applicant
  { path: 'create-applicant', component: CreateApplicantComponent },
  { path: 'applicant/:id', component: GetApplicantComponent },
  { path: 'applicants', component: GetAllApplicantComponent },
  { path: 'update-applicant/:id', component: UpdateApplicantComponent },
  //application
  { path: 'create-application', component: CreateApplicationComponent },
  { path: 'application/:id', component: GetApplicationComponent },
  { path: 'applications', component: GetAllApplicationComponent },
  { path: 'update-application/:id', component: UpdateApplicationComponent },
  //blacklist
  { path: 'create-blacklist', component: CreateBlacklistComponent },
  { path: 'blacklist/:id', component: GetBlacklistComponent },
  { path: 'blacklists', component: GetAllBlacklistComponent },
  { path: 'update-blacklist/:id', component: UpdateBlacklistComponent },
  //Bootcamp
  { path: 'create-bootcamp', component: CreateBootcampComponent },
  { path: 'bootcamp/:id', component: GetBootcampComponent },
  { path: 'bootcamps', component: GetAllBootcampComponent },
  { path: 'update-bootcamp/:id', component: UpdateBootcampComponent },
  // Employee
  { path: 'create-employee', component: CreateEmployeeComponent },
  { path: 'employee/:id', component: GetEmployeeComponent },
  { path: 'employees', component: GetAllEmployeeComponent },
  { path: 'update-employee/:id', component: UpdateEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
