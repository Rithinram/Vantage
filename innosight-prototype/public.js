// ============================================================
// Vantage — Public Pages (7 pages, all buttons functional)
// ============================================================
import { startups, mentors, tags, competitions, challenges, leaderboard, ecosystemStats } from './data.js';
import { icon, initLucide, StatCard, GlassCard, Badge, FilterPills, SearchBar, TagCloud, LeaderboardList, MentorCard, IntroPreview, initCharts } from './components.js';

const UI = () => window.vantageUI;

export function renderPublicPage(page) {
  const el = document.getElementById('page-content');
  if (!el) return;
  const fn = publicPages[page];
  if (fn) { el.innerHTML = fn(); afterRender(page); }
}

function afterRender(page) {
  if (page === 'dashboard') initPublicCharts();
  initLucide();
  attachPublicHandlers(page);
}

function attachPublicHandlers(page) {
  // Search bars — live filter
  document.querySelectorAll('.search-box .input').forEach(input => {
    input.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      const container = input.closest('.public-content');
      const cards = container?.querySelectorAll('.grid-3 > .glass-card, .grid-2 > .glass-card');
      cards?.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(q) || !q ? '' : 'none';
      });
    });
  });

  // Filter pills
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      pill.parentElement.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const value = pill.textContent.trim();

      if (page === 'explorer') {
        const cards = document.querySelectorAll('.grid-3 > .glass-card');
        cards.forEach(card => {
          if (value === 'All') { card.style.display = ''; return; }
          const text = card.textContent;
          card.style.display = text.includes(value) ? '' : 'none';
        });
      }

      UI().showToast(`Filtered: ${value}`, 'info');
    });
  });
}

// ═══ PAGE 1: PUBLIC DASHBOARD ═══
function dashboardPage() {
  const featured = startups.filter(s => s.readiness > 60).slice(0, 3);
  return `
    <div class="page-header">
      <div class="page-header-left">
        <div class="page-title">${icon('sparkles', 20)} Innovation Dashboard</div>
        <div class="page-subtitle">Live highlights from our innovation ecosystem</div>
      </div>
    </div>
    <div class="stats-grid">
      ${StatCard('rocket', 'Active Startups', ecosystemStats.activeStartups, null, 0)}
      ${StatCard('trophy', 'Competition Wins', ecosystemStats.competitionWins, null, 1)}
      ${StatCard('banknote', 'Funding Raised', ecosystemStats.fundingRaised, null, 2)}
      ${StatCard('users', 'Alumni Founders', ecosystemStats.alumniFounders, null, 3)}
      ${StatCard('handshake', 'Mentor Network', mentors.length + '+', null, 4)}
    </div>
    <div class="grid-sidebar">
      <div>
        <div class="section">
          <div class="section-title mb-md">${icon('star', 16)} Startup Spotlight</div>
          <div style="display:flex;flex-direction:column;gap:12px">
            ${featured.map(s => `<div class="glass-card glass-card-glow" style="cursor:pointer" onclick="window.publicActions.viewStartup('${s.name}')">
              <div class="flex justify-between items-center mb-sm"><div class="fw-700">${s.name}</div>${Badge(s.domain, 'purple')}</div>
              <div class="text-sm text-secondary mb-sm">Founded by ${s.founder} · Team of ${s.team}</div>
              <div class="flex gap-sm mb-sm" style="flex-wrap:wrap">${s.tags.map(t => Badge(t, 'blue')).join('')}</div>
              <div class="flex justify-between items-center">
                <div style="flex:1"><div class="progress-bar"><div class="progress-bar-fill" style="width:${s.readiness}%"></div></div><div class="text-xs text-muted" style="margin-top:4px">Readiness: ${s.readiness}%</div></div>
                ${Badge(s.stage, s.stage === 'Revenue' ? 'green' : 'blue')}
              </div>
            </div>`).join('')}
          </div>
        </div>
        <div class="section" style="margin-top:24px">
          ${GlassCard('Activity Trend', 'Last 4 weeks', '<div class="chart-container"><canvas id="chart-public-trend"></canvas></div>')}
        </div>
      </div>
      <div>
        <div class="section">
          ${GlassCard('Innovation Leaderboard', 'Top contributors', LeaderboardList(leaderboard.slice(0, 5)))}
        </div>
        <div class="section" style="margin-top:16px">
          ${GlassCard('Quick Stats', null, `<div style="display:flex;flex-direction:column;gap:8px">
            ${[['Health Score', ecosystemStats.healthScore + '/100'], ['Active Mentors', mentors.filter(m => m.availability === 'open').length], ['Upcoming Competitions', competitions.length], ['Industry Challenges', challenges.length]].map(([k, v]) => `<div class="flex justify-between items-center" style="padding:6px 0;border-bottom:1px solid var(--border)"><span class="text-sm text-secondary">${k}</span><span class="fw-600">${v}</span></div>`).join('')}
          </div>`)}
        </div>
      </div>
    </div>`;
}

function initPublicCharts() {
  initCharts('chart-public-trend', { type: 'line', data: { labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'], datasets: [{ label: 'Activity Signals', data: [12, 18, 22, 28], borderColor: '#6366f1', backgroundColor: 'rgba(99,102,241,0.08)', fill: true, tension: 0.4, pointRadius: 4, pointBackgroundColor: '#6366f1' }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.04)' } }, x: { grid: { display: false } } } } });
}

// ═══ PAGE 2: STARTUP EXPLORER ═══
function explorerPage() {
  const domains = [...new Set(startups.map(s => s.domain))];
  return `
    <div class="page-header">
      <div class="page-header-left">
        <div class="page-title">${icon('compass', 20)} Startup Explorer</div>
        <div class="page-subtitle">Browse and discover startups from our ecosystem</div>
      </div>
      <div class="page-header-actions">${SearchBar('Search startups, founders, domains...')}</div>
    </div>
    <div class="section-header">
      <div class="section-title">Filter by Domain</div>
      ${FilterPills(['All', ...domains])}
    </div>
    <div class="grid-3" style="margin-top:16px">
      ${startups.map(s => `<div class="glass-card glass-card-glow">
        <div class="flex justify-between items-center mb-sm">
          <div class="fw-700">${s.name}</div>
          ${Badge(s.stage, s.stage === 'Revenue' ? 'green' : s.stage === 'MVP' ? 'blue' : s.stage === 'Prototype' ? 'yellow' : 'gray')}
        </div>
        <div class="text-sm text-secondary">${s.founder} · ${s.domain}</div>
        <div class="flex gap-sm mb-sm" style="margin-top:8px;flex-wrap:wrap">${s.tags.map(t => Badge(t, 'blue')).join('')}</div>
        <div class="progress-bar"><div class="progress-bar-fill" style="width:${s.readiness}%"></div></div>
        <div class="flex justify-between text-xs text-muted" style="margin-top:4px"><span>Readiness: ${s.readiness}%</span><span>${s.signals} signals</span></div>
        <div class="flex gap-sm" style="margin-top:12px">
          <button class="btn btn-sm btn-primary" onclick="window.publicActions.viewStartup('${s.name}')">${icon('eye', 13)} View Details</button>
          <button class="btn btn-sm btn-secondary" onclick="window.publicActions.requestIntro('${s.name}', '${s.founder}')">${icon('mail', 13)} Request Intro</button>
        </div>
      </div>`).join('')}
    </div>`;
}

// ═══ PAGE 3: MENTOR & ALUMNI NETWORK ═══
function networkPage() {
  const domainClusters = {};
  mentors.forEach(m => m.domain.forEach(d => { if (!domainClusters[d]) domainClusters[d] = []; domainClusters[d].push(m); }));
  return `
    <div class="page-header">
      <div class="page-header-left">
        <div class="page-title">${icon('users', 20)} Mentor & Alumni Network</div>
        <div class="page-subtitle">Connect with experienced professionals from our ecosystem</div>
      </div>
      <div class="page-header-actions">${SearchBar('Search by name, domain, expertise...')}</div>
    </div>
    <div class="stats-grid" style="grid-template-columns:repeat(4,1fr)">
      ${StatCard('users', 'Total Mentors', mentors.length, null, 0)}
      ${StatCard('check-circle', 'Available Now', mentors.filter(m => m.availability === 'open').length, null, 1)}
      ${StatCard('award', 'Alumni Network', '156+', null, 2)}
      ${StatCard('globe', 'Cities Connected', 8, null, 3)}
    </div>
    <div class="section">
      <div class="section-title mb-md">${icon('grid-3x3', 16)} Domain Clusters</div>
      <div class="grid-3">
        ${Object.entries(domainClusters).slice(0, 6).map(([domain, members]) => `
          <div class="glass-card" style="cursor:pointer" onclick="window.vantageUI.showToast('Viewing ${domain} cluster — ${members.length} mentors','info')"><div class="fw-600 mb-sm">${domain}</div><div class="text-sm text-muted mb-sm">${members.length} mentors</div>
            <div style="display:flex;gap:6px;flex-wrap:wrap">${members.map(m => `<div class="leaderboard-avatar" style="width:28px;height:28px;font-size:0.6rem" title="${m.name}">${m.avatar}</div>`).join('')}</div>
          </div>`).join('')}
      </div>
    </div>
    <div class="section" style="margin-top:24px">
      <div class="section-title mb-md">${icon('star', 16)} Mentor Spotlight</div>
      <div class="grid-3">${mentors.filter(m => m.availability === 'open').slice(0, 3).map(m => MentorCard(m)).join('')}</div>
    </div>
    <div class="section" style="margin-top:24px">
      ${GlassCard('Alumni Innovation Map', 'Where our founders are building', `<div class="grid-4" style="gap:10px">
        ${[['Bengaluru', 42], ['Mumbai', 28], ['Hyderabad', 22], ['Delhi NCR', 18], ['Pune', 14], ['Chennai', 12], ['Kochi', 8], ['International', 12]].map(([city, count]) => `<div class="glass-card" style="text-align:center;padding:14px;cursor:pointer" onclick="window.vantageUI.showToast('${count} founders based in ${city}','info')"><div class="fw-600 text-sm">${city}</div><div class="stat-value" style="font-size:1.2rem;margin-top:4px">${count}</div><div class="text-xs text-muted">founders</div></div>`).join('')}
      </div>`)}
    </div>`;
}

// ═══ PAGE 4: OPPORTUNITIES HUB ═══
function opportunitiesPage() {
  return `
    <div class="page-header">
      <div class="page-header-left">
        <div class="page-title">${icon('gift', 20)} Opportunities Hub</div>
        <div class="page-subtitle">Competitions, challenges, grants, and internships</div>
      </div>
      <div class="page-header-actions">${FilterPills(['All', 'Hackathons', 'Challenges', 'Grants', 'Internships'])}</div>
    </div>
    <div class="grid-2">
      <div>
        <div class="section">
          <div class="section-title mb-md">${icon('trophy', 16)} Upcoming Competitions</div>
          <div style="display:flex;flex-direction:column;gap:10px">
            ${competitions.map(c => `<div class="glass-card"><div class="flex justify-between items-center mb-sm"><div class="fw-600">${c.name}</div>${Badge(c.type, 'purple')}</div><div class="flex gap-lg text-sm text-secondary"><span>${icon('calendar', 13)} ${c.deadline}</span><span>${icon('tag', 13)} ${c.domain}</span></div><div style="margin-top:10px"><button class="btn btn-sm btn-primary" onclick="window.publicActions.applyCompetition('${c.name}')">${icon('external-link', 13)} Apply Now</button></div></div>`).join('')}
          </div>
        </div>
      </div>
      <div>
        <div class="section">
          <div class="section-title mb-md">${icon('building-2', 16)} Industry Challenges</div>
          <div style="display:flex;flex-direction:column;gap:10px">
            ${challenges.map(c => `<div class="glass-card"><div class="flex justify-between items-center mb-sm"><div class="fw-600">${c.title}</div>${Badge(c.status === 'active' ? 'Active' : 'Open', c.status === 'active' ? 'green' : 'blue')}</div><div class="text-sm text-secondary">${c.company} · ${c.domain}</div><div class="flex gap-lg text-sm" style="margin-top:8px"><span>${icon('banknote', 13)} ${c.prize}</span><span>${icon('calendar', 13)} ${c.deadline}</span></div><div style="margin-top:10px"><button class="btn btn-sm btn-primary" onclick="window.publicActions.viewChallenge('${c.title}', '${c.company}', '${c.prize}', '${c.deadline}', '${c.domain}')">View Challenge</button></div></div>`).join('')}
          </div>
        </div>
      </div>
    </div>
    <div class="grid-2" style="margin-top:24px">
      <div class="section">
        ${GlassCard('Grants & Funding', null, `<div style="display:flex;flex-direction:column;gap:10px">
          ${[{ name: 'BIRAC BIG Grant', amt: 'Up to 50L', domain: 'BioTech / AgriTech', dl: 'Apr 30, 2026' }, { name: 'DST NIDHI Prayas', amt: 'Up to 10L', domain: 'Hardware Prototyping', dl: 'Mar 15, 2026' }, { name: 'MeitY Startup', amt: 'Up to 25L', domain: 'IT / Software', dl: 'Rolling' }].map(g => `<div class="glass-card" style="padding:12px 14px"><div class="flex justify-between items-center"><div class="fw-600 text-sm">${g.name}</div><span class="text-accent fw-600 text-sm">${g.amt}</span></div><div class="text-xs text-muted" style="margin-top:4px">${g.domain} · Deadline: ${g.dl}</div><div style="margin-top:8px"><button class="btn btn-sm btn-secondary" onclick="window.vantageUI.showToast('Opening ${g.name} application portal...','info')">Learn More</button></div></div>`).join('')}
        </div>`)}
      </div>
      <div class="section">
        ${GlassCard('Internship Matches', 'Based on your profile', `<div style="display:flex;flex-direction:column;gap:10px">
          ${[{ company: 'DataWeave', role: 'ML Intern', match: 92, domain: 'AI/ML' }, { company: 'Razorpay', role: 'Backend Intern', match: 85, domain: 'FinTech' }, { company: 'Flipkart', role: 'SDE Intern', match: 78, domain: 'E-commerce' }].map(i => `<div class="glass-card" style="padding:12px 14px"><div class="flex justify-between items-center"><div><div class="fw-600 text-sm">${i.company} — ${i.role}</div><div class="text-xs text-muted">${i.domain}</div></div><div class="flex items-center gap-sm"><span class="stat-change positive">${i.match}% match</span><button class="btn btn-sm btn-primary" onclick="window.publicActions.applyInternship('${i.company}', '${i.role}')">Apply</button></div></div></div>`).join('')}
        </div>`)}
      </div>
    </div>`;
}

// ═══ PAGE 5: PERSONAL PROFILE ═══
function profilePage() {
  return `
    <div class="page-header">
      <div class="page-header-left">
        <div class="page-title">${icon('user', 20)} My Innovation Profile</div>
        <div class="page-subtitle">Track your contributions and build your innovation identity</div>
      </div>
      <div class="page-header-actions"><button class="btn btn-primary" onclick="window.publicActions.editProfile()">${icon('pencil', 15)} Edit Profile</button></div>
    </div>
    <div class="grid-sidebar">
      <div>
        <div class="glass-card mb-lg">
          <div class="flex items-center gap-md mb-md">
            <div class="leaderboard-avatar" style="width:60px;height:60px;font-size:1.2rem">AS</div>
            <div><div class="fw-700" style="font-size:1.1rem">Ananya Sharma</div><div class="text-sm text-secondary">CSE, 4th Year · Student Innovator</div><div class="text-xs text-muted">Innovation Score: 945 · Rank #1</div></div>
          </div>
          <div class="flex gap-sm" style="flex-wrap:wrap">${['IoT', 'Machine Learning', 'Agriculture', 'Hardware'].map(t => Badge(t, 'purple')).join('')}</div>
        </div>
        <div class="section">
          ${GlassCard('Linked Accounts', 'Passive signal sources', `<div style="display:flex;flex-direction:column;gap:8px">
            ${[['GitHub', 'ananya-sharma', 'Linked', 'green'], ['LinkedIn', 'in/ananya-sharma', 'Linked', 'green'], ['Google Scholar', '—', 'Not linked', 'gray'], ['Portfolio', 'ananya.dev', 'Linked', 'green']].map(([platform, handle, status, color]) => `<div class="flex justify-between items-center" style="padding:8px 0;border-bottom:1px solid var(--border);cursor:pointer" onclick="window.publicActions.toggleLink('${platform}', '${status}')"><div><div class="text-sm fw-600">${platform}</div><div class="text-xs text-muted">${handle}</div></div>${Badge(status, color)}</div>`).join('')}
          </div>`)}
        </div>
        <div class="section" style="margin-top:16px">
          ${GlassCard('Domain Declaration', 'Tell Vantage your interests', `<div class="flex gap-sm" style="flex-wrap:wrap;margin-bottom:12px">${['IoT', 'ML', 'Agriculture', 'Embedded Systems', 'Sensor Networks'].map(t => Badge(t, 'blue')).join('')}</div><button class="btn btn-sm btn-secondary" onclick="window.publicActions.addDomain()">${icon('plus', 13)} Add Domain</button>`)}
        </div>
      </div>
      <div>
        <div class="section">
          ${GlassCard('Achievements', null, `<div style="display:flex;flex-direction:column;gap:10px">
            ${[['SIH 2025 — 2nd Place', 'Smart Agriculture Track', 'trophy'], ['AgroSense — MVP Stage', 'Innovation Week Featured', 'rocket'], ['100+ GitHub Stars', 'DriftDetect ML Toolkit', 'star'], ['Top Innovator Q4 2025', 'College-wide Recognition', 'award']].map(([title, desc, ic]) => `<div class="flex items-center gap-sm" style="padding:8px 0;border-bottom:1px solid var(--border)">${icon(ic, 18)}<div><div class="text-sm fw-600">${title}</div><div class="text-xs text-muted">${desc}</div></div></div>`).join('')}
          </div>`)}
        </div>
        <div class="section" style="margin-top:16px">
          ${GlassCard('Privacy Controls', null, `<div style="display:flex;flex-direction:column;gap:10px">
            ${[['Profile visible to mentors', true], ['Profile visible to investors', false], ['Allow mentor intro requests', true], ['Show on leaderboard', true]].map(([label, on]) => `<div class="flex justify-between items-center"><span class="text-sm">${label}</span><button class="btn btn-sm ${on ? 'btn-primary' : 'btn-secondary'}" onclick="this.classList.toggle('btn-primary');this.classList.toggle('btn-secondary');const isOn=this.textContent==='ON';this.textContent=isOn?'OFF':'ON';window.vantageUI.showToast('${label}: '+(isOn?'Disabled':'Enabled'),'info')">${on ? 'ON' : 'OFF'}</button></div>`).join('')}
          </div>`)}
        </div>
        <div class="section" style="margin-top:16px">
          ${GlassCard('Achievement Timeline', null, `<div class="timeline">
            ${[{ time: 'Feb 2026', title: 'SIH 2025 Win Detected', desc: 'Auto-featured on dashboard' }, { time: 'Jan 2026', title: 'AgroSense reached MVP', desc: 'Stage updated in portfolio' }, { time: 'Dec 2025', title: 'GitHub 100 stars milestone', desc: 'Signal generated automatically' }, { time: 'Nov 2025', title: 'Profile created', desc: 'Linked GitHub and LinkedIn' }].map(it => `<div class="timeline-item"><div class="timeline-item-time">${it.time}</div><div class="timeline-item-title">${it.title}</div><div class="timeline-item-desc">${it.desc}</div></div>`).join('')}
          </div>`)}
        </div>
      </div>
    </div>`;
}

// ═══ PAGE 6: RECOGNITION & SHOWCASE ═══
function showcasePage() {
  return `
    <div class="page-header">
      <div class="page-header-left">
        <div class="page-title">${icon('award', 20)} Recognition & Showcase</div>
        <div class="page-subtitle">Celebrating our ecosystem's success stories</div>
      </div>
    </div>
    <div class="section">
      <div class="section-title mb-md">${icon('medal', 16)} Innovation Leaderboard</div>
      <div class="glass-card">${LeaderboardList(leaderboard)}</div>
    </div>
    <div class="section" style="margin-top:24px">
      <div class="section-title mb-md">${icon('star', 16)} Hall of Fame</div>
      <div class="grid-3">
        ${[{ name: 'Vikram Patel', startup: 'LogiStack', achievement: 'Raised 2.5Cr from Blume Ventures', batch: '2019' }, { name: 'Meera Joshi', startup: '—', achievement: 'VP Engineering at Razorpay', batch: '2017' }, { name: 'Rohan Mehta', startup: 'DataWeave', achievement: 'Acquired — Successful Exit', batch: '2016' }].map(h => `<div class="glass-card glass-card-glow" style="text-align:center;padding:24px;cursor:pointer" onclick="window.vantageUI.showDetailModal('${h.name}', [['Startup','${h.startup}'],['Achievement','${h.achievement}'],['Batch','Class of ${h.batch}'],['Status','Alumni — Active Mentor']])">
          <div class="leaderboard-avatar" style="width:50px;height:50px;font-size:1rem;margin:0 auto 12px">${h.name.split(' ').map(w => w[0]).join('')}</div>
          <div class="fw-700">${h.name}</div><div class="text-sm text-accent">${h.startup}</div>
          <div class="text-sm text-secondary" style="margin-top:6px">${h.achievement}</div>
          <div class="text-xs text-muted" style="margin-top:4px">Class of ${h.batch}</div>
        </div>`).join('')}
      </div>
    </div>
    <div class="grid-2" style="margin-top:24px">
      <div class="section">
        ${GlassCard('Press Mentions', null, `<div style="display:flex;flex-direction:column;gap:10px">
          ${[{ title: 'AgroSense featured in YourStory', source: 'YourStory', date: 'Feb 2026' }, { title: 'LogiStack raises 2.5Cr Seed Round', source: 'Crunchbase', date: 'Jan 2026' }, { title: 'NeuralForge wins SIH 2025', source: 'SIH Official', date: 'Dec 2025' }].map(p => `<div class="glass-card" style="padding:12px 14px;cursor:pointer" onclick="window.vantageUI.showToast('Opening article: ${p.title}','info')"><div class="flex justify-between items-center"><div class="fw-600 text-sm">${p.title}</div>${Badge(p.source, 'blue')}</div><div class="text-xs text-muted" style="margin-top:4px">${p.date}</div></div>`).join('')}
        </div>`)}
      </div>
      <div class="section">
        ${GlassCard('Demo Day Gallery', null, `<div class="grid-2" style="gap:10px">
          ${['Innovation Week 2026', 'Startup Showcase Q4', 'Hackathon Finals', 'Industry Connect Day'].map(e => `<div class="glass-card" style="text-align:center;padding:20px;background:var(--glass-bg);cursor:pointer" onclick="window.vantageUI.showToast('Opening gallery: ${e}','info')"><div style="margin-bottom:8px">${icon('image', 24)}</div><div class="text-sm fw-600">${e}</div><div class="text-xs text-muted">View Gallery</div></div>`).join('')}
        </div>`)}
      </div>
    </div>`;
}

// ═══ PAGE 7: APPLY & REQUEST ═══
function applyPage() {
  return `
    <div class="page-header">
      <div class="page-header-left">
        <div class="page-title">${icon('send', 20)} Apply & Request</div>
        <div class="page-subtitle">Submit requests, apply for opportunities, and connect</div>
      </div>
    </div>
    <div class="grid-3">
      ${[
      { ic: 'mail', title: 'Request Mentor Introduction', desc: 'Get connected with industry mentors through verified warm intros.', btn: 'Request Intro', variant: 'primary', action: 'requestMentorIntro' },
      { ic: 'rocket', title: 'Submit Startup for Portfolio', desc: 'Register your startup in the Vantage portfolio for visibility and tracking.', btn: 'Submit Startup', variant: 'primary', action: 'submitStartup' },
      { ic: 'trophy', title: 'Apply for Competition', desc: 'Express interest in upcoming hackathons and innovation challenges.', btn: 'Browse Competitions', variant: 'secondary', action: 'browseCompetitions' },
      { ic: 'briefcase', title: 'Apply for Internship Match', desc: 'Let Vantage match you with relevant industry internship opportunities.', btn: 'Get Matches', variant: 'primary', action: 'getMatches' },
      { ic: 'link', title: 'Link Profile / Accounts', desc: 'Connect your GitHub, LinkedIn, and other profiles for passive signal generation.', btn: 'Link Accounts', variant: 'secondary', action: 'linkAccounts' },
      { ic: 'message-square', title: 'General Inquiry', desc: 'Have a question about the ecosystem? Reach out to the innovation cell.', btn: 'Send Message', variant: 'secondary', action: 'sendMessage' },
    ].map(card => `<div class="glass-card glass-card-glow">
        <div style="margin-bottom:12px">${icon(card.ic, 28)}</div>
        <div class="fw-700 mb-sm">${card.title}</div>
        <div class="text-sm text-secondary" style="margin-bottom:16px">${card.desc}</div>
        <button class="btn btn-${card.variant}" onclick="window.publicActions.${card.action}()">${card.btn}</button>
      </div>`).join('')}
    </div>
    <div class="section" style="margin-top:32px">
      ${GlassCard('Your Active Requests', null, `<div style="display:flex;flex-direction:column;gap:10px">
        ${[{ title: 'Mentor Intro: Karthik Nair (Hardware)', status: 'Pending Coordinator Review', date: '2 days ago', badge: 'Pending', color: 'yellow' }, { title: 'Startup Registration: AgroSense', status: 'Approved — Added to Portfolio', date: '1 week ago', badge: 'Approved', color: 'green' }, { title: 'Internship Match Request', status: '3 matches found — Review ready', date: '3 days ago', badge: 'Ready', color: 'blue' }].map(r => `<div class="glass-card" style="padding:14px 16px;cursor:pointer" onclick="window.vantageUI.showDetailModal('${r.title}', [['Status','${r.status}'],['Submitted','${r.date}'],['Result','${r.badge}']])"><div class="flex justify-between items-center"><div><div class="fw-600 text-sm">${r.title}</div><div class="text-xs text-muted" style="margin-top:2px">${r.status} · ${r.date}</div></div>${Badge(r.badge, r.color)}</div></div>`).join('')}
      </div>`)}
    </div>`;
}

const publicPages = { dashboard: dashboardPage, explorer: explorerPage, network: networkPage, opportunities: opportunitiesPage, profile: profilePage, showcase: showcasePage, apply: applyPage };

// ═══ PUBLIC ACTION HANDLERS ═══
window.publicActions = {
  viewStartup(name) {
    const s = startups.find(st => st.name === name);
    if (!s) return;
    UI().showDetailModal(s.name, [
      ['Domain', s.domain],
      ['Stage', s.stage],
      ['Readiness', s.readiness + '%'],
      ['Founder', s.founder],
      ['Team Size', s.team],
      ['Signals', s.signals],
      ['Funding', s.funding],
      ['Tags', s.tags.join(', ')],
      ['Status', s.stall ? 'Stalled' : 'Active'],
    ]);
  },

  requestIntro(startup, founder) {
    UI().showFormModal(`Request Introduction — ${startup}`, [
      { label: 'Your Name', placeholder: 'Enter your full name' },
      { label: 'Your Department', placeholder: 'e.g. CSE, 3rd Year' },
      { label: 'Reason for Introduction', type: 'textarea', placeholder: `Why would you like to connect with ${founder}?` },
    ], 'Submit Request', `Introduction request sent to ${founder} (${startup}). The coordinator will review shortly.`);
  },

  applyCompetition(name) {
    UI().showFormModal(`Apply — ${name}`, [
      { label: 'Team Name', placeholder: 'Your team name' },
      { label: 'Team Size', type: 'number', placeholder: '3' },
      { label: 'Team Members', type: 'textarea', placeholder: 'List team member names and departments...' },
      { label: 'Motivation', type: 'textarea', placeholder: 'Why do you want to participate?' },
    ], 'Submit Application', `Application for ${name} submitted. You will receive a confirmation shortly.`);
  },

  viewChallenge(title, company, prize, deadline, domain) {
    UI().showDetailModal(title, [
      ['Company', company],
      ['Domain', domain],
      ['Prize', prize],
      ['Deadline', deadline],
      ['IP Policy', 'Negotiable'],
      ['Teams Registered', '3'],
      ['Status', 'Active'],
    ]);
  },

  applyInternship(company, role) {
    UI().showFormModal(`Apply: ${company} — ${role}`, [
      { label: 'Full Name', placeholder: 'Your full name' },
      { label: 'Year & Department', placeholder: 'e.g. 3rd Year CSE' },
      { label: 'Resume Link', placeholder: 'https://drive.google.com/...' },
      { label: 'Why this role?', type: 'textarea', placeholder: 'Briefly explain your interest and relevant experience...' },
    ], 'Submit Application', `Application for ${role} at ${company} submitted successfully.`);
  },

  editProfile() {
    UI().showFormModal('Edit Profile', [
      { label: 'Full Name', placeholder: 'Ananya Sharma' },
      { label: 'Department', placeholder: 'CSE, 4th Year' },
      { label: 'Bio', type: 'textarea', placeholder: 'A short bio about yourself...' },
      { label: 'GitHub Username', placeholder: 'ananya-sharma' },
      { label: 'LinkedIn URL', placeholder: 'linkedin.com/in/ananya-sharma' },
      { label: 'Portfolio URL', placeholder: 'ananya.dev' },
    ], 'Save Profile', 'Profile updated successfully');
  },

  addDomain() {
    UI().showFormModal('Add Domain Interest', [
      { label: 'Domain', type: 'select', options: ['AI/ML', 'IoT', 'FinTech', 'HealthTech', 'EdTech', 'Blockchain', 'Cloud Computing', 'Cybersecurity', 'Robotics', 'AR/VR', 'Other'] },
      { label: 'Proficiency (optional)', type: 'select', options: ['Beginner', 'Intermediate', 'Advanced', 'Expert'] },
    ], 'Add Domain', 'Domain interest added to your profile');
  },

  toggleLink(platform, currentStatus) {
    if (currentStatus === 'Linked') {
      UI().showToast(`${platform} account unlinked`, 'warning');
    } else {
      UI().showFormModal(`Link ${platform}`, [
        { label: `${platform} Username/URL`, placeholder: `Enter your ${platform} handle or profile URL` },
      ], 'Link Account', `${platform} account linked successfully`);
    }
  },

  requestMentorIntro() {
    UI().showFormModal('Request Mentor Introduction', [
      { label: 'Preferred Mentor', type: 'select', options: ['Any Available', ...mentors.filter(m => m.availability === 'open').map(m => m.name)] },
      { label: 'Domain', type: 'select', options: ['FinTech', 'AI/ML', 'SaaS', 'HealthTech', 'EdTech', 'Hardware', 'Other'] },
      { label: 'What do you need help with?', type: 'textarea', placeholder: 'Describe what guidance you are looking for...' },
    ], 'Submit Request', 'Mentor introduction request submitted for coordinator review');
  },

  submitStartup() {
    UI().showFormModal('Submit Startup for Portfolio', [
      { label: 'Startup Name', placeholder: 'e.g. AgroSense' },
      { label: 'Domain', type: 'select', options: ['AgriTech', 'FinTech', 'HealthTech', 'EdTech', 'AI/ML', 'DevTools', 'CleanTech', 'Other'] },
      { label: 'Stage', type: 'select', options: ['Idea', 'Prototype', 'MVP', 'Revenue'] },
      { label: 'Team Members', type: 'textarea', placeholder: 'List team members with names and departments...' },
      { label: 'Description', type: 'textarea', placeholder: 'Brief description of what your startup does...' },
    ], 'Submit', 'Startup submitted for review. You will be notified once approved.');
  },

  browseCompetitions() {
    window.location.hash = '#/public/opportunities';
  },

  getMatches() {
    UI().showToast('Running matching algorithm against your profile...', 'info');
    setTimeout(() => {
      UI().showDetailModal('Internship Matches Found', [
        ['DataWeave — ML Intern', '92% match'],
        ['Razorpay — Backend Intern', '85% match'],
        ['Flipkart — SDE Intern', '78% match'],
        ['TCS — Research Intern', '71% match'],
      ]);
    }, 1500);
  },

  linkAccounts() {
    window.location.hash = '#/public/profile';
  },

  sendMessage() {
    UI().showFormModal('Send Message to Innovation Cell', [
      { label: 'Subject', placeholder: 'e.g. Query about incubation process' },
      { label: 'Category', type: 'select', options: ['General Inquiry', 'Technical Support', 'Mentorship', 'Funding', 'Events', 'Other'] },
      { label: 'Message', type: 'textarea', placeholder: 'Type your message here...' },
    ], 'Send Message', 'Message sent to the Innovation Cell. You will receive a response within 24 hours.');
  },
};

// Draft Intro button handler for mentor cards (public side)
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.glass-card .btn-primary');
  if (!btn) return;
  const text = btn.textContent.trim();
  if (text === 'Draft Intro') {
    const card = btn.closest('.glass-card');
    const name = card?.querySelector('.fw-600')?.textContent || 'Mentor';
    UI().showFormModal(`Request Introduction to ${name}`, [
      { label: 'Your Name & Department', placeholder: 'e.g. Ananya Sharma, CSE 4th Year' },
      { label: 'Topic', placeholder: 'What do you need guidance on?' },
      { label: 'Message', type: 'textarea', placeholder: `Hi ${name}, I would like to connect because...` },
    ], 'Send Request', `Introduction request to ${name} submitted for coordinator review`);
  }
});
