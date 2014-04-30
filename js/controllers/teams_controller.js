Stats.TeamsController = Ember.ArrayController.extend({
  actions: {
    createTeam: function() {
      var name = this.get('newTeamName')

      var team = this.store.createRecord('team', {
        name: name
      });

      this.set('newTeamName', '');

      team.save();
    }
  }
});
