/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-click-to-edit',

  included: function(app) {
  	this._super.included(app);

    this.app.import('vendor/click-to-edit.css');
    this.app.import(app.bowerDirectory + '/autosize/dist/autosize.min.js');
  }
};
