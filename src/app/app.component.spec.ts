import { TestBed ,ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms'
import { CheckerService } from './shared/services/checker/checker.service';
import { AccountingComponent } from './accounting/accounting.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

// declare the name space with custom function test

declare global{

  namespace jasmine {
    interface Matchers<T> {
      toBeCorrect() :void ;
    }
  }
}
describe('AppComponent', () => {
  let fixture : ComponentFixture<AppComponent>;
  let app : AppComponent;
  let checkService : CheckerService;
  beforeEach( () => {
     TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,

      ],
      schemas : [
        NO_ERRORS_SCHEMA
      ]
    })
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
   // console.log('test unit');
  });
  beforeEach(()=>{

    jasmine.addMatchers({
      toBeCorrect : ()=>{
        return {
          // expect work with toBeCorrect params ()
          compare : (actual : any , expect : any )=>{
            let response : {pass:boolean, message : string} =  {} as any ;
            response.pass= ( actual < 5 && actual > 2 );
            response.message = "Error with your input"
            return response ;
          }
        }
      }
    })
    checkService = TestBed.inject(CheckerService);
  })

  it('should small of 5 ' , ()=>{
    expect(4).toBeCorrect()
  })
  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'unit-test'`, () => {

    expect(app.title).toEqual('unit-test');
    //expect(5).toBeGreaterThan(6); test field
  });

 /*it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('unit-test app is running!');
  });
*/
  it('name() should be string' ,()=>{
    expect(app.name()).toBeInstanceOf(String);
  })

  describe('calc(...)',()=>{

    it('should multiply two number correctly',()=>{
      const result = app.calc(2,4);
      expect(result).toBe(8);
    })
    it('should verify isValidNumber was called',()=>{
      let spyIsValidNumber : jasmine.Spy;
     // const spyAge : jasmine.Spy = spyOnProperty(checkService,'age', 'get'); // spy On Prp pour le variable
      //expect(spyAge).toHaveBeenCalled();


      spyIsValidNumber = spyOn(checkService,'isValidNumber').and.returnValue(true); // spy On pour les fnct
      const result = app.calc(2,4);
      expect(result).toBe(8);
      expect(spyIsValidNumber).toHaveBeenCalled(); // isValidNumber have ben called
      expect(spyIsValidNumber).toHaveBeenCalledTimes(1); // number of call isValidNumber
      expect(spyIsValidNumber).toHaveBeenCalledWith(2);


    })

  });

  describe('changeAge()',()=>{
    it('changeAge() should change correctly',()=>{
      expect(app.age).toBe(1); // true before call changeAge
      app.changeAge(); // execute fct changeAge
      expect(app.age).toBe(12);
    })
    xit('should be defined',()=>{
      expect(app.changeAge()).toBeDefined();
    })
  })

});
