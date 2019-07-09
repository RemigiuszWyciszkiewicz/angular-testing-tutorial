import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';
import { TestBed } from '@angular/core/testing';

describe('CalculatorService' , () => {

  let calculator: CalculatorService, loggerSpy: any;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);

    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        {provide: LoggerService, useValue:  loggerSpy}
      ]
    });

    calculator = TestBed.get(CalculatorService);
  } );

it('should add two numbers', () => {

  // loggerSpy.log.and.returnValue();

  const result = calculator.add(2.5, 2.5);

  expect(result).toBe(5);
  expect(loggerSpy.log).toHaveBeenCalledTimes(1);

});

it('should subtract two numbers', () => {

  const result = calculator.subtract(10, 5);

  expect(result).toBe(5, 'Unexpected subtraction result');
  expect(loggerSpy.log).toHaveBeenCalledTimes(1);


});



});
