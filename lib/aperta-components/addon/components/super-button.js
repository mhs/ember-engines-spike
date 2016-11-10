import Ember from 'ember';
import layout from '../templates/components/super-button';

export default Ember.Component.extend({
  layout,
  classNames: ['super-button'],
  text: Ember.inject.service()
});
