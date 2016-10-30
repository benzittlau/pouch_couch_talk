import DS from 'ember-data';
import { Model } from 'ember-pouch';

const { attr, hasMany } = DS;

export default Model.extend({
  title: attr('string'),
  completed: attr('boolean')
});
