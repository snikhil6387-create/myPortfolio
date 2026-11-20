import { useEffect, useRef } from 'react';

const VS = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

const FS = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main() {
    vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    vec2 m = (u_mouse / max(u_resolution, vec2(1.0))) * 2.0 - 1.0;
    float t = u_time * 0.12;
    float d1 = sin(p.x * 1.4 + t) * cos(p.y * 1.3 - t * 0.9);
    float d2 = sin(p.y * 1.8 + t * 0.7) * cos(p.x * 1.6 + t * 0.4);
    vec3 baseColor = vec3(0.03, 0.04, 0.08);
    vec3 indigo = vec3(0.12, 0.06, 0.28);
    vec3 violetGlow = vec3(0.45, 0.22, 0.75);
    vec3 cyanGlow = vec3(0.08, 0.55, 0.72);
    float orb1 = smoothstep(1.1, 0.0, length(p - vec2(sin(t * 0.9) * 0.65, cos(t * 0.6) * 0.45)));
    float orb2 = smoothstep(1.3, 0.0, length(p - vec2(-sin(t * 0.45) * 0.75, -cos(t * 0.55) * 0.55)));
    float orb3 = smoothstep(0.85, 0.0, length(p - m * 0.55));
    vec3 col = baseColor + indigo * 0.55;
    col += violetGlow * (orb1 * 0.32 + d1 * 0.08);
    col += cyanGlow * (orb2 * 0.22 + d2 * 0.06);
    col += mix(violetGlow, cyanGlow, 0.5) * orb3 * 0.18;
    float vig = 1.0 - smoothstep(0.35, 1.35, length(p));
    col *= clamp(vig, 0.55, 1.0);
    col = pow(col, vec3(0.95));
    gl_FragColor = vec4(col, 1.0);
}`;

function compileShader(gl, type, src) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  return shader;
}

export default function ShaderCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const syncSize = () => {
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    syncSize();
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(syncSize) : null;
    ro?.observe(canvas);

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return () => ro?.disconnect();

    const prog = gl.createProgram();
    gl.attachShader(prog, compileShader(gl, gl.VERTEX_SHADER, VS));
    gl.attachShader(prog, compileShader(gl, gl.FRAGMENT_SHADER, FS));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );
    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    const onMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const nx = (event.clientX - rect.left) / rect.width;
      const ny = 1.0 - (event.clientY - rect.top) / rect.height;
      mouse = { x: nx * canvas.width, y: ny * canvas.height };
    };
    window.addEventListener('mousemove', onMove);

    let frameId;
    const render = (t) => {
      if (!ro) syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      frameId = requestAnimationFrame(render);
    };
    frameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onMove);
      ro?.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="block w-full h-full"
      aria-hidden
    />
  );
}