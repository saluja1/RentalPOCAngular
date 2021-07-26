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
  @Input() locationName: any;
  branches: any; 

  constructor(private _location: Location, private route: ActivatedRoute, private router: Router, private locationService: LocationsService ) {
	  console.log("location");
  }

  ngOnChanges(){
  }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.locationID = params.get('locationID');
      this.locationService.getBranches(this.locationID).subscribe(x => { 
         this.branches = x[0]["branches"];
      });
      this.locationService.getLocationbyID(this.locationID).subscribe(x => this.locationName = x[0])
      this.locationService.addBreadcrumbs(this.locationID, this.locationName);
      if(this.branches == undefined){
        this._location.back();
      }

    });
  }

}
