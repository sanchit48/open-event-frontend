import { find } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | forms/admin/settings/system/storage option', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', function(assert) {
    this.render(hbs`{{forms/admin/settings/system/storage-option}}`);
    assert.ok(find('*').innerHTML.trim().includes('Storage'));
  });
});
