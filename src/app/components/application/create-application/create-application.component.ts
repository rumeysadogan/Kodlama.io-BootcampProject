import { ApplicationService } from './../../../services/application/application.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ICreateApplicationRequestModel } from './../../../models/request/application/create-application-request';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.css']
})
export class CreateApplicationComponent implements OnInit {

  createApplicationForm:FormGroup;
  createApplicationModel:ICreateApplicationRequestModel[]=[];

  constructor(private applicationService:ApplicationService ,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createCreateApplicationForm();
  }
  createCreateApplicationForm() {
    this.createApplicationForm = this.formBuilder.group({
      
      applicantId: ['', Validators.required ],
      bootcampId: ['',Validators.required],
      state: ['',Validators.required],
      
    });
  }

  addApplication(){
    if(this.createApplicationForm.valid){
      let application=Object.assign({},this.createApplicationForm.value)
      this.applicationService.addApplication(application).subscribe(data=>{
        console.log(data)
      })
    }
    
  }


  

}
