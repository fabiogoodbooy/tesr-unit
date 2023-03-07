import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CheckerService } from './shared/services/checker/checker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'unit-test';
  age : number = 1 ;
  constructor(private fb : FormBuilder,
    private checkerService : CheckerService){ }

  public  name() :String {
    return 'Get name' ;
  }

  public changeAge() :void{
    this.age = 12 ;
  }
  public calc(a : any,b : number):number{
    if(this.checkerService.isValidNumber(a)){
      return this.multiply(a,b) ;
    }
    throw new Error('Sorry it not a valid number ')
  } 
  private multiply(a:number , b :number) :number {
    return a * b 
  }
}
