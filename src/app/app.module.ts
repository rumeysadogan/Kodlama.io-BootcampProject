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
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NaviComponent } from './components/layouts/navi/navi.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { PanelComponent } from './components/layouts/panel/panel.component';
import { SidebarComponent } from './components/layouts/sidebar/sidebar.component';
import { SidebarRightComponent } from './components/layouts/sidebar-right/sidebar-right.component';
import { LoginInstructorComponent } from './components/login-instructor/login-instructor.component';
import { LoginApplicantComponent } from './components/login-applicant/login-applicant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    NaviComponent,
    FooterComponent,
    PanelComponent,
    SidebarComponent,
    SidebarRightComponent,
    LoginInstructorComponent,
    LoginApplicantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
