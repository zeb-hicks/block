// Lighting values.
uniform vec3 lightPos[LIGHT_COUNT];
uniform vec4 lightData[LIGHT_COUNT];
uniform vec2 lightInfo[LIGHT_COUNT];

// World location
uniform vec3 location;
uniform vec3 cameraPosition;

// attribute vec4 verts; // Side, corner, u, v
attribute vertices;
attribute uvs;
attribute normals;

varying vec2 uv;
varying vec3 eye;
varying vec2 uv;
varying vec3 normal;

void main() {
	uv = uvs;
	normal = normalize(normals * mat3(transform[0].xyz, transform[1].xyz, transform[2].xyz));
	gl_Position = cameraProjection * cameraInverse * transform * vec4(vertices, 1.0);
}