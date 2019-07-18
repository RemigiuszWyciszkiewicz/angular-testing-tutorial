import { fakeAsync, tick, flush, flushMicrotasks } from '@angular/core/testing';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

describe('Async testing example', () => {

    console.log('koniec');
    it('Asynchronus test example with Jasmine done()', (done: DoneFn) => {

    let test = false;

    setTimeout(() => {

      console.log('running assertions');
      test = true;
      expect(test).toBeTruthy();
      done();
    }, 3000);

    console.log('koniec');
  });

  it('asynchronus test example', fakeAsync(() => {

    let test = false;

    setTimeout(() => {}, 2000);

    setTimeout(() => {

      console.log('running assertions 2');
      test = true;

    }, 1000);

    // tick(500);
    // tick(499);
    // tick(1);

    flush();

    expect(test).toBeTruthy();
  }));

  it ('Asynchronus test example - plain promise', fakeAsync(() => {

    let test = false;

        console.log('Creating promise');

        Promise.resolve().then(() => {

            console.log('Promise first then() evaluated successfully');

            return Promise.resolve();
        })
        .then(() => {

            console.log('Promise second then() evaluated successfully');

            test = true;

        });

        flushMicrotasks();

        console.log('Running test assertions');

        expect(test).toBeTruthy();

  }));

  it('asynchronous test example - Promises + setTimeout()', fakeAsync(() => {

    let counter = 0;

    Promise.resolve().then(() => {
      counter += 10;

      setTimeout(() => {
        counter += 1;
      }, 1000);

    });
    expect(counter).toBe(0);

    flushMicrotasks();

    expect(counter).toBe(10);

    tick(500);

    expect(counter).toBe(10);

    tick(500);

    expect(counter).toBe(11);

  }));

  it('Asynchronous test example - Observables', fakeAsync (() => {

    let test = false;

    console.log('Crating observable');

    const test$ = of(test).pipe(delay(1000));

    test$.subscribe(() => {
      test = true;
    });

    tick(1000);
  expect(test).toBe(true);




  }));

});

