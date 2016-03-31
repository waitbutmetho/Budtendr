import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  password: DS.attr(),
  email: DS.attr(),
  strainreviews: DS.attr(),
  dispensaryreviews: DS.attr(),
});
