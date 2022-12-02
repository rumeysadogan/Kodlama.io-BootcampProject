import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from './../../../services/application/application.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IGetApplicationResponseModel } from './../../../models/response/application/getApplication-response';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-application',
  templateUrl: './update-application.component.html',
  styleUrls: ['./update-application.component.css']
})
export class UpdateApplicationComponent implements OnInit {

  application:IGetApplicationResponseModel;
  applicationUpdateForm:FormGroup;
  constructor(private applicationService:ApplicationService,
    private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.loadApplicationDetail(params["id"]);
    })
  }

  loadApplicationDetail(id){
    this.applicationService.getApplicationById(id).subscribe((data)=>{
      this.application=data;
      this.createApplicationUpdateForm();
    })
  }

  createApplicationUpdateForm(){
    this.applicationUpdateForm=this.formBuilder.group({
      applicantId:[this.application.applicantId,Validators.required],
      bootcampId:[this.application.bootcampId,Validators.required],
      state:[this.application.state,Validators.required]
      
    })
  }

  updateApplication(){
    this.applicationService.updateApplication(this.activatedRoute.snapshot.params['id'],
    this.applicationUpdateForm.value).subscribe((response)=>console.log('update'));
  }

  


}
