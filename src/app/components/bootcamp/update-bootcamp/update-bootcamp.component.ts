import { IGetBootcampResponseModel } from './../../../models/response/bootcamp/getBootcamp-response';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BootcampService } from './../../../services/bootcamp/bootcamp.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-bootcamp',
  templateUrl: './update-bootcamp.component.html',
  styleUrls: ['./update-bootcamp.component.css'],
})
export class UpdateBootcampComponent implements OnInit {
  bootcamp: IGetBootcampResponseModel;
  bootcampUpdateForm: FormGroup;

  constructor(
    private bootcampService: BootcampService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.loadBootcampDetail(params['id']);
    });
  }

  loadBootcampDetail(id) {
    this.bootcampService.getBootcamp(id).subscribe((data) => {
      this.bootcamp = data;
      this.createBootcampUpdateForm();
    });
  }

  createBootcampUpdateForm() {
    this.bootcampUpdateForm = this.formBuilder.group({
      instructorId: [this.bootcamp.instructorId, Validators.required],
      name: [this.bootcamp.name, Validators.required],
      dateStart: [this.bootcamp.dateStart, Validators.required],
      dateEnd: [this.bootcamp.dateEnd, Validators.required],
      state: [this.bootcamp.state, Validators.required],
    });
  }

  update(): void {
    this.bootcampService
      .updateBootcamp(
        this.activatedRoute.snapshot.params['id'],
        this.bootcampUpdateForm.value
      )
      .subscribe((response) => console.log('update'));
  }
}
