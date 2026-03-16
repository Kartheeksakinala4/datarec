/* =====================================================
   DataRec Marketplace — JavaScript
   ===================================================== */

// ── Product Data ──────────────────────────────────────
const products = [
  // ── DATA RECOVERY ──
  {
    id: 0,
    name: "Disk Drill Pro",
    tagline: "World's #1 Data Recovery Software",
    category: "data-recovery",
    platforms: ["Windows", "Mac"],
    icon: "fa-solid fa-hard-drive",
    iconBg: "#0f2040",
    iconColor: "#3b82f6",
    bannerGradient: "linear-gradient(135deg, #0a1628 0%, #0f2040 100%)",
    badges: ["bestseller", "sale"],
    rating: 4.9,
    reviews: 120450,
    price: 89,
    oldPrice: 149,
    period: "yr",
    description: "Disk Drill is the most comprehensive data recovery app available. Recover deleted files, photos, videos, and documents from any storage device. Features powerful Quick Scan and Deep Scan algorithms with 95%+ recovery rates even from formatted or corrupted drives.",
    features: [
      "Recover 400+ file formats",
      "Quick Scan & Deep Scan modes",
      "Preview files before recovery",
      "Recovery Vault protection",
      "iOS & Android recovery",
      "Disk cloning & byte-level backup",
      "SMART disk health monitoring",
      "Supports HDD, SSD, USB, SD cards"
    ],
    tags: ["Deep Scan", "Preview", "All Formats", "SMART"],
    popular: 98
  },
  {
    id: 1,
    name: "Stellar Data Recovery",
    tagline: "Professional-Grade File Recovery Suite",
    category: "data-recovery",
    platforms: ["Windows", "Mac"],
    icon: "fa-solid fa-star",
    iconBg: "#1a1025",
    iconColor: "#8b5cf6",
    bannerGradient: "linear-gradient(135deg, #110a20 0%, #1a1025 100%)",
    badges: ["popular"],
    rating: 4.8,
    reviews: 87600,
    price: 49.99,
    oldPrice: 79.99,
    period: "yr",
    description: "Stellar Data Recovery is a trusted name used by IT professionals worldwide. Exceptional photo and video recovery with a unique thumbnail gallery for easy browsing. Includes video repair, email recovery, and a powerful file filter engine.",
    features: [
      "1 GB free recovery trial",
      "Thumbnail gallery file browser",
      "Built-in video repair tool",
      "Email database recovery",
      "Encrypted drive support",
      "NTFS, FAT, exFAT, HFS+",
      "Raw recovery for 300+ types",
      "Resume interrupted sessions"
    ],
    tags: ["Photos", "Video Repair", "Email", "Encrypted"],
    popular: 92
  },
  {
    id: 2,
    name: "EaseUS Data Recovery Wizard",
    tagline: "Easiest Recovery for Beginners & Pros",
    category: "data-recovery",
    platforms: ["Windows", "Mac"],
    icon: "fa-solid fa-wand-magic-sparkles",
    iconBg: "#0f1a0f",
    iconColor: "#10b981",
    bannerGradient: "linear-gradient(135deg, #081208 0%, #0f1a0f 100%)",
    badges: ["bestseller"],
    rating: 4.7,
    reviews: 203000,
    price: 69.95,
    oldPrice: 99.95,
    period: "mo",
    description: "EaseUS Data Recovery Wizard is the most beginner-friendly recovery solution on the market. Its intuitive 3-step process lets anyone recover lost files in minutes. Latest v19.4 features improved recovery algorithms, expanded video preview, and AI-powered repair.",
    features: [
      "2 GB free recovery with share",
      "3-step recovery wizard",
      "AI-powered video preview",
      "Bootable recovery media",
      "Partition recovery",
      "Recycle Bin recovery",
      "Crashed system recovery",
      "Lifetime upgrade option"
    ],
    tags: ["Beginner Friendly", "AI Repair", "Bootable", "Partitions"],
    popular: 95
  },
  {
    id: 3,
    name: "R-Studio Network",
    tagline: "Enterprise RAID & NAS Recovery Tool",
    category: "data-recovery",
    platforms: ["Windows", "Mac", "Linux"],
    icon: "fa-solid fa-server",
    iconBg: "#1a100a",
    iconColor: "#f59e0b",
    bannerGradient: "linear-gradient(135deg, #120a05 0%, #1a100a 100%)",
    badges: ["pro"],
    rating: 4.6,
    reviews: 34200,
    price: 49.99,
    oldPrice: null,
    period: "one-time",
    description: "R-Studio is the professional's choice for complex recovery scenarios including RAID arrays, NAS devices, and network storage. Supports all major file systems including NTFS, FAT, Ext2/3/4, HFS+, and more. Trusted by data recovery labs and IT professionals globally.",
    features: [
      "RAID 0/1/5/6/10 reconstruction",
      "NAS & network drive recovery",
      "All major file systems supported",
      "Disk image creation & mounting",
      "Sector-level hex editor",
      "S.M.A.R.T. drive monitoring",
      "Remote recovery via network",
      "Windows, Mac, Linux support"
    ],
    tags: ["RAID", "NAS", "Network", "Linux"],
    popular: 75
  },
  {
    id: 4,
    name: "Wondershare Recoverit",
    tagline: "Advanced Multimedia & Video Recovery",
    category: "data-recovery",
    platforms: ["Windows", "Mac"],
    icon: "fa-solid fa-photo-film",
    iconBg: "#1a0f0a",
    iconColor: "#f97316",
    bannerGradient: "linear-gradient(135deg, #140805 0%, #1a0f0a 100%)",
    badges: ["popular", "new"],
    rating: 4.7,
    reviews: 65800,
    price: 79.99,
    oldPrice: 119.99,
    period: "yr",
    description: "Wondershare Recoverit specializes in recovering and repairing damaged multimedia files. Industry-leading video fragment reassembly restores corrupted or incomplete video files that other tools simply can't handle. Perfect for photographers, videographers, and content creators.",
    features: [
      "Advanced video repair engine",
      "Drone & action camera support",
      "Corrupted photo recovery",
      "NAS server recovery (Premium)",
      "Bootable media creator",
      "Fragmented video reassembly",
      "5,000+ device support",
      "1-click scan & recover"
    ],
    tags: ["Video Repair", "Drone Footage", "Photos", "NAS"],
    popular: 89
  },
  {
    id: 5,
    name: "Recuva Professional",
    tagline: "Fast & Free Unlimited Recovery",
    category: "data-recovery",
    platforms: ["Windows"],
    icon: "fa-solid fa-recycle",
    iconBg: "#0d180f",
    iconColor: "#22c55e",
    bannerGradient: "linear-gradient(135deg, #071009 0%, #0d180f 100%)",
    badges: ["sale"],
    rating: 4.4,
    reviews: 425000,
    price: 19.95,
    oldPrice: 34.95,
    period: "one-time",
    description: "Recuva by Piriform (makers of CCleaner) is the world's most downloaded data recovery tool. The free version offers unlimited recovery with no file size caps — rare among competitors. Pro adds virtual hard drive support and automated updates.",
    features: [
      "Free unlimited file recovery",
      "Deep scan for formatted drives",
      "Secure file overwrite (shredder)",
      "Virtual hard drive support (Pro)",
      "Recovers from removable media",
      "Wizard & advanced mode",
      "Lightweight portable version",
      "In-place file recovery"
    ],
    tags: ["Free Version", "Lightweight", "Shredder", "CCleaner"],
    popular: 88
  },
  {
    id: 6,
    name: "DMDE Professional",
    tagline: "Low-Level Disk Editor & Recovery",
    category: "data-recovery",
    platforms: ["Windows", "Mac", "Linux"],
    icon: "fa-solid fa-microchip",
    iconBg: "#100a1a",
    iconColor: "#a78bfa",
    bannerGradient: "linear-gradient(135deg, #09061a 0%, #100a1a 100%)",
    badges: ["pro"],
    rating: 4.3,
    reviews: 12100,
    price: 48,
    oldPrice: null,
    period: "one-time",
    description: "DMDE is a powerful low-level disk utility combining a hex editor, partition manager, RAID constructor, and full data recovery engine. Its directory reconstruction algorithms excel where other tools fail on severely damaged file systems.",
    features: [
      "Hex-level disk editor",
      "RAID array constructor",
      "Directory structure rebuild",
      "Disk clone & image tools",
      "Freeware basic scanning",
      "FAT/NTFS/Ext2-4/HFS+",
      "Portable executable",
      "Cross-platform"
    ],
    tags: ["Hex Editor", "RAID", "Advanced", "Portable"],
    popular: 60
  },

  // ── PRODUCTIVITY ──
  {
    id: 7,
    name: "Microsoft 365 Business",
    tagline: "The Complete Office Productivity Suite",
    category: "productivity",
    platforms: ["Windows", "Mac", "Web"],
    icon: "fa-brands fa-microsoft",
    iconBg: "#0a1020",
    iconColor: "#0ea5e9",
    bannerGradient: "linear-gradient(135deg, #050c18 0%, #0a1020 100%)",
    badges: ["bestseller"],
    rating: 4.8,
    reviews: 5200000,
    price: 12.50,
    oldPrice: 15,
    period: "user/mo",
    description: "Microsoft 365 Business Standard includes the full desktop Office suite — Word, Excel, PowerPoint, Outlook, Teams, and more. Features 1 TB OneDrive storage per user, advanced security, and real-time collaboration. The world's most-used productivity platform.",
    features: [
      "Word, Excel, PowerPoint, Outlook",
      "Microsoft Teams included",
      "1 TB OneDrive cloud storage",
      "Business email with Exchange",
      "Advanced threat protection",
      "Webinar & virtual event tools",
      "Desktop + web + mobile apps",
      "50 GB mailbox per user"
    ],
    tags: ["Office Suite", "Teams", "OneDrive", "Email"],
    popular: 99
  },
  {
    id: 8,
    name: "ClickUp Business",
    tagline: "All-in-One Project Management Platform",
    category: "productivity",
    platforms: ["Windows", "Mac", "Web"],
    icon: "fa-solid fa-rocket",
    iconBg: "#0d0f1a",
    iconColor: "#7c3aed",
    bannerGradient: "linear-gradient(135deg, #07080f 0%, #0d0f1a 100%)",
    badges: ["popular", "new"],
    rating: 4.7,
    reviews: 345000,
    price: 19,
    oldPrice: 29,
    period: "user/mo",
    description: "ClickUp replaces 5+ productivity apps with one platform. Manage tasks, documents, goals, whiteboards, and chat in a single workspace. AI assistant helps create reports, summarize threads, and automate workflows. Used by Google, Netflix, and 2M+ teams.",
    features: [
      "Tasks, Goals & OKR tracking",
      "Docs, Wikis & Notes",
      "AI writing & summarization",
      "Whiteboards & Mind Maps",
      "Time tracking built-in",
      "1,000+ integrations",
      "Gantt charts & workload view",
      "Custom automations"
    ],
    tags: ["AI Powered", "All-in-One", "Automations", "Gantt"],
    popular: 91
  },
  {
    id: 9,
    name: "Notion AI",
    tagline: "Notes, Databases & AI in One Workspace",
    category: "productivity",
    platforms: ["Windows", "Mac", "Web"],
    icon: "fa-solid fa-n",
    iconBg: "#0f0f0f",
    iconColor: "#e2e8f0",
    bannerGradient: "linear-gradient(135deg, #0a0a0a 0%, #141414 100%)",
    badges: ["popular"],
    rating: 4.6,
    reviews: 780000,
    price: 16,
    oldPrice: null,
    period: "user/mo",
    description: "Notion is the connected workspace that combines notes, wikis, databases, and project management — now with powerful AI that can write, summarize, translate, and extract insights from any page. Loved by startups, students, and Fortune 500 companies alike.",
    features: [
      "Unlimited pages & blocks",
      "AI writing & summarization",
      "Relational databases",
      "Kanban, List, Calendar views",
      "Team collaboration real-time",
      "Custom templates library",
      "API access for automation",
      "Guest sharing unlimited"
    ],
    tags: ["Notes", "Database", "AI", "Templates"],
    popular: 93
  },
  {
    id: 10,
    name: "Slack Pro",
    tagline: "Team Communication & Workflow Hub",
    category: "productivity",
    platforms: ["Windows", "Mac", "Web"],
    icon: "fa-brands fa-slack",
    iconBg: "#1a0f1a",
    iconColor: "#e879f9",
    bannerGradient: "linear-gradient(135deg, #0f0810 0%, #1a0f1a 100%)",
    badges: ["bestseller"],
    rating: 4.7,
    reviews: 1800000,
    price: 7.25,
    oldPrice: 10,
    period: "user/mo",
    description: "Slack is the industry-leading messaging platform that transforms how teams work. Organize conversations into channels, integrate 2,600+ apps, and use Slack AI to summarize threads and catch up instantly. The backbone of remote-first companies worldwide.",
    features: [
      "Unlimited message history",
      "2,600+ app integrations",
      "Slack AI thread summaries",
      "Audio & video huddles",
      "Screen sharing built-in",
      "Workflow builder automation",
      "Shared channels with partners",
      "Enterprise-grade security"
    ],
    tags: ["Messaging", "Integrations", "AI Summaries", "Huddles"],
    popular: 96
  },

  // ── SECURITY ──
  {
    id: 11,
    name: "Malwarebytes Premium",
    tagline: "Real-Time Malware & Ransomware Defense",
    category: "security",
    platforms: ["Windows", "Mac"],
    icon: "fa-solid fa-shield-halved",
    iconBg: "#0a1a12",
    iconColor: "#10b981",
    bannerGradient: "linear-gradient(135deg, #04100a 0%, #0a1a12 100%)",
    badges: ["popular"],
    rating: 4.6,
    reviews: 680000,
    price: 39.99,
    oldPrice: 59.99,
    period: "yr",
    description: "Malwarebytes Premium provides real-time protection against malware, ransomware, zero-day exploits, and phishing attacks. Its industry-leading threat detection engine uses AI and behavior-based detection to stop threats that traditional antivirus misses.",
    features: [
      "Real-time malware detection",
      "Ransomware rollback",
      "Zero-day exploit protection",
      "Phishing & scam protection",
      "Browser Guard extension",
      "VPN included (Premium+VPN)",
      "Lightweight — no slowdowns",
      "Up to 5 devices covered"
    ],
    tags: ["Ransomware", "Real-Time", "AI Detection", "VPN Option"],
    popular: 87
  },
  {
    id: 12,
    name: "NordVPN Plus",
    tagline: "Fastest VPN with Threat Protection",
    category: "security",
    platforms: ["Windows", "Mac"],
    icon: "fa-solid fa-earth-americas",
    iconBg: "#0a0f1a",
    iconColor: "#3b82f6",
    bannerGradient: "linear-gradient(135deg, #04080f 0%, #0a0f1a 100%)",
    badges: ["bestseller", "sale"],
    rating: 4.7,
    reviews: 2100000,
    price: 3.69,
    oldPrice: 11.99,
    period: "mo",
    description: "NordVPN is the world's most trusted VPN service with 6,400+ servers in 111 countries. Threat Protection Pro blocks malware, trackers, and intrusive ads — no VPN connection needed. Meshnet allows encrypted device-to-device connections.",
    features: [
      "6,400+ servers in 111 countries",
      "Threat Protection Pro",
      "Double VPN & Onion over VPN",
      "No-log policy (audited)",
      "Kill switch & split tunneling",
      "Meshnet for private networks",
      "10 simultaneous devices",
      "24/7 customer support"
    ],
    tags: ["6400+ Servers", "No Logs", "Meshnet", "Threat Blocker"],
    popular: 97
  },

  // ── SYSTEM TOOLS ──
  {
    id: 13,
    name: "CCleaner Professional",
    tagline: "PC Optimizer & Privacy Cleaner",
    category: "system",
    platforms: ["Windows", "Mac"],
    icon: "fa-solid fa-broom",
    iconBg: "#0f1808",
    iconColor: "#84cc16",
    bannerGradient: "linear-gradient(135deg, #090e04 0%, #0f1808 100%)",
    badges: ["bestseller"],
    rating: 4.5,
    reviews: 4500000,
    price: 29.95,
    oldPrice: 39.95,
    period: "yr",
    description: "CCleaner Professional is the world's most popular PC cleaning tool with 2.5 billion downloads. Cleans junk files, fixes registry errors, manages startup programs, and removes browser tracking data. Now includes real-time monitoring and Software Updater.",
    features: [
      "Junk file cleaner",
      "Registry fixer",
      "Startup manager",
      "Browser history cleaner",
      "Software updater built-in",
      "Duplicate file finder",
      "Driver updater (Pro+)",
      "Real-time monitoring"
    ],
    tags: ["Registry", "Privacy", "Startup", "Cleaner"],
    popular: 85
  },
  {
    id: 14,
    name: "Partition Wizard Pro",
    tagline: "Advanced Disk Partition Manager",
    category: "system",
    platforms: ["Windows"],
    icon: "fa-solid fa-table-cells",
    iconBg: "#1a100a",
    iconColor: "#fb923c",
    bannerGradient: "linear-gradient(135deg, #0f0805 0%, #1a100a 100%)",
    badges: ["pro"],
    rating: 4.5,
    reviews: 28400,
    price: 59,
    oldPrice: 79,
    period: "one-time",
    description: "MiniTool Partition Wizard Pro is a comprehensive disk management solution for Windows. Resize, move, merge, split, and convert partitions without data loss. Migrate OS to SSD in minutes. Full bootable recovery environment for system-level operations.",
    features: [
      "Resize & move partitions",
      "Convert MBR ↔ GPT",
      "OS migration to SSD/HDD",
      "Disk clone & copy",
      "Bootable media support",
      "Partition recovery",
      "NTFS/FAT32 conversion",
      "Dynamic disk management"
    ],
    tags: ["Partitions", "SSD Migration", "MBR/GPT", "Clone"],
    popular: 72
  },

  // ── BACKUP ──
  {
    id: 15,
    name: "Acronis Cyber Protect",
    tagline: "AI-Enhanced Backup & Cybersecurity",
    category: "backup",
    platforms: ["Windows", "Mac"],
    icon: "fa-solid fa-cloud-arrow-up",
    iconBg: "#0a1020",
    iconColor: "#60a5fa",
    bannerGradient: "linear-gradient(135deg, #050c18 0%, #0a1020 100%)",
    badges: ["pro", "new"],
    rating: 4.7,
    reviews: 156000,
    price: 49.99,
    oldPrice: 69.99,
    period: "yr",
    description: "Acronis Cyber Protect Home Office is the only solution combining full-image backup with integrated cybersecurity. AI-powered ransomware protection runs alongside your backups. Backup to local drives, NAS, or the Acronis Cloud with military-grade encryption.",
    features: [
      "Full disk image backup",
      "AI anti-ransomware (Active Protection)",
      "Cloud backup (500 GB included)",
      "Bare-metal system restore",
      "Mobile device backup",
      "Disk cloning for SSD migration",
      "Continuous data protection",
      "Military-grade AES-256 encryption"
    ],
    tags: ["Disk Image", "Cloud", "Ransomware Shield", "Encryption"],
    popular: 82
  },
  {
    id: 16,
    name: "Backblaze Personal Backup",
    tagline: "Unlimited Cloud Backup for $99/yr",
    category: "backup",
    platforms: ["Windows", "Mac"],
    icon: "fa-solid fa-fire-flame-curved",
    iconBg: "#1a0a05",
    iconColor: "#f97316",
    bannerGradient: "linear-gradient(135deg, #100604 0%, #1a0a05 100%)",
    badges: ["sale", "popular"],
    rating: 4.6,
    reviews: 98000,
    price: 99,
    oldPrice: 149,
    period: "yr",
    description: "Backblaze Personal Backup provides truly unlimited cloud backup for your entire computer — external drives included. Continuously backs up in the background. Restore by download or order a USB drive / hard drive shipped to your door.",
    features: [
      "Truly unlimited storage",
      "Continuous background backup",
      "External drive backup",
      "30-day version history",
      "USB/drive restore service",
      "Mobile file access app",
      "Private encryption key option",
      "No file size limits"
    ],
    tags: ["Unlimited", "Continuous", "Cloud", "External Drives"],
    popular: 86
  },

  // ── MEDIA ──
  {
    id: 17,
    name: "Adobe Photoshop",
    tagline: "Industry Standard Photo Editor",
    category: "media",
    platforms: ["Windows", "Mac"],
    icon: "fa-solid fa-image",
    iconBg: "#05101a",
    iconColor: "#2563eb",
    bannerGradient: "linear-gradient(135deg, #030c14 0%, #05101a 100%)",
    badges: ["bestseller"],
    rating: 4.8,
    reviews: 8900000,
    price: 22.99,
    oldPrice: 31.49,
    period: "mo",
    description: "Adobe Photoshop remains the gold standard for image editing, compositing, and digital art. The latest version introduces Generative Fill (AI-powered object generation), Neural Filters, and Content-Aware tools. Comes with 100 GB Creative Cloud storage.",
    features: [
      "Generative Fill (AI)",
      "Neural Filters for smart edits",
      "Content-Aware selection & fill",
      "Camera RAW editing",
      "Layer styles & smart objects",
      "3D design & painting",
      "100 GB Creative Cloud storage",
      "Adobe Fonts included"
    ],
    tags: ["AI Generative", "RAW Editing", "Layers", "Creative Cloud"],
    popular: 99
  },
  {
    id: 18,
    name: "DaVinci Resolve Studio",
    tagline: "Professional Video Editor & Color Grader",
    category: "media",
    platforms: ["Windows", "Mac", "Linux"],
    icon: "fa-solid fa-clapperboard",
    iconBg: "#0d0812",
    iconColor: "#c084fc",
    bannerGradient: "linear-gradient(135deg, #07040c 0%, #0d0812 100%)",
    badges: ["pro", "sale"],
    rating: 4.8,
    reviews: 234000,
    price: 295,
    oldPrice: 395,
    period: "one-time",
    description: "DaVinci Resolve Studio is the professional video editor used on Hollywood blockbusters. Combines editing, color correction, audio mastering (Fairlight), visual effects (Fusion), and AI tools in one application. Studio license includes noise reduction, deep neural effects, and multi-user collaboration.",
    features: [
      "Professional color grading",
      "Fusion VFX & compositing",
      "Fairlight audio mastering",
      "AI-powered noise reduction",
      "Multi-user collaboration",
      "120fps & 8K workflow support",
      "HDR & Dolby Vision support",
      "Lifetime license (no subscription)"
    ],
    tags: ["Color Grade", "VFX", "Audio", "8K Support"],
    popular: 88
  },
  {
    id: 19,
    name: "Canva Pro",
    tagline: "Design Anything. Publish Everywhere.",
    category: "media",
    platforms: ["Web", "Windows", "Mac"],
    icon: "fa-solid fa-palette",
    iconBg: "#1a0512",
    iconColor: "#ec4899",
    bannerGradient: "linear-gradient(135deg, #0f020c 0%, #1a0512 100%)",
    badges: ["popular", "new"],
    rating: 4.7,
    reviews: 3400000,
    price: 14.99,
    oldPrice: 19.99,
    period: "mo",
    description: "Canva Pro transforms anyone into a designer. Access 100+ million premium photos, videos, and graphics. AI tools include Magic Design, Background Remover, Magic Write, and Brand Kit. Schedule social media posts directly from Canva. Perfect for marketers, small businesses, and creators.",
    features: [
      "100M+ premium stock assets",
      "Magic Design (AI templates)",
      "Background Remover",
      "Brand Kit & team assets",
      "Social media scheduler",
      "Resize to any format instantly",
      "100 GB cloud storage",
      "PDF & print ordering"
    ],
    tags: ["AI Design", "Stock Assets", "Brand Kit", "Social Media"],
    popular: 94
  }
];

// ── State ──────────────────────────────────────────────
let cart = [];
let currentFilter = "all";
let currentSort = "featured";
let searchQuery = "";

// ── Utilities ──────────────────────────────────────────
function getStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(empty);
}

function formatReviews(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000) return (n / 1000).toFixed(0) + "K";
  return n.toString();
}

function formatPrice(p) {
  if (p == null) return "";
  return p % 1 === 0 ? "$" + p : "$" + p.toFixed(2);
}

function getPeriodLabel(period) {
  const map = { yr: "/yr", mo: "/mo", "one-time": " one-time", "user/mo": "/user/mo" };
  return map[period] || "/" + period;
}

function showToast(msg) {
  const t = document.getElementById("toast");
  t.innerHTML = `<i class="fa-solid fa-circle-check" style="color:#10b981"></i> ${msg}`;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 3000);
}

// ── Render Products ────────────────────────────────────
function renderProducts(list) {
  const grid = document.getElementById("productsGrid");
  const count = document.getElementById("productCount");
  count.textContent = `Showing ${list.length} of ${products.length} products`;

  if (list.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:80px 20px;color:var(--text-muted)">
        <i class="fa-solid fa-magnifying-glass" style="font-size:48px;margin-bottom:16px;display:block;opacity:0.4"></i>
        <p style="font-size:18px;margin-bottom:8px">No products found</p>
        <p style="font-size:14px">Try a different search or category</p>
      </div>`;
    return;
  }

  grid.innerHTML = list.map(p => createCard(p)).join("");
}

function createCard(p) {
  const badgeHTML = p.badges.map(b => `<span class="badge badge-${b}">${b}</span>`).join("");
  const platformHTML = p.platforms.map(pl => `<span class="platform-tag">${pl}</span>`).join("");
  const tagHTML = p.tags.slice(0, 3).map(t => `<span class="feature-tag">${t}</span>`).join("");
  const priceStr = p.price === 0
    ? `<span class="price-free">FREE</span>`
    : `<span class="price-main">${formatPrice(p.price)}<small>${getPeriodLabel(p.period)}</small></span>`;
  const oldPriceStr = p.oldPrice
    ? `<span class="price-old">${formatPrice(p.oldPrice)}</span>`
    : "";
  const discountPct = p.oldPrice
    ? Math.round((1 - p.price / p.oldPrice) * 100)
    : null;

  return `
    <article class="product-card" onclick="openModal(${p.id})" role="button" tabindex="0"
      onkeydown="if(event.key==='Enter')openModal(${p.id})">
      <div class="card-badge-row">${badgeHTML}</div>
      <div class="card-banner" style="background:${p.bannerGradient}">
        ${discountPct ? `<div style="position:absolute;top:14px;right:14px;background:var(--red);color:#fff;font-size:12px;font-weight:700;padding:4px 9px;border-radius:6px">-${discountPct}%</div>` : ""}
        <div class="card-icon-wrap" style="background:${p.iconBg};color:${p.iconColor}">
          <i class="${p.icon}"></i>
        </div>
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span class="card-category">${p.category.replace("-", " ")}</span>
          <div class="card-platform">${platformHTML}</div>
        </div>
        <h3 class="card-name">${p.name}</h3>
        <p class="card-desc">${p.tagline}</p>
        <div class="card-features">${tagHTML}</div>
        <div class="card-rating">
          <span class="stars">${getStars(p.rating)}</span>
          <span class="rating-num">${p.rating}</span>
          <span class="review-count">(${formatReviews(p.reviews)})</span>
        </div>
      </div>
      <div class="card-footer">
        <div class="card-price-block">
          ${oldPriceStr}
          ${priceStr}
        </div>
        <button class="card-add-btn" onclick="event.stopPropagation(); addToCart(${p.id})">
          <i class="fa-solid fa-cart-plus"></i> Add
        </button>
      </div>
    </article>`;
}

// ── Filter & Sort ──────────────────────────────────────
function filterByCategory(cat) {
  currentFilter = cat;

  // Update active button
  document.querySelectorAll(".cat-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.cat === cat);
  });

  applyFiltersAndSort();
}

function sortProducts() {
  currentSort = document.getElementById("sortSelect").value;
  applyFiltersAndSort();
}

function applyFiltersAndSort() {
  let list = products.filter(p => {
    const matchCat = currentFilter === "all" || p.category === currentFilter;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q
      || p.name.toLowerCase().includes(q)
      || p.tagline.toLowerCase().includes(q)
      || p.category.includes(q)
      || p.tags.some(t => t.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  switch (currentSort) {
    case "price-asc":  list.sort((a, b) => a.price - b.price); break;
    case "price-desc": list.sort((a, b) => b.price - a.price); break;
    case "rating":     list.sort((a, b) => b.rating - a.rating); break;
    case "popular":    list.sort((a, b) => b.popular - a.popular); break;
    default: break; // featured = original order
  }

  renderProducts(list);
}

// ── Search ─────────────────────────────────────────────
document.getElementById("globalSearch").addEventListener("input", function () {
  searchQuery = this.value;
  applyFiltersAndSort();
});

// ── Cart ───────────────────────────────────────────────
function addToCart(id) {
  const product = products[id];
  if (!cart.find(i => i.id === id)) {
    cart.push(product);
    showToast(`${product.name} added to cart!`);
  } else {
    showToast(`${product.name} is already in your cart.`);
  }
  updateCartUI();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartUI();
  renderCartItems();
}

function updateCartUI() {
  document.getElementById("cartCount").textContent = cart.length;
}

function openCart() {
  document.getElementById("cartSidebar").classList.add("open");
  document.getElementById("cartOverlay").classList.add("open");
  renderCartItems();
}

function closeCart() {
  document.getElementById("cartSidebar").classList.remove("open");
  document.getElementById("cartOverlay").classList.remove("open");
}

function renderCartItems() {
  const el = document.getElementById("cartItems");
  const footer = document.getElementById("cartFooter");

  if (cart.length === 0) {
    el.innerHTML = `<div class="cart-empty"><i class="fa-solid fa-box-open"></i><p>Your cart is empty</p></div>`;
    footer.style.display = "none";
    return;
  }

  footer.style.display = "block";

  let total = 0;
  el.innerHTML = cart.map(p => {
    const price = p.price === 0 ? 0 : p.price;
    total += price;
    return `
      <div class="cart-item">
        <div class="cart-item-icon" style="background:${p.iconBg};color:${p.iconColor}">
          <i class="${p.icon}"></i>
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-price">${p.price === 0 ? "Free" : formatPrice(p.price) + getPeriodLabel(p.period)}</div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${p.id})" title="Remove">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>`;
  }).join("");

  document.getElementById("cartTotal").textContent = "$" + total.toFixed(2);
}

document.getElementById("cartBtn").addEventListener("click", openCart);

// ── Product Modal ──────────────────────────────────────
function openModal(id) {
  const p = products[id];
  const overlay = document.getElementById("modalOverlay");
  const content = document.getElementById("modalContent");

  const featuresList = p.features.map(f =>
    `<div class="modal-feature"><i class="fa-solid fa-circle-check"></i><span>${f}</span></div>`
  ).join("");

  const discountPct = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : null;

  content.innerHTML = `
    <div class="modal-banner" style="background:${p.bannerGradient}">
      <div class="card-icon-wrap" style="background:${p.iconBg};color:${p.iconColor};width:100px;height:100px;font-size:48px;border-radius:24px">
        <i class="${p.icon}"></i>
      </div>
    </div>
    <div class="modal-body">
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px">
        ${p.badges.map(b => `<span class="badge badge-${b}">${b}</span>`).join("")}
        ${discountPct ? `<span class="badge" style="background:var(--red);color:#fff">-${discountPct}% OFF</span>` : ""}
        ${p.platforms.map(pl => `<span class="platform-tag" style="font-size:12px">${pl}</span>`).join("")}
      </div>
      <h2 class="modal-title">${p.name}</h2>
      <p class="modal-subtitle">${p.tagline}</p>
      <div class="modal-rating">
        <span class="stars">${getStars(p.rating)}</span>
        <span class="rating-num">${p.rating}</span>
        <span class="review-count">(${formatReviews(p.reviews)} reviews)</span>
      </div>
      <p class="modal-desc">${p.description}</p>
      <p class="modal-features-title">What's included:</p>
      <div class="modal-features-list">${featuresList}</div>
      <div class="modal-pricing-row">
        <div class="modal-price-block">
          <div class="label">Price</div>
          <div class="price">${p.price === 0 ? '<span style="color:var(--green)">FREE</span>' : formatPrice(p.price) + `<small>${getPeriodLabel(p.period)}</small>`}</div>
          ${p.oldPrice ? `<div class="original">${formatPrice(p.oldPrice)} regular price</div>` : ""}
        </div>
        <div style="display:flex;flex-direction:column;gap:8px">
          <button class="btn-primary" onclick="addToCart(${p.id}); closeModal()">
            <i class="fa-solid fa-cart-plus"></i> Add to Cart
          </button>
          <button class="btn-outline" style="font-size:13px;padding:9px 16px">
            <i class="fa-solid fa-eye"></i> View Demo
          </button>
        </div>
      </div>
    </div>`;

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

// Close modal on Escape
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeModal();
    closeCart();
  }
});

// ── Navbar scroll effect ───────────────────────────────
window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 50);
});

// ── Initial render ─────────────────────────────────────
renderProducts(products);
