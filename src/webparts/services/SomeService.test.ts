import { SomeService } from './SomeService';
import * as strings from 'HelloWorldWebPartStrings'

test('test pnp inclusion works', () => {
  expect(SomeService.someMethod()).toBeTruthy();
})

test('test resources are working', () => {
  expect(strings.BasicGroupName).toBe('Group Name');
})
