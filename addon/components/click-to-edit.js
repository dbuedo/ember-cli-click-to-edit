import Ember from 'ember';
import layout from '../templates/components/click-to-edit';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['click-to-edit'],
  classNameBindings: ['isEditing'],
  isEditing: false,
  widthResize: false,
  heightResize: false,
  textLenght: null,

  click: function() {
    this.set('isEditing', true);
    if(this.get('cols') === 'auto') {
		this.set('widthResize', true);
		this.set('cols', null);		
    }
    if(this.get('rows') === 'auto') {
		this.set('heightResize', true);
		this.set('rows', null);
		this.set('textLenght', this.$('p').height());		
    }
    Ember.run.scheduleOnce('afterRender', this, 'initTextarea');
  },
  initTextarea: function() {
	var txt = this.$('textarea');
	if(this.widthResize) {
		txt.width('100%');	
	}
	if(this.heightResize) {
		txt.height(this.textLenght);	
	}
	txt.focus(); 
  },
  actions: {
    blur: function() {
      this.set('isEditing', false);
    }
  }
});
