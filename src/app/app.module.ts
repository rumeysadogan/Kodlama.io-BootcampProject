import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { CreateInstructorComponent } from './components/instructor/create-instructor/create-instructor.component';
import { UpdateInstructorComponent } from './components/instructor/update-instructor/update-instructor.component';
import { GetInstructorComponent } from './components/instructor/get-instructor/get-instructor.component';
import { GetAllInstructorComponent } from './components/instructor/get-all-instructor/get-all-instructor.component';
import { GetApplicantComponent } from './components/applicant/get-applicant/get-applicant.component';
import { GetAllApplicantComponent } from './components/applicant/get-all-applicant/get-all-applicant.component';
import { GetApplicationComponent } from './components/application/get-application/get-application.component';
import { GetAllApplicationComponent } from './components/application/get-all-application/get-all-application.component';
import { GetBlacklistComponent } from './components/blacklist/get-blacklist/get-blacklist.component';
import { GetAllBlacklistComponent } from './components/blacklist/get-all-blacklist/get-all-blacklist.component';
import { GetBootcampComponent } from './components/bootcamp/get-bootcamp/get-bootcamp.component';
import { GetAllBootcampComponent } from './components/bootcamp/get-all-bootcamp/get-all-bootcamp.component';
import { GetEmployeeComponent } from './components/employee/get-employee/get-employee.component';
import { GetAllEmployeeComponent } from './components/employee/get-all-employee/get-all-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateApplicantComponent,
    UpdateApplicantComponent,
    CreateApplicationComponent,
    UpdateApplicationComponent,
    CreateBlacklistComponent,
    UpdateBlacklistComponent,
    CreateBootcampComponent,
    UpdateBootcampComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    CreateInstructorComponent,
    UpdateInstructorComponent,
    GetInstructorComponent,
    GetAllInstructorComponent,
    GetApplicantComponent,
    GetAllApplicantComponent,
    GetApplicationComponent,
    GetAllApplicationComponent,
    GetBlacklistComponent,
    GetAllBlacklistComponent,
    GetBootcampComponent,
    GetAllBootcampComponent,
    GetEmployeeComponent,
    GetAllEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
