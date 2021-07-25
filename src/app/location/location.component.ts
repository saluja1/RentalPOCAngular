import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationsService } from '../locations.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit, OnChanges {
  @Input() locationID: any;
  branches: any; 

  constructor(private _location: Location, private route: ActivatedRoute, private router: Router, private locationService: LocationsService ) {
  }

  ngOnChanges(){
  }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.locationID = params.get('locationID');
      this.locationService.getBranches(this.locationID).subscribe(x => this.branches = x[0]["branches"]);
      this.locationService.addBreadcrumbs(this.locationID);
      if(this.branches == undefined){
        this._location.back();
      }

    });
  }

}
