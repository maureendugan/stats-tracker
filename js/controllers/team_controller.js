Stats.TeamController = Ember.ObjectController.extend({
  actions: {
    deleteTeam: function() {
      if (confirm("Are you sure?")) {
        this.get('model').destroyRecord();
      }
    }
  }
});
