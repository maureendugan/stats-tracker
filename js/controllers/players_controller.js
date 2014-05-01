Stats.PlayersController = Ember.ArrayController.create({
  content: players,
  sortProperties: ['team'],
  sortAscending: true
})
