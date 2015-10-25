import Ember from 'ember';
import layout from '../templates/components/click-to-edit';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['click-to-edit'],
  classNameBindings: ['isEditing'],
  isEditing: false,
  
  click: function() {
    console.log('click! on click-to-edit');
    this.set('isEditing', true);
    Ember.run.scheduleOnce('afterRender', this, 'setFocus');
  },
  setFocus: function() {
	console.log('setting focus');
    this.$('textarea').focus();
  },
  actions: {
    blur: function() {
      console.log("focus  out! on click-to-edit");
      this.set('isEditing', false);
    }
  }
});
