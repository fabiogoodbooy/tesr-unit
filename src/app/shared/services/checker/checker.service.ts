import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckerService {

  constructor() { }

  public isValidNumber( a :any) :boolean{
    return !!a && !isNaN(a) && typeof a == 'number';
  }
}
