import Data from 'ember-data';

export default Data.Model.extend({
  firstName: Data.attr('string'),
  lastName: Data.attr('string')
});
