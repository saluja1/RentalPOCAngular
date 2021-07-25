import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-locationmenublock',
  templateUrl: './locationmenublock.component.html',
  styleUrls: ['./locationmenublock.component.css']
})
export class LocationmenublockComponent implements OnInit {
  @Input() locations:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.locations)
  }

}
