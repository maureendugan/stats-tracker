Stats.PlayerController = Ember.Controller.extend({
  shotsCount: function() {
    return 25; //trying to return player.shots and count them
  }.property(),
  game: "The battle for the wall"
});
