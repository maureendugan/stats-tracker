Stats.Router.map(function() {
  this.resource('teams', { path: '/' }, function(){
    this.resource('new_team', { path: '/teams/new'});
    this.resource('team', { path: '/teams/:id'});
  });
});

Stats.TeamsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('team');
  }
});

Stats.TeamRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('team', params.id);
  }
});

Stats.NewTeamRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('team');
  }
});

