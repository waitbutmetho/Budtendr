import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  species: DS.attr(),
  thc: DS.attr(),
  cbd: DS.attr(),
  gram: DS.attr(),//price
  eighth: DS.attr(),//price
  quarter: DS.attr(),//price
  half: DS.attr(),
  ounce: DS.attr(),
  custom_weight: DS.attr(),//dispensaries may offer 2g as minimum weight purchase.
  farm: DS.attr()
//Alex: Does anything else need to be included for each strain that we have?

});
