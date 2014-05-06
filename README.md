Statskeeper
===========

Epicodus Week 11 Day 3

Maureen Dugan & Liz Tom

A stat keeper to practice using Ember.js

------------------------------------------------------

* Before the game starts, the stats keeper needs to enter the names of the teams who are playing, and the names of the players on the teams. To keep things simple, we'll make it so that this app can only be used for a single game at a time, at least to start.

* When a player shoots the ball, the stats keeper needs to record who shot it and whether they made or missed the basket. For now, we'll treat all shots the same - don't worry about free throws or 3-pointers. Hint: Make a ShotAttempt model.

* For each player, display the total number of shots they attempted. Hint: Add a computed property to your Player model.

* Also display the percentage of shots they made and the total number of points they scored. Hint: Use Ember's aggregate data feature.

* Now, make the page highlight the highest-scoring player for each team. Hint: Add a boolean highestScorer computed property to Player. Then, read about binding a class name to a boolean value, so that you can add a class to highlight the highest scorer.

* Add an button to toggle between sorting the players by name or by the number of points they scored. Hint: Read about sorting in array controllers.

* Build out a Rails API backend to your app. Switch from the Local Storage adapter to the Active Model adapter. Keep your Ember app separate from your Rails app; you don't need to use the ember-rails gem or anything like them. To get them to talk to each other, simply tell Ember where to find the Rails app:

* Require your stats keepers to log in before tracking stats. Hint: Ember unfortunately doesn't have a standard way to handle authentication, but the most common is to use an auth token in your request headers. This most popular plugin for this approach is Ember.SimpleAuth. They have a nice version that is compatible with Devise, but it requires some modifications to Devise. The README is pretty incomplete, so I opened a pull request with a better walk-through; until it's merged, you can check it out on my fork.
