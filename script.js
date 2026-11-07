/**
 * ============================================================================
 * MUNAP DIGITAL — FUTURISTIC 3D CREATIVE & DIGITAL MARKETING AGENCY
 * POWERED BY webx | CORE JAVASCRIPT ARCHITECTURE (STABLE & RESILIENT)
 * ============================================================================
 */

// Global state & references
let openChatbotWithService = () => {};

function safeCreateIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

// Initialize on DOMContentLoaded and on window load as fallback
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

window.addEventListener('load', () => {
  safeCreateIcons();
});

function initApp() {
  // 1. Initialize Icons immediately
  safeCreateIcons();
  // Poll a few times in case Lucide CDN script loads slightly after DOMContentLoaded
  let iconPollCount = 0;
  const iconInterval = setInterval(() => {
    safeCreateIcons();
    iconPollCount++;
    if (iconPollCount > 5) clearInterval(iconInterval);
  }, 400);

  // 2. Set current year in footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 3. Cinematic Preloader (with guaranteed auto-dismiss)
  initCinematicPreloader();

  // 4. Three.js 3D Sculpture & Crystals (with resilient materials & retry)
  initHeroThreeScene();

  // 5. Navigation & Mobile Drawer
  initNavigation();

  // 6. 3D Tilt Effect on Service Cards
  initTiltCards();

  // 7. Interactive Marketing Dashboard & Chart.js
  initMarketingDashboard();

  // 8. Portfolio Filtering & Modals
  initPortfolio();

  // 9. Process Timeline Tab Switcher
  initProcessTabs();

  // 10. FAQ Accordion
  initFaqAccordion();

  // 11. Contact Form & WhatsApp Integration
  initContactForm();

  // 12. Guided AI-Style Contact Chatbot
  initAgencyChatbot();

  // 13. GSAP ScrollTrigger Reveal Animations
  initScrollAnimations();
}

/* ==========================================================================
   1. CINEMATIC PRELOADER (GUARANTEED DISMISSAL)
   ========================================================================== */
function initCinematicPreloader() {
  const preloader = document.getElementById('preloader');
  const progressBar = document.getElementById('preloader-progress-bar');
  const counter = document.getElementById('preloader-counter');

  if (!preloader) return;

  let isDismissed = false;

  function dismissPreloader() {
    if (isDismissed) return;
    isDismissed = true;

    preloader.classList.add('fade-out');
    preloader.style.pointerEvents = 'none';

    setTimeout(() => {
      preloader.style.display = 'none';
      document.body.classList.remove('overflow-hidden');
    }, 600);

    triggerHeroEntrance();
  }

  // Safety fallback: dismiss after max 1.8 seconds even if anything else stalls
  const safetyTimer = setTimeout(dismissPreloader, 1800);

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 16) + 10;
    if (progress > 100) progress = 100;

    if (progressBar) progressBar.style.width = progress + '%';
    if (counter) counter.textContent = progress + '%';

    if (progress >= 100) {
      clearInterval(interval);
      clearTimeout(safetyTimer);
      setTimeout(dismissPreloader, 250);
    }
  }, 35);
}

function triggerHeroEntrance() {
  // If GSAP is not available, ensure elements are visible
  if (typeof gsap === 'undefined') {
    document.querySelectorAll(
      '.hero-badge-pill, .hero-main-title, .hero-description, .hero-cta-group, .hero-trust-badges, .editorial-vertical-wrap'
    ).forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  try {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo('.hero-badge-pill', 
      { y: -20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.5 }
    )
    .fromTo('.hero-main-title', 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.7 }, 
      '-=0.2'
    )
    .fromTo('.hero-description', 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6 }, 
      '-=0.3'
    )
    .fromTo('.hero-cta-group', 
      { y: 15, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.5 }, 
      '-=0.3'
    )
    .fromTo('.hero-trust-badges', 
      { opacity: 0, scale: 0.96 }, 
      { opacity: 1, scale: 1, duration: 0.4 }, 
      '-=0.2'
    )
    .fromTo('.editorial-vertical-wrap', 
      { opacity: 0, x: 20 }, 
      { opacity: 1, x: 0, duration: 0.7 }, 
      '-=0.4'
    );
  } catch (err) {
    console.warn('GSAP hero entrance warning:', err);
  }
}

/* ==========================================================================
   2. THREE.JS 3D SCULPTURE & FACETED AMETHYST CRYSTALS
   ========================================================================== */
function initHeroThreeScene() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const container = document.getElementById('hero-3d-wrapper');
  if (!container) return;

  // Retry if THREE is not loaded yet (e.g. slow CDN)
  if (typeof THREE === 'undefined') {
    setTimeout(initHeroThreeScene, 200);
    return;
  }

  // Guard against re-initializing
  if (canvas.dataset.initialized === 'true') return;
  canvas.dataset.initialized = 'true';

  const scene = new THREE.Scene();

  const width = container.clientWidth || 500;
  const height = container.clientHeight || 640;

  const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
  camera.position.set(0, 0.35, window.innerWidth < 768 ? 5.8 : 4.8);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  // ------------------------------------------------------------------------
  // Lighting Rig (Vibrant Studio Neon Purple, Magenta & Cyan)
  // ------------------------------------------------------------------------
  const ambientLight = new THREE.AmbientLight(0x2D1B4E, 2.2);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xA855F7, 3.2);
  keyLight.position.set(3, 4, 3);
  scene.add(keyLight);

  const rimLight1 = new THREE.DirectionalLight(0xEC4899, 3.8);
  rimLight1.position.set(-3.5, 2.5, -2);
  scene.add(rimLight1);

  const rimLight2 = new THREE.DirectionalLight(0x06B6D4, 2.4);
  rimLight2.position.set(2.5, -2, -1.5);
  scene.add(rimLight2);

  const cursorLight = new THREE.PointLight(0xC084FC, 3.5, 10);
  cursorLight.position.set(0, 0.5, 2.5);
  scene.add(cursorLight);

  const coreLight = new THREE.PointLight(0x9333EA, 3.0, 6);
  coreLight.position.set(0, 0.8, 0.2);
  scene.add(coreLight);

  // ------------------------------------------------------------------------
  // Resilient & Shimmering Materials (Faceted Cut Amethyst Gemstones)
  // ------------------------------------------------------------------------
  const cyberSkinMaterial = new THREE.MeshStandardMaterial({
    color: 0x3B1868,
    emissive: 0x1E0942,
    emissiveIntensity: 0.35,
    metalness: 0.8,
    roughness: 0.22,
    flatShading: true
  });

  const chromeAccentMaterial = new THREE.MeshStandardMaterial({
    color: 0xA855F7,
    emissive: 0x6B21A8,
    emissiveIntensity: 0.5,
    metalness: 0.95,
    roughness: 0.12,
    flatShading: true
  });

  const neonEmissiveMaterial = new THREE.MeshBasicMaterial({
    color: 0xF5D0FE
  });

  // Amethyst faceted crystal material
  const amethystCrystalMaterial = new THREE.MeshStandardMaterial({
    color: 0x9333EA,
    emissive: 0x581C87,
    emissiveIntensity: 0.6,
    metalness: 0.25,
    roughness: 0.15,
    transparent: true,
    opacity: 0.92,
    flatShading: true
  });

  const amethystCrystalLightMaterial = new THREE.MeshStandardMaterial({
    color: 0xC084FC,
    emissive: 0x7E22CE,
    emissiveIntensity: 0.7,
    metalness: 0.2,
    roughness: 0.1,
    transparent: true,
    opacity: 0.88,
    flatShading: true
  });

  const wireframeMaterial = new THREE.LineBasicMaterial({
    color: 0xE9D5FF,
    transparent: true,
    opacity: 0.45
  });

  // Master Group
  const mainSculptureGroup = new THREE.Group();
  scene.add(mainSculptureGroup);

  // ------------------------------------------------------------------------
  // 1. Futuristic Cybernetic Human Bust
  // ------------------------------------------------------------------------
  const bustGroup = new THREE.Group();

  // Head
  const headGeo = new THREE.SphereGeometry(0.72, 28, 22);
  headGeo.scale(1.0, 1.25, 1.08);
  const headMesh = new THREE.Mesh(headGeo, cyberSkinMaterial);
  headMesh.position.set(0, 0.5, 0);
  bustGroup.add(headMesh);

  // Visor
  const visorGeo = new THREE.CylinderGeometry(0.74, 0.74, 0.22, 28, 1, false, Math.PI * 0.15, Math.PI * 0.7);
  const visorMesh = new THREE.Mesh(visorGeo, chromeAccentMaterial);
  visorMesh.position.set(0, 0.62, 0.05);
  bustGroup.add(visorMesh);

  // Laser Eye Strip
  const visorLineGeo = new THREE.CylinderGeometry(0.745, 0.745, 0.04, 28, 1, false, Math.PI * 0.22, Math.PI * 0.56);
  const visorLineMesh = new THREE.Mesh(visorLineGeo, neonEmissiveMaterial);
  visorLineMesh.position.set(0, 0.62, 0.05);
  bustGroup.add(visorLineMesh);

  // Jaw
  const jawGeo = new THREE.ConeGeometry(0.55, 0.7, 5);
  jawGeo.rotateX(Math.PI);
  const jawMesh = new THREE.Mesh(jawGeo, cyberSkinMaterial);
  jawMesh.position.set(0, 0.1, 0.15);
  jawMesh.scale.set(1.1, 1, 0.8);
  bustGroup.add(jawMesh);

  // Neck
  const neckGeo = new THREE.CylinderGeometry(0.34, 0.42, 0.75, 20);
  const neckMesh = new THREE.Mesh(neckGeo, cyberSkinMaterial);
  neckMesh.position.set(0, -0.3, -0.05);
  bustGroup.add(neckMesh);

  // Shoulders & Chest
  const shoulderGeo = new THREE.BoxGeometry(2.1, 0.45, 0.95);
  const shoulderMesh = new THREE.Mesh(shoulderGeo, cyberSkinMaterial);
  shoulderMesh.position.set(0, -0.75, -0.05);
  bustGroup.add(shoulderMesh);

  const chestGeo = new THREE.CylinderGeometry(0.65, 0.4, 0.6, 16);
  const chestMesh = new THREE.Mesh(chestGeo, cyberSkinMaterial);
  chestMesh.position.set(0, -0.75, 0.1);
  bustGroup.add(chestMesh);

  // Cybernetic Base Ring
  const ringGeo = new THREE.TorusGeometry(1.3, 0.025, 12, 48);
  ringGeo.rotateX(Math.PI / 2);
  const ringMesh = new THREE.Mesh(ringGeo, chromeAccentMaterial);
  ringMesh.position.set(0, -0.9, 0);
  bustGroup.add(ringMesh);

  mainSculptureGroup.add(bustGroup);

  // ------------------------------------------------------------------------
  // 2. Faceted Amethyst Crystal Crown & Spires
  // ------------------------------------------------------------------------
  const crystalClusterGroup = new THREE.Group();

  function createFacetedCrystal(height, radius, segments = 6, useLight = false) {
    const geo = new THREE.ConeGeometry(radius, height, segments);
    const mat = useLight ? amethystCrystalLightMaterial : amethystCrystalMaterial;
    const mesh = new THREE.Mesh(geo, mat);

    // Add glowing wireframe edges
    const wireGeo = new THREE.WireframeGeometry(geo);
    const wire = new THREE.LineSegments(wireGeo, wireframeMaterial);
    mesh.add(wire);

    return mesh;
  }

  const crystalSpireSpecs = [
    { pos: [0, 1.45, -0.1], rot: [0.15, 0, 0], scale: [1, 1.25, 1], h: 1.15, r: 0.24, light: true },
    { pos: [-0.36, 1.35, -0.15], rot: [-0.2, 0, 0.38], scale: [0.9, 1, 0.9], h: 0.98, r: 0.2, light: false },
    { pos: [0.36, 1.35, -0.15], rot: [-0.2, 0, -0.38], scale: [0.9, 1, 0.9], h: 0.98, r: 0.2, light: false },
    { pos: [-0.6, 1.1, -0.05], rot: [0.1, 0.2, 0.68], scale: [0.85, 0.95, 0.85], h: 0.85, r: 0.18, light: true },
    { pos: [0.6, 1.1, -0.05], rot: [0.1, -0.2, -0.68], scale: [0.85, 0.95, 0.85], h: 0.85, r: 0.18, light: true },
    { pos: [0, 1.3, 0.26], rot: [0.45, 0, 0], scale: [0.75, 0.85, 0.75], h: 0.75, r: 0.16, light: true },
    { pos: [-0.28, 1.2, 0.22], rot: [0.35, 0.2, 0.35], scale: [0.7, 0.8, 0.7], h: 0.7, r: 0.15, light: false },
    { pos: [0.28, 1.2, 0.22], rot: [0.35, -0.2, -0.35], scale: [0.7, 0.8, 0.7], h: 0.7, r: 0.15, light: false },
    { pos: [0, 1.0, -0.45], rot: [-0.6, 0, 0], scale: [1, 1.15, 1], h: 0.9, r: 0.22, light: false },
    { pos: [-0.42, 0.8, -0.4], rot: [-0.5, 0, 0.52], scale: [0.85, 0.95, 0.85], h: 0.8, r: 0.2, light: true },
    { pos: [0.42, 0.8, -0.4], rot: [-0.5, 0, -0.52], scale: [0.85, 0.95, 0.85], h: 0.8, r: 0.2, light: true }
  ];

  crystalSpireSpecs.forEach(spec => {
    const crystal = createFacetedCrystal(spec.h, spec.r, 6, spec.light);
    crystal.position.set(...spec.pos);
    crystal.rotation.set(...spec.rot);
    crystal.scale.set(...spec.scale);
    crystalClusterGroup.add(crystal);
  });

  mainSculptureGroup.add(crystalClusterGroup);

  // ------------------------------------------------------------------------
  // 3. Floating Orbiting Crystal Shards
  // ------------------------------------------------------------------------
  const floatingShards = [];
  const shardCount = 20;

  for (let i = 0; i < shardCount; i++) {
    const isOcta = Math.random() > 0.45;
    const geo = isOcta 
      ? new THREE.OctahedronGeometry(0.14 + Math.random() * 0.12, 0)
      : new THREE.TetrahedronGeometry(0.16 + Math.random() * 0.1, 0);

    const mat = Math.random() > 0.35 ? amethystCrystalMaterial : amethystCrystalLightMaterial;
    const shard = new THREE.Mesh(geo, mat);

    // Glowing wireframe on shards
    const wireGeo = new THREE.WireframeGeometry(geo);
    const wire = new THREE.LineSegments(wireGeo, wireframeMaterial);
    shard.add(wire);

    const radius = 1.35 + Math.random() * 1.5;
    const angle = (i / shardCount) * Math.PI * 2 + Math.random() * 0.4;
    const height = -0.6 + Math.random() * 2.3;

    shard.position.set(
      Math.cos(angle) * radius,
      height,
      Math.sin(angle) * radius
    );

    shard.userData = {
      baseY: height,
      radius: radius,
      angle: angle,
      speed: (0.2 + Math.random() * 0.35) * (Math.random() > 0.5 ? 1 : -1),
      rotSpeedX: 0.012 + Math.random() * 0.02,
      rotSpeedY: 0.012 + Math.random() * 0.02,
      floatOffset: Math.random() * Math.PI * 2
    };

    scene.add(shard);
    floatingShards.push(shard);
  }

  // ------------------------------------------------------------------------
  // 4. Floating 3D Sparkle Dust Particles
  // ------------------------------------------------------------------------
  const particleCount = 260;
  const particleGeo = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    particlePositions[i] = (Math.random() - 0.5) * 7.5;
    particlePositions[i + 1] = (Math.random() - 0.5) * 6.5;
    particlePositions[i + 2] = (Math.random() - 0.5) * 5.5;
  }

  particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

  const particleMat = new THREE.PointsMaterial({
    color: 0xE9D5FF,
    size: 0.04,
    transparent: true,
    opacity: 0.75
  });

  const particleSystem = new THREE.Points(particleGeo, particleMat);
  scene.add(particleSystem);

  // ------------------------------------------------------------------------
  // 5. Parallax & Mouse/Touch Tracking
  // ------------------------------------------------------------------------
  let targetRotationX = 0;
  let targetRotationY = 0;
  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };

  window.addEventListener('mousemove', (e) => {
    const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

    targetRotationY = mouseX * 0.45;
    targetRotationX = -mouseY * 0.25;

    cursorLight.position.x = mouseX * 3.5;
    cursorLight.position.y = mouseY * 2.5 + 0.5;
  }, { passive: true });

  canvas.addEventListener('mousedown', (e) => {
    isDragging = true;
    previousMousePosition = { x: e.clientX, y: e.clientY };
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  canvas.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - previousMousePosition.x;
    const deltaY = e.clientY - previousMousePosition.y;

    mainSculptureGroup.rotation.y += deltaX * 0.008;
    mainSculptureGroup.rotation.x += deltaY * 0.008;

    previousMousePosition = { x: e.clientX, y: e.clientY };
  });

  // Touch handlers
  canvas.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  }, { passive: true });

  canvas.addEventListener('touchmove', (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - previousMousePosition.x;
    const deltaY = e.touches[0].clientY - previousMousePosition.y;

    mainSculptureGroup.rotation.y += deltaX * 0.008;
    mainSculptureGroup.rotation.x += deltaY * 0.008;

    previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, { passive: true });

  canvas.addEventListener('touchend', () => {
    isDragging = false;
  });

  // ------------------------------------------------------------------------
  // 6. Responsive Resize Handling
  // ------------------------------------------------------------------------
  function handleResize() {
    if (!container) return;
    const w = container.clientWidth || 500;
    const h = container.clientHeight || 640;

    camera.aspect = w / h;
    if (window.innerWidth < 768) {
      camera.position.z = 5.8;
      camera.position.y = 0.2;
    } else {
      camera.position.z = 4.8;
      camera.position.y = 0.35;
    }
    camera.updateProjectionMatrix();

    renderer.setSize(w, h);
  }
  window.addEventListener('resize', handleResize);
  handleResize();

  // ------------------------------------------------------------------------
  // 7. Render Loop (Always Active & Smooth)
  // ------------------------------------------------------------------------
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    const elapsedTime = clock.getElapsedTime();

    if (!isDragging) {
      mainSculptureGroup.rotation.y += (targetRotationY - mainSculptureGroup.rotation.y) * 0.05;
      mainSculptureGroup.rotation.x += (targetRotationX - mainSculptureGroup.rotation.x) * 0.05;
    }

    mainSculptureGroup.position.y = Math.sin(elapsedTime * 1.4) * 0.08;
    coreLight.intensity = 2.2 + Math.sin(elapsedTime * 3) * 0.8;

    floatingShards.forEach((shard) => {
      const data = shard.userData;
      data.angle += data.speed * 0.015;

      shard.position.x = Math.cos(data.angle) * data.radius;
      shard.position.z = Math.sin(data.angle) * data.radius;
      shard.position.y = data.baseY + Math.sin(elapsedTime * 2 + data.floatOffset) * 0.15;

      shard.rotation.x += data.rotSpeedX;
      shard.rotation.y += data.rotSpeedY;
    });

    particleSystem.rotation.y = elapsedTime * 0.03;
    particleSystem.rotation.x = Math.sin(elapsedTime * 0.02) * 0.05;

    renderer.render(scene, camera);
  }

  animate();
}

/* ==========================================================================
   3. NAVIGATION & MOBILE DRAWER
   ========================================================================== */
function initNavigation() {
  const header = document.getElementById('main-header');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
      mobileBtn.setAttribute('aria-expanded', 'true');
    });

    if (drawerCloseBtn) {
      drawerCloseBtn.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', 'false');
      });
    }

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   4. 3D TILT EFFECT ON SERVICE CARDS
   ========================================================================== */
function initTiltCards() {
  const tiltCards = document.querySelectorAll('.tilt-card');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

/* ==========================================================================
   5. INTERACTIVE MARKETING DASHBOARD & CHART.JS
   ========================================================================== */
function initMarketingDashboard() {
  const trendCanvas = document.getElementById('marketingTrendChart');
  const donutCanvas = document.getElementById('placementDonutChart');

  if (!trendCanvas || !donutCanvas) return;

  // Retry if Chart.js is still loading
  if (typeof Chart === 'undefined') {
    setTimeout(initMarketingDashboard, 300);
    return;
  }

  const dashboardPresets = {
    ecommerce: {
      reach: '1,480,200',
      impressions: '3,842,500',
      clicks: '96,400',
      leads: '1,248',
      cpl: '₹398 / $4.85',
      cvr: '4.62%',
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      trendReach: [120, 185, 230, 310, 420, 560, 680],
      trendLeads: [14, 28, 42, 65, 88, 125, 172],
      donutData: [48, 26, 16, 10]
    },
    leadgen: {
      reach: '620,800',
      impressions: '1,540,000',
      clicks: '42,300',
      leads: '894',
      cpl: '₹620 / $7.50',
      cvr: '5.85%',
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      trendReach: [80, 190, 340, 520],
      trendLeads: [22, 68, 145, 260],
      donutData: [32, 44, 14, 10]
    },
    local: {
      reach: '310,400',
      impressions: '820,000',
      clicks: '28,900',
      leads: '640',
      cpl: '₹185 / $2.25',
      cvr: '6.40%',
      labels: ['Day 1-5', 'Day 6-10', 'Day 11-15', 'Day 16-20', 'Day 21-25', 'Day 26-30'],
      trendReach: [45, 95, 160, 240, 320, 410],
      trendLeads: [18, 45, 85, 130, 195, 270],
      donutData: [55, 20, 20, 5]
    }
  };

  const ctxTrend = trendCanvas.getContext('2d');
  const gradientPurple = ctxTrend.createLinearGradient(0, 0, 0, 240);
  gradientPurple.addColorStop(0, 'rgba(168, 85, 247, 0.45)');
  gradientPurple.addColorStop(1, 'rgba(168, 85, 247, 0.0)');

  const gradientCyan = ctxTrend.createLinearGradient(0, 0, 0, 240);
  gradientCyan.addColorStop(0, 'rgba(6, 182, 212, 0.35)');
  gradientCyan.addColorStop(1, 'rgba(6, 182, 212, 0.0)');

  const trendChart = new Chart(trendCanvas, {
    type: 'line',
    data: {
      labels: dashboardPresets.ecommerce.labels,
      datasets: [
        {
          label: 'Inbound Audience Reach (k)',
          data: dashboardPresets.ecommerce.trendReach,
          borderColor: '#A855F7',
          backgroundColor: gradientPurple,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#FFFFFF',
          pointBorderColor: '#A855F7',
          pointHoverRadius: 6,
          borderWidth: 2.5
        },
        {
          label: 'Direct Enquiries / Orders',
          data: dashboardPresets.ecommerce.trendLeads,
          borderColor: '#06B6D4',
          backgroundColor: gradientCyan,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#FFFFFF',
          pointBorderColor: '#06B6D4',
          pointHoverRadius: 6,
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: '#C4BFD0', font: { family: 'Inter', size: 12 } }
        },
        tooltip: {
          backgroundColor: 'rgba(13, 10, 22, 0.95)',
          titleColor: '#FFFFFF',
          bodyColor: '#E9D5FF',
          borderColor: '#8B5CF6',
          borderWidth: 1,
          padding: 12,
          cornerRadius: 8
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(139, 92, 246, 0.08)' },
          ticks: { color: '#8E899B' }
        },
        y: {
          grid: { color: 'rgba(139, 92, 246, 0.08)' },
          ticks: { color: '#8E899B' }
        }
      }
    }
  });

  const donutChart = new Chart(donutCanvas, {
    type: 'doughnut',
    data: {
      labels: ['IG Reels & Stories', 'FB Feed & Video', 'Audience Network', 'Messenger'],
      datasets: [{
        data: dashboardPresets.ecommerce.donutData,
        backgroundColor: [
          '#A855F7',
          '#6366F1',
          '#EC4899',
          '#06B6D4'
        ],
        borderColor: '#0D0A16',
        borderWidth: 3,
        hoverOffset: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '72%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: { color: '#C4BFD0', boxWidth: 12, font: { family: 'Inter', size: 11 }, padding: 12 }
        }
      }
    }
  });

  const presetButtons = document.querySelectorAll('.btn-filter-preset');
  const reachEl = document.getElementById('kpi-reach');
  const impEl = document.getElementById('kpi-impressions');
  const clicksEl = document.getElementById('kpi-clicks');
  const leadsEl = document.getElementById('kpi-leads');
  const cplEl = document.getElementById('kpi-cpl');
  const cvrEl = document.getElementById('kpi-cvr');

  presetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      presetButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const presetKey = btn.getAttribute('data-preset');
      const data = dashboardPresets[presetKey];
      if (!data) return;

      if (reachEl) reachEl.textContent = data.reach;
      if (impEl) impEl.textContent = data.impressions;
      if (clicksEl) clicksEl.textContent = data.clicks;
      if (leadsEl) leadsEl.textContent = data.leads;
      if (cplEl) cplEl.textContent = data.cpl;
      if (cvrEl) cvrEl.textContent = data.cvr;

      trendChart.data.labels = data.labels;
      trendChart.data.datasets[0].data = data.trendReach;
      trendChart.data.datasets[1].data = data.trendLeads;
      trendChart.update();

      donutChart.data.datasets[0].data = data.donutData;
      donutChart.update();
    });
  });
}

/* ==========================================================================
   6. PORTFOLIO FILTERING & MODALS
   ========================================================================== */
function initPortfolio() {
  const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');

      projectCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 30);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px) scale(0.96)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  const projectData = {
    lumina: {
      title: 'Lumina Atelier — Haute Couture Storefront',
      category: 'E-COMMERCE WEBSITE',
      desc: 'Engineered by webx as a high-fashion digital flagship. Built with Next.js, sub-second headless checkout, automated multi-currency switching, and custom 3D product view capabilities.',
      img: 'assets/images/project-ecommerce.svg',
      stack: 'webx Headless Core • Stripe API • Tailwind',
      objective: 'High-Ticket Fashion Conversions & Brand Prestige'
    },
    aurora: {
      title: 'Aurora Gourmet — Modern Botanical Dining',
      category: 'RESTAURANT & HOSPITALITY',
      desc: 'An ambient, high-end culinary experience featuring responsive QR digital menus, automated table booking verification, and instant one-tap WhatsApp food ordering to reduce wait times.',
      img: 'assets/images/project-restaurant.svg',
      stack: 'webx Responsive Engine • WhatsApp Business API • Local SEO',
      objective: 'Direct Table Bookings & WhatsApp Order Flow'
    },
    nexus: {
      title: 'Nexus PropTech — Luxury Villa Showcase',
      category: 'BUSINESS & REAL ESTATE',
      desc: 'Architectural property portal designed for international buyers. Incorporates interactive 3D floorplans, neighborhood analytics, mortgage calculators, and direct VIP broker scheduling.',
      img: 'assets/images/project-realestate.svg',
      stack: 'webx Core • Three.js 3D Viewer • CRM Webhooks',
      objective: 'High-Net-Worth Lead Qualification'
    },
    velox: {
      title: 'Velox Jetstream — Private Air Charter',
      category: 'TRAVEL & AVIATION',
      desc: 'Futuristic aviation charter reservation portal featuring global airport route lookups, real-time fleet availability previews, and white-glove concierge dispatch.',
      img: 'assets/images/project-travel.svg',
      stack: 'webx Aviation Framework • Global Route API',
      objective: 'Charter Quotation Speed & Trust Architecture'
    },
    kinetic: {
      title: 'Kinetic Labs — 3D Motion Design Showcase',
      category: 'CREATIVE PORTFOLIO',
      desc: 'Award-standard portfolio with kinetic WebGL shaders, fluid mouse interactions, dynamic typographic cascades, and bespoke video player integrations.',
      img: 'assets/images/project-portfolio.svg',
      stack: 'webx Studio Engine • Three.js • GSAP',
      objective: 'Creative Studio Authority & International Recognition'
    },
    metaforce: {
      title: 'MetaForce — Omni-Channel Acquisition Suite',
      category: 'ADVERTISING CAMPAIGN',
      desc: 'A comprehensive Meta Ads architecture incorporating high-hook vertical video creatives for Instagram Reels, audience retargeting funnels, and optimized instant lead forms.',
      img: 'assets/images/project-metaads.svg',
      stack: 'Meta Pixel & CAPI • Dynamic Creative Testing • Lookalike Funnels',
      objective: 'Scalable Customer Acquisition & Low Cost Per Lead'
    }
  };

  const projectModal = document.getElementById('project-modal');
  const projectModalClose = document.getElementById('project-modal-close');
  const viewBtns = document.querySelectorAll('.btn-view-project');

  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const pKey = btn.getAttribute('data-project');
      const item = projectData[pKey];
      if (!item || !projectModal) return;

      document.getElementById('modal-project-title').textContent = item.title;
      document.getElementById('modal-project-category').textContent = item.category;
      document.getElementById('modal-project-desc').textContent = item.desc;
      document.getElementById('modal-project-img').src = item.img;
      document.getElementById('modal-project-stack').textContent = item.stack;
      document.getElementById('modal-project-objective').textContent = item.objective;

      projectModal.classList.remove('hidden');
    });
  });

  if (projectModalClose && projectModal) {
    projectModalClose.addEventListener('click', () => projectModal.classList.add('hidden'));
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) projectModal.classList.add('hidden');
    });
  }

  const serviceDetails = {
    'business-web': {
      title: 'Business Website Development by webx',
      num: 'SERVICE 01',
      desc: 'Modern, responsive business websites engineered to establish an authoritative online presence and convert visitors into long-term clients.',
      inclusions: [
        'Custom corporate design tailored to your industry',
        '100% mobile-first responsive layout across all screens',
        'Core Web Vitals sub-second speed optimization',
        'Direct inquiry forms and WhatsApp chat integration',
        'Complete Google SEO setup & meta architecture'
      ]
    },
    'ecommerce': {
      title: 'E-commerce Website Development',
      num: 'SERVICE 02',
      desc: 'High-converting online shopping platforms with product catalogs, shopping cart, checkout integration, and automated order notifications.',
      inclusions: [
        'Secure payment gateway integration (Stripe, Razorpay, etc.)',
        'Product inventory management & category filtering',
        'One-page streamlined checkout with cart abandonment recovery',
        'Automated order confirmation emails and WhatsApp receipts',
        'Optimized for rapid mobile transactions'
      ]
    },
    'restaurant': {
      title: 'Restaurant Websites & WhatsApp Ordering',
      num: 'SERVICE 03',
      desc: 'Digital menus, restaurant food galleries, table reservation booking, and direct instant WhatsApp ordering.',
      inclusions: [
        'Interactive QR code digital menu accessible without app download',
        'Direct WhatsApp one-click table ordering module',
        'Table reservation request booking form',
        'Google Maps and local search optimization',
        'Mouthwatering visual dish galleries'
      ]
    },
    'portfolio': {
      title: 'Portfolio Websites for Creators & Executives',
      num: 'SERVICE 04',
      desc: 'Creative, unforgettable portfolios tailored for freelancers, architects, creators, students, and executive professionals.',
      inclusions: [
        'Interactive showcase grid with category filters',
        'Smooth storytelling animations and high-impact hero typography',
        'Case study inspection modals with image sliders',
        'Integrated downloadable CV / media kit links',
        'Instant inquiry handoff via WhatsApp and Email'
      ]
    },
    'landing-pages': {
      title: 'Conversion Landing Page Development',
      num: 'SERVICE 05',
      desc: 'Hyper-focused, conversion-engineered landing pages built specifically for paid ad campaigns, product launches, and lead capture.',
      inclusions: [
        'High-converting persuasive layout framework',
        'Sub-second page load speeds to prevent ad bounce rate',
        'Pre-configured Meta Pixel & Conversion API tracking',
        'Friction-free lead capture forms',
        'A/B testing compatibility'
      ]
    },
    'uiux': {
      title: 'UI/UX Design Systems',
      num: 'SERVICE 06',
      desc: 'World-class visual design, intuitive user journeys, wireframes, prototypes, and user interfaces that feel effortless to navigate.',
      inclusions: [
        'Comprehensive Figma design file & component system',
        'Wireframes and user journey maps',
        'Clickable interactive high-fidelity prototype',
        'Micro-interactions and motion design guidelines',
        'Design asset export ready for developers'
      ]
    },
    'maintenance': {
      title: 'Website Maintenance & Proactive Care',
      num: 'SERVICE 07',
      desc: 'Proactive updates, server monitoring, bug fixes, speed optimizations, security patches, and reliable ongoing technical support.',
      inclusions: [
        '99.9% uptime monitoring and automated alerts',
        'Routine weekly security and software updates',
        'Regular off-site automated backups',
        'Direct priority developer support from webx',
        'Monthly speed and health audit reports'
      ]
    },
    'custom-solutions': {
      title: 'Custom Website Solutions',
      num: 'SERVICE 08',
      desc: 'Tailored web platforms, client portals, custom calculators, booking engines, and bespoke applications built for unique business workflows.',
      inclusions: [
        'Bespoke backend and database architecture',
        'Custom third-party API and webhook integrations',
        'Secure user authentication and client portals',
        'Custom interactive business calculators and tools',
        'Scalable cloud infrastructure deployment'
      ]
    }
  };

  const serviceModal = document.getElementById('service-modal');
  const serviceModalClose = document.getElementById('service-modal-close');
  const serviceCardBtns = document.querySelectorAll('.open-service-modal');
  const modalConsultBtn = document.getElementById('modal-consult-btn');

  serviceCardBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      const data = serviceDetails[target];
      if (!data || !serviceModal) return;

      document.getElementById('modal-service-num').textContent = data.num;
      document.getElementById('modal-service-title').textContent = data.title;
      document.getElementById('modal-service-desc').textContent = data.desc;

      const incList = document.getElementById('modal-service-inclusions');
      incList.innerHTML = '';
      data.inclusions.forEach(inc => {
        const li = document.createElement('li');
        li.innerHTML = `<i data-lucide="check" class="check-icon"></i> <span>${inc}</span>`;
        incList.appendChild(li);
      });
      safeCreateIcons();

      modalConsultBtn.onclick = () => {
        serviceModal.classList.add('hidden');
        openChatbotWithService(data.title);
      };

      serviceModal.classList.remove('hidden');
    });
  });

  if (serviceModalClose && serviceModal) {
    serviceModalClose.addEventListener('click', () => serviceModal.classList.add('hidden'));
    serviceModal.addEventListener('click', (e) => {
      if (e.target === serviceModal) serviceModal.classList.add('hidden');
    });
  }

  const discussBtns = document.querySelectorAll('.btn-discuss-service');
  discussBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const sName = btn.getAttribute('data-service');
      openChatbotWithService(sName);
    });
  });
}

/* ==========================================================================
   7. PROCESS TIMELINE TAB SWITCHER
   ========================================================================== */
function initProcessTabs() {
  const btnWeb = document.getElementById('toggle-process-web');
  const btnAds = document.getElementById('toggle-process-ads');
  const timelineWeb = document.getElementById('timeline-web');
  const timelineAds = document.getElementById('timeline-ads');

  if (!btnWeb || !btnAds || !timelineWeb || !timelineAds) return;

  btnWeb.addEventListener('click', () => {
    btnWeb.classList.add('active');
    btnAds.classList.remove('active');
    timelineWeb.classList.remove('hidden-timeline');
    timelineAds.classList.add('hidden-timeline');
  });

  btnAds.addEventListener('click', () => {
    btnAds.classList.add('active');
    btnWeb.classList.remove('active');
    timelineAds.classList.remove('hidden-timeline');
    timelineWeb.classList.add('hidden-timeline');
  });
}

/* ==========================================================================
   8. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach(other => {
        other.classList.remove('active');
        const btn = other.querySelector('.faq-question-btn');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ==========================================================================
   9. CONTACT FORM VALIDATION & WHATSAPP INTEGRATION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('agency-contact-form');
  const whatsappBtn = document.getElementById('whatsapp-enquiry-btn');
  const alertBox = document.getElementById('form-status-alert');
  const submitBtn = document.getElementById('submit-enquiry-btn');

  if (!form) return;

  const agencyPhone = '8465929132';

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    const nameInput = document.getElementById('contact-name');
    const businessInput = document.getElementById('contact-business');
    const emailInput = document.getElementById('contact-email');
    const phoneInput = document.getElementById('contact-phone');
    const serviceInput = document.getElementById('contact-service');
    const businessType = document.getElementById('contact-business-type').value;
    const budget = document.getElementById('contact-budget').value;
    const details = document.getElementById('contact-details').value;

    document.querySelectorAll('.form-group').forEach(fg => fg.classList.remove('has-error'));

    if (!nameInput.value.trim()) {
      nameInput.closest('.form-group').classList.add('has-error');
      isValid = false;
    }
    if (!businessInput.value.trim()) {
      businessInput.closest('.form-group').classList.add('has-error');
      isValid = false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      emailInput.closest('.form-group').classList.add('has-error');
      isValid = false;
    }
    if (!phoneInput.value.trim() || phoneInput.value.trim().length < 6) {
      phoneInput.closest('.form-group').classList.add('has-error');
      isValid = false;
    }
    if (!serviceInput.value) {
      serviceInput.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    if (!isValid) {
      showAlert('Please check and complete all required fields.', 'error');
      return;
    }

    const originalText = submitBtn.querySelector('.btn-text').textContent;
    submitBtn.querySelector('.btn-text').textContent = 'Submitting Enquiry...';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.querySelector('.btn-text').textContent = originalText;
      submitBtn.disabled = false;

      if (typeof confetti === 'function') {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#8B5CF6', '#A855F7', '#C084FC', '#FFFFFF', '#10B981']
        });
      }

      showAlert(
        `Thank you, ${nameInput.value}! Your enquiry for "${serviceInput.value}" has been received. Our team will contact you at ${emailInput.value} or ${phoneInput.value} shortly. You may also click below to continue directly on WhatsApp.`,
        'success'
      );

      const enquiryData = {
        name: nameInput.value.trim(),
        business: businessInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        businessType: businessType,
        service: serviceInput.value,
        budget: budget,
        details: details,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('munap_last_enquiry', JSON.stringify(enquiryData));

      form.reset();
    }, 700);
  });

  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
      const name = document.getElementById('contact-name').value.trim() || 'Client';
      const business = document.getElementById('contact-business').value.trim() || 'Not specified';
      const service = document.getElementById('contact-service').value || 'Web Development / Meta Ads';
      const budget = document.getElementById('contact-budget').value || 'To discuss';
      const details = document.getElementById('contact-details').value.trim() || 'Looking forward to discussing project requirements.';

      const message = `Hello MUNAP DIGITAL & webx Team,\n\nI would like to discuss a project:\n• Name: ${name}\n• Business: ${business}\n• Service Required: ${service}\n• Estimated Budget: ${budget}\n• Project Details: ${details}\n\nPlease let me know your availability for a free consultation.`;

      window.open(`https://wa.me/91${agencyPhone}?text=${encodeURIComponent(message)}`, '_blank');
    });
  }

  function showAlert(message, type) {
    alertBox.textContent = message;
    alertBox.className = `form-alert ${type}`;
    alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

/* ==========================================================================
   10. GUIDED AI-STYLE CONTACT CHATBOT
   ========================================================================== */
function initAgencyChatbot() {
  const launcher = document.getElementById('chatbot-launcher');
  const windowEl = document.getElementById('chatbot-window');
  const closeBtn = document.getElementById('chatbot-close-btn');
  const restartBtn = document.getElementById('chatbot-restart-btn');
  const messagesContainer = document.getElementById('chatbot-messages');
  const quickRepliesContainer = document.getElementById('chatbot-quick-replies');
  const inputForm = document.getElementById('chatbot-input-form');
  const textInput = document.getElementById('chatbot-text-input');
  const heroTalkBtn = document.getElementById('hero-talk-btn');

  if (!launcher || !windowEl || !messagesContainer) return;

  const agencyPhone = '8465929132';

  let conversationState = 'INIT';
  let collectedData = {};

  function toggleChatbot(forceOpen = null) {
    const isOpen = windowEl.classList.contains('open');
    const targetState = forceOpen !== null ? forceOpen : !isOpen;

    if (targetState) {
      windowEl.classList.add('open');
      launcher.setAttribute('aria-expanded', 'true');
      const badge = launcher.querySelector('.launcher-badge');
      if (badge) badge.style.display = 'none';
      if (conversationState === 'INIT' && messagesContainer.children.length === 0) {
        startWelcomeFlow();
      }
    } else {
      windowEl.classList.remove('open');
      launcher.setAttribute('aria-expanded', 'false');
    }
  }

  launcher.addEventListener('click', () => toggleChatbot());
  closeBtn.addEventListener('click', () => toggleChatbot(false));
  if (heroTalkBtn) {
    heroTalkBtn.addEventListener('click', () => {
      toggleChatbot(true);
    });
  }

  restartBtn.addEventListener('click', () => {
    resetChat();
  });

  openChatbotWithService = (serviceName) => {
    toggleChatbot(true);
    collectedData.service = serviceName;
    appendUserMessage(`I am interested in ${serviceName}`);
    setTimeout(() => {
      appendAssistantMessage(`Awesome! ${serviceName} is one of our flagship specializations. To help our strategists craft the best plan for you, could you tell me a little about your business or primary goal?`);
      setQuickReplies([
        'Lead Generation',
        'Direct Sales / E-commerce',
        'Brand Awareness & Prestige',
        'Talk to Team on WhatsApp'
      ]);
      conversationState = 'CUSTOM_SERVICE_INQUIRY';
    }, 400);
  };

  function startWelcomeFlow() {
    conversationState = 'WELCOME';
    appendAssistantMessage("Hi! 👋 Welcome to MUNAP DIGITAL. Are you looking for a website, digital marketing, or Meta Ads services? I can help you get started.");
    
    setQuickReplies([
      '1. I Need a Website',
      '2. E-commerce Website',
      '3. Meta Ads Services',
      '4. Social Media Marketing',
      '5. Website Pricing',
      '6. Talk to the Team'
    ]);
  }

  function resetChat() {
    messagesContainer.innerHTML = '';
    collectedData = {};
    conversationState = 'INIT';
    startWelcomeFlow();
  }

  function handleChoice(choiceText) {
    appendUserMessage(choiceText);
    clearQuickReplies();

    const normalized = choiceText.toLowerCase();

    if (normalized.includes('i need a website') || normalized.includes('website development')) {
      collectedData.service = 'Website Development';
      conversationState = 'WEB_FLOW_1';
      setTimeout(() => {
        appendAssistantMessage("Great! Our webx division builds custom, blazing-fast websites. What type of business do you run?");
        setQuickReplies([
          'Small / Medium Business',
          'Restaurant or Cafe',
          'Real Estate',
          'Startup / Tech',
          'Freelancer / Creator'
        ]);
      }, 350);
    }
    else if (normalized.includes('e-commerce') || normalized.includes('online store')) {
      collectedData.service = 'E-commerce Website';
      conversationState = 'ECOM_FLOW_1';
      setTimeout(() => {
        appendAssistantMessage("E-commerce is a fantastic growth vehicle. What products will you be selling?");
        setQuickReplies([
          'Fashion & Apparel',
          'Electronics & Gadgets',
          'Food & Beverages',
          'Cosmetics & Beauty',
          'Digital Products / Other'
        ]);
      }, 350);
    }
    else if (normalized.includes('meta ads') || normalized.includes('facebook') || normalized.includes('instagram ads')) {
      collectedData.service = 'Meta Ads Management';
      conversationState = 'META_FLOW_1';
      setTimeout(() => {
        appendAssistantMessage("Meta Ads on Facebook & Instagram are unmatched for scaling attention. What is your primary advertising goal?");
        setQuickReplies([
          'Generating Client Leads',
          'Driving E-commerce Purchases',
          'Local Store Visits / Orders',
          'App Downloads / Brand Reach'
        ]);
      }, 350);
    }
    else if (normalized.includes('social media marketing')) {
      collectedData.service = 'Social Media Marketing';
      conversationState = 'SMM_FLOW_1';
      setTimeout(() => {
        appendAssistantMessage("Social media builds authority and buyer trust. Which platforms are most important for your brand?");
        setQuickReplies([
          'Instagram Primarily',
          'Instagram + Facebook',
          'LinkedIn + B2B',
          'All Platforms'
        ]);
      }, 350);
    }
    else if (normalized.includes('pricing') || normalized.includes('cost')) {
      setTimeout(() => {
        appendAssistantMessage("Our pricing depends on your design, features, integrations, and project requirements. Tell us about your project, and our team can prepare a suitable quotation.");
        setQuickReplies([
          'Get a Custom Quote',
          'Talk on WhatsApp (+91 8465929132)',
          'Explore Services First'
        ]);
      }, 350);
    }
    else if (normalized.includes('talk to the team') || normalized.includes('get a custom quote')) {
      collectedData.service = collectedData.service || 'General Consultation';
      conversationState = 'COLLECT_NAME';
      setTimeout(() => {
        appendAssistantMessage("We would love to talk! What is your full name and business name?");
      }, 350);
    }
    else if (normalized.includes('whatsapp') || normalized.includes('talk on whatsapp')) {
      sendToWhatsApp();
    }
    else {
      processStepFlow(choiceText);
    }
  }

  function processStepFlow(text) {
    if (conversationState === 'WEB_FLOW_1') {
      collectedData.businessType = text;
      conversationState = 'WEB_FLOW_2';
      setTimeout(() => {
        appendAssistantMessage("Do you already have a registered domain and hosting?");
        setQuickReplies(['Yes, already have both', 'Only have domain', 'No, need assistance with both']);
      }, 350);
    } 
    else if (conversationState === 'WEB_FLOW_2') {
      collectedData.domainStatus = text;
      conversationState = 'WEB_FLOW_3';
      setTimeout(() => {
        appendAssistantMessage("What is your target launch timeline?");
        setQuickReplies(['Within 2 weeks', 'Within a month', 'Flexible / Planning phase']);
      }, 350);
    }
    else if (conversationState === 'WEB_FLOW_3') {
      collectedData.timeline = text;
      conversationState = 'COLLECT_CONTACT';
      setTimeout(() => {
        appendAssistantMessage("Excellent! Please share your Email or Phone number so our strategist can send over tailored recommendations.");
      }, 350);
    }
    else if (conversationState === 'ECOM_FLOW_1') {
      collectedData.products = text;
      conversationState = 'ECOM_FLOW_2';
      setTimeout(() => {
        appendAssistantMessage("Do you need online payment gateway integration (Stripe, Razorpay, etc.) and automated order management?");
        setQuickReplies(['Yes, full payment & order setup', 'Standard checkout only', 'Direct WhatsApp ordering']);
      }, 350);
    }
    else if (conversationState === 'ECOM_FLOW_2') {
      collectedData.ecomSpecs = text;
      conversationState = 'COLLECT_CONTACT';
      setTimeout(() => {
        appendAssistantMessage("Got it! Please share your Email and Phone number so we can provide a detailed e-commerce breakdown.");
      }, 350);
    }
    else if (conversationState === 'META_FLOW_1') {
      collectedData.metaGoal = text;
      conversationState = 'META_FLOW_2';
      setTimeout(() => {
        appendAssistantMessage("Have you run paid Facebook or Instagram Ads before?");
        setQuickReplies(['Yes, currently active', 'Tried previously', 'New to Meta Ads']);
      }, 350);
    }
    else if (conversationState === 'META_FLOW_2') {
      collectedData.pastExperience = text;
      conversationState = 'META_FLOW_3';
      setTimeout(() => {
        appendAssistantMessage("What is your approximate monthly advertising budget?");
        setQuickReplies(['Under ₹40,000 / $500', '₹40,000 – ₹1,25,000', '₹1,25,000+', 'Flexible']);
      }, 350);
    }
    else if (conversationState === 'META_FLOW_3') {
      collectedData.budget = text;
      conversationState = 'COLLECT_CONTACT';
      setTimeout(() => {
        appendAssistantMessage("Understood! Please provide your Email or WhatsApp number so we can prepare a strategy blueprint for your campaigns.");
      }, 350);
    }
    else if (conversationState === 'SMM_FLOW_1') {
      collectedData.platforms = text;
      conversationState = 'COLLECT_CONTACT';
      setTimeout(() => {
        appendAssistantMessage("Great! What is your Email or Phone number to send over content strategy examples?");
      }, 350);
    }
    else if (conversationState === 'COLLECT_NAME') {
      collectedData.contactName = text;
      conversationState = 'COLLECT_CONTACT';
      setTimeout(() => {
        appendAssistantMessage(`Nice to meet you, ${text}! What is the best Email or Phone number to reach you?`);
      }, 350);
    }
    else if (conversationState === 'COLLECT_CONTACT' || conversationState === 'CUSTOM_SERVICE_INQUIRY') {
      collectedData.contactInfo = text;
      conversationState = 'COMPLETED';
      setTimeout(() => {
        appendAssistantMessage("🎉 Thank you! Your details have been recorded. Our team will get back to you shortly. Would you like to continue directly on WhatsApp for an instant response?");
        setQuickReplies([
          'Continue on WhatsApp',
          'Explore Website Services',
          'Restart Assistant'
        ]);
      }, 350);
    }
    else if (text.toLowerCase().includes('explore website')) {
      window.location.hash = '#services';
      toggleChatbot(false);
    }
    else if (text.toLowerCase().includes('restart')) {
      resetChat();
    }
    else {
      collectedData.generalNotes = (collectedData.generalNotes ? collectedData.generalNotes + ' | ' : '') + text;
      setTimeout(() => {
        appendAssistantMessage("Got it! I have noted that down. Would you like to speak directly with our lead strategist on WhatsApp or submit your enquiry?");
        setQuickReplies([
          'Continue on WhatsApp',
          'Submit My Details',
          'Restart'
        ]);
      }, 350);
    }
  }

  function sendToWhatsApp() {
    let msg = `Hello MUNAP DIGITAL Team,\n\nI interacted with the website Assistant:\n`;
    if (collectedData.service) msg += `• Service: ${collectedData.service}\n`;
    if (collectedData.businessType) msg += `• Business: ${collectedData.businessType}\n`;
    if (collectedData.products) msg += `• Products: ${collectedData.products}\n`;
    if (collectedData.metaGoal) msg += `• Meta Ad Goal: ${collectedData.metaGoal}\n`;
    if (collectedData.budget) msg += `• Budget: ${collectedData.budget}\n`;
    if (collectedData.contactInfo) msg += `• Contact Info: ${collectedData.contactInfo}\n`;
    if (collectedData.generalNotes) msg += `• Notes: ${collectedData.generalNotes}\n`;

    msg += `\nPlease let me know how we can proceed!`;

    window.open(`https://wa.me/91${agencyPhone}?text=${encodeURIComponent(msg)}`, '_blank');
  }

  inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = textInput.value.trim();
    if (!val) return;
    textInput.value = '';
    handleChoice(val);
  });

  function appendAssistantMessage(htmlText) {
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble assistant-bubble';
    bubble.innerHTML = htmlText;
    messagesContainer.appendChild(bubble);
    scrollChatToBottom();
  }

  function appendUserMessage(text) {
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble user-bubble';
    bubble.textContent = text;
    messagesContainer.appendChild(bubble);
    scrollChatToBottom();
  }

  function setQuickReplies(replies) {
    quickRepliesContainer.innerHTML = '';
    replies.forEach(reply => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quick-reply-btn';
      btn.textContent = reply;
      btn.addEventListener('click', () => handleChoice(reply));
      quickRepliesContainer.appendChild(btn);
    });
    scrollChatToBottom();
  }

  function clearQuickReplies() {
    quickRepliesContainer.innerHTML = '';
  }

  function scrollChatToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
}

/* ==========================================================================
   11. GSAP SCROLLTRIGGER REVEAL ANIMATIONS (WITH SAFE FALLBACK)
   ========================================================================== */
function initScrollAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    // If GSAP is missing, make sure all content is fully visible
    document.querySelectorAll('.reveal-on-scroll, .service-card, .mkt-card, .why-card').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  try {
    gsap.registerPlugin(ScrollTrigger);

    const sectionHeaders = document.querySelectorAll('.reveal-on-scroll');
    sectionHeaders.forEach(header => {
      gsap.fromTo(header,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 88%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    const serviceCards = document.querySelectorAll('.service-card');
    if (serviceCards.length > 0) {
      gsap.fromTo(serviceCards,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    const mktCards = document.querySelectorAll('.mkt-card');
    if (mktCards.length > 0) {
      gsap.fromTo(mktCards,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.marketing-cards-grid',
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  } catch (e) {
    console.warn('Scroll animations fallback active:', e);
  }
}
