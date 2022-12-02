import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BlacklistService } from 'src/app/services/blacklist/blacklist.service';

@Component({
  selector: 'app-create-blacklist',
  templateUrl: './create-blacklist.component.html',
  styleUrls: ['./create-blacklist.component.css']
})
export class CreateBlacklistComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder,
    private activatedRoute: ActivatedRoute,
    private blacklistService: BlacklistService) { }

  ngOnInit(): void {
  }
  createAddBlacklistForm(){
    
  }
}
