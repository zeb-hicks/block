var Scene = {};

var GX = Scene.GX = new GLOW.Context({

});

Scene.add = function(obj) {

	if (obj instanceof Scene.Model) {



	}

};


Scene.Node = function(o) {

	if (o === undefined) o = {};



};

Scene.Node.prototype = Object.create(GLOW.Node.prototype);
Scene.Node.constructor = Scene.Node;

Scene.Model = function(o) {

	if (o === undefined) o = {};

};

Scene.Chunk = function(o) {

	if (o === undefined) o = {};

	if (o.data === undefined) {

	}

	var blockCount = 32 * 32 * 32;

	this.needsUpdate = false;
	this.blocks = {

		id: new Uint8Array(blockCount),

	};

	this.update = function() {

		if (!this.needsUpdate) return;

		var x = 0, y = 0, z = 0;

		for (;z<32;z++) {
			for (;y<32;y++) {
				for (;x<32;x++) {

				}
			}
		}

	};

	this.draw = function() {

		var x = 0, y = 0, z = 0;

		for (;z<32;z++) {
			for (;y<32;y++) {
				for (;x<32;x++) {
					blockShader.uniforms.transform.setPosition(x, y, z);
					GX.cache.invalidateUniform(blockShader.uniforms.transform);
					blockShader.draw();
				}
			}
		}

	};

};

var blockShader = new GLOW.Shader({
	vertexShader: load
});

Scene.Chunk.prototype = Object.create(Scene.Node.prototype);
Scene.Chunk.constructor = Scene.Chunk;