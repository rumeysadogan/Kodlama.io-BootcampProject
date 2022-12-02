import { IGetInstructorResponseModel } from './../../../models/response/instructor/getInstructor-response';
import { ActivatedRoute } from '@angular/router';
import { InstructorService } from './../../../services/instructor/instructor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-instructor',
  templateUrl: './get-instructor.component.html',
  styleUrls: ['./get-instructor.component.css'],
})
export class GetInstructorComponent implements OnInit {
  instructors: IGetInstructorResponseModel;
  constructor(
    private instructorService: InstructorService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getInstructor(params['id']);
    });
  }
  getInstructor(id) {
    this.instructorService
      .getInstructor(id)
      .subscribe((data) => (this.instructors = data));
  }
}
