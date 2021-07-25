import { Component, OnInit } from '@angular/core';
import * as AddLocations from './../action/locations.actions'
import { Store, select } from '@ngrx/store';
import { LocationsService } from './../locations.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  locations:any;
  
  constructor(public store:Store<{locations: []}>, private locationService:LocationsService) {
    console.log("header");
    this.locationService.getLocations().subscribe(x => this.locationService.addLocations(x['data']['locations']) );
    this.locationService.addBreadcrumbs();
    this.store.select((data)=> data['locationsData'].locations ).subscribe( (data) => this.locations = data );
  }

  OnInit(){
  }

  focusFunction() {    
  }

  focusOutFunction(){
    console.log("focusOutFunction");
  }

  ngOnInit(): void {
  }

}
