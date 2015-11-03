/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-click-to-edit',

  included: function(app) {
  	this._super.included(app);

    app.import('vendor/click-to-edit.css');
    app.import(app.bowerDirectory + '/autosize/dist/autosize.min.js');
  }
};
