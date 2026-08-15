// AI Nexus Academy - Interactive 3D AI Hologram Background (Three.js)
// Optimized for Crisp Light / White Theme

const ThreeBackground = {
  scene: null,
  camera: null,
  renderer: null,
  canvas: null,
  
  // 3D Objects
  coreGroup: null,
  innerCore: null,
  outerCage: null,
  orbitalRing1: null,
  orbitalRing2: null,
  orbitalRing3: null,
  particleCloud: null,
  
  mouseX: 0,
  mouseY: 0,
  targetRotationX: 0,
  targetRotationY: 0,
  clock: null,

  init: function() {
    this.canvas = document.getElementById('bg-3d-canvas');
    if (!this.canvas) return;

    if (typeof THREE === 'undefined') {
      console.warn("Three.js not loaded. Retrying in 500ms...");
      setTimeout(() => this.init(), 500);
      return;
    }

    // 1. Create Scene & Camera
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 26;

    // 2. Create WebGL Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.clock = new THREE.Clock();

    // 3. Build the 3D Holographic AI Figure
    this.build3DFigure();

    // 4. Build Surrounding Particle Constellation
    this.buildParticleConstellation();

    // 5. Add Lights for Light Theme
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    this.scene.add(ambientLight);

    const pointLightBlue = new THREE.PointLight(0x0284c7, 3.0, 60);
    pointLightBlue.position.set(12, 16, 18);
    this.scene.add(pointLightBlue);

    const pointLightIndigo = new THREE.PointLight(0x6366f1, 2.5, 60);
    pointLightIndigo.position.set(-12, -16, 12);
    this.scene.add(pointLightIndigo);

    // 6. Event Listeners
    window.addEventListener('resize', () => this.onWindowResize());
    window.addEventListener('mousemove', (e) => this.onMouseMove(e));

    // 7. Start Animation Loop
    this.animate();
  },

  build3DFigure: function() {
    this.coreGroup = new THREE.Group();
    this.scene.add(this.coreGroup);

    // A. Inner Glowing Core (Icosahedron Solid)
    const innerGeo = new THREE.IcosahedronGeometry(4.2, 1);
    const innerMat = new THREE.MeshPhongMaterial({
      color: 0x0284c7,
      emissive: 0xbae6fd,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
      shininess: 80
    });
    this.innerCore = new THREE.Mesh(innerGeo, innerMat);
    this.coreGroup.add(this.innerCore);

    // B. Outer Cyber Geometric Cage
    const outerGeo = new THREE.IcosahedronGeometry(7.5, 0);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    this.outerCage = new THREE.Mesh(outerGeo, outerMat);
    this.coreGroup.add(this.outerCage);

    // C. Glowing Node Vertices on Outer Cage
    const sphereGeo = new THREE.SphereGeometry(0.22, 8, 8);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7
    });

    const positionAttribute = outerGeo.attributes.position;
    for (let i = 0; i < positionAttribute.count; i++) {
      const vertex = new THREE.Vector3();
      vertex.fromBufferAttribute(positionAttribute, i);
      const nodeMesh = new THREE.Mesh(sphereGeo, sphereMat);
      nodeMesh.position.copy(vertex);
      this.coreGroup.add(nodeMesh);
    }

    // D. Orbital Rings (Holographic Energy Gyroscopes)
    const createRing = (radius, tube, color, rotX, rotY) => {
      const ringGeo = new THREE.TorusGeometry(radius, tube, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color: color,
        wireframe: true,
        transparent: true,
        opacity: 0.4
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = rotX;
      ring.rotation.y = rotY;
      return ring;
    };

    this.orbitalRing1 = createRing(10.5, 0.06, 0x0284c7, Math.PI / 3, 0);
    this.orbitalRing2 = createRing(12.0, 0.05, 0xdb2777, -Math.PI / 4, Math.PI / 6);
    this.orbitalRing3 = createRing(13.5, 0.04, 0x7c3aed, Math.PI / 2, -Math.PI / 4);

    this.coreGroup.add(this.orbitalRing1);
    this.coreGroup.add(this.orbitalRing2);
    this.coreGroup.add(this.orbitalRing3);

    this.coreGroup.position.set(0, 0, 0);
  },

  buildParticleConstellation: function() {
    const particleCount = 600;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x0284c7);
    const color2 = new THREE.Color(0x6366f1);
    const color3 = new THREE.Color(0xdb2777);

    for (let i = 0; i < particleCount; i++) {
      // Spherical distribution
      const radius = 12 + Math.random() * 22;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const chosenColor = Math.random() < 0.4 ? color1 : Math.random() < 0.7 ? color2 : color3;
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Material
    const pMaterial = new THREE.PointsMaterial({
      size: 0.45,
      vertexColors: true,
      transparent: true,
      opacity: 0.35
    });

    this.particleCloud = new THREE.Points(geometry, pMaterial);
    this.scene.add(this.particleCloud);
  },

  onMouseMove: function(e) {
    // Normalize coordinates (-1 to 1)
    this.mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    this.mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

    this.targetRotationX = this.mouseY * 0.4;
    this.targetRotationY = this.mouseX * 0.4;
  },

  onWindowResize: function() {
    if (!this.camera || !this.renderer) return;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  },

  animate: function() {
    requestAnimationFrame(() => this.animate());

    const delta = this.clock ? this.clock.getDelta() : 0.016;
    const elapsedTime = this.clock ? this.clock.getElapsedTime() : 0;

    if (this.coreGroup) {
      // Rotation physics
      this.coreGroup.rotation.y += 0.006;
      this.coreGroup.rotation.x += 0.003;

      // Mouse Parallax interpolation
      this.coreGroup.rotation.x += (this.targetRotationX - this.coreGroup.rotation.x) * 0.04;
      this.coreGroup.rotation.y += (this.targetRotationY - this.coreGroup.rotation.y) * 0.04;

      // Gyroscope multi-axis rotation
      if (this.orbitalRing1) this.orbitalRing1.rotation.z += 0.012;
      if (this.orbitalRing2) this.orbitalRing2.rotation.y -= 0.015;
      if (this.orbitalRing3) this.orbitalRing3.rotation.x += 0.018;

      // Breathing / Pulse animation
      const scale = 1 + Math.sin(elapsedTime * 1.5) * 0.05;
      if (this.innerCore) {
        this.innerCore.scale.set(scale, scale, scale);
      }
    }

    if (this.particleCloud) {
      this.particleCloud.rotation.y -= 0.0015;
      this.particleCloud.rotation.x -= 0.0008;
    }

    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }
};

// Auto-initialize when window loads
window.addEventListener('load', () => {
  ThreeBackground.init();
});
