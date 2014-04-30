Stats.Router.map(function() {
  this.resource('teams', { path: '/' });
});

Stats.TeamsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('team');
  }
});
