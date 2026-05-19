// ============================================================
//  MAIN.JS — Renders everything from config.js
//  You shouldn't need to edit this file.
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

  // ── Hero ──────────────────────────────────────────────────
  setText("hero-availability", CONFIG.hero.availability);
  setText("hero-headline-1",   CONFIG.hero.headline1);
  setText("hero-headline-2",   CONFIG.hero.headline2);
  setText("hero-sub",          CONFIG.hero.sub);

  const statsEl = document.querySelector(".hero-stats");
  CONFIG.stats.forEach(s => {
    statsEl.innerHTML += `<div class="stat"><div class="stat-val">${s.value}</div><div class="stat-label">${s.label}</div></div>`;
  });

  // ── About ─────────────────────────────────────────────────
  setText("about-title",        CONFIG.about.title);
  setText("about-body",         CONFIG.about.body);
  setText("about-body2",        CONFIG.about.body2);
  setText("about-availability", CONFIG.about.availability);
  setText("about-timezone",     CONFIG.about.timezone);
  setText("about-discord",      CONFIG.about.discord);

  // ── Experience ────────────────────────────────────────────
  const expGrid = document.getElementById("exp-grid");
  CONFIG.experience.forEach(e => {
    expGrid.innerHTML += `
      <div class="exp-card">
        <div class="exp-top">
          <span class="exp-num">${e.number}</span>
          <span class="exp-icon">${e.icon}</span>
        </div>
        <div class="exp-tag">${e.tag}</div>
        <h3 class="exp-title">${e.title}</h3>
        <p class="exp-body">${e.body}</p>
        <div class="exp-tags">
          ${e.tags.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>`;
  });

  // ── Positions ─────────────────────────────────────────────
  const current  = CONFIG.positions.filter(p => p.status === "current");
  const previous = CONFIG.positions.filter(p => p.status !== "current");

  setText("count-current",  current.length);
  setText("count-previous", previous.length);

  renderPositions("current");

  // ── Skills ────────────────────────────────────────────────
  const skillsGrid = document.getElementById("skills-grid");
  CONFIG.skills.forEach(s => {
    skillsGrid.innerHTML += `
      <div class="skill-card">
        <div class="skill-icon">${s.icon}</div>
        <h3 class="skill-title">${s.title}</h3>
        <ul class="skill-list">
          ${s.items.map(i => `<li>${i}</li>`).join("")}
        </ul>
      </div>`;
  });

  // ── Approach ──────────────────────────────────────────────
  const approachGrid = document.getElementById("approach-grid");
  CONFIG.approach.forEach(a => {
    approachGrid.innerHTML += `
      <div class="approach-card">
        <div class="approach-num">${a.number}</div>
        <h3 class="approach-title">${a.title}</h3>
        <p class="approach-body">${a.body}</p>
      </div>`;
  });

  // ── Contact ───────────────────────────────────────────────
  setText("contact-title", CONFIG.contact.title);
  setText("contact-sub",   CONFIG.contact.sub);

  const contactCards = document.getElementById("contact-cards");
  CONFIG.contact.cards.forEach(c => {
    contactCards.innerHTML += `
      <div class="contact-card">
        <div class="contact-icon">${c.icon}</div>
        <div class="contact-label">${c.label}</div>
        <div class="contact-value">${c.value}</div>
      </div>`;
  });

  // ── Footer ────────────────────────────────────────────────
  setText("footer-copy", CONFIG.footer.copy);

  // ── Nav scroll effect ─────────────────────────────────────
  const nav = document.getElementById("nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  });

  // ── Hamburger ─────────────────────────────────────────────
  document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("mobile-menu").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("open");
  });

  // ── Intersection animations ───────────────────────────────
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".exp-card, .skill-card, .approach-card, .pos-card, .contact-card, .about-grid, .aside-block")
    .forEach(el => observer.observe(el));

});

// ── Helpers ───────────────────────────────────────────────
function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

function renderPositions(tab) {
  const grid = document.getElementById("positions-grid");
  const list = tab === "current"
    ? CONFIG.positions.filter(p => p.status === "current")
    : CONFIG.positions.filter(p => p.status !== "current");

  grid.innerHTML = list.map(p => `
    <div class="pos-card visible">
      <div class="pos-header">
        <div>
          <div class="pos-name">${p.name}</div>
          <div class="pos-role">${p.role}</div>
        </div>
        <span class="pos-badge ${p.status}">${capitalize(p.status)}</span>
      </div>
      <div class="pos-members">${p.members}</div>
      <p class="pos-desc">${p.desc}</p>
    </div>`).join("");

  // re-observe new cards
  setTimeout(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } });
    }, { threshold: 0.05 });
    document.querySelectorAll(".pos-card").forEach(el => observer.observe(el));
  }, 50);
}

function switchTab(tab, btn) {
  document.querySelectorAll(".pos-tab").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderPositions(tab);
}

function closeMobile() {
  document.getElementById("mobile-menu").classList.remove("open");
  document.getElementById("hamburger").classList.remove("open");
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
