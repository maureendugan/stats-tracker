Stats = Ember.Application.create({
  LOG_TRANSITIONS: true
});

Stats.ApplicationSerializer = DS.LSSerializer.extend();
Stats.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'stats-emberjs'
});


