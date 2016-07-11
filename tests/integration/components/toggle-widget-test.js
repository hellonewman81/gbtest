import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('toggle-widget', 'Integration | Component | toggle widget', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{toggle-widget}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#toggle-widget}}
      template block text
    {{/toggle-widget}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
