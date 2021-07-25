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
  @Input() locationID: any;
  @Input() branchID: any;
  @Input() categoryID: any;
  subCategories: any; 

  constructor(private _location: Location, private route: ActivatedRoute, private router: Router, private locationService: LocationsService ) {
	  console.log("cat");
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.locationID = params.get('locationID');
      this.branchID = params.get('branchID');
      this.categoryID = params.get('categoryID');
      this.locationService.getSubCategories(this.locationID, this.branchID, this.categoryID).subscribe(x => this.subCategories = x.flat(3));
      this.locationService.addBreadcrumbs(this.locationID, this.branchID, this.categoryID);
      if(this.subCategories.length < 1){
        this._location.back();
      }      
	});
  }

}
