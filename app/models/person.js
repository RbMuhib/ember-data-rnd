import DS from 'ember-data';

export default DS.Model.extend({
   
    pid: DS.attr(),
    firstname: DS.attr(),
    lastname: DS.attr(),
    age: DS.attr(),
    email: DS.attr(),
});
