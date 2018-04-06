import { find } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ui table server', function(hooks) {
  setupRenderingTest(hooks);

  const columns = [{ propertyName: 'name', template: 'components/ui-table/cell/cell-event', title: 'Name' }];
  const data = [{ name: 'user1' }];
  test('it renders', function(assert) {
    this.set('columns', columns);
    this.set('data', data);
    this.render(hbs `{{ui-table-server columns=columns data=data}}`);
    assert.ok(find('*').innerHTML.trim().includes('Name'));
  });
});
