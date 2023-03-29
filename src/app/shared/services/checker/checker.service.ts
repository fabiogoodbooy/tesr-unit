import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckerService {

  constructor() { }
  private _age : number = 0 ;
  public isValidNumber( a :any) :boolean{
    return !!a && !isNaN(a) && typeof a == 'number';
  }

  public get age(){
    return this._age;
  }

  public set age(value : number) {
    this._age = value ;
  }
}
