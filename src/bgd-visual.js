/**
 * BGD Visual — padrões mesclados dos 10 repositórios auditados.
 * three.js + GSAP + motion-style + micro-interactions (react-bits/magicui style)
 * Uso: <script src="src/bgd-visual.js"></script>
 * Depois: BGDVisual.initCube('#canvas'); BGDVisual.typewriter('#el', 'texto');
 */

window.BGDVisual = {
  // three.js pattern (mrdoob/three.js)
  async initCube(selector) {
    const mod = await import('https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js');
    const THREE = mod;
    const el = document.querySelector(selector);
    if (!el) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, el.clientWidth / el.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(el.clientWidth, el.clientHeight);
    el.appendChild(renderer.domElement);
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshNormalMaterial());
    scene.add(mesh);
    camera.position.z = 2.5;
    function loop() {
      requestAnimationFrame(loop);
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.012;
      renderer.render(scene, camera);
    }
    loop();
    return { scene, camera, mesh, renderer };
  },

  // GSAP pattern (greensock/GSAP)
  async typewriter(selector, text, speed = 0.04) {
    const gsap = (await import('https://cdn.jsdelivr.net/npm/gsap@3.12.5/+esm')).default;
    const el = document.querySelector(selector);
    if (!el) return;
    el.textContent = '';
    return gsap.to({}, {
      duration: text.length * speed,
      onUpdate() {
        el.textContent = text.slice(0, Math.floor(this.progress() * text.length));
      }
    });
  },

  // motion-style simple tween (motiondivision/motion pattern, vanilla)
  animate(selector, props, duration = 0.6) {
    const el = document.querySelector(selector);
    if (!el) return;
    const start = performance.now();
    const from = {};
    const keys = Object.keys(props);
    keys.forEach(k => {
      if (k === 'x') from[k] = 0;
      else if (k === 'opacity') from[k] = parseFloat(getComputedStyle(el).opacity) || 1;
    });
    function step(now) {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const ease = t < 0.5 ? 2*t*t : -1+(4-2*t)*t; // easeInOut
      keys.forEach(k => {
        const v = from[k] + (props[k] - from[k]) * ease;
        if (k === 'x') el.style.transform = `translateX(${v}px)`;
        if (k === 'opacity') el.style.opacity = v;
      });
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  },

  // react-bits / magicui style card hover
  enableCards(selector = '.bgd-card') {
    document.querySelectorAll(selector).forEach(card => {
      card.style.transition = 'transform .2s, box-shadow .2s';
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-6px)';
        card.style.boxShadow = '0 12px 28px #213c5830';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.boxShadow = '';
      });
    });
  }
};
