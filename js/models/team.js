Stats.Team = DS.Model.extend({
  name: DS.attr('string'),
  players: DS.hasMany('player', {async: true})
});

Stats.Team.FIXTURES = [
  {
    id: 1,
    name: "The Crows",
    players: [1,2,3]
  },
  {
    id: 2,
    name: "The Free Men",
    players: [4,5]
  }
]
