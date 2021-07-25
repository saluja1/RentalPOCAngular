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
    this.locationService.getLocations();
    this.locationService.addBreadcrumbs();
    this.store.select((data)=> data['locationsData'].locations ).subscribe( (data) => this.locations = data )
    console.log(this.locations);        
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
