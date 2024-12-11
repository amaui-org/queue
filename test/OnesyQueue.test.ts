/* tslint:disable: no-shadowed-variable */
import { assert } from '@onesy/test';

import { evaluate } from '../utils/js/test/utils';

import OnesyQueue from '../src';

group('OnesyQueue', () => {

  to('OnesyQueue', async () => {
    const value = new OnesyQueue([1, 2, 3, 4], 14);

    const valueBrowsers = await evaluate((window: any) => {
      const value = new window.OnesyQueue([1, 2, 3, 4], 14);

      return [value.value, value.limit];
    });
    const valueNode = [value.value, value.limit];
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql([[1, 2, 3, 4], 14]));
  });

  group('onesyQueue', async () => {

    to('length', async () => {
      const value = new OnesyQueue([1, 2, 3, 4], 14);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.OnesyQueue([1, 2, 3, 4], 14);

        return value.length;
      });
      const valueNode = value.length;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(4));
    });

    to('first', async () => {
      const value = new OnesyQueue([1, 2, 3, 4], 14);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.OnesyQueue([1, 2, 3, 4], 14);

        return value.first;
      });
      const valueNode = value.first;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(4));
    });

    to('peak', async () => {
      const value = new OnesyQueue([1, 2, 3, 4], 14);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.OnesyQueue([1, 2, 3, 4], 14);

        return value.peak;
      });
      const valueNode = value.peak;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(4));
    });

    to('empty', async () => {
      const value = new OnesyQueue([], 14);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.OnesyQueue([], 14);

        return value.empty;
      });
      const valueNode = value.empty;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    to('full', async () => {
      const value = new OnesyQueue([1, 2, 3, 4], 4);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.OnesyQueue([1, 2, 3, 4], 4);

        return value.full;
      });
      const valueNode = value.full;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eq(true));
    });

    group('push', () => {

      to('push', async () => {
        const value = new OnesyQueue([], 14);

        const valueBrowsers = await evaluate((window: any) => {
          const value = new window.OnesyQueue([], 14);

          return [value.push(1, 2, 3, 4), value.first, value.length];
        });
        const valueNode = [value.push(1, 2, 3, 4), value.first, value.length];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([true, 1, 4]));
      });

      to('limit', async () => {
        const value = new OnesyQueue([1, 2, 3, 4], 4);

        const valueBrowsers = await evaluate((window: any) => {
          const value = new window.OnesyQueue([1, 2, 3, 4], 4);

          return [value.push(14), value.first, value.length];
        });
        const valueNode = [value.push(14), value.first, value.length];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([false, 4, 4]));
      });

    });

    to('pop', async () => {
      const value = new OnesyQueue([1, 2, 3, 4], 14);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.OnesyQueue([1, 2, 3, 4], 14);

        return [value.pop(), value.first, value.length];
      });
      const valueNode = [value.pop(), value.first, value.length];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([4, 3, 3]));
    });

    to('clear', async () => {
      const value = new OnesyQueue([1, 2, 3, 4], 14);

      value.clear();

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.OnesyQueue([1, 2, 3, 4], 14);

        value.clear();

        return [value.value];
      });
      const valueNode = [value.value];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([[]]));
    });

  });

});
