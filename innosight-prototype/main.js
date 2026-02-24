// ============================================================
// Vantage — Main App (Router, Layout, Auth, Theme)
// ============================================================
import { renderAdminPage } from './admin.js';
import { renderPublicPage } from './public.js';
import { icon, initLucide } from './components.js';

let currentRole = null;

// ── THEME ──
function getTheme() { return localStorage.getItem('vantage-theme') || 'dark'; }

function applyTheme(theme) {
  document.body.classList.toggle('light-theme', theme === 'light');
  localStorage.setItem('vantage-theme', theme);
}

function toggleTheme() {
  const next = getTheme() === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  // re-render toggle buttons
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.innerHTML = next === 'dark'
      ? `${icon('moon', 15)} Dark`
      : `${icon('sun', 15)} Light`;
    initLucide();
  });
}

// Apply saved theme on load
applyTheme(getTheme());
window.toggleTheme = toggleTheme;

function themeToggleHTML() {
  const t = getTheme();
  return `<button class="theme-toggle" onclick="toggleTheme()">${icon(t === 'dark' ? 'moon' : 'sun', 15)} ${t === 'dark' ? 'Dark' : 'Light'}</button>`;
}

// ── ROUTER ──
function navigate(path) { window.location.hash = path; }

function handleRoute() {
  const hash = window.location.hash.slice(1) || '/login';
  const app = document.getElementById('app');

  if (hash === '/login' || hash === '/') {
    currentRole = null;
    app.innerHTML = renderLogin();
    attachLoginHandlers();
    initLucide();
    return;
  }

  if (hash.startsWith('/admin')) {
    currentRole = 'admin';
    const page = hash.replace('/admin/', '') || 'dashboard';
    app.innerHTML = adminLayout(page);
    renderAdminPage(page);
    initLucide();
    return;
  }

  if (hash.startsWith('/public')) {
    currentRole = 'public';
    const page = hash.replace('/public/', '') || 'dashboard';
    app.innerHTML = publicLayout(page);
    renderPublicPage(page);
    initLucide();
    return;
  }

  navigate('/login');
}

window.addEventListener('hashchange', handleRoute);
window.addEventListener('DOMContentLoaded', handleRoute);

// ── LOGIN PAGE ──
function renderLogin() {
  return `<div class="login-page">
    <div class="login-bg"></div>
    <div class="login-grid"></div>
    <div class="login-container animate-scale">
      <div style="position:absolute;top:24px;right:24px">${themeToggleHTML()}</div>
      <div class="login-logo">Vantage</div>
      <p class="login-subtitle">Institutional Innovation Intelligence Platform<br>
        <span class="text-xs text-muted">See your ecosystem. Without asking anyone.</span>
      </p>
      <div class="login-roles">
        <div class="login-role-card" id="login-admin">
          <span class="login-role-icon">${icon('shield', 36)}</span>
          <div class="login-role-title">Admin Portal</div>
          <div class="login-role-desc">Coordinator · Incubation · Institution — Full ecosystem control</div>
        </div>
        <div class="login-role-card" id="login-public">
          <span class="login-role-icon">${icon('globe', 36)}</span>
          <div class="login-role-title">Public Portal</div>
          <div class="login-role-desc">Student · Alumni · Visitor · Investor — Explore & connect</div>
        </div>
      </div>
      <p style="margin-top:32px;font-size:0.7rem;color:var(--text-muted)">Prototype v0.1 · AlphaBuilders · Hackathon 2025</p>
    </div>
  </div>`;
}

function attachLoginHandlers() {
  document.getElementById('login-admin')?.addEventListener('click', () => navigate('/admin/dashboard'));
  document.getElementById('login-public')?.addEventListener('click', () => navigate('/public/dashboard'));
}

// ── ADMIN LAYOUT ──
const adminNavItems = [
  {
    section: 'Intelligence', items: [
      { id: 'dashboard', lucide: 'radio', label: 'Intelligence Feed', badge: 5 },
      { id: 'startups', lucide: 'rocket', label: 'Startup Portfolio' },
      { id: 'mentors', lucide: 'users', label: 'Mentor & Investors' },
      { id: 'tags', lucide: 'brain', label: 'Tag Discovery', badge: null },
    ]
  },
  {
    section: 'Operations', items: [
      { id: 'approvals', lucide: 'check-circle', label: 'Approvals', badge: 6 },
      { id: 'reports', lucide: 'bar-chart-3', label: 'Reports & Analytics' },
      { id: 'challenges', lucide: 'building-2', label: 'Industry Challenges' },
      { id: 'users', lucide: 'user-cog', label: 'User Management' },
    ]
  },
];

const pageTitles = {
  dashboard: 'Intelligence Feed',
  startups: 'Startup Portfolio',
  mentors: 'Mentor & Investor Pipeline',
  tags: 'Tag Discovery Engine',
  approvals: 'Approvals & Recommendations',
  reports: 'Reports & Analytics',
  challenges: 'Industry Challenges',
  users: 'User & Access Control',
};

function adminLayout(activePage) {
  return `<div class="admin-layout">
    <aside class="sidebar">
      <div class="sidebar-brand">
        <h1>Vantage</h1>
        <span>Innovation Intelligence</span>
      </div>
      <nav class="sidebar-nav">
        ${adminNavItems.map(sec => `
          <div class="sidebar-section">
            <div class="sidebar-section-title">${sec.section}</div>
            ${sec.items.map(it => `
              <a class="nav-item ${it.id === activePage ? 'active' : ''}" href="#/admin/${it.id}">
                <span class="nav-icon">${icon(it.lucide, 18)}</span>
                ${it.label}
                ${it.badge ? `<span class="nav-badge">${it.badge}</span>` : ''}
              </a>
            `).join('')}
          </div>
        `).join('')}
      </nav>
      <div class="sidebar-footer">
        <div class="sidebar-user" onclick="window.location.hash='/login'">
          <div class="sidebar-avatar">DR</div>
          <div class="sidebar-user-info">
            <div class="sidebar-user-name">Dr. Ramesh K.</div>
            <div class="sidebar-user-role">Innovation Coordinator</div>
          </div>
        </div>
      </div>
    </aside>
    <div class="main-area">
      <header class="topbar">
        <div class="topbar-left">
          <div class="topbar-title">${pageTitles[activePage] || 'Dashboard'}</div>
        </div>
        <div class="topbar-right">
          ${themeToggleHTML()}
          <button class="topbar-btn" title="Notifications">${icon('bell', 18)}<span class="dot"></span></button>
          <button class="topbar-btn" title="Settings">${icon('settings', 18)}</button>
          <button class="topbar-btn" title="Sign Out" onclick="window.location.hash='/login'">${icon('log-out', 18)}</button>
        </div>
      </header>
      <main class="content" id="page-content"></main>
    </div>
  </div>`;
}

// ── PUBLIC LAYOUT ──
const publicNavLinks = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'explorer', label: 'Startups' },
  { id: 'network', label: 'Network' },
  { id: 'opportunities', label: 'Opportunities' },
  { id: 'profile', label: 'Profile' },
  { id: 'showcase', label: 'Showcase' },
  { id: 'apply', label: 'Apply' },
];

function publicLayout(activePage) {
  return `<div class="public-layout">
    <nav class="public-nav">
      <a class="public-nav-brand" href="#/public/dashboard">Vantage</a>
      <div class="public-nav-links">
        ${publicNavLinks.map(l => `
          <a class="public-nav-link ${l.id === activePage ? 'active' : ''}" href="#/public/${l.id}">${l.label}</a>
        `).join('')}
      </div>
      <div class="public-nav-actions">
        ${themeToggleHTML()}
        <button class="btn btn-sm btn-secondary" onclick="window.location.hash='/login'">Switch Role</button>
      </div>
    </nav>
    <main class="public-content" id="page-content"></main>
  </div>`;
}

// ── EXPOSE ──
window.vantageNavigate = navigate;
