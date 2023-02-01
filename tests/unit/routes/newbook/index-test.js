import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | newbook/index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:newbook/index');
    assert.ok(route);
  });
});
