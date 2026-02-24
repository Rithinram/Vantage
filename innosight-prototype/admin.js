// ============================================================
// Vantage — Admin Pages (8 pages, emoji-free, Lucide icons)
// ============================================================
import { signals, startups, mentors, investors, tags, approvals, challenges, ecosystemStats, graphNodes } from './data.js';
import { icon, initLucide, StatCard, SignalItem, GlassCard, Badge, FilterPills, KanbanColumn, DataTable, ApprovalCard, HealthRing, MentorCard, IntroPreview, SearchBar, TagCloud, initCharts, drawTagGraph } from './components.js';

export function renderAdminPage(page) {
  const el = document.getElementById('page-content');
  if (!el) return;
  const fn = adminPages[page];
  if (fn) { el.innerHTML = fn(); afterRender(page); }
}

function afterRender(page) {
  if (page === 'dashboard') initDashboardCharts();
  if (page === 'tags') drawTagGraph('tag-graph-canvas', graphNodes);
  if (page === 'reports') initReportCharts();
  if (page === 'mentors') initMentorCharts();
  initLucide();
}

// ═══ PAGE 1: INTELLIGENCE FEED ═══
function dashboardPage() {
  return `
    <div class="page-header">
      <div class="page-header-left">
        <div class="page-title">${icon('sparkles', 20)} Ecosystem Intelligence</div>
        <div class="page-subtitle">Real-time signals from your innovation ecosystem</div>
      </div>
      <div class="page-header-actions">
        <button class="btn btn-secondary">${icon('download', 15)} Export Feed</button>
        <button class="btn btn-primary">${icon('zap', 15)} Run Discovery Now</button>
      </div>
    </div>
    <div class="stats-grid">
      ${StatCard('rocket', 'Active Startups', ecosystemStats.activeStartups, 12, 0)}
      ${StatCard('users', 'Alumni Founders', ecosystemStats.alumniFounders, 8, 1)}
      ${StatCard('banknote', 'Funding Raised', ecosystemStats.fundingRaised, 23, 2)}
      ${StatCard('trophy', 'Competition Wins', ecosystemStats.competitionWins, 15, 3)}
      ${StatCard('handshake', 'Mentor Intros', ecosystemStats.mentorIntros, 18, 4)}
    </div>
    <div class="grid-sidebar">
      <div>
        <div class="section">
          <div class="section-header">
            <div class="section-title">Signal Feed</div>
            ${FilterPills(['All', 'Competition', 'Funding', 'GitHub', 'News', 'Alerts'], 'All')}
          </div>
          <div class="signal-feed">${signals.map((s, i) => SignalItem(s, i)).join('')}</div>
        </div>
      </div>
      <div>
        <div class="section">${GlassCard('Signal Activity', 'Last 30 days', '<div class="chart-container"><canvas id="chart-signals"></canvas></div>')}</div>
        <div class="section" style="margin-top:16px">${GlassCard('Signal Distribution', 'By type', '<div class="chart-container" style="height:220px"><canvas id="chart-types"></canvas></div>')}</div>
        <div class="section" style="margin-top:16px">
          ${GlassCard('Suggested Actions', null, `
            <div style="display:flex;flex-direction:column;gap:8px">
              <div class="approval-card" style="padding:12px 14px"><span>${icon('alert-triangle', 18)}</span><div class="approval-body"><div class="approval-title text-sm">3 startups show stall signals</div><div class="text-xs text-muted">Schedule coordinator check-ins</div></div></div>
              <div class="approval-card" style="padding:12px 14px"><span>${icon('users', 18)}</span><div class="approval-body"><div class="approval-title text-sm">5 mentor matches ready</div><div class="text-xs text-muted">Review and send introductions</div></div></div>
              <div class="approval-card" style="padding:12px 14px"><span>${icon('file-text', 18)}</span><div class="approval-body"><div class="approval-title text-sm">NAAC report draft ready</div><div class="text-xs text-muted">Criterion 3.4 evidence compiled</div></div></div>
            </div>`)}
        </div>
      </div>
    </div>`;
}

function initDashboardCharts() {
  initCharts('chart-signals', { type: 'line', data: { labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'], datasets: [{ label: 'Signals', data: [18, 24, 31, 34], borderColor: '#6366f1', backgroundColor: 'rgba(99,102,241,0.1)', fill: true, tension: 0.4, pointRadius: 4, pointBackgroundColor: '#6366f1' }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.04)' } }, x: { grid: { display: false } } } } });
  initCharts('chart-types', { type: 'doughnut', data: { labels: ['Competition', 'Funding', 'GitHub', 'News', 'LinkedIn'], datasets: [{ data: [28, 18, 22, 15, 17], backgroundColor: ['#f59e0b', '#10b981', '#8b5cf6', '#3b82f6', '#06b6d4'], borderWidth: 0 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { padding: 12, usePointStyle: true, pointStyle: 'circle' } } }, cutout: '60%' } });
}

// ═══ PAGE 2: STARTUP PORTFOLIO ═══
function startupsPage() {
  const stages = ['Idea', 'Prototype', 'MVP', 'Revenue', 'Funded'];
  const colors = ['#64748b', '#f59e0b', '#3b82f6', '#10b981', '#a855f7'];
  const sicons = ['lightbulb', 'wrench', 'smartphone', 'banknote', 'trophy'];
  const grouped = stages.map(s => startups.filter(st => st.stage === s));
  return `
    <div class="page-header">
      <div class="page-header-left">
        <div class="page-title">${icon('rocket', 20)} Startup Portfolio</div>
        <div class="page-subtitle">${startups.length} tracked startups across all stages</div>
      </div>
      <div class="page-header-actions">${SearchBar('Search startups...')}<button class="btn btn-primary">${icon('plus', 15)} Add Startup</button></div>
    </div>
    <div class="stats-grid" style="grid-template-columns:repeat(5,1fr)">${stages.map((s, i) => StatCard(sicons[i], s, grouped[i].length, null, i)).join('')}</div>
    <div class="section">
      <div class="section-header"><div class="section-title">Stage Pipeline</div><button class="btn btn-sm btn-secondary">View as List</button></div>
      <div class="kanban-board">${stages.map((s, i) => KanbanColumn(s, colors[i], grouped[i])).join('')}</div>
    </div>
    <div class="section" style="margin-top:24px">
      ${GlassCard('Stall Alerts', 'Startups with no activity for 45+ days', `<div class="signal-feed">${startups.filter(s => s.stall).map(s => `<div class="signal-item"><div class="signal-dot pulse" style="background:var(--danger)"></div><div class="signal-content"><div class="signal-title">${icon('alert-triangle', 14)} ${s.name} — Stalled at ${s.stage}</div><div class="signal-desc">No activity for 48 days. Founded by ${s.founder}. Readiness: ${s.readiness}%</div><div class="signal-actions" style="margin-top:8px"><button class="btn btn-sm btn-primary">Schedule Check-in</button><button class="btn btn-sm btn-secondary">Assign Mentor</button></div></div></div>`).join('')}${startups.filter(s => s.stall).length === 0 ? '<div class="text-muted text-sm" style="padding:12px">No stalls detected</div>' : ''}</div>`)}
    </div>
    <div class="section" style="margin-top:24px">
      ${GlassCard('Full Registry', null, DataTable(['Startup', 'Domain', 'Stage', 'Readiness', 'Founder', 'Signals', 'Funding', 'Status'], startups.map(s => [`<span class="fw-600">${s.name}</span>`, Badge(s.domain, 'purple'), Badge(s.stage, s.stage === 'Revenue' ? 'green' : s.stage === 'MVP' ? 'blue' : s.stage === 'Prototype' ? 'yellow' : 'gray'), `<div class="progress-bar" style="width:80px"><div class="progress-bar-fill" style="width:${s.readiness}%"></div></div><span class="text-xs text-muted">${s.readiness}%</span>`, s.founder, s.signals, s.funding, s.stall ? Badge('Stalled', 'red') : Badge('Active', 'green')])))}
    </div>`;
}

// ═══ PAGE 3: MENTOR & INVESTOR PIPELINE ═══
function mentorsPage() {
  return `
    <div class="page-header">
      <div class="page-header-left">
        <div class="page-title">${icon('handshake', 20)} Mentor & Investor Pipeline</div>
        <div class="page-subtitle">Warm introductions · Engagement analytics · Investor watchlist</div>
      </div>
      <div class="page-header-actions">${SearchBar('Search mentors or investors...')}<button class="btn btn-primary">${icon('plus', 15)} Add Mentor</button></div>
    </div>
    <div class="stats-grid" style="grid-template-columns:repeat(4,1fr)">
      ${StatCard('handshake', 'Total Mentors', mentors.length, 15, 0)}
      ${StatCard('mail', 'Intros Sent', 66, 22, 1)}
      ${StatCard('check-circle', 'Acceptance Rate', '73%', 5, 2)}
      ${StatCard('gem', 'Watching Investors', investors.length, 10, 3)}
    </div>
    <div class="grid-sidebar">
      <div>
        <div class="section">
          <div class="section-header"><div class="section-title">Mentor Directory</div>${FilterPills(['All', 'Available', 'FinTech', 'AI/ML', 'SaaS'])}</div>
          <div class="grid-2" style="gap:12px">${mentors.map(m => MentorCard(m)).join('')}</div>
        </div>
        <div class="section" style="margin-top:24px">
          <div class="section-title mb-md">Warm Introduction Preview</div>
          ${IntroPreview('Meera Joshi', 'Ananya Sharma (AgroSense)', 'pricing architecture for B2B IoT hardware')}
          <div style="margin-top:12px;display:flex;gap:8px">
            <button class="btn btn-primary">${icon('check', 14)} Approve & Send</button>
            <button class="btn btn-secondary">${icon('pencil', 14)} Edit Draft</button>
            <button class="btn btn-ghost">Discard</button>
          </div>
        </div>
      </div>
      <div>
        <div class="section">${GlassCard('Engagement Trend', 'Monthly intros & acceptance', '<div class="chart-container"><canvas id="chart-mentor-engagement"></canvas></div>')}</div>
        <div class="section" style="margin-top:16px">
          ${GlassCard('Investor Watchlist', null, `<div style="display:flex;flex-direction:column;gap:10px">${investors.map(inv => `<div class="glass-card" style="padding:12px 14px"><div class="flex justify-between items-center mb-sm"><div class="fw-600">${inv.name}</div>${Badge(inv.type, 'cyan')}</div><div class="text-xs text-muted">${inv.focus.join(' · ')}</div><div class="flex justify-between items-center" style="margin-top:8px"><span class="text-xs text-secondary">${inv.stage} · ${inv.checkSize}</span><span class="text-xs text-accent">${inv.watching} watching</span></div></div>`).join('')}</div>`)}
        </div>
      </div>
    </div>`;
}

function initMentorCharts() {
  initCharts('chart-mentor-engagement', { type: 'bar', data: { labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'], datasets: [{ label: 'Intros Sent', data: [8, 12, 10, 14, 18, 22], backgroundColor: 'rgba(99,102,241,0.5)', borderRadius: 4 }, { label: 'Accepted', data: [5, 8, 7, 11, 14, 16], backgroundColor: 'rgba(16,185,129,0.5)', borderRadius: 4 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { usePointStyle: true, pointStyle: 'circle', padding: 12 } } }, scales: { y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.04)' } }, x: { grid: { display: false } } } } });
}

// ═══ PAGE 4: TAG DISCOVERY ENGINE ═══
function tagsPage() {
  return `
    <div class="page-header">
      <div class="page-header-left">
        <div class="page-title">${icon('brain', 20)} Tag Discovery Engine</div>
        <div class="page-subtitle">AI-powered ecosystem detection · Relationships · Clusters</div>
      </div>
      <div class="page-header-actions">${SearchBar('Search tags, domains, faculty...')}<button class="btn btn-primary">${icon('refresh-cw', 15)} Refresh Tags</button></div>
    </div>
    <div class="stats-grid" style="grid-template-columns:repeat(5,1fr)">
      ${StatCard('tag', 'Total Tags', tags.length, 18, 0)}
      ${StatCard('trending-up', 'Trending', tags.filter(t => t.trending).length, 25, 1)}
      ${StatCard('landmark', 'Institutions', 1, null, 2)}
      ${StatCard('flask-conical', 'Faculty Mapped', tags.filter(t => t.category === 'faculty').length, null, 3)}
      ${StatCard('microscope', 'Research Labs', tags.filter(t => t.category === 'lab').length, null, 4)}
    </div>
    <div class="section">
      <div class="section-header">
        <div class="section-title">${icon('git-branch', 16)} Ecosystem Relationship Graph</div>
        <div class="flex gap-sm">${['domain', 'research', 'lab', 'incubation', 'faculty'].map(c => { const cl = { domain: '#6366f1', research: '#a855f7', lab: '#06b6d4', incubation: '#10b981', faculty: '#f59e0b' }; return `<span class="badge" style="background:${cl[c]}20;color:${cl[c]}">${c}</span>`; }).join('')}</div>
      </div>
      <div class="tag-graph-container"><canvas id="tag-graph-canvas"></canvas></div>
    </div>
    <div class="grid-2" style="margin-top:24px">
      <div><div class="section">${GlassCard('Tag Cloud', 'Sized by frequency', TagCloud(tags))}</div></div>
      <div><div class="section">
        ${GlassCard('Trending Tags', 'Rising in the last 30 days', `<div style="display:flex;flex-direction:column;gap:8px">${tags.filter(t => t.trending).map(t => `<div class="flex items-center justify-between" style="padding:8px 10px;background:var(--glass-bg);border-radius:var(--radius-sm)"><div class="flex items-center gap-sm">${icon('trending-up', 16)}<div><div class="fw-600 text-sm">${t.name}</div><div class="text-xs text-muted">${t.category} · ${t.count} occurrences</div></div></div><span class="stat-change positive">↑ trending</span></div>`).join('')}</div>`)}
      </div></div>
    </div>
    <div class="section" style="margin-top:24px">
      ${GlassCard('Tag-Entity Mapping', null, DataTable(['Tag', 'Category', 'Occurrences', 'Trending', 'Connected'], tags.slice(0, 14).map(t => [`<span class="fw-600">${t.name}</span>`, Badge(t.category, t.category === 'domain' ? 'blue' : t.category === 'research' ? 'purple' : t.category === 'lab' ? 'cyan' : t.category === 'faculty' ? 'yellow' : 'green'), t.count, t.trending ? '<span style="color:var(--warning)">Yes</span>' : '<span class="text-muted">—</span>', `${Badge(Math.floor(Math.random() * 5 + 1) + ' startups', 'blue')} ${Badge(Math.floor(Math.random() * 3 + 1) + ' mentors', 'green')}`])))}
    </div>`;
}

// ═══ PAGE 5: APPROVALS ═══
function approvalsPage() {
  return `
    <div class="page-header">
      <div class="page-header-left">
        <div class="page-title">${icon('check-circle', 20)} Approvals & Recommendations</div>
        <div class="page-subtitle">Command center for ecosystem decisions</div>
      </div>
      <div class="page-header-actions">${FilterPills(['All', 'Startup', 'Mentor', 'Project', 'Internship', 'Challenge', 'Investor'])}</div>
    </div>
    <div class="stats-grid" style="grid-template-columns:repeat(4,1fr)">
      ${StatCard('clipboard-list', 'Pending', approvals.filter(a => a.status === 'pending').length, null, 0)}
      ${StatCard('alert-circle', 'High Priority', approvals.filter(a => a.priority === 'high').length, null, 1)}
      ${StatCard('check-circle-2', 'Approved Today', 8, null, 2)}
      ${StatCard('clock', 'Avg Response', '4.2 hrs', null, 3)}
    </div>
    <div class="grid-sidebar">
      <div><div class="section"><div class="section-title mb-md">Pending Approvals</div><div style="display:flex;flex-direction:column;gap:12px">${approvals.map((a, i) => ApprovalCard(a, i)).join('')}</div></div></div>
      <div>
        <div class="section">${GlassCard('AI Recommendations', null, `<div style="display:flex;flex-direction:column;gap:10px">
          <div class="glass-card" style="padding:12px;background:rgba(99,102,241,0.06);border-color:rgba(99,102,241,0.15)"><div class="fw-600 text-sm" style="color:var(--accent-light)">${icon('lightbulb', 14)} Internship Match</div><div class="text-xs text-secondary" style="margin-top:4px">Priya Iyer's ML skills (92% match) align with DataWeave's open intern role.</div><div style="margin-top:8px"><button class="btn btn-sm btn-primary">Send Recommendation</button></div></div>
          <div class="glass-card" style="padding:12px;background:rgba(16,185,129,0.06);border-color:rgba(16,185,129,0.15)"><div class="fw-600 text-sm" style="color:var(--success)">${icon('handshake', 14)} Mentor Pairing</div><div class="text-xs text-secondary" style="margin-top:4px">CloudBridge has 87% profile match with Arjun Kapoor (Ex-CTO, Swiggy).</div><div style="margin-top:8px"><button class="btn btn-sm btn-success">Review Match</button></div></div>
          <div class="glass-card" style="padding:12px;background:rgba(245,158,11,0.06);border-color:rgba(245,158,11,0.15)"><div class="fw-600 text-sm" style="color:var(--warning)">${icon('alert-triangle', 14)} Stall Intervention</div><div class="text-xs text-secondary" style="margin-top:4px">MediTrack AI stalled 48 days. Recommend assigning HealthTech mentor.</div><div style="margin-top:8px"><button class="btn btn-sm btn-secondary">Create Action Plan</button></div></div>
        </div>`)}</div>
        <div class="section" style="margin-top:16px">${GlassCard('Recent Activity', null, `<div class="timeline">${[{ time: '10 min ago', title: 'Approved: FinPulse startup registration', desc: 'By Dr. Ramesh K.' }, { time: '2 hours ago', title: 'Sent mentor intro: Meera to AgroSense', desc: 'Accepted within 15 min' }, { time: '1 day ago', title: 'Declined: Duplicate project submission', desc: 'Notified student' }].map(it => `<div class="timeline-item"><div class="timeline-item-time">${it.time}</div><div class="timeline-item-title">${it.title}</div><div class="timeline-item-desc">${it.desc}</div></div>`).join('')}</div>`)}</div>
      </div>
    </div>`;
}

// ═══ PAGE 6: REPORTS ═══
function reportsPage() {
  return `
    <div class="page-header">
      <div class="page-header-left">
        <div class="page-title">${icon('bar-chart-3', 20)} Reports & Analytics</div>
        <div class="page-subtitle">NAAC auto-reports · Ecosystem health · Cohort comparison</div>
      </div>
      <div class="page-header-actions"><button class="btn btn-secondary">${icon('download', 15)} Export All</button><button class="btn btn-primary">${icon('file-text', 15)} Generate NAAC Report</button></div>
    </div>
    <div class="grid-3" style="margin-bottom:24px">
      <div class="glass-card" style="text-align:center;padding:28px">${HealthRing(ecosystemStats.healthScore)}<div class="text-sm text-secondary" style="margin-top:12px">Ecosystem Health Score</div><div class="text-xs text-muted">Updated weekly · Peer rank: Top 15%</div></div>
      <div class="glass-card"><div class="glass-card-title mb-md">NAAC Quick Reports</div>${['3.2 — Innovation Ecosystem', '3.3 — Research Funding', '3.4 — Innovation Output'].map(c => `<div class="flex items-center justify-between" style="padding:10px 0;border-bottom:1px solid var(--border)"><div><div class="text-sm fw-600">Criterion ${c}</div><div class="text-xs text-muted">Auto-generated · Last: 2 days ago</div></div><button class="btn btn-sm btn-primary">Generate</button></div>`).join('')}<div style="margin-top:12px;display:flex;gap:8px"><button class="btn btn-sm btn-secondary">${icon('file-text', 13)} PDF</button><button class="btn btn-sm btn-secondary">${icon('table', 13)} Excel</button><button class="btn btn-sm btn-secondary">${icon('presentation', 13)} PPT</button></div></div>
      <div class="glass-card"><div class="glass-card-title mb-md">Key Metrics</div>${[['Students Tracked', ecosystemStats.studentsTracked], ['Signals This Week', ecosystemStats.signalsThisWeek], ['NAAC Reports Generated', ecosystemStats.naacReportsGenerated], ['Mentor Accept Rate', ecosystemStats.mentorAcceptRate + '%'], ['Active Partnerships', '4']].map(([k, v]) => `<div class="flex justify-between items-center" style="padding:8px 0;border-bottom:1px solid var(--border)"><span class="text-sm text-secondary">${k}</span><span class="fw-700">${v}</span></div>`).join('')}</div>
    </div>
    <div class="grid-2">
      <div class="section">${GlassCard('Funding Trend', 'Quarterly', '<div class="chart-container"><canvas id="chart-funding"></canvas></div>')}</div>
      <div class="section">${GlassCard('Ecosystem Radar', 'Multi-dimensional health', '<div class="chart-container"><canvas id="chart-radar"></canvas></div>')}</div>
    </div>`;
}

function initReportCharts() {
  initCharts('chart-funding', { type: 'bar', data: { labels: ['Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025', 'Q1 2026'], datasets: [{ label: 'Funding (Cr)', data: [2.1, 5.8, 8.2, 14.5, 17.2], backgroundColor: 'rgba(99,102,241,0.5)', borderRadius: 6, borderSkipped: false }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.04)' } }, x: { grid: { display: false } } } } });
  initCharts('chart-radar', { type: 'radar', data: { labels: ['Startups', 'Competitions', 'Funding', 'Mentorship', 'Alumni', 'Industry'], datasets: [{ label: 'Your Institution', data: [82, 75, 68, 88, 70, 55], borderColor: '#6366f1', backgroundColor: 'rgba(99,102,241,0.15)', pointBackgroundColor: '#6366f1' }, { label: 'Peer Average', data: [65, 60, 55, 50, 60, 45], borderColor: '#64748b', backgroundColor: 'rgba(100,116,139,0.08)', pointBackgroundColor: '#64748b', borderDash: [4, 4] }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { usePointStyle: true, padding: 12 } } }, scales: { r: { grid: { color: 'rgba(255,255,255,0.06)' }, pointLabels: { font: { size: 11 } }, ticks: { display: false }, beginAtZero: true, max: 100 } } } });
}

// ═══ PAGE 7: INDUSTRY CHALLENGES ═══
function challengesPage() {
  return `
    <div class="page-header">
      <div class="page-header-left">
        <div class="page-title">${icon('building-2', 20)} Industry Challenges</div>
        <div class="page-subtitle">Corporate R&D problems matched to student teams</div>
      </div>
      <div class="page-header-actions"><button class="btn btn-primary">${icon('plus', 15)} Post New Challenge</button></div>
    </div>
    <div class="stats-grid" style="grid-template-columns:repeat(4,1fr)">
      ${StatCard('building-2', 'Active Challenges', challenges.filter(c => c.status === 'active').length, null, 0)}
      ${StatCard('clipboard-list', 'Open for Teams', challenges.filter(c => c.status === 'open').length, null, 1)}
      ${StatCard('users', 'Teams Engaged', challenges.reduce((a, c) => a + c.teams, 0), null, 2)}
      ${StatCard('banknote', 'Total Prize Pool', '₹7L', null, 3)}
    </div>
    <div style="display:flex;flex-direction:column;gap:14px">
      ${challenges.map(c => `<div class="glass-card glass-card-glow"><div class="flex items-center justify-between mb-md"><div><div class="fw-700">${c.title}</div><div class="text-sm text-secondary">${c.company} · ${c.domain}</div></div><div class="flex gap-sm items-center">${Badge(c.status === 'active' ? 'Active' : 'Open', c.status === 'active' ? 'green' : 'blue')} ${Badge('IP: ' + c.ip, 'gray')}</div></div><div class="flex gap-lg items-center text-sm"><span>${icon('banknote', 14)} Prize: <span class="fw-600">${c.prize}</span></span><span>${icon('calendar', 14)} Deadline: <span class="fw-600">${c.deadline}</span></span><span>${icon('users', 14)} Teams: <span class="fw-600">${c.teams}</span></span></div><div class="flex gap-sm" style="margin-top:14px"><button class="btn btn-sm btn-primary">Match Teams</button><button class="btn btn-sm btn-secondary">View Progress</button><button class="btn btn-sm btn-ghost">Edit</button></div></div>`).join('')}
    </div>`;
}

// ═══ PAGE 8: USER MANAGEMENT ═══
function usersPage() {
  const users = [
    { name: 'Ananya Sharma', role: 'Student', dept: 'CSE', status: 'Active', linked: true },
    { name: 'Priya Iyer', role: 'Student', dept: 'AI/ML', status: 'Active', linked: true },
    { name: 'Vikram Patel', role: 'Alumni', dept: 'CSE 2019', status: 'Active', linked: true },
    { name: 'Meera Joshi', role: 'Mentor', dept: 'External', status: 'Active', linked: false },
    { name: 'Arjun Kapoor', role: 'Mentor', dept: 'External', status: 'Limited', linked: false },
    { name: 'Blume Ventures', role: 'Investor', dept: '—', status: 'Pending', linked: false },
    { name: 'Dr. Ramesh K.', role: 'Coordinator', dept: 'Admin', status: 'Active', linked: true },
    { name: 'Rahul Verma', role: 'Student', dept: 'ECE', status: 'Inactive', linked: false },
  ];
  return `
    <div class="page-header">
      <div class="page-header-left">
        <div class="page-title">${icon('user-cog', 20)} User & Access Control</div>
        <div class="page-subtitle">Manage roles, permissions, and visibility</div>
      </div>
      <div class="page-header-actions">${SearchBar('Search users...')}<button class="btn btn-primary">${icon('user-plus', 15)} Invite User</button></div>
    </div>
    <div class="stats-grid" style="grid-template-columns:repeat(5,1fr)">
      ${StatCard('graduation-cap', 'Students', users.filter(u => u.role === 'Student').length, null, 0)}
      ${StatCard('award', 'Alumni', users.filter(u => u.role === 'Alumni').length, null, 1)}
      ${StatCard('handshake', 'Mentors', users.filter(u => u.role === 'Mentor').length, null, 2)}
      ${StatCard('gem', 'Investors', users.filter(u => u.role === 'Investor').length, null, 3)}
      ${StatCard('shield', 'Coordinators', users.filter(u => u.role === 'Coordinator').length, null, 4)}
    </div>
    <div class="section">
      ${GlassCard('All Users', null, DataTable(['User', 'Role', 'Department', 'Status', 'Profile Linked', 'Actions'], users.map(u => [`<div class="flex items-center gap-sm"><div class="leaderboard-avatar" style="width:30px;height:30px;font-size:0.65rem">${u.name.split(' ').map(w => w[0]).join('')}</div><span class="fw-600">${u.name}</span></div>`, Badge(u.role, u.role === 'Student' ? 'blue' : u.role === 'Mentor' ? 'green' : u.role === 'Alumni' ? 'purple' : u.role === 'Investor' ? 'cyan' : 'yellow'), u.dept, Badge(u.status, u.status === 'Active' ? 'green' : u.status === 'Pending' ? 'yellow' : 'red'), u.linked ? '<span style="color:var(--success)">Linked</span>' : '<span class="text-muted">—</span>', `<div class="flex gap-sm"><button class="btn btn-sm btn-ghost">Edit</button><button class="btn btn-sm btn-ghost">Permissions</button></div>`])))}
    </div>`;
}

const adminPages = { dashboard: dashboardPage, startups: startupsPage, mentors: mentorsPage, tags: tagsPage, approvals: approvalsPage, reports: reportsPage, challenges: challengesPage, users: usersPage };
