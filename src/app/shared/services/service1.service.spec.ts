import { TestBed } from '@angular/core/testing';

import { Service1Service } from './service1.service';
import { Service2Service } from './service2.service';

let valueServiceSpy : jasmine.SpyObj<Service2Service>

describe('Service1Service', () => {
  let service: Service1Service;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('Service2Service',['bar']) // mocking service with function bar
    TestBed.configureTestingModule({

    providers:[ // providers the service hwo injected
      Service1Service,
      {provide : Service2Service, useValue : spy} // spy it's reference fir createSpyObj
    ]
    });
    service = TestBed.inject(Service1Service);
    valueServiceSpy = TestBed.get(Service2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true when calling foo', () => {
    valueServiceSpy.bar.and.returnValue('string from service 2')
    expect(service.foo()).toBe('string from service 2 my string');
  });
});
