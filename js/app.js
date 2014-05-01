Stats = Ember.Application.create();

Stats.ApplicationSerializer = DS.LSSerializer.extend();
Stats.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'stats-emberjs'
});


