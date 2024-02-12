import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header-data.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerdata = new BehaviorSubject<HeaderData>({
    tittle: 'Inicio',
    icon: 'home',
    routeUrl: ''
  })

  constructor() { }

  get headerdata(): HeaderData {
    return this._headerdata.value
  }
  set headerdata(headerdata: HeaderData) {
    this._headerdata.next(headerdata)
  }
}
