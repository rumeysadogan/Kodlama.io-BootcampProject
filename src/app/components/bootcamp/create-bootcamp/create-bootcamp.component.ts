import { BootcampService } from './../../../services/bootcamp/bootcamp.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators ,FormGroup} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-bootcamp',
  templateUrl: './create-bootcamp.component.html',
  styleUrls: ['./create-bootcamp.component.css']
})
export class CreateBootcampComponent implements OnInit {
  bootcampAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private activetedRoute:ActivatedRoute,
    private bootcampService:BootcampService) { }

  ngOnInit(): void {
    this.createAddBootcampForm();
  }

  createAddBootcampForm(){
    this.bootcampAddForm=this.formBuilder.group({
        instructorId:["",Validators.required],
        name:["",Validators.required],
        dateStart:["",Validators.required],
        dateEnd:["",Validators.required],
        state:["", Validators.required],
    })
  }
  addBootcamp(){
    if(this.bootcampAddForm.valid){
      let bootcampModel=Object.assign({},this.bootcampAddForm.value);
      this.bootcampService.addBootcamp(bootcampModel).subscribe((data)=>{
        alert("Bootcamp Eklendi");
      });
    }else{
      alert("Bootcamp Eklenmedi")
    }
  }
}
