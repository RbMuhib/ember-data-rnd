import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | reg form', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /reg-form', async function(assert) {
    await visit('/reg-form');

    assert.equal(currentURL(), '/reg-form');
  });
});
