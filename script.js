/* ═══════════════════════════════════════════════════════
   SoftVault Marketplace — script.js
   24 original software products across 9 categories
═══════════════════════════════════════════════════════ */

// ─────────────────────────────────────────────────────
//  PRODUCT DATA  (all original, inspired by top sellers)
// ─────────────────────────────────────────────────────
const products = [

  /* ══ DATA RECOVERY ══════════════════════════════════ */
  {
    id: 0,
    name: "RecoverX Pro",
    tagline: "Deep-scan data recovery for any drive or device",
    category: "data-recovery",
    platforms: ["Windows", "Mac"],
    icon: "fa-solid fa-hard-drive",
    iconBg: "#0d1e38", iconColor: "#60a5fa",
    bannerBg: "linear-gradient(135deg,#060f1e 0%,#0d1e38 100%)",
    badges: ["hot", "sale"],
    rating: 4.9, reviews: 142000,
    price: 79, oldPrice: 129, period: "yr",
    featured: true,
    description: "RecoverX Pro uses adaptive multi-pass scan algorithms to recover deleted, formatted, or corrupted files from hard drives, SSDs, USBs, SD cards, and even smartphones. Preview files before recovering — no blind restores.",
    features: [
      "500+ recoverable file formats",
      "Quick Scan & Deep Scan modes",
      "Live file preview before recovery",
      "Encrypted & BitLocker drive support",
      "iOS & Android device recovery",
      "Disk health monitoring (S.M.A.R.T.)",
      "Byte-level disk cloning & imaging",
      "Automatic recovery scheduler"
    ],
    tags: ["Deep Scan", "500+ Formats", "Preview", "Mobile"],
    popular: 99
  },
  {
    id: 1,
    name: "DriveRescue",
    tagline: "RAID array & NAS specialist recovery tool",
    category: "data-recovery",
    platforms: ["Windows", "Mac", "Linux"],
    icon: "fa-solid fa-server",
    iconBg: "#1a1005", iconColor: "#fbbf24",
    bannerBg: "linear-gradient(135deg,#0d0803 0%,#1a1005 100%)",
    badges: ["pro"],
    rating: 4.7, reviews: 38400,
    price: 59, oldPrice: 89, period: "one-time",
    featured: false,
    description: "DriveRescue is purpose-built for complex storage environments. Reconstruct degraded RAID 0/1/5/6/10 arrays, recover from NAS appliances, and access data over a local network. Includes a hex-level disk editor for manual sector inspection.",
    features: [
      "RAID 0/1/5/6/10 reconstruction",
      "NAS & network drive support",
      "Hex editor for manual inspection",
      "Disk image mount & browse",
      "Cross-platform (Win/Mac/Linux)",
      "NTFS, FAT32, exFAT, HFS+, Ext4",
      "Remote recovery over LAN",
      "Unlimited session save & resume"
    ],
    tags: ["RAID", "NAS", "Linux", "Hex Editor"],
    popular: 74
  },
  {
    id: 2,
    name: "PhotoRevive",
    tagline: "Intelligent photo & video file recovery",
    category: "data-recovery",
    platforms: ["Windows", "Mac"],
    icon: "fa-solid fa-images",
    iconBg: "#200a30", iconColor: "#c084fc",
    bannerBg: "linear-gradient(135deg,#130520 0%,#200a30 100%)",
    badges: ["new"],
    rating: 4.8, reviews: 56700,
    price: 49, oldPrice: 79, period: "yr",
    featured: false,
    description: "PhotoRevive is laser-focused on recovering photos and videos. It supports every camera RAW format, drone footage codecs, and action camera files. The gallery-style browser lets you preview thumbnails of all recoverable media before committing to a restore.",
    features: [
      "500+ RAW camera formats",
      "Drone & GoPro footage support",
      "AI-powered corrupted photo repair",
      "Gallery thumbnail browser",
      "HEIC, HEIF, WebP support",
      "Video fragment reconstruction",
      "SD card deep scan",
      "Batch recovery with filters"
    ],
    tags: ["RAW Formats", "Drone", "AI Repair", "Gallery View"],
    popular: 85
  },

  /* ══ AI TOOLS ════════════════════════════════════════ */
  {
    id: 3,
    name: "WordMind AI",
    tagline: "AI writing assistant, grammar fixer & co-pilot",
    category: "ai-tools",
    platforms: ["Web", "Windows", "Mac"],
    icon: "fa-solid fa-wand-magic-sparkles",
    iconBg: "#1a0530", iconColor: "#e879f9",
    bannerBg: "linear-gradient(135deg,#0e0218 0%,#1a0530 100%)",
    badges: ["hot", "ai"],
    rating: 4.9, reviews: 320000,
    price: 14.99, oldPrice: 22, period: "mo",
    featured: false,
    description: "WordMind AI combines a context-aware grammar engine with a full generative writing co-pilot. It understands your writing style, suggests improvements that sound like you, and can draft emails, articles, reports, and social posts from a single prompt.",
    features: [
      "Context-aware grammar & tone correction",
      "AI content generation (GPT-4 class)",
      "Paragraph rewriting & simplification",
      "Plagiarism checker included",
      "Brand voice learning",
      "50+ language support",
      "Chrome & Firefox extensions",
      "Google Docs & Notion integration"
    ],
    tags: ["Grammar", "AI Writer", "Plagiarism Check", "50+ Languages"],
    popular: 97
  },
  {
    id: 4,
    name: "DocuAI",
    tagline: "Chat with any document — PDF, Word, or URL",
    category: "ai-tools",
    platforms: ["Web"],
    icon: "fa-solid fa-file-circle-check",
    iconBg: "#0a2030", iconColor: "#38bdf8",
    bannerBg: "linear-gradient(135deg,#041018 0%,#0a2030 100%)",
    badges: ["new", "ai"],
    rating: 4.8, reviews: 87000,
    price: 19, oldPrice: null, period: "mo",
    featured: false,
    description: "Upload any document — PDF, Word, PowerPoint, CSV, or paste a URL — and chat with it in plain English. DocuAI extracts key insights, answers questions, creates summaries, and generates action items. Perfect for researchers, lawyers, and analysts.",
    features: [
      "Chat with PDFs, Docs, Sheets, URLs",
      "Multi-document cross-referencing",
      "Automatic executive summary",
      "Q&A with source citations",
      "Export chats & insights as PDF",
      "100MB file size limit per upload",
      "Team collaboration workspace",
      "SOC2 Type II compliant"
    ],
    tags: ["PDF Chat", "Summarize", "Cite Sources", "Team Collab"],
    popular: 88
  },
  {
    id: 5,
    name: "ResumeAI",
    tagline: "Build job-winning resumes in minutes with AI",
    category: "ai-tools",
    platforms: ["Web"],
    icon: "fa-solid fa-file-user",
    iconBg: "#0a2818", iconColor: "#34d399",
    bannerBg: "linear-gradient(135deg,#051510 0%,#0a2818 100%)",
    badges: ["popular", "ai"],
    rating: 4.7, reviews: 205000,
    price: 9.99, oldPrice: 19.99, period: "mo",
    featured: false,
    description: "ResumeAI analyzes job descriptions and tailors your resume to pass ATS scanners with the right keywords. Choose from 80+ ATS-friendly templates, get AI-written bullet points, and see your match score before applying. Land more interviews, faster.",
    features: [
      "ATS keyword match scoring",
      "AI-written bullet points",
      "80+ ATS-friendly templates",
      "LinkedIn profile import",
      "Cover letter generator",
      "Job description analyzer",
      "One-click PDF export",
      "Interview prep questions"
    ],
    tags: ["ATS Optimizer", "AI Bullets", "80+ Templates", "Cover Letter"],
    popular: 94
  },

  /* ══ SECURITY ════════════════════════════════════════ */
  {
    id: 6,
    name: "VaultKey",
    tagline: "Zero-knowledge password manager & 2FA vault",
    category: "security",
    platforms: ["Windows", "Mac", "Web"],
    icon: "fa-solid fa-key",
    iconBg: "#08200f", iconColor: "#4ade80",
    bannerBg: "linear-gradient(135deg,#04100a 0%,#08200f 100%)",
    badges: ["popular"],
    rating: 4.8, reviews: 178000,
    price: 2.99, oldPrice: 4.99, period: "mo",
    featured: false,
    description: "VaultKey uses AES-256 + XChaCha20 encryption with a zero-knowledge architecture — your master password never leaves your device. Stores passwords, passkeys, secure notes, credit cards, and 2FA codes. Breached password alerts in real time.",
    features: [
      "AES-256 + XChaCha20 encryption",
      "Zero-knowledge architecture",
      "2FA & passkey storage",
      "Breach monitoring (HaveIBeenPwned)",
      "Password health dashboard",
      "Secure sharing with family/team",
      "Browser extensions for all browsers",
      "Emergency access contacts"
    ],
    tags: ["Zero-Knowledge", "2FA", "Breach Alerts", "Passkeys"],
    popular: 92
  },
  {
    id: 7,
    name: "ShieldVPN",
    tagline: "Private, no-log VPN — 8,000+ servers worldwide",
    category: "security",
    platforms: ["Windows", "Mac"],
    icon: "fa-solid fa-earth-americas",
    iconBg: "#051528", iconColor: "#60a5fa",
    bannerBg: "linear-gradient(135deg,#030d18 0%,#051528 100%)",
    badges: ["sale", "popular"],
    rating: 4.7, reviews: 560000,
    price: 2.49, oldPrice: 9.99, period: "mo",
    featured: false,
    description: "ShieldVPN routes your traffic through 8,000+ servers in 120+ countries using WireGuard and OpenVPN protocols. A strict audited no-logs policy, split tunneling, an automatic kill switch, and built-in tracker & ad blocker keep your browsing private.",
    features: [
      "8,000+ servers in 120+ countries",
      "WireGuard & OpenVPN protocols",
      "Audited no-logs policy",
      "Built-in tracker & ad blocker",
      "Split tunneling per-app",
      "Automatic kill switch",
      "10 simultaneous devices",
      "P2P & streaming optimized servers"
    ],
    tags: ["8000+ Servers", "No Logs", "WireGuard", "Ad Blocker"],
    popular: 95
  },
  {
    id: 8,
    name: "GuardCore",
    tagline: "AI-powered antivirus & real-time ransomware shield",
    category: "security",
    platforms: ["Windows", "Mac"],
    icon: "fa-solid fa-shield-virus",
    iconBg: "#200808", iconColor: "#f87171",
    bannerBg: "linear-gradient(135deg,#100404 0%,#200808 100%)",
    badges: ["hot"],
    rating: 4.6, reviews: 290000,
    price: 29.99, oldPrice: 49.99, period: "yr",
    featured: false,
    description: "GuardCore uses an AI behavioral engine to catch zero-day threats that signature-based tools miss. Ransomware rollback restores files encrypted by an attack within seconds. Includes a hardened browser extension, webcam guard, and microphone monitor.",
    features: [
      "AI behavioral threat detection",
      "Ransomware rollback (instant restore)",
      "Zero-day exploit protection",
      "Webcam & microphone guard",
      "Hardened browser extension",
      "Dark web identity monitoring",
      "Lightweight — <1% CPU overhead",
      "Up to 5 devices per license"
    ],
    tags: ["AI Detection", "Ransomware Rollback", "Zero-Day", "Dark Web"],
    popular: 88
  },

  /* ══ PRODUCTIVITY ════════════════════════════════════ */
  {
    id: 9,
    name: "FlowDesk",
    tagline: "All-in-one project management & team workspace",
    category: "productivity",
    platforms: ["Web", "Windows", "Mac"],
    icon: "fa-solid fa-rocket",
    iconBg: "#100a28", iconColor: "#a78bfa",
    bannerBg: "linear-gradient(135deg,#080518 0%,#100a28 100%)",
    badges: ["popular"],
    rating: 4.8, reviews: 210000,
    price: 12, oldPrice: 18, period: "user/mo",
    featured: false,
    description: "FlowDesk replaces 6 productivity apps with one integrated workspace. Manage tasks on Kanban boards, track time, build wikis, run sprints, and chat — all without switching tabs. AI-powered automations eliminate repetitive work and keep teams in sync.",
    features: [
      "Kanban, List, Gantt & Calendar views",
      "Built-in time tracking",
      "Team wikis & rich docs",
      "AI automation builder",
      "Sprint planning & backlog",
      "Goal & OKR tracking",
      "1,000+ integrations (Slack, GitHub, etc.)",
      "Custom workflows per project"
    ],
    tags: ["Kanban", "Gantt", "AI Automations", "Time Tracking"],
    popular: 91
  },
  {
    id: 10,
    name: "TaskForge",
    tagline: "Smart personal task manager with AI scheduling",
    category: "productivity",
    platforms: ["Web", "Windows", "Mac"],
    icon: "fa-solid fa-list-check",
    iconBg: "#082010", iconColor: "#6ee7b7",
    bannerBg: "linear-gradient(135deg,#040e08 0%,#082010 100%)",
    badges: ["new"],
    rating: 4.7, reviews: 98000,
    price: 8, oldPrice: null, period: "mo",
    featured: false,
    description: "TaskForge uses AI to auto-schedule your to-do list based on deadlines, priorities, and your actual working patterns. Includes a Pomodoro timer, habit tracker, daily review system, and natural language task creation ('meeting Monday at 3pm').",
    features: [
      "AI auto-scheduling engine",
      "Natural language task input",
      "Pomodoro timer built-in",
      "Habit & streak tracker",
      "Daily review & reflection",
      "Calendar sync (Google, Outlook)",
      "Recurring task templates",
      "Focus mode (no distractions)"
    ],
    tags: ["AI Scheduling", "Pomodoro", "Habits", "NLP Input"],
    popular: 83
  },

  /* ══ MEDIA & DESIGN ══════════════════════════════════ */
  {
    id: 11,
    name: "ClipForge",
    tagline: "Professional video editor with AI background removal",
    category: "media",
    platforms: ["Windows", "Mac"],
    icon: "fa-solid fa-clapperboard",
    iconBg: "#1a0820", iconColor: "#d946ef",
    bannerBg: "linear-gradient(135deg,#0d0412 0%,#1a0820 100%)",
    badges: ["hot", "sale"],
    rating: 4.8, reviews: 175000,
    price: 59, oldPrice: 119, period: "one-time",
    featured: false,
    description: "ClipForge delivers a full non-linear editing timeline, color grading tools, Fairlight-style audio mixer, and AI features that used to cost thousands. One-time purchase, no subscription. Export to 4K/8K, H.265, ProRes, and every major format.",
    features: [
      "Multi-track non-linear timeline",
      "AI background removal (real-time)",
      "Color grading with scopes",
      "Audio mixer & noise removal",
      "Motion graphics & titles",
      "4K/8K export — all codecs",
      "Screen recording built-in",
      "One-time license, lifetime updates"
    ],
    tags: ["4K/8K", "AI Background", "Color Grade", "One-time"],
    popular: 89
  },
  {
    id: 12,
    name: "PixelBrush",
    tagline: "Non-destructive photo editor with AI retouching",
    category: "media",
    platforms: ["Windows", "Mac"],
    icon: "fa-solid fa-paintbrush",
    iconBg: "#050f28", iconColor: "#93c5fd",
    bannerBg: "linear-gradient(135deg,#030818 0%,#050f28 100%)",
    badges: ["new"],
    rating: 4.7, reviews: 134000,
    price: 49, oldPrice: 79, period: "yr",
    featured: false,
    description: "PixelBrush is a fully non-destructive photo editor that reads and exports every major RAW format. AI-powered tools include sky replacement, subject masking, skin retouching, and generative fill. Layers, blend modes, and masks work exactly as you'd expect.",
    features: [
      "Non-destructive layer editing",
      "700+ RAW camera format support",
      "AI sky replacement",
      "AI subject & object masking",
      "Generative Fill (AI object creation)",
      "HDR & panoramic merge",
      "Batch export with presets",
      "Lightroom catalog importer"
    ],
    tags: ["RAW Editing", "AI Masking", "Generative Fill", "Layers"],
    popular: 86
  },
  {
    id: 13,
    name: "DesignFlow",
    tagline: "Drag-and-drop design tool for non-designers",
    category: "media",
    platforms: ["Web"],
    icon: "fa-solid fa-palette",
    iconBg: "#200512", iconColor: "#fb7185",
    bannerBg: "linear-gradient(135deg,#10020a 0%,#200512 100%)",
    badges: ["popular"],
    rating: 4.8, reviews: 890000,
    price: 12.99, oldPrice: 19.99, period: "mo",
    featured: false,
    description: "DesignFlow gives everyone design superpowers. Choose from 200,000+ templates, a 150M+ asset library, and AI tools that generate complete designs from text prompts. Built-in brand kit ensures every asset matches your brand colors, fonts, and logo.",
    features: [
      "200,000+ professionally made templates",
      "150M+ stock photos, icons & videos",
      "AI design generation from text",
      "Brand Kit (colors, fonts, logos)",
      "Magic Background Remover",
      "Social media post scheduler",
      "Presentation mode built-in",
      "Team collaboration & approvals"
    ],
    tags: ["200K Templates", "AI Generation", "Brand Kit", "Scheduler"],
    popular: 96
  },

  /* ══ SYSTEM TOOLS ════════════════════════════════════ */
  {
    id: 14,
    name: "CleanCore",
    tagline: "PC optimizer, junk cleaner & startup manager",
    category: "system",
    platforms: ["Windows", "Mac"],
    icon: "fa-solid fa-broom",
    iconBg: "#0f1808", iconColor: "#86efac",
    bannerBg: "linear-gradient(135deg,#070e04 0%,#0f1808 100%)",
    badges: ["popular"],
    rating: 4.5, reviews: 1250000,
    price: 24.99, oldPrice: 39.99, period: "yr",
    featured: false,
    description: "CleanCore finds and removes gigabytes of junk: browser caches, broken registry entries, duplicate files, leftover installers, and log files. The startup manager shows exactly what's slowing your boot. Real-time monitor alerts you when storage drops low.",
    features: [
      "Deep junk file analysis",
      "Registry cleaner & fixer",
      "Startup & background app manager",
      "Duplicate file finder & remover",
      "Browser privacy cleaner",
      "Software uninstaller (leftover remover)",
      "Real-time storage monitor",
      "Scheduled auto-cleaning"
    ],
    tags: ["Registry", "Junk Cleaner", "Duplicates", "Startup"],
    popular: 87
  },
  {
    id: 15,
    name: "DiskMaster",
    tagline: "Advanced partition manager & SSD migration tool",
    category: "system",
    platforms: ["Windows"],
    icon: "fa-solid fa-table-cells-large",
    iconBg: "#1a0e05", iconColor: "#fb923c",
    bannerBg: "linear-gradient(135deg,#0e0703 0%,#1a0e05 100%)",
    badges: ["pro"],
    rating: 4.6, reviews: 42000,
    price: 49, oldPrice: 69, period: "one-time",
    featured: false,
    description: "DiskMaster handles every partition operation without touching your data. Resize, move, merge, split, and convert partitions. Migrate your OS to a new SSD in under 10 minutes. Bootable recovery media lets you manage disks before Windows even starts.",
    features: [
      "Resize & move partitions (no data loss)",
      "OS migration to SSD/NVMe",
      "MBR ↔ GPT conversion",
      "Disk clone & byte-for-byte copy",
      "Partition recovery scanner",
      "Dynamic disk support",
      "Bootable WinPE media creator",
      "Disk benchmark tool"
    ],
    tags: ["SSD Migration", "MBR/GPT", "Clone", "Bootable"],
    popular: 72
  },
  {
    id: 16,
    name: "ScreenCast Pro",
    tagline: "Screen recorder, webcam capture & video trimmer",
    category: "system",
    platforms: ["Windows", "Mac"],
    icon: "fa-solid fa-circle-dot",
    iconBg: "#200808", iconColor: "#f87171",
    bannerBg: "linear-gradient(135deg,#0f0404 0%,#200808 100%)",
    badges: ["new"],
    rating: 4.7, reviews: 67000,
    price: 29, oldPrice: 49, period: "one-time",
    featured: false,
    description: "ScreenCast Pro records your screen, webcam, and all audio sources simultaneously. Instantly trim, annotate, zoom, and add callouts to recordings. Export to MP4, GIF, or WebM and share via a private link in one click — no account required for viewers.",
    features: [
      "Screen + webcam + audio capture",
      "Annotation tools (arrows, highlights)",
      "Zoom & pan while recording",
      "Instant trim & cut editor",
      "Export to MP4, GIF, WebM",
      "Private shareable link upload",
      "Schedule & auto-start recording",
      "Keyboard shortcut customization"
    ],
    tags: ["Screen + Webcam", "Annotate", "GIF Export", "One-click Share"],
    popular: 80
  },

  /* ══ BACKUP ══════════════════════════════════════════ */
  {
    id: 17,
    name: "CloudVault",
    tagline: "Unlimited encrypted cloud backup — set & forget",
    category: "backup",
    platforms: ["Windows", "Mac"],
    icon: "fa-solid fa-cloud-arrow-up",
    iconBg: "#050f25", iconColor: "#7dd3fc",
    bannerBg: "linear-gradient(135deg,#030918 0%,#050f25 100%)",
    badges: ["popular", "sale"],
    rating: 4.7, reviews: 118000,
    price: 7, oldPrice: 12, period: "mo",
    featured: false,
    description: "CloudVault runs silently in the background, continuously backing up everything — including external drives and network shares — to our geo-redundant cloud. AES-256 encryption happens on your device before upload. Restore any file version from the past 1 year.",
    features: [
      "Unlimited storage (computers + externals)",
      "Continuous background backup",
      "AES-256 client-side encryption",
      "1-year version history",
      "External drive & NAS backup",
      "Mobile app for remote access",
      "Drive restore service (USB/HDD shipped)",
      "SOC2 Type II certified"
    ],
    tags: ["Unlimited", "Continuous", "Encrypted", "Version History"],
    popular: 86
  },
  {
    id: 18,
    name: "SnapDisk",
    tagline: "Full disk image backup with ransomware shield",
    category: "backup",
    platforms: ["Windows", "Mac"],
    icon: "fa-solid fa-camera-retro",
    iconBg: "#1a0a02", iconColor: "#fdba74",
    bannerBg: "linear-gradient(135deg,#0e0501 0%,#1a0a02 100%)",
    badges: ["pro"],
    rating: 4.8, reviews: 78000,
    price: 39.99, oldPrice: 59.99, period: "yr",
    featured: false,
    description: "SnapDisk takes full disk images you can restore bare-metal in minutes. Incremental backups after the first run are fast and small. The integrated ransomware shield monitors for unusual encryption activity and rolls back changes before they spread.",
    features: [
      "Full disk image backup",
      "Incremental & differential modes",
      "Bare-metal restore to different hardware",
      "AI ransomware shield (real-time)",
      "Backup to local, NAS, or cloud",
      "Bootable recovery media (USB/ISO)",
      "Disk clone for SSD upgrades",
      "AES-256 backup encryption"
    ],
    tags: ["Disk Image", "Bare-Metal Restore", "Ransomware Shield", "Bootable"],
    popular: 82
  },

  /* ══ PDF & DOCS ══════════════════════════════════════ */
  {
    id: 19,
    name: "DocForge",
    tagline: "All-in-one PDF editor, converter & e-sign platform",
    category: "pdf-docs",
    platforms: ["Windows", "Mac", "Web"],
    icon: "fa-solid fa-file-pdf",
    iconBg: "#200505", iconColor: "#fc8181",
    bannerBg: "linear-gradient(135deg,#100303 0%,#200505 100%)",
    badges: ["popular"],
    rating: 4.7, reviews: 234000,
    price: 7.99, oldPrice: 14.99, period: "mo",
    featured: false,
    description: "DocForge handles every PDF task in one app: edit text and images directly in PDFs, convert to/from Word/Excel/PowerPoint, merge, split, compress, OCR scan, and collect legally-binding e-signatures. No quality loss on conversion.",
    features: [
      "Direct PDF text & image editing",
      "Convert PDF ↔ Word, Excel, PPT",
      "OCR for scanned documents",
      "E-signature collection (legally binding)",
      "Merge, split & compress",
      "Batch processing (100+ files)",
      "Password protection & redaction",
      "AI document summarization"
    ],
    tags: ["Edit PDFs", "OCR", "E-Signature", "Batch Processing"],
    popular: 90
  },

  /* ══ BUSINESS ════════════════════════════════════════ */
  {
    id: 20,
    name: "InvoiceNow",
    tagline: "Smart invoicing, quotes & expense tracker for freelancers",
    category: "business",
    platforms: ["Web", "Windows", "Mac"],
    icon: "fa-solid fa-file-invoice-dollar",
    iconBg: "#062010", iconColor: "#34d399",
    bannerBg: "linear-gradient(135deg,#030e08 0%,#062010 100%)",
    badges: ["popular"],
    rating: 4.8, reviews: 156000,
    price: 9, oldPrice: 15, period: "mo",
    featured: false,
    description: "InvoiceNow is the invoicing tool freelancers actually enjoy using. Create professional invoices in 30 seconds, send automatic payment reminders, track expenses with receipt scanning, and connect your bank to reconcile payments automatically.",
    features: [
      "Professional invoice builder",
      "Automated payment reminders",
      "Receipt scan & expense tracking",
      "Bank account sync & reconciliation",
      "Client portal for online payment",
      "Recurring invoice scheduling",
      "Tax estimation & reports",
      "Multi-currency support (150+)"
    ],
    tags: ["Invoicing", "Expense Tracker", "Bank Sync", "Client Portal"],
    popular: 88
  },
  {
    id: 21,
    name: "RankPilot",
    tagline: "SEO & keyword research tool with competitor analysis",
    category: "business",
    platforms: ["Web"],
    icon: "fa-solid fa-chart-line",
    iconBg: "#051a28", iconColor: "#38bdf8",
    bannerBg: "linear-gradient(135deg,#030d18 0%,#051a28 100%)",
    badges: ["new"],
    rating: 4.6, reviews: 48000,
    price: 29, oldPrice: 49, period: "mo",
    featured: false,
    description: "RankPilot gives you a Semrush-level SEO suite without the enterprise price tag. Research keywords, audit your site, track daily rankings, reverse-engineer competitor strategies, and build backlinks — all in one dashboard refreshed daily.",
    features: [
      "20M+ keyword database",
      "Daily rank tracking (unlimited keywords)",
      "Full site SEO audit",
      "Competitor gap analysis",
      "Backlink research & monitor",
      "Content brief generator",
      "SERP history & trend data",
      "White-label PDF reports"
    ],
    tags: ["Keyword Research", "Rank Tracking", "Site Audit", "Backlinks"],
    popular: 76
  },
  {
    id: 22,
    name: "SocialForge",
    tagline: "Social media scheduler & analytics for every platform",
    category: "business",
    platforms: ["Web"],
    icon: "fa-solid fa-share-nodes",
    iconBg: "#0a0820", iconColor: "#a5b4fc",
    bannerBg: "linear-gradient(135deg,#050412 0%,#0a0820 100%)",
    badges: ["sale"],
    rating: 4.7, reviews: 112000,
    price: 19, oldPrice: 39, period: "mo",
    featured: false,
    description: "SocialForge connects to every major platform — Instagram, TikTok, LinkedIn, X, Facebook, Pinterest, and YouTube — and lets you schedule content, monitor comments, track engagement, and view unified analytics from a single dashboard.",
    features: [
      "10+ platform integrations",
      "Visual content calendar",
      "AI caption & hashtag generator",
      "Best-time-to-post recommendations",
      "Unified inbox for all comments/DMs",
      "Competitor engagement benchmarking",
      "Analytics dashboard & PDF exports",
      "Team approval workflows"
    ],
    tags: ["10+ Platforms", "AI Captions", "Analytics", "Team Workflows"],
    popular: 84
  },
  {
    id: 23,
    name: "MailBlast",
    tagline: "Email marketing automation with drag-and-drop builder",
    category: "business",
    platforms: ["Web"],
    icon: "fa-solid fa-envelope-open-text",
    iconBg: "#200a05", iconColor: "#fca5a5",
    bannerBg: "linear-gradient(135deg,#0f0503 0%,#200a05 100%)",
    badges: ["free"],
    rating: 4.6, reviews: 89000,
    price: 0, oldPrice: null, period: "free-tier",
    featured: false,
    description: "MailBlast's free tier lets you send 10,000 emails/month to 1,000 contacts — no credit card needed. Build stunning email campaigns with a drag-and-drop editor, automate sequences, A/B test subject lines, and track opens, clicks, and revenue in real time.",
    features: [
      "Free up to 1,000 contacts",
      "Drag-and-drop email builder",
      "Marketing automation workflows",
      "A/B testing (subject line, content)",
      "Real-time open & click tracking",
      "E-commerce revenue attribution",
      "Landing page builder",
      "Transactional email API"
    ],
    tags: ["Free Tier", "Drag & Drop", "Automations", "A/B Testing"],
    popular: 91
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

  const total = products.filter(p => {
    if (currentFilter !== "all" && p.category !== currentFilter) return false;
    return true;
  }).length;
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

// Trigger count-up when section enters viewport
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
