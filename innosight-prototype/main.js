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
      <p style="margin-top:32px;font-size:0.7rem;color:var(--text-muted)">Vantage v1.0 · Institutional Innovation Intelligence</p>
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
          <button class="topbar-btn" title="Notifications" onclick="window.vantageShowNotifications()">${icon('bell', 18)}<span class="dot"></span></button>
          <button class="topbar-btn" title="Settings" onclick="window.vantageShowSettings()">${icon('settings', 18)}</button>
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

// ── NOTIFICATIONS PANEL ──
window.vantageShowNotifications = function () {
  const { showModal } = window.vantageUI;
  showModal('Notifications', `
    <div style="display:flex;flex-direction:column;gap:10px">
      ${[
      { title: 'SIH 2025 Winner Detected', desc: 'Team NeuralForge won 2nd place', time: '2h ago', color: '#f59e0b' },
      { title: 'Alumni Funding Round', desc: 'Vikram Patel raised 2.5Cr Seed', time: '4h ago', color: '#10b981' },
      { title: 'GitHub Milestone — 100+ Stars', desc: 'DriftDetect ML Toolkit crossed 100 stars', time: '6h ago', color: '#8b5cf6' },
      { title: '3 Pending Approvals', desc: 'Review new startup registrations', time: '1d ago', color: '#3b82f6' },
      { title: 'Stall Alert — MediTrack AI', desc: 'No activity for 48 days', time: '1d ago', color: '#ef4444' },
    ].map(n => `<div style="display:flex;align-items:start;gap:12px;padding:12px;background:var(--glass-bg);border-radius:var(--radius-sm);border:1px solid var(--border)">
        <div style="width:8px;height:8px;border-radius:50%;background:${n.color};margin-top:6px;flex-shrink:0"></div>
        <div style="flex:1"><div style="font-weight:600;font-size:0.85rem">${n.title}</div><div style="font-size:0.75rem;color:var(--text-secondary)">${n.desc}</div><div style="font-size:0.65rem;color:var(--text-muted);margin-top:2px">${n.time}</div></div>
      </div>`).join('')}
    </div>
  `, [{ label: 'Mark All Read', variant: 'primary', action: 'markAllRead' }, { label: 'Close', variant: 'secondary', action: 'close' }]);
  initLucide();
};

// ── SETTINGS MODAL ──
window.vantageShowSettings = function () {
  const { showModal } = window.vantageUI;
  showModal('Settings', `
    <div style="display:flex;flex-direction:column;gap:16px">
      <div style="font-weight:600;font-size:0.9rem;color:var(--accent-light)">Preferences</div>
      ${[
      ['Email Notifications', true],
      ['Signal Alerts', true],
      ['Weekly Digest', false],
      ['Auto-generate Reports', true],
      ['Show on Leaderboard', true],
    ].map(([label, on]) => `<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border)">
        <span style="font-size:0.85rem">${label}</span>
        <button class="btn btn-sm ${on ? 'btn-primary' : 'btn-secondary'}" onclick="this.classList.toggle('btn-primary');this.classList.toggle('btn-secondary');this.textContent=this.textContent==='ON'?'OFF':'ON'">${on ? 'ON' : 'OFF'}</button>
      </div>`).join('')}
      <div style="font-weight:600;font-size:0.9rem;color:var(--accent-light);margin-top:8px">Account</div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-sm btn-secondary" onclick="window.vantageUI.showToast('Profile updated','success')">Save Changes</button>
        <button class="btn btn-sm btn-ghost" onclick="window.vantageUI.showToast('Changes discarded','info')">Reset Defaults</button>
      </div>
    </div>
  `, [{ label: 'Close', variant: 'secondary', action: 'close' }]);
  initLucide();
};

// ── EXPOSE ──
window.vantageNavigate = navigate;

