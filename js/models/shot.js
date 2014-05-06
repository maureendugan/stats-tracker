Stats.Shot = DS.Model.extend({
  attempt: DS.attr('boolean'),
  points: DS.attr('number'),
  player: DS.belongsTo('player', {async: true})
});

Stats.Shot.FIXTURES = [
  {
    id: 1,
    attempt: true,
    points: 3,
    player: 1
  },
  {
    id: 2,
    attempt: false,
    player: 1
  },
  {
    id: 3,
    attempt: true,
    points: 2,
    player: 4
  },
  {
    id: 4,
    attempt: false,
    player: 1
  }

]
