/* ═══════════════════════════════════════════════════════
   SoftVault Marketplace — script.js
   8 original recovery & utility tools
═══════════════════════════════════════════════════════ */

// ─────────────────────────────────────────────────────
//  PRODUCT DATA
// ─────────────────────────────────────────────────────
const products = [

  /* ══ 1. HDD/SSD DATA RECOVERY ═══════════════════════ */
  {
    id: 0,
    name: "DriveRevive",
    tagline: "Deep-scan HDD & SSD data recovery for Windows",
    category: "data-recovery",
    platforms: ["Windows"],
    icon: "fa-solid fa-hard-drive",
    iconBg: "#0d1e38", iconColor: "#60a5fa",
    bannerBg: "linear-gradient(135deg,#060f1e 0%,#0d1e38 100%)",
    badges: ["hot", "sale"],
    rating: 4.9, reviews: 142000,
    price: 79, oldPrice: 129, period: "yr",
    featured: true,
    description: "DriveRevive uses multi-pass adaptive scan algorithms to recover deleted, formatted, or corrupted files from HDDs and SSDs of any brand. Supports NTFS, FAT32, exFAT, and RAW file systems. Preview files live before committing to recovery — no blind restores.",
    features: [
      "Quick Scan & Deep Scan modes",
      "Live file preview before recovery",
      "NTFS, FAT32, exFAT & RAW support",
      "BitLocker encrypted drive recovery",
      "S.M.A.R.T. disk health monitoring",
      "Byte-level disk imaging & cloning",
      "500+ recoverable file formats",
      "Scheduled & automatic recovery"
    ],
    tags: ["Deep Scan", "Preview Files", "BitLocker", "500+ Formats"],
    popular: 99
  },

  /* ══ 2. USB/SD CARD RECOVERY ════════════════════════ */
  {
    id: 1,
    name: "FlashRescue",
    tagline: "USB drive & SD/microSD card data recovery",
    category: "data-recovery",
    platforms: ["Windows"],
    icon: "fa-solid fa-memory",
    iconBg: "#08200f", iconColor: "#4ade80",
    bannerBg: "linear-gradient(135deg,#04100a 0%,#08200f 100%)",
    badges: ["popular"],
    rating: 4.8, reviews: 98000,
    price: 49, oldPrice: 79, period: "one-time",
    featured: false,
    description: "FlashRescue is built specifically for flash-based storage. Whether your USB drive was accidentally formatted, your SD card shows as RAW, or your memory card is unrecognised after a camera error — FlashRescue recovers photos, videos, and files in minutes.",
    features: [
      "USB 2.0 / 3.0 / 3.1 & USB-C support",
      "SD, microSD, CF & XQD card recovery",
      "RAW partition & unformatted drive scan",
      "Camera memory card deep scan",
      "Thumbnail gallery preview",
      "Drone & action cam footage recovery",
      "FAT16, FAT32, exFAT, NTFS support",
      "One-time license, lifetime use"
    ],
    tags: ["USB & SD Cards", "RAW Partitions", "Camera Cards", "One-time"],
    popular: 88
  },

  /* ══ 3. PHOTO CORRUPTED RECOVERY ════════════════════ */
  {
    id: 2,
    name: "PhotoRevive",
    tagline: "Repair & recover corrupted photo files of any format",
    category: "data-recovery",
    platforms: ["Windows"],
    icon: "fa-solid fa-images",
    iconBg: "#200a30", iconColor: "#c084fc",
    bannerBg: "linear-gradient(135deg,#130520 0%,#200a30 100%)",
    badges: ["new"],
    rating: 4.8, reviews: 56700,
    price: 49, oldPrice: 79, period: "yr",
    featured: false,
    description: "PhotoRevive repairs and recovers broken, truncated, or corrupted image files that other tools give up on. It rebuilds image headers, reconstructs missing color data, and recovers files deleted from any storage source. Supports every RAW format from 500+ camera models.",
    features: [
      "500+ camera RAW format support",
      "Corrupted JPEG / PNG repair engine",
      "HEIC, HEIF, WebP & AVIF recovery",
      "Thumbnail-guided gallery browser",
      "Batch repair for 1000s of files",
      "AI-assisted pixel reconstruction",
      "Before/after comparison preview",
      "Recover from any drive or card"
    ],
    tags: ["500+ RAW Formats", "JPEG Repair", "Batch Mode", "AI Repair"],
    popular: 85
  },

  /* ══ 4. VIDEO CORRUPTED RECOVERY ════════════════════ */
  {
    id: 3,
    name: "VideoRescue",
    tagline: "Repair & recover corrupted or broken video files",
    category: "data-recovery",
    platforms: ["Windows"],
    icon: "fa-solid fa-film",
    iconBg: "#1a0820", iconColor: "#d946ef",
    bannerBg: "linear-gradient(135deg,#0d0412 0%,#1a0820 100%)",
    badges: ["pro"],
    rating: 4.7, reviews: 43000,
    price: 59, oldPrice: 89, period: "one-time",
    featured: false,
    description: "VideoRescue fixes unplayable, stuttering, or partially recorded video files. It repairs broken MP4, MOV, AVI, MKV, and other container formats by reconstructing missing headers, syncing audio/video tracks, and salvaging frames from damaged footage.",
    features: [
      "MP4, MOV, AVI, MKV, FLV repair",
      "4K / 8K footage repair support",
      "Broken header reconstruction",
      "Audio/video track re-sync",
      "Frame-by-frame fragment salvage",
      "GoPro, DJI & Sony camera support",
      "Preview repaired footage before saving",
      "Batch repair multiple files at once"
    ],
    tags: ["4K/8K Repair", "MP4/MOV/AVI", "Drone Footage", "Batch Repair"],
    popular: 80
  },

  /* ══ 5. CORRUPT FILE RECOVERY ═══════════════════════ */
  {
    id: 4,
    name: "FileForge",
    tagline: "Recover & repair any type of corrupted file",
    category: "data-recovery",
    platforms: ["Windows"],
    icon: "fa-solid fa-file-circle-exclamation",
    iconBg: "#200508", iconColor: "#fc8181",
    bannerBg: "linear-gradient(135deg,#100303 0%,#200508 100%)",
    badges: ["new"],
    rating: 4.6, reviews: 31000,
    price: 39, oldPrice: 59, period: "one-time",
    featured: false,
    description: "FileForge handles the files other recovery tools can't touch — corrupted Word documents, broken Excel spreadsheets, damaged PDFs, corrupt ZIP archives, and more. The deep repair engine reconstructs file structures byte-by-byte to extract as much data as possible.",
    features: [
      "Word, Excel, PowerPoint repair",
      "PDF & ZIP archive repair",
      "Access database (.mdb) recovery",
      "PST / Outlook email file repair",
      "AutoCAD drawing file repair",
      "Partial data extraction from broken files",
      "Drag-and-drop interface",
      "Supports 150+ file formats"
    ],
    tags: ["Office Files", "PDF Repair", "ZIP Archives", "150+ Formats"],
    popular: 74
  },

  /* ══ 6. CCTV FOOTAGE RECOVERY ═══════════════════════ */
  {
    id: 5,
    name: "CCTVRecover",
    tagline: "Recover deleted or overwritten CCTV & DVR footage",
    category: "data-recovery",
    platforms: ["Windows"],
    icon: "fa-solid fa-video",
    iconBg: "#051528", iconColor: "#7dd3fc",
    bannerBg: "linear-gradient(135deg,#030918 0%,#051528 100%)",
    badges: ["hot"],
    rating: 4.7, reviews: 27400,
    price: 69, oldPrice: 99, period: "one-time",
    featured: false,
    description: "CCTVRecover is built exclusively for CCTV, NVR, and DVR systems. It recovers deleted, overwritten, or corrupted surveillance footage from Hikvision, Dahua, Axis, and 200+ DVR brands. Supports proprietary DVR file systems and exports recovered clips to standard MP4.",
    features: [
      "200+ DVR/NVR brand support",
      "Hikvision, Dahua & Axis compatible",
      "Proprietary DVR file system scan",
      "Recover from formatted DVR HDDs",
      "Export recovered clips to MP4",
      "Timestamp & camera ID preserved",
      "Night-vision & IR footage recovery",
      "Supports H.264, H.265 & MPEG-4"
    ],
    tags: ["200+ DVR Brands", "Hikvision/Dahua", "H.264/H.265", "MP4 Export"],
    popular: 82
  },

  /* ══ 7. SCREEN RECORDER WITH STEP LOGGING ═══════════ */
  {
    id: 6,
    name: "ScreenLog Pro",
    tagline: "Screen recorder that auto-logs every action as steps",
    category: "screen-recorder",
    platforms: ["Windows"],
    icon: "fa-solid fa-circle-dot",
    iconBg: "#200808", iconColor: "#f87171",
    bannerBg: "linear-gradient(135deg,#0f0404 0%,#200808 100%)",
    badges: ["new", "hot"],
    rating: 4.8, reviews: 19600,
    price: 39, oldPrice: 59, period: "one-time",
    featured: false,
    description: "ScreenLog Pro does more than record your screen — it automatically captures every click, keystroke, and window change as numbered step annotations overlaid on the video. Perfect for creating bug reports, software tutorials, IT documentation, and training materials.",
    features: [
      "Full screen & region capture",
      "Auto-annotated step-by-step logging",
      "Click, keystroke & scroll detection",
      "Webcam overlay support",
      "System audio + microphone capture",
      "Export to MP4, GIF or PDF step guide",
      "Instant shareable link upload",
      "Keyboard shortcut to start/stop"
    ],
    tags: ["Step Logging", "Auto-Annotate", "PDF Export", "Bug Reports"],
    popular: 86
  },

  /* ══ 8. DATA WIPING TOOL ════════════════════════════ */
  {
    id: 7,
    name: "DataWipe Pro",
    tagline: "Permanently wipe drives beyond any forensic recovery",
    category: "system",
    platforms: ["Windows"],
    icon: "fa-solid fa-eraser",
    iconBg: "#1a0e05", iconColor: "#fb923c",
    bannerBg: "linear-gradient(135deg,#0e0703 0%,#1a0e05 100%)",
    badges: ["pro"],
    rating: 4.7, reviews: 34200,
    price: 29, oldPrice: 49, period: "one-time",
    featured: false,
    description: "DataWipe Pro permanently erases data from HDDs, SSDs, USB drives, and SD cards using DoD 5220.22-M, Gutmann, and custom wipe patterns — making recovery impossible. Generates a legally-compliant certificate of destruction for each wipe, required for GDPR and HIPAA compliance.",
    features: [
      "DoD 5220.22-M 7-pass wipe standard",
      "35-pass Gutmann algorithm support",
      "SSD-optimised secure erase (ATA)",
      "Wipe free space without full format",
      "Wipe specific files & folders only",
      "Certificate of destruction (PDF)",
      "GDPR & HIPAA compliance ready",
      "Bootable WinPE wipe environment"
    ],
    tags: ["DoD Standard", "Gutmann 35-pass", "Certificate", "GDPR/HIPAA"],
    popular: 78
  }

];

// ─────────────────────────────────────────────────────
//  STATE
// ─────────────────────────────────────────────────────
let cart = [];
let currentFilter = "all";
let currentSort = "featured";
let searchQuery = "";
let viewMode = "grid";

// ─────────────────────────────────────────────────────
//  HELPERS
// ─────────────────────────────────────────────────────
const stars = r => {
  const full = Math.floor(r), half = r % 1 >= .5 ? 1 : 0, empty = 5 - full - half;
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(empty);
};

const fmtNum = n => {
  if (n >= 1e6) return (n / 1e6).toFixed(1) + "M";
  if (n >= 1e3) return (n / 1e3).toFixed(0) + "K";
  return n.toString();
};

const fmtPrice = p => (p != null && p % 1 === 0) ? "$" + p : p != null ? "$" + p.toFixed(2) : "";

const periodLabel = p => ({ yr: "/yr", mo: "/mo", "one-time": " one-time", "user/mo": "/user/mo", "free-tier": "" }[p] || "/" + p);

const disc = (price, old) => old ? Math.round((1 - price / old) * 100) : null;

function showToast(msg, isError = false) {
  const t = document.getElementById("toast");
  t.innerHTML = `<i class="fa-solid fa-${isError ? "triangle-exclamation" : "circle-check"}" style="color:${isError ? "#f59e0b" : "#10b981"}"></i> ${msg}`;
  t.className = "toast show" + (isError ? " error" : "");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("show"), 3200);
}

// ─────────────────────────────────────────────────────
//  RENDER PRODUCTS
// ─────────────────────────────────────────────────────
function renderProducts(list) {
  const grid = document.getElementById("productsGrid");
  const count = document.getElementById("productCount");

  count.textContent = `Showing ${list.length} of ${products.length} products`;

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-magnifying-glass"></i>
        <p>No products found</p>
        <span>Try a different search or category filter</span>
      </div>`;
    return;
  }

  grid.innerHTML = list.map(p => buildCard(p)).join("");
}

function buildCard(p) {
  const badgesHTML = p.badges.map(b => `<span class="badge badge-${b}">${b}</span>`).join("");
  const platsHTML = p.platforms.map(pl => `<span class="plat">${pl}</span>`).join("");
  const tagsHTML = p.tags.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join("");
  const d = disc(p.price, p.oldPrice);

  let priceHTML;
  if (p.price === 0) {
    priceHTML = `<span class="price-free">FREE</span>`;
  } else {
    priceHTML = `
      ${p.oldPrice ? `<span class="price-old">${fmtPrice(p.oldPrice)}</span>` : ""}
      <span class="price-main">${fmtPrice(p.price)}<small>${periodLabel(p.period)}</small></span>`;
  }

  return `
    <article class="product-card" onclick="openModal(${p.id})" tabindex="0"
      onkeydown="if(event.key==='Enter')openModal(${p.id})">
      <div class="card-badges">${badgesHTML}</div>
      ${d ? `<div class="disc-chip">-${d}%</div>` : ""}
      <div class="card-banner" style="background:${p.bannerBg}">
        <div class="card-icon" style="background:${p.iconBg};color:${p.iconColor}">
          <i class="${p.icon}"></i>
        </div>
      </div>
      <div class="card-body">
        <div class="card-top">
          <span class="card-cat">${p.category.replace(/-/g," ")}</span>
          <div class="card-plats">${platsHTML}</div>
        </div>
        <h3 class="card-name">${p.name}</h3>
        <p class="card-tagline">${p.tagline}</p>
        <div class="card-tags">${tagsHTML}</div>
        <div class="card-rating">
          <span class="stars">${stars(p.rating)}</span>
          <span class="r-num">${p.rating}</span>
          <span class="r-cnt">(${fmtNum(p.reviews)})</span>
        </div>
      </div>
      <div class="card-footer">
        <div>${priceHTML}</div>
        <button class="add-btn" onclick="event.stopPropagation();addToCart(${p.id})">
          <i class="fa-solid fa-cart-plus"></i> Add
        </button>
      </div>
    </article>`;
}

// ─────────────────────────────────────────────────────
//  FEATURED STRIP
// ─────────────────────────────────────────────────────
function renderFeatured() {
  const p = products.find(x => x.featured);
  if (!p) return;
  const d = disc(p.price, p.oldPrice);
  document.getElementById("featuredStrip").innerHTML = `
    <div class="featured-card" style="background:${p.bannerBg}">
      <div class="featured-left">
        <div class="featured-icon" style="background:${p.iconBg};color:${p.iconColor}">
          <i class="${p.icon}"></i>
        </div>
      </div>
      <div class="featured-body">
        <div class="featured-label"><i class="fa-solid fa-fire"></i> Editor's Pick — Best Seller</div>
        <h2 class="featured-name">${p.name}</h2>
        <p class="featured-desc">${p.tagline} — ${p.description.split(".")[0]}.</p>
        <div class="featured-meta">
          <span class="feat-stars">${stars(p.rating)}</span>
          <span class="feat-rating">${p.rating}</span>
          <span class="feat-reviews">(${fmtNum(p.reviews)} reviews)</span>
          <div class="feat-platforms">${p.platforms.map(pl => `<span class="feat-platform">${pl}</span>`).join("")}</div>
        </div>
      </div>
      <div class="featured-price-block">
        ${d ? `<span class="feat-disc">-${d}% OFF</span>` : ""}
        ${p.oldPrice ? `<span class="feat-old">${fmtPrice(p.oldPrice)}</span>` : ""}
        <span class="feat-new">${fmtPrice(p.price)}<small>${periodLabel(p.period)}</small></span>
        <button class="btn-primary" onclick="addToCart(${p.id})">
          <i class="fa-solid fa-cart-plus"></i> Add to Cart
        </button>
        <button class="btn-outline" style="font-size:13px;padding:9px 18px" onclick="openModal(${p.id})">
          View Details
        </button>
      </div>
    </div>`;
}

// ─────────────────────────────────────────────────────
//  FILTER + SORT
// ─────────────────────────────────────────────────────
function filterByCategory(cat) {
  currentFilter = cat;
  document.querySelectorAll(".cat-pill").forEach(b => b.classList.toggle("active", b.dataset.cat === cat));
  applyAll();
  document.getElementById("products").scrollIntoView({ behavior: "smooth", block: "start" });
}

function sortProducts() {
  currentSort = document.getElementById("sortSelect").value;
  applyAll();
}

function applyAll() {
  let list = products.filter(p => {
    const matchCat = currentFilter === "all" || p.category === currentFilter;
    const q = searchQuery.toLowerCase();
    const matchQ = !q
      || p.name.toLowerCase().includes(q)
      || p.tagline.toLowerCase().includes(q)
      || p.description.toLowerCase().includes(q)
      || p.tags.some(t => t.toLowerCase().includes(q))
      || p.category.includes(q);
    return matchCat && matchQ;
  });

  switch (currentSort) {
    case "price-asc":  list.sort((a, b) => a.price - b.price); break;
    case "price-desc": list.sort((a, b) => b.price - a.price); break;
    case "rating":     list.sort((a, b) => b.rating - a.rating); break;
    case "newest":     list.sort((a, b) => (b.badges.includes("new") ? 1 : 0) - (a.badges.includes("new") ? 1 : 0)); break;
    default: break;
  }

  renderProducts(list);
}

document.getElementById("globalSearch").addEventListener("input", function () {
  searchQuery = this.value;
  applyAll();
});

// ─────────────────────────────────────────────────────
//  VIEW TOGGLE
// ─────────────────────────────────────────────────────
function setView(mode) {
  viewMode = mode;
  const grid = document.getElementById("productsGrid");
  grid.classList.toggle("list-view", mode === "list");
  document.getElementById("gridViewBtn").classList.toggle("active", mode === "grid");
  document.getElementById("listViewBtn").classList.toggle("active", mode === "list");
}

// ─────────────────────────────────────────────────────
//  CART
// ─────────────────────────────────────────────────────
function addToCart(id) {
  const p = products[id];
  if (cart.find(i => i.id === id)) {
    showToast(`${p.name} is already in your cart.`, true);
    return;
  }
  cart.push(p);
  updateCartCount();
  showToast(`${p.name} added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartCount();
  renderCartItems();
}

function updateCartCount() {
  document.getElementById("cartCount").textContent = cart.length;
  document.getElementById("cartItemCount").textContent = cart.length + " item" + (cart.length !== 1 ? "s" : "");
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
    el.innerHTML = `
      <div class="cart-empty">
        <i class="fa-solid fa-box-open"></i>
        <p>Your cart is empty</p>
        <button class="btn-primary" onclick="closeCart()" style="margin-top:12px;padding:9px 20px;font-size:13px">Browse Products</button>
      </div>`;
    footer.style.display = "none";
    return;
  }

  footer.style.display = "block";
  let total = 0, saved = 0;

  el.innerHTML = cart.map(p => {
    total += p.price;
    if (p.oldPrice) saved += p.oldPrice - p.price;
    return `
      <div class="cart-item">
        <div class="ci-icon" style="background:${p.iconBg};color:${p.iconColor}">
          <i class="${p.icon}"></i>
        </div>
        <div class="ci-info">
          <div class="ci-name">${p.name}</div>
          <div class="ci-price">${p.price === 0 ? "FREE" : fmtPrice(p.price) + periodLabel(p.period)}</div>
        </div>
        <button class="ci-rm" onclick="removeFromCart(${p.id})" title="Remove"><i class="fa-solid fa-xmark"></i></button>
      </div>`;
  }).join("");

  const savingsEl = document.getElementById("cartSavings");
  if (saved > 0) {
    savingsEl.innerHTML = `<i class="fa-solid fa-tag"></i> You're saving ${fmtPrice(saved)} with current discounts!`;
    savingsEl.style.display = "flex";
  } else {
    savingsEl.style.display = "none";
  }

  document.getElementById("cartTotal").textContent = "$" + total.toFixed(2);
}

document.getElementById("cartBtn").addEventListener("click", openCart);

// ─────────────────────────────────────────────────────
//  MODAL
// ─────────────────────────────────────────────────────
function openModal(id) {
  const p = products[id];
  const d = disc(p.price, p.oldPrice);

  const feats = p.features.map(f => `
    <div class="modal-feat">
      <i class="fa-solid fa-circle-check"></i>
      <span>${f}</span>
    </div>`).join("");

  const chips = [
    ...p.badges.map(b => `<span class="badge badge-${b}">${b}</span>`),
    ...p.platforms.map(pl => `<span class="plat" style="font-size:12px">${pl}</span>`),
    ...(d ? [`<span class="badge badge-sale">-${d}% OFF</span>`] : [])
  ].join("");

  document.getElementById("modalContent").innerHTML = `
    <div class="modal-hero" style="background:${p.bannerBg}">
      <div class="modal-hero-icon" style="background:${p.iconBg};color:${p.iconColor}">
        <i class="${p.icon}"></i>
      </div>
    </div>
    <div class="modal-body">
      <div class="modal-chips">${chips}</div>
      <h2 class="modal-name">${p.name}</h2>
      <p class="modal-tagline">${p.tagline}</p>
      <div class="modal-rating">
        <span class="stars">${stars(p.rating)}</span>
        <span class="r-num" style="font-size:17px;font-weight:700">${p.rating}</span>
        <span class="r-cnt">(${fmtNum(p.reviews)} verified reviews)</span>
      </div>
      <p class="modal-desc">${p.description}</p>
      <p class="modal-feat-title">Everything included:</p>
      <div class="modal-feats">${feats}</div>
      <div class="modal-pricing">
        <div>
          <div class="mp-label">Your price</div>
          <div class="mp-price">
            ${p.price === 0
              ? '<span style="color:var(--green);font-size:28px">FREE</span>'
              : fmtPrice(p.price) + `<small>${periodLabel(p.period)}</small>`}
          </div>
          ${p.oldPrice ? `<div class="mp-old">Regular price: ${fmtPrice(p.oldPrice)}</div>` : ""}
        </div>
        <div class="modal-btns">
          <button class="btn-primary" onclick="addToCart(${p.id});closeModal()">
            <i class="fa-solid fa-cart-plus"></i> Add to Cart
          </button>
          <button class="btn-outline" style="padding:10px 18px;font-size:13px" onclick="showToast('Demo coming soon!')">
            <i class="fa-solid fa-play"></i> Watch Demo
          </button>
        </div>
      </div>
    </div>`;

  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

// ─────────────────────────────────────────────────────
//  COUNT-UP ANIMATION
// ─────────────────────────────────────────────────────
function animateCountUp() {
  document.querySelectorAll(".count-up").forEach(el => {
    const target = +el.dataset.target;
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      if (target >= 10000) {
        el.textContent = (current / 1e6).toFixed(1) + "M+";
      } else {
        el.textContent = Math.floor(current) + (el.dataset.target >= 100 ? "+" : "");
      }
      if (current >= target) clearInterval(timer);
    }, 16);
  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { animateCountUp(); observer.disconnect(); } });
}, { threshold: 0.3 });
const proofSection = document.querySelector(".proof-section");
if (proofSection) observer.observe(proofSection);

// ─────────────────────────────────────────────────────
//  NAVBAR SCROLL
// ─────────────────────────────────────────────────────
window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 50);
});

// ─────────────────────────────────────────────────────
//  ESCAPE KEY
// ─────────────────────────────────────────────────────
document.addEventListener("keydown", e => {
  if (e.key === "Escape") { closeModal(); closeCart(); }
});

// ─────────────────────────────────────────────────────
//  NEWSLETTER FORM
// ─────────────────────────────────────────────────────
function nlSubmit(e) {
  e.preventDefault();
  showToast("You're subscribed! Check your inbox for a welcome deal.");
  e.target.reset();
  return false;
}

// ─────────────────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────────────────
renderFeatured();
renderProducts(products);
