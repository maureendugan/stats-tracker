Stats.NewTeamController = Ember.ObjectController.extend({
  actions: {
    createTeam: function() {
      var team = this.get('model')
      var controller = this;

      team.save().then(function() {
        controller.transitionToRoute('teams');
      });
    }
  }
});
