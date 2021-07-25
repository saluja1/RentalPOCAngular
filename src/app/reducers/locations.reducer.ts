import { Action } from '@ngrx/store'
import { location } from './../models/location.model'

import * as AddLocations from './../action/locations.actions'

import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createSelector, createFeatureSelector } from '@ngrx/store';


const initialLocationState: location = <location>{}

export function locationsReducers(state = initialLocationState, action: AddLocations.Actions ) {

  switch(action.type) {
    case AddLocations.ADD_LOCATIONS_DATA:
      var payloadData = action.payload;
      return {...state, ...payloadData};
    default:
      return state;
  }
}

