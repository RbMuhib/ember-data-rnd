import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | reg-form', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:reg-form');
    assert.ok(route);
  });
});
