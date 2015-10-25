import Ember from 'ember';
import layout from '../templates/components/click-to-edit';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['click-to-edit'],
  classNameBindings: ['isEditing'],
  isEditing: false,
  
  click: function() {
    this.set('isEditing', true);
    Ember.run.scheduleOnce('afterRender', this, 'setFocus');
  },
  setFocus: function() {
	this.$('textarea').focus();
  },
  actions: {
    blur: function() {
      this.set('isEditing', false);
    }
  }
});
