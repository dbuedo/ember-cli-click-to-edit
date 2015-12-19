import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('click-to-edit', 'Integration | Component | click to edit', {
  integration: true
});


test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{click-to-edit}}`);

  assert.equal(this.$().text().trim(), '');
});

test('it shows plain text', function(assert) {
  assert.expect(1);

  this.render(hbs`{{click-to-edit value='click here'}}`);

  assert.equal(this.$().text().trim(), 'click here');
});

test('it shows textarea after click and p after blur', function(assert) {
  assert.expect(5);

  this.render(hbs`{{click-to-edit value='click here'}}`);
  assert.equal(this.$('p').length, 1);

  this.$('p').click();
  assert.equal(this.$('p').length, 0);
  assert.equal(this.$('textarea').length, 1);

  this.$('textarea').focusout();
  assert.equal(this.$('p').length, 1);
  assert.equal(this.$('textarea').length, 0);
});

test('it has is-modified class when content changed', function(assert) {
  assert.expect(1);

  this.set('content', 'show this content');

  this.render(hbs`{{click-to-edit value=content}}`);
  this.$('p').click();

  this.set('content', 'changed content'); 
  this.$('textarea').focusout();

  assert.equal(this.$('.is-modified').length, 1);    
});
