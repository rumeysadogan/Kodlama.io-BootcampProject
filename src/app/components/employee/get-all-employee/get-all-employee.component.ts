import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGetAllEmployeeResponseModel } from './../../../models/response/employee/getAllEmployee-response';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './../../../services/employee/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-all-employee',
  templateUrl: './get-all-employee.component.html',
  styleUrls: ['./get-all-employee.component.css']
})
export class GetAllEmployeeComponent implements OnInit {
  employees:IGetAllEmployeeResponseModel[]=[];
  constructor(
    private employeeService:EmployeeService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => this.getAllEmployee());
  }

  getAllEmployee(){
    this.employeeService
    .getAllEmployee()
    .subscribe((data) => (this.employees = data));
  }
  deleteEmployee(employee){
    this.employees = this.employees.filter((a) => a !== employee);
    this.employeeService.deleteEmployee(employee).subscribe();
  }
}
