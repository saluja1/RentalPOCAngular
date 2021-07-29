import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationsService } from '../locations.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
  branchID: any;
  branchName: any;
  locationID: any;
  locationName: any;
  categories: any; 
  defaultImage = '../../assets/loader.gif';

  constructor(private _location: Location, private route: ActivatedRoute, private router: Router, private locationService: LocationsService ) {
  	console.log("branch");
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.locationID = params.get('locationID');
      this.branchID = params.get('branchID');
      this.locationService.getCategories(this.locationID, this.branchID).subscribe(x => { this.categories = x.flat(2)[0]["categories"]; this.branchName = x.flat(2)[0]["name"] });
      this.locationService.getLocationbyID(this.locationID).subscribe(x => this.locationName = x[0])
      this.locationService.addBreadcrumbs(this.locationID, this.locationName, this.branchID, this.branchName);
      if(this.categories == undefined){
        this._location.back();
      }
    });
  }

}
