Stats.Router.map(function() {
  this.resource('teams', { path: '/' }, function(){
    this.resource('new_team', { path: '/teams/new'})
  });
});

Stats.TeamsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('team');
  }
});

Stats.NewTeamRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('team');
  }
});

