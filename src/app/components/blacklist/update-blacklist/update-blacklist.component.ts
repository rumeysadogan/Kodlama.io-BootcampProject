import { BlacklistService } from 'src/app/services/blacklist/blacklist.service';
import { ActivatedRoute } from '@angular/router';
import { IUpdateBlackListResponseModel } from './../../../models/response/blacklist/update-blacklist-response';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-blacklist',
  templateUrl: './update-blacklist.component.html',
  styleUrls: ['./update-blacklist.component.css']
})
export class UpdateBlacklistComponent implements OnInit {
  blacklistUpdateForm: FormGroup;
  blacklist: IUpdateBlackListResponseModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private blacklistService:BlacklistService
  ) { }

  ngOnInit(): void {
  }

}
