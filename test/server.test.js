import test from 'node:test';
import assert from 'node:assert';
import { message } from '../src/server.js';

test('message mentions a container', () => {
  assert.match(message, /container/);
});
