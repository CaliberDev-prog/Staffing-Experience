// ============================================================
//  CALIBER SITE CONFIG
//  Edit everything here — no need to touch index.html or main.js
// ============================================================

const CONFIG = {

  // ── Hero ─────────────────────────────────────────────────
  hero: {
    availability: "Available for staff positions",
    headline1: "Community",
    headline2: "Management.",
    sub: "Three years of hands-on experience shaping calm, well-run online communities.",
  },

  // ── Stats (shown in hero) ─────────────────────────────────
  stats: [
    { value: "3+",   label: "Years Experience" },
    { value: "22+",  label: "Servers Managed"  },
    { value: "80+",  label: "Staff Trained"    },
    { value: "94K+", label: "Largest Community"},
  ],

  // ── About ─────────────────────────────────────────────────
  about: {
    title: "Meet Caliber.",
    body: "I'm Dylan — a 16-year-old community manager with 3+ years of experience. I started learning server operations in 2020 as a helper, gradually working my way through every tier of staff and into management.",
    body2: "I'm passionate about helping communities grow while creating positive experiences for members and staff. I stay calm and professional in challenging situations, and I believe no rank should be used for discrimination — everyone deserves respect.",
    availability: "20–30 hrs / week",
    timezone: "United States (EST)",
    discord: "x_caliber41",
  },

  // ── Experience cards ──────────────────────────────────────
  experience: [
    {
      number: "01",
      tag: "Helper & Moderator",
      title: "Moderation",
      body: "Started as a helper and learned the importance of professionalism and fairness. I seek solutions without letting emotions drive decisions — de-escalating and finding middle ground regardless of rank.",
      tags: ["General Support", "Chat Moderation", "Rule Enforcement", "Community Engagement"],
      icon: "🛡️",
    },
    {
      number: "02",
      tag: "Manager & Head Admin",
      title: "Management & Leadership",
      body: "As a Manager and Head Administrator I focus on building structure and accountability — staff handbooks, performance check-ins, and team coordination. Equal standards for everyone, with clear feedback and support.",
      tags: ["Documentation", "Staff Meetings", "Task Coordination", "Team Communication"],
      icon: "👑",
    },
    {
      number: "03",
      tag: "Intermediate",
      title: "Development & Technical",
      body: "I bridge technical teams and community management through plugin testing, configuration, and system optimization. Proficient with monitoring commands and evidence recording.",
      tags: ["Plugin Testing", "Documentation", "Team Coordination", "System Optimization"],
      icon: "⚙️",
    },
    {
      number: "04",
      tag: "Writing & Reporting",
      title: "Communication",
      body: "Clear communication is essential. I create professional documents, public announcements, and detailed reports while adapting tone to fit the situation.",
      tags: ["Professional Documents", "Public Announcements", "Meeting Reports", "Tone Adaptation"],
      icon: "✍️",
    },
  ],

  // ── Positions ─────────────────────────────────────────────
  // status options: "current" | "resigned" | "shutdown"
  positions: [
    {
      name: "SMPFinder",
      status: "current",
      role: "Moderator",
      members: "47,111 Members",
      desc: "Ticket management, chat moderation, and rule enforcement.",
    },
    {
      name: "Dylan's Auto Detailing",
      status: "current",
      role: "Owner / CEO",
      members: "100+ Clients",
      desc: "Handling customer interactions, scheduling, pricing, and marketing.",
    },
    {
      name: "AndysoIam",
      status: "resigned",
      role: "Helper / Moderator",
      members: "94,000 Members",
      desc: "Member support, in-game moderation, and report tickets.",
    },
    {
      name: "ShadySMP",
      status: "current",
      role: "Admin / Supervisor",
      members: "400 Members",
      desc: "Overseeing staff team, resolving player conflicts, and server organization.",
    },
    {
      name: "NoMercy.rip",
      status: "resigned",
      role: "Community Manager",
      members: "148 Members",
      desc: "Managing development, staff teams, gameplay planning, and community decisions.",
    },
    {
      name: "Techbyte Hosting",
      status: "resigned",
      role: "Media / Staff",
      members: "400 Members",
      desc: "Creating promotional videos, customer support, and ticket management.",
    },
    {
      name: "HyperKits",
      status: "shutdown",
      role: "Trial Developer / Jr. Admin",
      members: "650 Members",
      desc: "Basic development tasks, server setup, and player support.",
    },
    {
      name: "HavenVault",
      status: "shutdown",
      role: "Owner",
      members: "300 Members",
      desc: "Server management, staff mentorship, and event coordination.",
    },
    {
      name: "ShatterMC",
      status: "shutdown",
      role: "Owner",
      members: "270 Members",
      desc: "Server development, staff management, and community branding.",
    },
    {
      name: "DigCompany",
      status: "shutdown",
      role: "Admin",
      members: "300 Members",
      desc: "Ticket handling, chat moderation, and punishment management.",
    },
    {
      name: "DuskMines",
      status: "shutdown",
      role: "Owner",
      members: "100 Members",
      desc: "Server creation, staff management, and community oversight.",
    },
    {
      name: "Berrry Host",
      status: "shutdown",
      role: "Staff",
      members: "240 Members",
      desc: "Ticket handling and general support.",
    },
  ],

  // ── Skills ────────────────────────────────────────────────
  skills: [
    {
      icon: "🛡️",
      title: "Moderation Excellence",
      items: [
        "Chat safety and rule enforcement",
        "Evidence-based decision making",
        "Conflict de-escalation",
        "Staff training and mentorship",
        "Ticket and report handling",
        "Anti-cheat log analysis",
      ],
    },
    {
      icon: "👑",
      title: "Leadership & Management",
      items: [
        "Staff handbook creation",
        "Performance reviews and feedback",
        "Task coordination",
        "Meeting facilitation",
        "Crisis management",
        "Team development",
      ],
    },
    {
      icon: "💻",
      title: "Technical Skills",
      items: [
        "Plugin configuration and testing",
        "System documentation",
        "Backend optimization",
        "Cross-team coordination",
        "Evidence recording",
        "Command proficiency",
      ],
    },
    {
      icon: "✍️",
      title: "Communication & Soft Skills",
      items: [
        "Professional writing",
        "Public announcements",
        "Detailed reporting",
        "Adaptive communication",
        "Customer service",
        "Time management",
      ],
    },
  ],

  // ── Approach ──────────────────────────────────────────────
  approach: [
    {
      number: "01",
      title: "Fairness & Accountability",
      body: "Rules are enforced consistently for everyone — no one is above them, including staff. I take accountability and document everything transparently.",
    },
    {
      number: "02",
      title: "Evidence-Based Decisions",
      body: "I gather proof through screenshots, videos, and logs before acting. Accuracy matters more than speed — but I still move efficiently.",
    },
    {
      number: "03",
      title: "Priority Management",
      body: "I assess situations critically. Global issues get immediate attention. I handle multiple crises while staying calm and organized.",
    },
    {
      number: "04",
      title: "Professional Under Pressure",
      body: "I stay professional during conflicts, raids, or personal attacks. Emotions don't drive my decisions — protecting the community does.",
    },
    {
      number: "05",
      title: "Continuous Growth",
      body: "I take feedback seriously and learn from mistakes. The goal is always to improve and serve the community better.",
    },
    {
      number: "06",
      title: "Community First",
      body: "I don't apply for status — I apply to help communities thrive. I care about positive environments where everyone feels safe.",
    },
  ],

  // ── Contact ───────────────────────────────────────────────
  contact: {
    title: "Let's work together.",
    sub: "The fastest way to reach me is on Discord. I typically respond within a few hours during EST business hours.",
    cards: [
      { label: "Discord",   value: "x_caliber41",    icon: "💬" },
      { label: "Minecraft", value: "Lonleydog2431",   icon: "🎮" },
      { label: "Timezone",  value: "EST (UTC-5)",     icon: "🕐" },
      { label: "Hours",     value: "20–30 / week",    icon: "📅" },
    ],
  },

  // ── Footer ────────────────────────────────────────────────
  footer: {
    copy: "© 2026 Caliber — Community Management. All rights reserved.",
  },

};
