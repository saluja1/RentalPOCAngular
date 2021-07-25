import {  Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { location } from './../models/location.model'


export const ADD_LOCATIONS_DATA   = 'ADD LOCATIONS DATA'


export class AddLocations implements Action {
  readonly type = ADD_LOCATIONS_DATA

  constructor(public payload: location) {

  }
}





export type Actions = AddLocations;
