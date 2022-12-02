import { BlacklistService } from 'src/app/services/blacklist/blacklist.service';
import { ActivatedRoute } from '@angular/router';
import { IUpdateBlackListResponseModel } from './../../../models/response/blacklist/update-blacklist-response';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-blacklist',
  templateUrl: './update-blacklist.component.html',
  styleUrls: ['./update-blacklist.component.css'],
})
export class UpdateBlacklistComponent implements OnInit {
  blacklistUpdateForm: FormGroup;
  blacklist: IUpdateBlackListResponseModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private blacklistService: BlacklistService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.loadBlacklistDetail(params['id']);
    });
  }
  loadBlacklistDetail(id) {
    this.blacklistService.getBlacklist(id).subscribe((data) => {
      this.blacklist = data;
      this.createUpdateForm();
    });
  }

  createUpdateForm() {
    this.blacklistUpdateForm = this.formBuilder.group({
      applicantId: [this.blacklist.applicantId, Validators.required],
      date: [this.blacklist.date, Validators.required],
      reason: [this.blacklist.reason, Validators.required],
    });
  }
  update(): void {
    this.blacklistService
      .updateBlacklist(
        this.activatedRoute.snapshot.params['id'],
        this.blacklistUpdateForm.value
      )
      .subscribe((response) => console.log('update'));
  }
}
