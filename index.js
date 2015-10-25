/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-click-to-edit',

  included: function(app) {
    app.import('vendor/click-to-edit.css');
  }
};
