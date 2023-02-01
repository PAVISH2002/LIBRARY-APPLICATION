import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | newbook/bookslist', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:newbook/bookslist');
    assert.ok(route);
  });
});
