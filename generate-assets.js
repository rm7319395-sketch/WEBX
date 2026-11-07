const fs = require('fs');
const path = require('path');

// Ensure directories
const imgDir = path.join(__dirname, 'assets', 'images');
const iconDir = path.join(__dirname, 'assets', 'icons');
if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });
if (!fs.existsSync(iconDir)) fs.mkdirSync(iconDir, { recursive: true });

// 1. Logo SVG
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="160" height="160" fill="none">
  <defs>
    <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E9D5FF"/>
      <stop offset="35%" stop-color="#C084FC"/>
      <stop offset="70%" stop-color="#8B5CF6"/>
      <stop offset="100%" stop-color="#4C1D95"/>
    </linearGradient>
    <linearGradient id="neonGlow" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#7C3AED"/>
      <stop offset="100%" stop-color="#D946EF"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  <!-- Background Glow Circle -->
  <circle cx="80" cy="80" r="65" fill="#8B5CF6" fill-opacity="0.12" filter="url(#glow)"/>
  
  <!-- Outer Crystal Facets -->
  <polygon points="80,18 135,52 135,112 80,146 25,112 25,52" stroke="url(#neonGlow)" stroke-width="2.5" fill="none" opacity="0.6"/>
  
  <!-- Interlocking Futuristic M Shape / Crystal Shard -->
  <path d="M42 118 V56 L80 92 L118 56 V118" stroke="url(#purpleGrad)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow)"/>
  
  <!-- Central Floating Amethyst Diamond -->
  <polygon points="80,38 98,68 80,98 62,68" fill="url(#neonGlow)" fill-opacity="0.85"/>
  <polygon points="80,38 80,98 62,68" fill="#E9D5FF" fill-opacity="0.4"/>
  
  <!-- Light Sparks -->
  <circle cx="80" cy="38" r="3" fill="#FFFFFF"/>
  <circle cx="42" cy="56" r="2.5" fill="#E9D5FF"/>
  <circle cx="118" cy="56" r="2.5" fill="#E9D5FF"/>
</svg>`;
fs.writeFileSync(path.join(iconDir, 'logo.svg'), logoSvg);
fs.writeFileSync(path.join(__dirname, 'favicon.svg'), logoSvg);

// 2. Project 1: Lumina Atelier (E-commerce)
const projectEcommerceSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="bg1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0F0B1E"/>
      <stop offset="100%" stop-color="#050409"/>
    </linearGradient>
    <linearGradient id="accent1" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#8B5CF6"/>
      <stop offset="100%" stop-color="#EC4899"/>
    </linearGradient>
    <filter id="f1" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="30" result="b"/>
      <feComposite in="SourceGraphic" in2="b" operator="over"/>
    </filter>
  </defs>
  <rect width="800" height="500" fill="url(#bg1)"/>
  <!-- Ambient glow orb -->
  <circle cx="620" cy="180" r="160" fill="#8B5CF6" fill-opacity="0.25" filter="url(#f1)"/>
  <circle cx="200" cy="380" r="120" fill="#EC4899" fill-opacity="0.18" filter="url(#f1)"/>
  
  <!-- Browser Frame -->
  <rect x="50" y="45" width="700" height="410" rx="16" fill="#131024" fill-opacity="0.8" stroke="#8B5CF6" stroke-width="1.5" stroke-opacity="0.3"/>
  <circle cx="80" cy="72" r="5" fill="#EC4899" opacity="0.8"/>
  <circle cx="98" cy="72" r="5" fill="#F59E0B" opacity="0.8"/>
  <circle cx="116" cy="72" r="5" fill="#10B981" opacity="0.8"/>
  <rect x="150" y="64" width="280" height="16" rx="8" fill="#1E1938"/>
  <text x="165" y="76" font-family="'Inter', sans-serif" font-size="10" fill="#8B5CF6">https://lumina-atelier.luxury</text>
  
  <!-- Hero Content -->
  <text x="90" y="150" font-family="'Space Grotesk', sans-serif" font-size="28" font-weight="700" fill="#FFFFFF">LUMINA ATELIER</text>
  <text x="90" y="178" font-family="'Inter', sans-serif" font-size="14" fill="#C084FC" letter-spacing="3">HAUTE COUTURE FW26</text>
  <text x="90" y="215" font-family="'Inter', sans-serif" font-size="12" fill="#A8A3B3">Dynamic headless storefront with sub-second checkout</text>
  
  <!-- CTA pill -->
  <rect x="90" y="245" width="140" height="40" rx="20" fill="url(#accent1)"/>
  <text x="122" y="270" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#FFFFFF">DISCOVER</text>
  
  <!-- Interactive Product Cards Mockup -->
  <g transform="translate(420, 110)">
    <rect width="280" height="310" rx="14" fill="#181330" stroke="#8B5CF6" stroke-width="1.5" stroke-opacity="0.4"/>
    <!-- Mock 3D Model Card -->
    <rect x="20" y="20" width="240" height="180" rx="10" fill="#0E0A1D"/>
    <!-- Faceted Fashion Gem / Silhouette -->
    <polygon points="140,40 190,80 180,150 100,150 90,80" fill="url(#accent1)" opacity="0.85"/>
    <polygon points="140,40 180,150 140,170 100,150" fill="#E9D5FF" opacity="0.5"/>
    <!-- Product Label -->
    <text x="25" y="230" font-family="'Space Grotesk', sans-serif" font-size="16" font-weight="600" fill="#FFFFFF">Obsidian Silk Gown</text>
    <text x="25" y="255" font-family="'Inter', sans-serif" font-size="13" fill="#8B5CF6">$1,850.00</text>
    <rect x="180" y="235" width="80" height="30" rx="15" fill="#8B5CF6" fill-opacity="0.2" stroke="#8B5CF6" stroke-width="1"/>
    <text x="195" y="255" font-family="'Inter', sans-serif" font-size="11" fill="#C084FC">+ CART</text>
  </g>
  
  <!-- Floating ROAS badge -->
  <rect x="330" y="340" width="160" height="54" rx="12" fill="#0D091B" stroke="#10B981" stroke-width="1.2"/>
  <text x="345" y="362" font-family="'Inter', sans-serif" font-size="11" fill="#9CA3AF">Checkout Conversion</text>
  <text x="345" y="382" font-family="'Space Grotesk', sans-serif" font-size="16" font-weight="700" fill="#10B981">+4.82% vs Avg</text>
</svg>`;
fs.writeFileSync(path.join(imgDir, 'project-ecommerce.svg'), projectEcommerceSvg);

// 3. Project 2: Aurora Gourmet (Restaurant & WhatsApp Ordering)
const projectRestaurantSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#140A18"/>
      <stop offset="100%" stop-color="#06020A"/>
    </linearGradient>
    <linearGradient id="neonGold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#D97706"/>
    </linearGradient>
    <filter id="f2" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="35" result="b"/>
      <feComposite in="SourceGraphic" in2="b" operator="over"/>
    </filter>
  </defs>
  <rect width="800" height="500" fill="url(#bg2)"/>
  <circle cx="250" cy="180" r="150" fill="#A855F7" fill-opacity="0.22" filter="url(#f2)"/>
  <circle cx="600" cy="350" r="140" fill="#22C55E" fill-opacity="0.15" filter="url(#f2)"/>
  
  <rect x="50" y="45" width="700" height="410" rx="16" fill="#130D1C" fill-opacity="0.85" stroke="#C084FC" stroke-width="1.5" stroke-opacity="0.3"/>
  <circle cx="80" cy="72" r="5" fill="#EC4899"/>
  <circle cx="98" cy="72" r="5" fill="#F59E0B"/>
  <circle cx="116" cy="72" r="5" fill="#10B981"/>
  
  <!-- Left Side: Digital Gastronomy Experience -->
  <text x="85" y="145" font-family="'Space Grotesk', sans-serif" font-size="28" font-weight="700" fill="#FFFFFF">AURORA GOURMET</text>
  <text x="85" y="175" font-family="'Inter', sans-serif" font-size="14" fill="#F59E0B" letter-spacing="2">MODERN BOTANICAL DINING</text>
  <text x="85" y="210" font-family="'Inter', sans-serif" font-size="12" fill="#A8A3B3">Interactive QR Menu • Real-time Reservation • WhatsApp Integration</text>
  
  <!-- Menu preview card -->
  <rect x="85" y="245" width="280" height="175" rx="12" fill="#1B1226" stroke="#8B5CF6" stroke-width="1"/>
  <text x="105" y="278" font-family="'Space Grotesk', sans-serif" font-size="15" font-weight="600" fill="#FFFFFF">Truffle Smoked Wagyu</text>
  <text x="310" y="278" font-family="'Inter', sans-serif" font-size="14" fill="#F59E0B">$68</text>
  <line x1="105" y1="298" x2="345" y2="298" stroke="#332446" stroke-width="1"/>
  <text x="105" y="325" font-family="'Space Grotesk', sans-serif" font-size="15" font-weight="600" fill="#FFFFFF">Midnight Caviar Tartlet</text>
  <text x="310" y="325" font-family="'Inter', sans-serif" font-size="14" fill="#F59E0B">$44</text>
  <line x1="105" y1="345" x2="345" y2="345" stroke="#332446" stroke-width="1"/>
  <rect x="105" y="365" width="240" height="36" rx="18" fill="#22C55E" fill-opacity="0.15" stroke="#22C55E" stroke-width="1"/>
  <text x="140" y="388" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#22C55E">⚡ Direct WhatsApp Table Order</text>
  
  <!-- Right Side: Mobile Viewport Mockup -->
  <g transform="translate(450, 95)">
    <rect width="240" height="330" rx="24" fill="#0B0612" stroke="#A855F7" stroke-width="2"/>
    <rect x="90" y="10" width="60" height="8" rx="4" fill="#2E1C44"/>
    <!-- Mobile App Screen -->
    <rect x="15" y="30" width="210" height="70" rx="10" fill="#241538"/>
    <text x="30" y="55" font-family="'Space Grotesk', sans-serif" font-size="13" font-weight="600" fill="#FFFFFF">Table 07 • Reserved</text>
    <text x="30" y="75" font-family="'Inter', sans-serif" font-size="11" fill="#C084FC">Status: Confirmed via WhatsApp</text>
    <rect x="15" y="115" width="210" height="180" rx="10" fill="#170F24"/>
    <circle cx="120" cy="170" r="35" fill="#8B5CF6" fill-opacity="0.3"/>
    <polygon points="120,145 145,170 120,195 95,170" fill="#A855F7"/>
    <text x="60" y="235" font-family="'Inter', sans-serif" font-size="12" fill="#E9D5FF">Scan QR For Digital Menu</text>
    <text x="45" y="260" font-family="'Inter', sans-serif" font-size="10" fill="#9CA3AF">Zero app install required</text>
  </g>
</svg>`;
fs.writeFileSync(path.join(imgDir, 'project-restaurant.svg'), projectRestaurantSvg);

// 4. Project 3: Nexus PropTech (Real Estate Platform)
const projectRealEstateSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="bg3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#060E18"/>
      <stop offset="100%" stop-color="#02050B"/>
    </linearGradient>
    <linearGradient id="cyanPurple" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#06B6D4"/>
      <stop offset="100%" stop-color="#8B5CF6"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#bg3)"/>
  <rect x="50" y="45" width="700" height="410" rx="16" fill="#0B1322" fill-opacity="0.85" stroke="#06B6D4" stroke-width="1.2" stroke-opacity="0.4"/>
  <circle cx="80" cy="72" r="5" fill="#EC4899"/>
  <circle cx="98" cy="72" r="5" fill="#F59E0B"/>
  <circle cx="116" cy="72" r="5" fill="#10B981"/>
  
  <text x="85" y="145" font-family="'Space Grotesk', sans-serif" font-size="28" font-weight="700" fill="#FFFFFF">NEXUS PROPTECH</text>
  <text x="85" y="175" font-family="'Inter', sans-serif" font-size="13" fill="#06B6D4" letter-spacing="2">ARCHITECTURAL LUXURY &amp; INVESTMENTS</text>
  <text x="85" y="210" font-family="'Inter', sans-serif" font-size="12" fill="#94A3B8">Interactive 3D Floorplans • Lead Scoring • High-Net-Worth Funnels</text>
  
  <!-- Architectural wireframe grid -->
  <g transform="translate(400, 110)">
    <polygon points="50,180 180,80 320,140 190,240" fill="#082F49" stroke="#06B6D4" stroke-width="1.5" opacity="0.8"/>
    <polygon points="180,80 320,140 320,50 180,0" fill="#0E7490" stroke="#06B6D4" stroke-width="1.5" opacity="0.6"/>
    <polygon points="50,180 180,80 180,0 50,90" fill="#155E75" stroke="#06B6D4" stroke-width="1.5" opacity="0.7"/>
    <line x1="180" y1="80" x2="180" y2="240" stroke="#38BDF8" stroke-dasharray="4 4" stroke-width="1.5"/>
    <circle cx="180" cy="80" r="4" fill="#FFFFFF"/>
  </g>
  
  <!-- Lead Generation Box -->
  <rect x="85" y="245" width="280" height="165" rx="12" fill="#081E34" stroke="#06B6D4" stroke-width="1" stroke-opacity="0.5"/>
  <text x="105" y="280" font-family="'Space Grotesk', sans-serif" font-size="15" font-weight="600" fill="#FFFFFF">VILLA CELESTIA</text>
  <text x="105" y="305" font-family="'Inter', sans-serif" font-size="13" fill="#38BDF8">4,800 Sq. Ft • $3.4M</text>
  <rect x="105" y="325" width="240" height="38" rx="8" fill="url(#cyanPurple)"/>
  <text x="150" y="348" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#FFFFFF">REQUEST VIP TOUR</text>
  <text x="105" y="390" font-family="'Inter', sans-serif" font-size="11" fill="#64748B">Instant agent callback via WhatsApp</text>
</svg>`;
fs.writeFileSync(path.join(imgDir, 'project-realestate.svg'), projectRealEstateSvg);

// 5. Project 4: Velox Jetstream (Aviation & Travel)
const projectTravelSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="bg4" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0A0B1A"/>
      <stop offset="100%" stop-color="#030408"/>
    </linearGradient>
    <linearGradient id="blueViolet" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#6366F1"/>
      <stop offset="100%" stop-color="#A855F7"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#bg4)"/>
  <rect x="50" y="45" width="700" height="410" rx="16" fill="#101124" fill-opacity="0.85" stroke="#6366F1" stroke-width="1.2" stroke-opacity="0.4"/>
  <circle cx="80" cy="72" r="5" fill="#EC4899"/>
  <circle cx="98" cy="72" r="5" fill="#F59E0B"/>
  <circle cx="116" cy="72" r="5" fill="#10B981"/>
  
  <text x="85" y="145" font-family="'Space Grotesk', sans-serif" font-size="28" font-weight="700" fill="#FFFFFF">VELOX JETSTREAM</text>
  <text x="85" y="175" font-family="'Inter', sans-serif" font-size="13" fill="#818CF8" letter-spacing="2">PRIVATE AVIATION &amp; GLOBAL EXPEDITIONS</text>
  <text x="85" y="210" font-family="'Inter', sans-serif" font-size="12" fill="#94A3B8">Ultra-responsive flight charter booking with global airport routing</text>
  
  <!-- Interactive Flight Route Card -->
  <g transform="translate(420, 120)">
    <rect width="280" height="280" rx="14" fill="#141733" stroke="#6366F1" stroke-width="1.2"/>
    <text x="25" y="45" font-family="'Space Grotesk', sans-serif" font-size="18" font-weight="700" fill="#FFFFFF">DXB ➔ LHR</text>
    <text x="25" y="70" font-family="'Inter', sans-serif" font-size="12" fill="#818CF8">Gulfstream G700 • Non-stop</text>
    <!-- Route arc -->
    <path d="M30 150 Q 140 80 250 150" stroke="#A855F7" stroke-width="3" fill="none" stroke-linecap="round"/>
    <circle cx="30" cy="150" r="5" fill="#6366F1"/>
    <circle cx="250" cy="150" r="5" fill="#EC4899"/>
    <!-- Specs -->
    <rect x="25" y="180" width="230" height="75" rx="8" fill="#0C0D20"/>
    <text x="40" y="208" font-family="'Inter', sans-serif" font-size="12" fill="#9CA3AF">Flight Time: 7h 15m</text>
    <text x="40" y="232" font-family="'Space Grotesk', sans-serif" font-size="14" font-weight="600" fill="#34D399">Instant Quote Ready</text>
  </g>
  
  <rect x="85" y="260" width="180" height="42" rx="21" fill="url(#blueViolet)"/>
  <text x="120" y="286" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#FFFFFF">BOOK CHARTER</text>
</svg>`;
fs.writeFileSync(path.join(imgDir, 'project-travel.svg'), projectTravelSvg);

// 6. Project 5: Kinetic Labs (Creative Portfolio)
const projectPortfolioSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="bg5" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#12091D"/>
      <stop offset="100%" stop-color="#060309"/>
    </linearGradient>
    <linearGradient id="neonPink" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#F43F5E"/>
      <stop offset="100%" stop-color="#A855F7"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#bg5)"/>
  <rect x="50" y="45" width="700" height="410" rx="16" fill="#150D24" fill-opacity="0.85" stroke="#F43F5E" stroke-width="1.2" stroke-opacity="0.4"/>
  <circle cx="80" cy="72" r="5" fill="#EC4899"/>
  <circle cx="98" cy="72" r="5" fill="#F59E0B"/>
  <circle cx="116" cy="72" r="5" fill="#10B981"/>
  
  <text x="85" y="145" font-family="'Space Grotesk', sans-serif" font-size="28" font-weight="700" fill="#FFFFFF">KINETIC LABS</text>
  <text x="85" y="175" font-family="'Inter', sans-serif" font-size="13" fill="#F43F5E" letter-spacing="2">3D VISUAL ART &amp; MOTION DESIGN</text>
  <text x="85" y="210" font-family="'Inter', sans-serif" font-size="12" fill="#A8A3B3">Award-winning portfolio with WebGL shaders &amp; dynamic typography</text>
  
  <!-- Avant-Garde 3D Composition -->
  <g transform="translate(440, 110)">
    <circle cx="130" cy="130" r="110" fill="#8B5CF6" fill-opacity="0.2"/>
    <polygon points="130,30 220,120 180,220 80,220 40,120" fill="url(#neonPink)" opacity="0.85"/>
    <polygon points="130,30 180,220 80,220" fill="#FFFFFF" opacity="0.3"/>
    <circle cx="130" cy="130" r="30" fill="#0F081C"/>
    <text x="105" y="136" font-family="'Space Grotesk', sans-serif" font-size="16" font-weight="700" fill="#F43F5E">3D</text>
  </g>
  
  <rect x="85" y="260" width="160" height="40" rx="8" fill="#24133A" stroke="#A855F7" stroke-width="1"/>
  <text x="110" y="285" font-family="'Inter', sans-serif" font-size="12" fill="#E9D5FF">EXPLORE SHOWCASE</text>
</svg>`;
fs.writeFileSync(path.join(imgDir, 'project-portfolio.svg'), projectPortfolioSvg);

// 7. Project 6: MetaForce Omni-Campaign (Meta Ads Architecture)
const projectMetaAdsSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="bg6" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0E0820"/>
      <stop offset="100%" stop-color="#040209"/>
    </linearGradient>
    <linearGradient id="metaGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0064E0"/>
      <stop offset="50%" stop-color="#8B5CF6"/>
      <stop offset="100%" stop-color="#EC4899"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#bg6)"/>
  <rect x="50" y="45" width="700" height="410" rx="16" fill="#140C29" fill-opacity="0.85" stroke="#8B5CF6" stroke-width="1.4" stroke-opacity="0.5"/>
  <circle cx="80" cy="72" r="5" fill="#EC4899"/>
  <circle cx="98" cy="72" r="5" fill="#F59E0B"/>
  <circle cx="116" cy="72" r="5" fill="#10B981"/>
  
  <text x="85" y="145" font-family="'Space Grotesk', sans-serif" font-size="28" font-weight="700" fill="#FFFFFF">METAFORCE OMNI-CAMPAIGN</text>
  <text x="85" y="175" font-family="'Inter', sans-serif" font-size="13" fill="#C084FC" letter-spacing="2">HIGH-ROAS META ADVERTISING SUITE</text>
  <text x="85" y="210" font-family="'Inter', sans-serif" font-size="12" fill="#A8A3B3">Dynamic Reels Creatives • Audience Retargeting Funnels • Scaled Lead Flow</text>
  
  <!-- Funnel Stats Panel -->
  <g transform="translate(85, 245)">
    <rect width="180" height="70" rx="10" fill="#1E1238" stroke="#8B5CF6" stroke-width="1"/>
    <text x="15" y="30" font-family="'Inter', sans-serif" font-size="11" fill="#A8A3B3">Illustrative ROAS</text>
    <text x="15" y="55" font-family="'Space Grotesk', sans-serif" font-size="22" font-weight="700" fill="#34D399">4.62x</text>
    
    <rect x="200" y="0" width="180" height="70" rx="10" fill="#1E1238" stroke="#8B5CF6" stroke-width="1"/>
    <text x="215" y="30" font-family="'Inter', sans-serif" font-size="11" fill="#A8A3B3">Target CTR</text>
    <text x="215" y="55" font-family="'Space Grotesk', sans-serif" font-size="22" font-weight="700" fill="#E9D5FF">3.85%</text>
  </g>
  
  <!-- Ad Mockup Card (Reels / Story Format) -->
  <g transform="translate(500, 95)">
    <rect width="210" height="330" rx="16" fill="#0C0718" stroke="url(#metaGrad)" stroke-width="2"/>
    <rect x="20" y="25" width="170" height="180" rx="10" fill="#201338"/>
    <!-- Play Icon & Glow -->
    <circle cx="105" cy="115" r="28" fill="#8B5CF6" fill-opacity="0.4"/>
    <polygon points="98,103 118,115 98,127" fill="#FFFFFF"/>
    <text x="20" y="235" font-family="'Space Grotesk', sans-serif" font-size="13" font-weight="600" fill="#FFFFFF">Meta Ads Creative</text>
    <text x="20" y="255" font-family="'Inter', sans-serif" font-size="10" fill="#A8A3B3">High-Hook Rate Video Asset</text>
    <rect x="20" y="275" width="170" height="32" rx="16" fill="url(#metaGrad)"/>
    <text x="65" y="296" font-family="'Inter', sans-serif" font-size="11" font-weight="600" fill="#FFFFFF">SWIPE UP</text>
  </g>
</svg>`;
fs.writeFileSync(path.join(imgDir, 'project-metaads.svg'), projectMetaAdsSvg);

console.log('All assets successfully generated!');
