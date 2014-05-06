Stats.Shot = DS.Model.extend({
  attempt: DS.attr('boolean'),
  player: DS.belongsTo('player', {async: true})
});

Stats.Shot.FIXTURES = [
  {
    id: 1,
    attempt: true,
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
    player: 4
  }

]
