import Ember from 'ember';
import layout from '../templates/components/click-to-edit';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['click-to-edit'],
  classNameBindings: ['isEditing'],
  isEditing: false,
  widthResize: false,

  click: function() {
    this.set('isEditing', true);
    if(this.get('cols') === 'auto') {
		this.set('widthResize', true);
		this.set('cols', null);		
    }
    Ember.run.scheduleOnce('afterRender', this, 'initTextarea');
  },
  initTextarea: function() {
	var txt = this.$('textarea');
	if(this.widthResize) {
		txt.width('100%');	
	}
	txt.focus(); 
  },
  actions: {
    blur: function() {
      this.set('isEditing', false);
    }
  }
});
