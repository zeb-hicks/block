window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;

function importAll() {
	var list = [];
	for (var i = 0; i < arguments.length; i++) list.push(arguments[i]);
	var callback = list.pop();
	loadNext(list, function() {
		callback();
	});
}

function loadNext(list, cb) {
	var file = './js/' + list.shift();
	var list = list;
	var cb = cb;
	loadFile(file, function(data) {
		var rx = /\/\/\/[^\n]+/gi, req, reqarr = [];
		while (req = rx.exec(data)) {
			reqarr.push(req[0].substr(4));
		}
		var lf = function(list, cb, file) {
			var scr = document.createElement('script');
			scr.loadList = list;
			scr.callback = cb;
			scr.src = file;
			scr.addEventListener('load', function() {
				if (this.loadList.length > 0) {
					loadNext(this.loadList, this.callback);
				} else {
					this.callback();
				}
			});
			document.head.appendChild(scr);
		}
		if (reqarr.length > 0) {
			loadNext(reqarr, function() {
				lf(list, cb, file);
			});
		} else {
			lf(list, cb, file);
		}
	});
}

function loadFile(f,cb) {
	var xhr = new XMLHttpRequest();
	if (cb === undefined) {
		xhr.open('GET', f, false);
		xhr.setRequestHeader('Cache-Control','no-cache,max-age=0');
		xhr.setRequestHeader('Pragma','no-cache');
		xhr.send(null);
		return xhr.responseText;
	} else {
		xhr.open('GET', f, true);
		xhr.addEventListener('load', function(e) {
			cb(xhr.responseText);
		});
		xhr.setRequestHeader('Cache-Control','no-cache,max-age=0');
		xhr.setRequestHeader('Pragma','no-cache');
		xhr.send(null);
	}
}

function init() {
	Game.init();
}

importAll(
	'lib/glowcore.js',
	'lib/glowexts.js',
	'game.js',
init);