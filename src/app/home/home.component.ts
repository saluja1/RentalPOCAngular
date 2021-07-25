import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../locations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor( private locationService: LocationsService) {
      this.locationService.addBreadcrumbs();
    }

  ngOnInit(): void {
  }

}
