import { fakeAsync, tick, flush, flushMicrotasks } from '@angular/core/testing';

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

  fit ('Asynchronus test example - plain promise', fakeAsync(() => {

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

});

