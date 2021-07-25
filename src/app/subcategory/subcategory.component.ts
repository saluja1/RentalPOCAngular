import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationsService } from '../locations.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
  @Input() locationID: any;
  @Input() branchID: any;
  @Input() categoryID: any;
  @Input() subID: any;
  subCatData: any; 

  constructor(private _location: Location, private route: ActivatedRoute, private router: Router, private locationService: LocationsService ) {
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.locationID = params.get('locationID');
      this.branchID = params.get('branchID');
      this.categoryID = params.get('categoryID');
      this.subID = params.get('subID');
      this.locationService.getSubCategoryData(this.locationID, this.branchID, this.categoryID, this.subID).subscribe(x => this.subCatData = x.flat(4));
      this.locationService.addBreadcrumbs(this.locationID, this.branchID, this.categoryID, this.subID);
      if(this.subCatData.length < 1){
        this._location.back();
      }

  });
  }

}
