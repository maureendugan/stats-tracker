Stats.Player = DS.Model.extend({
  name: DS.attr('string'),
  team: DS.belongsTo('team', {async: true}),
  shots: DS.hasMany('shot', {async: true})
});

Stats.Player.FIXTURES = [
  {
    id: 1,
    name: "Jon",
    team: 1
  },
  {
    id: 2,
    name: "Sam",
    team: 1
  },
  {
    id: 3,
    name: "Maester",
    team: 1
  },
  {
    id: 4,
    name: "Mance",
    team: 2
  },
  {
    id: 5,
    name: "Ygritte",
    team: 2
  }
]
