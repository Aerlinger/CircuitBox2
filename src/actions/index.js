/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import editor from '../actions/editor.js';
import add_component from '../actions/editor/add_component.js';
const actions = {
  add_component,
  editor
};
module.exports = actions;
