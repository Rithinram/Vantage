// ============================================================
// Vantage — Reusable UI Components (emoji-free, Lucide icons)
// ============================================================

/** Lucide icon helper — returns <i data-lucide="name"> tag */
export function icon(name, size = 16) {
  return `<i data-lucide="${name}" style="width:${size}px;height:${size}px"></i>`;
}

/** Initialize Lucide icons after DOM update */
export function initLucide() {
  requestAnimationFrame(() => { window.lucide?.createIcons(); });
}

export function StatCard(iconName, label, value, change, delay = 0) {
  const cls = change > 0 ? 'positive' : change < 0 ? 'negative' : '';
  const arrow = change > 0 ? '↑' : change < 0 ? '↓' : '';
  return `<div class="stat-card animate-in-delay-${delay}">
    <div class="stat-icon">${icon(iconName, 22)}</div>
    <div class="stat-value">${value}</div>
    <div class="stat-label">${label}</div>
    ${change !== null ? `<span class="stat-change ${cls}">${arrow} ${Math.abs(change)}% this month</span>` : ''}
  </div>`;
}

export function SignalItem(s, i) {
  return `<div class="signal-item" style="animation-delay:${i * 60}ms">
    <div class="signal-dot pulse" style="background:${s.color}"></div>
    <div class="signal-content">
      <div class="signal-title">${s.title}</div>
      <div class="signal-desc">${s.desc}</div>
      <div class="signal-meta">
        <span class="badge badge-gray">${s.source}</span>
        <span class="signal-time">${s.time}</span>
        <div class="signal-actions">
          ${(s.actions || []).map(a => `<button class="btn btn-sm btn-secondary">${a}</button>`).join('')}
        </div>
      </div>
    </div>
  </div>`;
}

export function GlassCard(title, subtitle, content, cls = '') {
  return `<div class="glass-card ${cls}">
    ${title ? `<div class="glass-card-header">
      <div>
        <div class="glass-card-title">${title}</div>
        ${subtitle ? `<div class="glass-card-subtitle">${subtitle}</div>` : ''}
      </div>
    </div>` : ''}
    ${content}
  </div>`;
}

export function Badge(text, variant = 'blue') {
  return `<span class="badge badge-${variant}">${text}</span>`;
}

export function FilterPills(items, active = 'All') {
  return `<div class="filter-pills">
    ${items.map(it => `<button class="filter-pill ${it === active ? 'active' : ''}" onclick="window.filterSignals && window.filterSignals('${it}')">${it}</button>`).join('')}
  </div>`;
}

export function KanbanColumn(title, color, items) {
  return `<div class="kanban-column">
    <div class="kanban-column-header" style="border-bottom-color:${color}">
      <span class="kanban-column-title" style="color:${color}">${title}</span>
      <span class="kanban-count">${items.length}</span>
    </div>
    <div class="kanban-cards">
      ${items.map(item => `<div class="kanban-card">
        <div class="kanban-card-title">${item.name}</div>
        <div class="kanban-card-meta">${item.founder} · Team of ${item.team}</div>
        <div class="kanban-card-tags">${item.tags.map(t => Badge(t, 'purple')).join('')}</div>
        <div style="margin-top:8px">
          <div class="progress-bar">
            <div class="progress-bar-fill" style="width:${item.readiness}%"></div>
          </div>
          <div class="text-xs text-muted" style="margin-top:4px">Readiness: ${item.readiness}%</div>
        </div>
      </div>`).join('')}
      ${items.length === 0 ? '<div class="text-muted text-sm" style="padding:12px;text-align:center;">No startups</div>' : ''}
    </div>
  </div>`;
}

export function DataTable(headers, rows) {
  return `<div style="overflow-x:auto">
    <table class="data-table">
      <thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
      <tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
    </table>
  </div>`;
}

export function ApprovalCard(a, i) {
  const priorityColor = a.priority === 'high' ? 'red' : a.priority === 'medium' ? 'yellow' : 'gray';
  const bgMap = { startup: 'rgba(99,102,241,0.12)', mentor: 'rgba(16,185,129,0.12)', challenge: 'rgba(245,158,11,0.12)' };
  return `<div class="approval-card animate-in-delay-${Math.min(i, 4)}">
    <div class="approval-icon" style="background:${bgMap[a.type] || 'rgba(59,130,246,0.12)'}">${icon(a.lucide, 20)}</div>
    <div class="approval-body">
      <div class="flex items-center gap-sm">
        <div class="approval-title">${a.title}</div>
        ${Badge(a.priority, priorityColor)}
      </div>
      <div class="approval-desc">${a.desc}</div>
      <div class="text-xs text-muted">${a.time}</div>
      <div class="approval-actions">
        <button class="btn btn-sm btn-success">${icon('check', 14)} Approve</button>
        <button class="btn btn-sm btn-danger">${icon('x', 14)} Decline</button>
        <button class="btn btn-sm btn-ghost">View Details</button>
      </div>
    </div>
  </div>`;
}

export function TimelineItem(items) {
  return `<div class="timeline">
    ${items.map(it => `<div class="timeline-item">
      <div class="timeline-item-time">${it.time}</div>
      <div class="timeline-item-title">${it.title}</div>
      <div class="timeline-item-desc">${it.desc}</div>
    </div>`).join('')}
  </div>`;
}

export function HealthRing(score) {
  const circ = 2 * Math.PI * 54;
  const offset = circ * (1 - score / 100);
  const color = score >= 70 ? '#10b981' : score >= 40 ? '#f59e0b' : '#ef4444';
  return `<div class="health-ring">
    <svg viewBox="0 0 120 120">
      <circle cx="60" cy="60" r="54" class="ring-bg"/>
      <circle cx="60" cy="60" r="54" class="ring-fill"
        stroke="${color}"
        stroke-dasharray="${circ}"
        stroke-dashoffset="${offset}"/>
    </svg>
    <div class="health-ring-value">
      <div class="health-ring-number">${score}</div>
      <div class="health-ring-label">Health Score</div>
    </div>
  </div>`;
}

export function LeaderboardList(items) {
  return items.map(it => `<div class="leaderboard-item">
    <div class="leaderboard-rank ${it.rank <= 3 ? 'top-3' : ''}">#${it.rank}</div>
    <div class="leaderboard-avatar">${it.name.split(' ').map(w => w[0]).join('')}</div>
    <div class="leaderboard-info">
      <div class="leaderboard-name">${it.name}</div>
      <div class="leaderboard-detail">${it.dept} · ${it.signals} signals · ${it.badges.map(b => Badge(b, 'gray')).join(' ')}</div>
    </div>
    <div class="leaderboard-score">${it.score}</div>
  </div>`).join('');
}

export function MentorCard(m) {
  const avColors = { open: 'var(--success)', limited: 'var(--warning)', closed: 'var(--danger)' };
  return `<div class="glass-card glass-card-glow">
    <div class="flex items-center gap-md mb-md">
      <div class="leaderboard-avatar" style="width:44px;height:44px;font-size:0.9rem">${m.avatar}</div>
      <div style="flex:1">
        <div class="fw-600">${m.name}</div>
        <div class="text-sm text-secondary">${m.role}</div>
        <div class="text-xs text-muted">Batch of ${m.batch}</div>
      </div>
      <div style="width:8px;height:8px;border-radius:50%;background:${avColors[m.availability]}" title="${m.availability}"></div>
    </div>
    <div class="flex gap-sm mb-md" style="flex-wrap:wrap">${m.domain.map(d => Badge(d, 'purple')).join('')}</div>
    <div class="flex justify-between items-center text-sm">
      <span class="text-muted">${m.intros} intros · ${m.acceptRate}% accept</span>
      <button class="btn btn-sm btn-primary">Draft Intro</button>
    </div>
  </div>`;
}

export function IntroPreview(mentor, student, problem) {
  return `<div class="intro-preview">
    <div class="intro-preview-content">
      "Hi ${mentor}, ${student} is building in your exact domain and is stuck on ${problem}. You solved a similar challenge at your company. Would 30 minutes help? They have real users and are ready for a focused conversation."
    </div>
    <div class="intro-preview-from">— Draft by Vantage AI · Coordinator review required</div>
  </div>`;
}

export function SearchBar(placeholder = 'Search...') {
  return `<div class="search-box">
    <span class="search-icon">${icon('search', 16)}</span>
    <input class="input" placeholder="${placeholder}" />
  </div>`;
}

export function TagCloud(tags) {
  const max = Math.max(...tags.map(t => t.count));
  return `<div class="tag-cloud">${tags.map(t => {
    const ratio = t.count / max;
    const size = ratio > 0.8 ? 5 : ratio > 0.6 ? 4 : ratio > 0.4 ? 3 : ratio > 0.2 ? 2 : 1;
    return `<span class="tag-item size-${size}" title="${t.count} occurrences · ${t.category}">${t.trending ? '${icon("trending-up", 12)} ' : ''}${t.name}</span>`;
  }).join('')}</div>`;
}

export function initCharts(containerId, config) {
  setTimeout(() => {
    const canvas = document.getElementById(containerId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    Chart.defaults.color = '#94a3b8';
    Chart.defaults.borderColor = 'rgba(255,255,255,0.06)';
    Chart.defaults.font.family = "'Inter', sans-serif";

    new Chart(ctx, config);
  }, 100);
}

export function drawTagGraph(canvasId, nodes) {
  setTimeout(() => {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    ctx.scale(dpr, dpr);

    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    const scaleX = w / 780;
    const scaleY = h / 440;

    const catColors = {
      domain: '#6366f1',
      research: '#a855f7',
      lab: '#06b6d4',
      incubation: '#10b981',
      faculty: '#f59e0b'
    };

    // Draw connections
    ctx.lineWidth = 1;
    nodes.forEach(node => {
      node.connections.forEach(targetId => {
        const target = nodes.find(n => n.id === targetId);
        if (target) {
          ctx.strokeStyle = 'rgba(99,102,241,0.15)';
          ctx.beginPath();
          ctx.moveTo(node.x * scaleX, node.y * scaleY);
          ctx.lineTo(target.x * scaleX, target.y * scaleY);
          ctx.stroke();
        }
      });
    });

    // Draw nodes
    nodes.forEach(node => {
      const x = node.x * scaleX;
      const y = node.y * scaleY;
      const r = node.r * Math.min(scaleX, scaleY) * 0.65;
      const color = catColors[node.cat] || '#6366f1';

      // Glow
      const grad = ctx.createRadialGradient(x, y, 0, x, y, r * 2.5);
      grad.addColorStop(0, color + '30');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, r * 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Node circle
      ctx.fillStyle = color + '40';
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Label
      ctx.fillStyle = '#e2e8f0';
      ctx.font = `${Math.max(9, r * 0.55)}px Inter, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const words = node.label.split(' ');
      if (words.length <= 2 || r < 16) {
        ctx.fillText(node.label, x, y);
      } else {
        const mid = Math.ceil(words.length / 2);
        ctx.fillText(words.slice(0, mid).join(' '), x, y - 6);
        ctx.fillText(words.slice(mid).join(' '), x, y + 6);
      }
    });
  }, 200);
}

// ============================================================
// MODAL & TOAST SYSTEM
// ============================================================

function getModalRoot() {
  return document.getElementById('modal-root') || document.body;
}

/** Show a modal dialog */
export function showModal(title, contentHTML, actions = []) {
  closeModal();
  const root = getModalRoot();
  const modal = document.createElement('div');
  modal.className = 'vantage-modal-overlay';
  modal.id = 'vantage-modal';
  modal.innerHTML = `
    <div class="vantage-modal animate-scale">
      <div class="vantage-modal-header">
        <div class="vantage-modal-title">${title}</div>
        <button class="vantage-modal-close" onclick="window.vantageUI.closeModal()">&times;</button>
      </div>
      <div class="vantage-modal-body">${contentHTML}</div>
      ${actions.length ? `<div class="vantage-modal-footer">
        ${actions.map(a => `<button class="btn btn-${a.variant || 'secondary'}" onclick="${a.action === 'close' ? 'window.vantageUI.closeModal()' : `window.vantageUI.showToast('${a.label} completed','success');window.vantageUI.closeModal()`}">${a.label}</button>`).join('')}
      </div>` : ''}
    </div>`;
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  root.appendChild(modal);
  requestAnimationFrame(() => { window.lucide?.createIcons(); });
}

/** Show a form modal */
export function showFormModal(title, fields, submitLabel, onSubmitMsg) {
  const fieldsHTML = fields.map((f, i) => {
    if (f.type === 'select') {
      return `<div class="vantage-form-group"><label class="vantage-form-label">${f.label}</label><select class="vantage-form-input" id="vform-${i}">${f.options.map(o => `<option>${o}</option>`).join('')}</select></div>`;
    }
    if (f.type === 'textarea') {
      return `<div class="vantage-form-group"><label class="vantage-form-label">${f.label}</label><textarea class="vantage-form-input vantage-form-textarea" id="vform-${i}" placeholder="${f.placeholder || ''}" rows="3"></textarea></div>`;
    }
    return `<div class="vantage-form-group"><label class="vantage-form-label">${f.label}</label><input class="vantage-form-input" id="vform-${i}" type="${f.type || 'text'}" placeholder="${f.placeholder || ''}" /></div>`;
  }).join('');

  showModal(title, fieldsHTML, [
    { label: submitLabel || 'Submit', variant: 'primary', action: 'submit' },
    { label: 'Cancel', variant: 'secondary', action: 'close' },
  ]);
  // Override submit button
  setTimeout(() => {
    const footer = document.querySelector('.vantage-modal-footer');
    if (footer) {
      const submitBtn = footer.querySelector('.btn-primary');
      if (submitBtn) {
        submitBtn.onclick = () => {
          showToast(onSubmitMsg || `${title} submitted successfully`, 'success');
          closeModal();
        };
      }
    }
  }, 50);
}

/** Show a toast notification */
export function showToast(message, type = 'info') {
  const colors = { success: '#10b981', info: '#3b82f6', warning: '#f59e0b', error: '#ef4444' };
  const icons = { success: 'check-circle', info: 'info', warning: 'alert-triangle', error: 'x-circle' };
  const toast = document.createElement('div');
  toast.className = 'vantage-toast animate-in';
  toast.style.borderLeftColor = colors[type] || colors.info;
  toast.innerHTML = `<i data-lucide="${icons[type] || 'info'}" style="width:18px;height:18px;color:${colors[type]}"></i><span>${message}</span>`;
  let container = document.getElementById('vantage-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'vantage-toast-container';
    container.className = 'vantage-toast-container';
    document.body.appendChild(container);
  }
  container.appendChild(toast);
  requestAnimationFrame(() => { window.lucide?.createIcons(); });
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(100%)'; setTimeout(() => toast.remove(), 300); }, 3000);
}

/** Close modal */
export function closeModal() {
  const modal = document.getElementById('vantage-modal');
  if (modal) modal.remove();
}

/** Show detail modal for an entity */
export function showDetailModal(title, details) {
  const content = `<div style="display:flex;flex-direction:column;gap:12px">
    ${details.map(([k, v]) => `<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border)"><span style="font-size:0.85rem;color:var(--text-secondary)">${k}</span><span style="font-weight:600;font-size:0.85rem">${v}</span></div>`).join('')}
  </div>`;
  showModal(title, content, [{ label: 'Close', variant: 'secondary', action: 'close' }]);
}

// ── EXPOSE GLOBALLY ──
window.vantageUI = { showModal, showFormModal, showToast, closeModal, showDetailModal };

