import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('CalculatorService' , () => {

  let calculator: CalculatorService, loggerSpy: any;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('loggerService', ['log']);
   calculator = new CalculatorService(loggerSpy);
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
