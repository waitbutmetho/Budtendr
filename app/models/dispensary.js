import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  phone: DS.attr(),
  email: DS.attr(),
  website: DS.attr(),
  hours: DS.attr(),
  //Alex: I do not know what else we can add here. I know dispensaries should be able to include their social media accounts(facebook, instagram, twitter, google+), photos. Should we create different models for this? 
});
