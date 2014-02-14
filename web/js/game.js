/// scene.js
/// world.js
/// net.js

var Game = {};

Game.init = function() {

};

Game.clock = {
	loopTime: performance.now(),
	drawTime: performance.now()
};

Game.loop = function() {
	var dt = performance.now() - Game.clock.loopTime;
	Game.clock.loopTime += dt;
};

Game.draw = function() {
	var dt = performance.now() - Game.clock.drawTime;
	Game.clock.drawTime += dt;
	requestAnimationFrame(Game.draw);
};