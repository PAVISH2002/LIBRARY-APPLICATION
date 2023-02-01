import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | returnbook/singleuser', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:returnbook/singleuser');
    assert.ok(route);
  });
});
