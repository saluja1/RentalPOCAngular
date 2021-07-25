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
  locationID: any;
  categories: any; 
  defaultImage = 'https://miro.medium.com/max/441/1*9EBHIOzhE1XfMYoKz1JcsQ.gif';

  constructor(private _location: Location, private route: ActivatedRoute, private router: Router, private locationService: LocationsService ) {
  	console.log("branch");
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.locationID = params.get('locationID');
      this.branchID = params.get('branchID');
      this.locationService.getCategories(this.locationID, this.branchID).subscribe(x => this.categories = x.flat(2)[0]["categories"]);
      this.locationService.addBreadcrumbs(this.locationID, this.branchID);
      if(this.categories == undefined){
        this._location.back();
      }
    });
  }

}
