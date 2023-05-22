import { Injectable } from '@angular/core';
import { Region, SmallCountry } from '../interfaces/country.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private _regions: Region[] = [ Region.Africa, Region.Amercias, Region.Asia, Region.Europe, Region.Oceania ];

  constructor() { }

  get regions(): Region[] {

    return [...this._regions];

  }

  getCountriesByRegion(region: Region): SmallCountry[]
  {

    return [];

  }


}