import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | auth-wrapper', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{auth-wrapper}}`);

    assert.equal(this.element.textContent.trim(), 'keep');

    // Template block usage:
    await render(hbs`
      {{#auth-wrapper}}
        template block text
      {{/auth-wrapper}}
    `);

    assert.equal(this.element.querySelector('.login-right').textContent.trim(), 'template block text');

  });
});
