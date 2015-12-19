# click-to-edit for ember-cli
[![npm version](https://badge.fury.io/js/ember-cli-click-to-edit.svg)](https://badge.fury.io/js/ember-cli-click-to-edit)
[![Build Status](https://travis-ci.org/dbuedo/ember-cli-click-to-edit.svg)](https://travis-ci.org/dbuedo/ember-cli-click-to-edit)

Show a textarea content as plain text, allowing to edit the content with just one click.

## Installation

```
ember install ember-cli-click-to-edit
```

## Usage

```hbs
{{click-to-edit value="insert your content here"}}
```

### Options

You can use most of the options of [textarea helper](http://emberjs.com/api/classes/Ember.Templates.helpers.html#method_textarea), with some particularities:

* *cols='auto':* sets teh width of the textarea to 100%
* *rows='auto':* adds support for [autosize library](https://github.com/jackmoore/autosize)
* *blur:* blur event is overriden by component behaviour
* *readonly:* disabled as it has no sense for this component
