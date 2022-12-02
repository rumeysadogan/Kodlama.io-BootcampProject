import { IGetAllBlacklistResponseModel } from 'src/app/models/response/blacklist/getAllBlacklist-response';
import { ActivatedRoute } from '@angular/router';
import { BlacklistService } from 'src/app/services/blacklist/blacklist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-all-blacklist',
  templateUrl: './get-all-blacklist.component.html',
  styleUrls: ['./get-all-blacklist.component.css'],
})
export class GetAllBlacklistComponent implements OnInit {
  blacklist: IGetAllBlacklistResponseModel[] = [];
  constructor(
    private blacklistService: BlacklistService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllBlacklist();
  }
  getAllBlacklist() {
    this.blacklistService
      .getAllBlacklist()
      .subscribe((data) => (this.blacklist = data));
  }
}
