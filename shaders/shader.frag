#version 300 es
precision mediump float;

uniform sampler2D uUnidadDeTextura;

in vec2 vCoordenadasDeTextura;
out vec4 color;

void main() {
    color = texture(uUnidadDeTextura, vCoordenadasDeTextura); 
}