import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationsService } from '../locations.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() locationName: any;
  @Input() locationID: any;
  @Input() branchID: any;
  @Input() branchName: any;
  @Input() categoryID: any;
  subCategories: any; 
  defaultImage = '../../assets/loader.gif';

  constructor(private _location: Location, private route: ActivatedRoute, private router: Router, private locationService: LocationsService ) {
    console.log("gere")
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.locationID = params.get('locationID');
      this.branchID = params.get('branchID');
      this.categoryID = params.get('categoryID');
      console.log("here")
      this.locationService.getSubCategories(this.locationID, this.branchID, this.categoryID).subscribe(x => this.subCategories = x.flat(3));
      this.locationService.getLocationbyID(this.locationID).subscribe(x => this.locationName = x.flat()[0])
      this.locationService.getBranchbyID(this.locationID, this.branchID).subscribe(x => this.branchName = x.flat()[0])
      this.locationService.addBreadcrumbs(this.locationID, this.locationName, this.branchID, this.branchName, this.categoryID);
      if(this.subCategories.length < 1){
        this._location.back();
      }      
	});
  }

}
