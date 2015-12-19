/* global autosize */

import Ember from 'ember';
import layout from '../templates/components/click-to-edit';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['click-to-edit'],
  classNameBindings: ['isEditing','isModified'],
  isEditing: false,
  isModified: false,
  widthResize: false,
  heightResize: false,
  valueChanged:  Ember.observer('value', function() {
    this.set('isModified', true);
  }),

  click: function() {
    this.set('isEditing', true);
    if(this.get('cols') === 'auto') {
		  this.set('widthResize', true);
		  this.set('cols', null);		
    }
    if(this.get('rows') === 'auto') {
    	this.set('heightResize', true);
		  this.set('rows', null);		
    }
    Ember.run.scheduleOnce('afterRender', this, 'initTextarea');
  },
  initTextarea: function() {
  	var txt = this.$('textarea');
  	if(this.widthResize) {
      txt.width('100%');	
    }
    if(this.heightResize) {
      autosize(txt);	
    }
    txt.focus(); 
  },
  actions: {
    blur: function() {
      this.set('isEditing', false);
    }
  }
});
