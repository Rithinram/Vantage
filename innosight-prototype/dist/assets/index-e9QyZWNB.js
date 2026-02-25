(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();const O=[{id:1,type:"competition",lucide:"trophy",color:"#f59e0b",title:"SIH 2025 Winner Detected",desc:"Team NeuralForge (Ananya Sharma, Ravi Kumar) won 2nd place in Smart Agriculture track.",time:"2 hours ago",source:"Smart India Hackathon",actions:["Congratulate","Feature on Website","Connect to Investor"]},{id:2,type:"funding",lucide:"banknote",color:"#10b981",title:"Alumni Funding Round Discovered",desc:"Vikram Patel (Class of 2019) raised ₹2.5Cr Seed round for LogiStack from Blume Ventures.",time:"4 hours ago",source:"Crunchbase",actions:["Add to Report","Request Mentorship"]},{id:3,type:"github",lucide:"zap",color:"#8b5cf6",title:"GitHub Milestone — 100+ Stars",desc:`Priya Iyer's open-source ML toolkit "DriftDetect" crossed 100 GitHub stars.`,time:"6 hours ago",source:"GitHub",actions:["Acknowledge","Feature on Dashboard"]},{id:4,type:"news",lucide:"newspaper",color:"#3b82f6",title:"Press Mention in YourStory",desc:"Student startup AgroSense featured in YourStory article on agritech innovation.",time:"8 hours ago",source:"YourStory",actions:["Share","Add to NAAC Report"]},{id:5,type:"stall",lucide:"alert-triangle",color:"#ef4444",title:"Stall Alert — MediTrack AI",desc:"No activity detected for 48 days. Last stage: Prototype. Coordinator check-in recommended.",time:"1 day ago",source:"Vantage AI",actions:["Schedule Check-in","Assign Mentor"]},{id:6,type:"linkedin",lucide:"link",color:"#06b6d4",title:"Alumni Role Change — VP Engineering",desc:"Meera Joshi (2017 batch) promoted to VP Engineering at Razorpay. Potential mentor.",time:"1 day ago",source:"LinkedIn",actions:["Add to Mentor Pool","Send Intro"]},{id:7,type:"competition",lucide:"trophy",color:"#f59e0b",title:"NASSCOM Innovation Award Shortlist",desc:"Team CloudBridge shortlisted for NASSCOM Deep Tech Innovation Award 2025.",time:"2 days ago",source:"NASSCOM",actions:["Congratulate","Track Progress"]},{id:8,type:"funding",lucide:"banknote",color:"#10b981",title:"Pre-Seed Announcement",desc:"DroneYard (founded by 2021 alumni) raised ₹50L from angel investors.",time:"3 days ago",source:"AngelList",actions:["Verify","Add to Portfolio"]}],f=[{id:1,name:"AgroSense",domain:"AgriTech",stage:"MVP",readiness:72,founder:"Ananya Sharma",team:4,stall:!1,signals:12,funding:"₹0",tags:["IoT","ML","Agriculture"]},{id:2,name:"LogiStack",domain:"Logistics",stage:"Revenue",readiness:89,founder:"Vikram Patel",team:6,stall:!1,signals:28,funding:"₹2.5Cr",tags:["SaaS","B2B","Supply Chain"]},{id:3,name:"MediTrack AI",domain:"HealthTech",stage:"Prototype",readiness:35,founder:"Rahul Verma",team:3,stall:!0,signals:4,funding:"₹0",tags:["AI","Healthcare","NLP"]},{id:4,name:"EduBridge",domain:"EdTech",stage:"Idea",readiness:18,founder:"Neha Gupta",team:2,stall:!1,signals:2,funding:"₹0",tags:["EdTech","SaaS","AI"]},{id:5,name:"CloudBridge",domain:"DevTools",stage:"MVP",readiness:64,founder:"Arjun Nair",team:3,stall:!1,signals:9,funding:"₹0",tags:["Cloud","DevOps","API"]},{id:6,name:"DroneYard",domain:"Drones",stage:"Revenue",readiness:78,founder:"Kavya Reddy",team:5,stall:!1,signals:18,funding:"₹50L",tags:["Hardware","AI","Mapping"]},{id:7,name:"FinPulse",domain:"FinTech",stage:"Prototype",readiness:42,founder:"Siddharth Das",team:3,stall:!1,signals:6,funding:"₹0",tags:["FinTech","UPI","Analytics"]},{id:8,name:"GreenRoute",domain:"CleanTech",stage:"Idea",readiness:22,founder:"Pooja Menon",team:2,stall:!1,signals:3,funding:"₹0",tags:["Sustainability","EV","Logistics"]},{id:9,name:"NeuralForge",domain:"AI/ML",stage:"MVP",readiness:58,founder:"Ravi Kumar",team:4,stall:!1,signals:8,funding:"₹0",tags:["Deep Learning","Computer Vision","SaaS"]}],h=[{id:1,name:"Meera Joshi",role:"VP Engineering, Razorpay",domain:["FinTech","SaaS","Payments"],availability:"open",acceptRate:85,intros:12,batch:"2017",avatar:"MJ"},{id:2,name:"Arjun Kapoor",role:"Ex-CTO, Swiggy",domain:["Logistics","Marketplace","Scale"],availability:"limited",acceptRate:72,intros:8,batch:"2015",avatar:"AK"},{id:3,name:"Priya Venkatesh",role:"Partner, Matrix Partners",domain:["VC","B2B SaaS","Enterprise"],availability:"open",acceptRate:90,intros:22,batch:"2014",avatar:"PV"},{id:4,name:"Rohan Mehta",role:"Founder, DataWeave (Acq.)",domain:["AI/ML","Data","Exit"],availability:"open",acceptRate:68,intros:6,batch:"2016",avatar:"RM"},{id:5,name:"Sunita Rao",role:"Head of Innovation, TCS",domain:["Enterprise","R&D","Strategy"],availability:"closed",acceptRate:55,intros:3,batch:"2012",avatar:"SR"},{id:6,name:"Karthik Nair",role:"Angel Investor",domain:["DeepTech","Hardware","Drones"],availability:"open",acceptRate:78,intros:15,batch:"2013",avatar:"KN"}],U=[{id:1,name:"Blume Ventures",type:"VC",focus:["SaaS","FinTech","D2C"],stage:"Seed-Series A",checkSize:"₹50L–5Cr",watching:3},{id:2,name:"Indian Angel Network",type:"Angel Network",focus:["EdTech","HealthTech","AgriTech"],stage:"Pre-Seed–Seed",checkSize:"₹10–50L",watching:5},{id:3,name:"100X.VC",type:"Micro VC",focus:["Dev Tools","AI/ML","B2B"],stage:"Pre-Seed",checkSize:"₹25L",watching:2},{id:4,name:"Nexus Venture Partners",type:"VC",focus:["Enterprise","Cloud","Data"],stage:"Series A–B",checkSize:"₹5–25Cr",watching:1}],w=[{name:"Machine Learning",count:34,category:"domain",trending:!0},{name:"IoT",count:22,category:"domain",trending:!1},{name:"FinTech",count:28,category:"domain",trending:!0},{name:"Computer Vision",count:15,category:"research",trending:!0},{name:"NLP",count:18,category:"research",trending:!1},{name:"Blockchain",count:12,category:"domain",trending:!1},{name:"SaaS",count:31,category:"domain",trending:!0},{name:"HealthTech",count:19,category:"domain",trending:!1},{name:"AgriTech",count:16,category:"domain",trending:!0},{name:"Robotics",count:8,category:"research",trending:!1},{name:"EdTech",count:24,category:"domain",trending:!1},{name:"CleanTech",count:11,category:"domain",trending:!0},{name:"Deep Learning Lab",count:14,category:"lab",trending:!1},{name:"IIIC Incubation Cell",count:42,category:"incubation",trending:!1},{name:"Dr. S. Ramanathan",count:9,category:"faculty",trending:!1},{name:"Dr. A. Kulkarni",count:7,category:"faculty",trending:!1},{name:"Center for AI Research",count:20,category:"lab",trending:!0},{name:"Supply Chain",count:13,category:"domain",trending:!1},{name:"Cybersecurity",count:10,category:"research",trending:!1},{name:"Data Analytics",count:26,category:"domain",trending:!0},{name:"Cloud Computing",count:17,category:"domain",trending:!1},{name:"Drone Technology",count:6,category:"research",trending:!1},{name:"AR/VR",count:5,category:"research",trending:!1},{name:"DevOps",count:14,category:"domain",trending:!1}],D=[{id:1,type:"startup",lucide:"rocket",title:"New Startup Registration — FinPulse",desc:"Siddharth Das submitted FinPulse for incubation. Domain: FinTech. Stage: Prototype.",status:"pending",priority:"high",time:"1 hour ago"},{id:2,type:"mentor",lucide:"users",title:"Mentor Introduction Request",desc:"Ananya Sharma (AgroSense) requested intro to Karthik Nair for hardware mentorship.",status:"pending",priority:"medium",time:"3 hours ago"},{id:3,type:"project",lucide:"clipboard-list",title:"Student Project Approval — AI Water Quality",desc:"Team of 3 submitted capstone project on AI-based water quality monitoring.",status:"pending",priority:"low",time:"5 hours ago"},{id:4,type:"internship",lucide:"briefcase",title:"Internship Recommendation",desc:"Priya Iyer matched for internship at DataWeave based on GitHub activity and ML expertise.",status:"pending",priority:"medium",time:"1 day ago"},{id:5,type:"challenge",lucide:"building-2",title:"Industry Challenge Approval",desc:'TCS submitted "Predictive Maintenance for Smart Factories" challenge. ₹2L prize.',status:"pending",priority:"high",time:"1 day ago"},{id:6,type:"investor",lucide:"gem",title:"Investor Access Request",desc:"Blume Ventures requested access to view curated startup portfolio.",status:"pending",priority:"high",time:"2 days ago"}],S=[{id:1,title:"Predictive Maintenance for Smart Factories",company:"TCS",prize:"₹2,00,000",deadline:"Apr 15, 2026",teams:3,status:"active",domain:"AI/ML",ip:"Shared"},{id:2,title:"Sustainable Last-Mile Delivery Optimization",company:"Flipkart",prize:"₹1,50,000",deadline:"Mar 30, 2026",teams:5,status:"active",domain:"Logistics",ip:"Student-owned"},{id:3,title:"Rural Health Monitoring IoT System",company:"Wipro",prize:"₹1,00,000",deadline:"May 01, 2026",teams:0,status:"open",domain:"HealthTech",ip:"Negotiable"},{id:4,title:"Fintech Compliance Automation",company:"Razorpay",prize:"₹2,50,000",deadline:"Jun 15, 2026",teams:2,status:"active",domain:"FinTech",ip:"Company-owned"}],V=[{name:"Smart India Hackathon 2026",deadline:"Mar 15, 2026",domain:"Open",type:"Hackathon",url:"#"},{name:"NASSCOM AI Innovation Award",deadline:"Apr 01, 2026",domain:"AI/ML",type:"Award",url:"#"},{name:"Toycathon 2026",deadline:"Feb 28, 2026",domain:"Product Design",type:"Innovation",url:"#"},{name:"NITI Aayog Grand Challenge",deadline:"May 20, 2026",domain:"GovTech",type:"Challenge",url:"#"},{name:"IIM Bangalore Startup Summit",deadline:"Mar 25, 2026",domain:"Business",type:"Pitch",url:"#"}],B=[{rank:1,name:"Ananya Sharma",dept:"CSE, 4th Year",score:945,signals:18,badges:["Winner","Active","Featured"]},{rank:2,name:"Priya Iyer",dept:"AI/ML, 3rd Year",score:870,signals:15,badges:["Active","Connected"]},{rank:3,name:"Ravi Kumar",dept:"ECE, 4th Year",score:812,signals:12,badges:["Winner","Innovator"]},{rank:4,name:"Arjun Nair",dept:"IT, 3rd Year",score:756,signals:9,badges:["Active"]},{rank:5,name:"Neha Gupta",dept:"CSE, 2nd Year",score:680,signals:7,badges:["Innovator"]},{rank:6,name:"Siddharth Das",dept:"CSE, 3rd Year",score:645,signals:6,badges:["Builder"]},{rank:7,name:"Kavya Reddy",dept:"Mech, 4th Year",score:610,signals:8,badges:["Winner","Connected"]},{rank:8,name:"Pooja Menon",dept:"Civil, 3rd Year",score:540,signals:5,badges:["Pioneer"]}],u={activeStartups:42,alumniFounders:156,fundingRaised:"₹47.8Cr",competitionWins:28,mentorIntros:89,mentorAcceptRate:73,healthScore:78,studentsTracked:1240,signalsThisWeek:34,naacReportsGenerated:6},J=[{id:"ml",label:"Machine Learning",x:300,y:200,r:28,cat:"domain",connections:["cv","nlp","dl","ai-center","agri","health"]},{id:"cv",label:"Computer Vision",x:480,y:140,r:20,cat:"research",connections:["ml","dl","drone"]},{id:"nlp",label:"NLP",x:180,y:130,r:18,cat:"research",connections:["ml","ai-center"]},{id:"dl",label:"Deep Learning Lab",x:420,y:300,r:22,cat:"lab",connections:["ml","cv","ai-center"]},{id:"ai-center",label:"Center for AI",x:300,y:80,r:26,cat:"lab",connections:["ml","nlp","dl","dr-r"]},{id:"iiic",label:"IIIC Incubation",x:550,y:280,r:30,cat:"incubation",connections:["fintech","saas","agri"]},{id:"fintech",label:"FinTech",x:620,y:180,r:24,cat:"domain",connections:["iiic","saas"]},{id:"saas",label:"SaaS",x:680,y:320,r:22,cat:"domain",connections:["iiic","fintech","cloud"]},{id:"agri",label:"AgriTech",x:130,y:280,r:20,cat:"domain",connections:["ml","iot","iiic"]},{id:"iot",label:"IoT",x:80,y:200,r:18,cat:"domain",connections:["agri","drone"]},{id:"drone",label:"Drone Tech",x:200,y:350,r:16,cat:"research",connections:["iot","cv"]},{id:"health",label:"HealthTech",x:400,y:380,r:20,cat:"domain",connections:["ml","iot"]},{id:"cloud",label:"Cloud/DevOps",x:580,y:400,r:18,cat:"domain",connections:["saas"]},{id:"dr-r",label:"Dr. Ramanathan",x:350,y:30,r:14,cat:"faculty",connections:["ai-center"]}];function n(e,t=16){return`<i data-lucide="${e}" style="width:${t}px;height:${t}px"></i>`}function x(){requestAnimationFrame(()=>{var e;(e=window.lucide)==null||e.createIcons()})}function l(e,t,a,i,s=0){const o=i>0?"positive":i<0?"negative":"",c=i>0?"↑":i<0?"↓":"";return`<div class="stat-card animate-in-delay-${s}">
    <div class="stat-icon">${n(e,22)}</div>
    <div class="stat-value">${a}</div>
    <div class="stat-label">${t}</div>
    ${i!==null?`<span class="stat-change ${o}">${c} ${Math.abs(i)}% this month</span>`:""}
  </div>`}function Q(e,t){return`<div class="signal-item" style="animation-delay:${t*60}ms">
    <div class="signal-dot pulse" style="background:${e.color}"></div>
    <div class="signal-content">
      <div class="signal-title">${e.title}</div>
      <div class="signal-desc">${e.desc}</div>
      <div class="signal-meta">
        <span class="badge badge-gray">${e.source}</span>
        <span class="signal-time">${e.time}</span>
        <div class="signal-actions">
          ${(e.actions||[]).map(a=>`<button class="btn btn-sm btn-secondary">${a}</button>`).join("")}
        </div>
      </div>
    </div>
  </div>`}function r(e,t,a,i=""){return`<div class="glass-card ${i}">
    ${e?`<div class="glass-card-header">
      <div>
        <div class="glass-card-title">${e}</div>
        ${t?`<div class="glass-card-subtitle">${t}</div>`:""}
      </div>
    </div>`:""}
    ${a}
  </div>`}function d(e,t="blue"){return`<span class="badge badge-${t}">${e}</span>`}function I(e,t="All"){return`<div class="filter-pills">
    ${e.map(a=>`<button class="filter-pill ${a===t?"active":""}" onclick="window.filterSignals && window.filterSignals('${a}')">${a}</button>`).join("")}
  </div>`}function Z(e,t,a){return`<div class="kanban-column">
    <div class="kanban-column-header" style="border-bottom-color:${t}">
      <span class="kanban-column-title" style="color:${t}">${e}</span>
      <span class="kanban-count">${a.length}</span>
    </div>
    <div class="kanban-cards">
      ${a.map(i=>`<div class="kanban-card">
        <div class="kanban-card-title">${i.name}</div>
        <div class="kanban-card-meta">${i.founder} · Team of ${i.team}</div>
        <div class="kanban-card-tags">${i.tags.map(s=>d(s,"purple")).join("")}</div>
        <div style="margin-top:8px">
          <div class="progress-bar">
            <div class="progress-bar-fill" style="width:${i.readiness}%"></div>
          </div>
          <div class="text-xs text-muted" style="margin-top:4px">Readiness: ${i.readiness}%</div>
        </div>
      </div>`).join("")}
      ${a.length===0?'<div class="text-muted text-sm" style="padding:12px;text-align:center;">No startups</div>':""}
    </div>
  </div>`}function E(e,t){return`<div style="overflow-x:auto">
    <table class="data-table">
      <thead><tr>${e.map(a=>`<th>${a}</th>`).join("")}</tr></thead>
      <tbody>${t.map(a=>`<tr>${a.map(i=>`<td>${i}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>
  </div>`}function X(e,t){const a=e.priority==="high"?"red":e.priority==="medium"?"yellow":"gray",i={startup:"rgba(99,102,241,0.12)",mentor:"rgba(16,185,129,0.12)",challenge:"rgba(245,158,11,0.12)"};return`<div class="approval-card animate-in-delay-${Math.min(t,4)}">
    <div class="approval-icon" style="background:${i[e.type]||"rgba(59,130,246,0.12)"}">${n(e.lucide,20)}</div>
    <div class="approval-body">
      <div class="flex items-center gap-sm">
        <div class="approval-title">${e.title}</div>
        ${d(e.priority,a)}
      </div>
      <div class="approval-desc">${e.desc}</div>
      <div class="text-xs text-muted">${e.time}</div>
      <div class="approval-actions">
        <button class="btn btn-sm btn-success">${n("check",14)} Approve</button>
        <button class="btn btn-sm btn-danger">${n("x",14)} Decline</button>
        <button class="btn btn-sm btn-ghost">View Details</button>
      </div>
    </div>
  </div>`}function _(e){const t=2*Math.PI*54,a=t*(1-e/100);return`<div class="health-ring">
    <svg viewBox="0 0 120 120">
      <circle cx="60" cy="60" r="54" class="ring-bg"/>
      <circle cx="60" cy="60" r="54" class="ring-fill"
        stroke="#10b981"
        stroke-dasharray="${t}"
        stroke-dashoffset="${a}"/>
    </svg>
    <div class="health-ring-value">
      <div class="health-ring-number">${e}</div>
      <div class="health-ring-label">Health Score</div>
    </div>
  </div>`}function q(e){return e.map(t=>`<div class="leaderboard-item">
    <div class="leaderboard-rank ${t.rank<=3?"top-3":""}">#${t.rank}</div>
    <div class="leaderboard-avatar">${t.name.split(" ").map(a=>a[0]).join("")}</div>
    <div class="leaderboard-info">
      <div class="leaderboard-name">${t.name}</div>
      <div class="leaderboard-detail">${t.dept} · ${t.signals} signals · ${t.badges.map(a=>d(a,"gray")).join(" ")}</div>
    </div>
    <div class="leaderboard-score">${t.score}</div>
  </div>`).join("")}function W(e){const t={open:"var(--success)",limited:"var(--warning)",closed:"var(--danger)"};return`<div class="glass-card glass-card-glow">
    <div class="flex items-center gap-md mb-md">
      <div class="leaderboard-avatar" style="width:44px;height:44px;font-size:0.9rem">${e.avatar}</div>
      <div style="flex:1">
        <div class="fw-600">${e.name}</div>
        <div class="text-sm text-secondary">${e.role}</div>
        <div class="text-xs text-muted">Batch of ${e.batch}</div>
      </div>
      <div style="width:8px;height:8px;border-radius:50%;background:${t[e.availability]}" title="${e.availability}"></div>
    </div>
    <div class="flex gap-sm mb-md" style="flex-wrap:wrap">${e.domain.map(a=>d(a,"purple")).join("")}</div>
    <div class="flex justify-between items-center text-sm">
      <span class="text-muted">${e.intros} intros · ${e.acceptRate}% accept</span>
      <button class="btn btn-sm btn-primary">Draft Intro</button>
    </div>
  </div>`}function ee(e,t,a){return`<div class="intro-preview">
    <div class="intro-preview-content">
      "Hi ${e}, ${t} is building in your exact domain and is stuck on ${a}. You solved a similar challenge at your company. Would 30 minutes help? They have real users and are ready for a focused conversation."
    </div>
    <div class="intro-preview-from">— Draft by Vantage AI · Coordinator review required</div>
  </div>`}function k(e="Search..."){return`<div class="search-box">
    <span class="search-icon">${n("search",16)}</span>
    <input class="input" placeholder="${e}" />
  </div>`}function te(e){const t=Math.max(...e.map(a=>a.count));return`<div class="tag-cloud">${e.map(a=>{const i=a.count/t;return`<span class="tag-item size-${i>.8?5:i>.6?4:i>.4?3:i>.2?2:1}" title="${a.count} occurrences · ${a.category}">${a.trending?'${icon("trending-up", 12)} ':""}${a.name}</span>`}).join("")}</div>`}function A(e,t){setTimeout(()=>{const a=document.getElementById(e);if(!a)return;const i=a.getContext("2d");Chart.defaults.color="#94a3b8",Chart.defaults.borderColor="rgba(255,255,255,0.06)",Chart.defaults.font.family="'Inter', sans-serif",new Chart(i,t)},100)}function ae(e,t){setTimeout(()=>{const a=document.getElementById(e);if(!a)return;const i=a.getContext("2d"),s=window.devicePixelRatio||1;a.width=a.offsetWidth*s,a.height=a.offsetHeight*s,i.scale(s,s);const o=a.offsetWidth,c=a.offsetHeight,m=o/780,C=c/440,K={domain:"#6366f1",research:"#a855f7",lab:"#06b6d4",incubation:"#10b981",faculty:"#f59e0b"};i.lineWidth=1,t.forEach(b=>{b.connections.forEach(y=>{const g=t.find($=>$.id===y);g&&(i.strokeStyle="rgba(99,102,241,0.15)",i.beginPath(),i.moveTo(b.x*m,b.y*C),i.lineTo(g.x*m,g.y*C),i.stroke())})}),t.forEach(b=>{const y=b.x*m,g=b.y*C,$=b.r*Math.min(m,C)*.65,R=K[b.cat]||"#6366f1",L=i.createRadialGradient(y,g,0,y,g,$*2.5);L.addColorStop(0,R+"30"),L.addColorStop(1,"transparent"),i.fillStyle=L,i.beginPath(),i.arc(y,g,$*2.5,0,Math.PI*2),i.fill(),i.fillStyle=R+"40",i.strokeStyle=R,i.lineWidth=1.5,i.beginPath(),i.arc(y,g,$,0,Math.PI*2),i.fill(),i.stroke(),i.fillStyle="#e2e8f0",i.font=`${Math.max(9,$*.55)}px Inter, sans-serif`,i.textAlign="center",i.textBaseline="middle";const M=b.label.split(" ");if(M.length<=2||$<16)i.fillText(b.label,y,g);else{const H=Math.ceil(M.length/2);i.fillText(M.slice(0,H).join(" "),y,g-6),i.fillText(M.slice(H).join(" "),y,g+6)}})},200)}function ie(){return document.getElementById("modal-root")||document.body}function F(e,t,a=[]){T();const i=ie(),s=document.createElement("div");s.className="vantage-modal-overlay",s.id="vantage-modal",s.innerHTML=`
    <div class="vantage-modal animate-scale">
      <div class="vantage-modal-header">
        <div class="vantage-modal-title">${e}</div>
        <button class="vantage-modal-close" onclick="window.vantageUI.closeModal()">&times;</button>
      </div>
      <div class="vantage-modal-body">${t}</div>
      ${a.length?`<div class="vantage-modal-footer">
        ${a.map(o=>`<button class="btn btn-${o.variant||"secondary"}" onclick="${o.action==="close"?"window.vantageUI.closeModal()":`window.vantageUI.showToast('${o.label} completed','success');window.vantageUI.closeModal()`}">${o.label}</button>`).join("")}
      </div>`:""}
    </div>`,s.addEventListener("click",o=>{o.target===s&&T()}),i.appendChild(s),requestAnimationFrame(()=>{var o;(o=window.lucide)==null||o.createIcons()})}function se(e,t,a,i){const s=t.map((o,c)=>o.type==="select"?`<div class="vantage-form-group"><label class="vantage-form-label">${o.label}</label><select class="vantage-form-input" id="vform-${c}">${o.options.map(m=>`<option>${m}</option>`).join("")}</select></div>`:o.type==="textarea"?`<div class="vantage-form-group"><label class="vantage-form-label">${o.label}</label><textarea class="vantage-form-input vantage-form-textarea" id="vform-${c}" placeholder="${o.placeholder||""}" rows="3"></textarea></div>`:`<div class="vantage-form-group"><label class="vantage-form-label">${o.label}</label><input class="vantage-form-input" id="vform-${c}" type="${o.type||"text"}" placeholder="${o.placeholder||""}" /></div>`).join("");F(e,s,[{label:a||"Submit",variant:"primary",action:"submit"},{label:"Cancel",variant:"secondary",action:"close"}]),setTimeout(()=>{const o=document.querySelector(".vantage-modal-footer");if(o){const c=o.querySelector(".btn-primary");c&&(c.onclick=()=>{z(i||`${e} submitted successfully`,"success"),T()})}},50)}function z(e,t="info"){const a={success:"#10b981",info:"#3b82f6",warning:"#f59e0b",error:"#ef4444"},i={success:"check-circle",info:"info",warning:"alert-triangle",error:"x-circle"},s=document.createElement("div");s.className="vantage-toast animate-in",s.style.borderLeftColor=a[t]||a.info,s.innerHTML=`<i data-lucide="${i[t]||"info"}" style="width:18px;height:18px;color:${a[t]}"></i><span>${e}</span>`;let o=document.getElementById("vantage-toast-container");o||(o=document.createElement("div"),o.id="vantage-toast-container",o.className="vantage-toast-container",document.body.appendChild(o)),o.appendChild(s),requestAnimationFrame(()=>{var c;(c=window.lucide)==null||c.createIcons()}),setTimeout(()=>{s.style.opacity="0",s.style.transform="translateX(100%)",setTimeout(()=>s.remove(),300)},3e3)}function T(){const e=document.getElementById("vantage-modal");e&&e.remove()}function ne(e,t){const a=`<div style="display:flex;flex-direction:column;gap:12px">
    ${t.map(([i,s])=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border)"><span style="font-size:0.85rem;color:var(--text-secondary)">${i}</span><span style="font-weight:600;font-size:0.85rem">${s}</span></div>`).join("")}
  </div>`;F(e,a,[{label:"Close",variant:"secondary",action:"close"}])}window.vantageUI={showModal:F,showFormModal:se,showToast:z,closeModal:T,showDetailModal:ne};const p=()=>window.vantageUI;function oe(e){const t=document.getElementById("page-content");if(!t)return;const a=xe[e];a&&(t.innerHTML=a(),le(e))}function le(e){e==="dashboard"&&ce(),e==="tags"&&ae("tag-graph-canvas",J),e==="reports"&&he(),e==="mentors"&&ue(),x(),re()}function re(e){document.querySelectorAll(".signal-actions .btn").forEach(t=>{t.addEventListener("click",()=>{p().showToast(`${t.textContent.trim()} — action initiated`,"success")})}),document.querySelectorAll(".search-box .input").forEach(t=>{t.addEventListener("input",a=>{var o;const i=a.target.value.toLowerCase(),s=(o=t.closest(".content, .public-content"))==null?void 0:o.querySelectorAll(".glass-card, .kanban-card, tr");s==null||s.forEach(c=>{const m=c.textContent.toLowerCase();c.style.display=m.includes(i)||!i?"":"none"})})}),document.querySelectorAll(".filter-pill").forEach(t=>{t.addEventListener("click",()=>{t.parentElement.querySelectorAll(".filter-pill").forEach(a=>a.classList.remove("active")),t.classList.add("active"),p().showToast(`Filtered: ${t.textContent}`,"info")})})}function de(){return`
    <div class="page-header">
      <div class="page-header-left">
        <div class="page-title">${n("sparkles",20)} Ecosystem Intelligence</div>
        <div class="page-subtitle">Real-time signals from your innovation ecosystem</div>
      </div>
      <div class="page-header-actions">
        <button class="btn btn-secondary" onclick="window.adminActions.exportFeed()">${n("download",15)} Export Feed</button>
        <button class="btn btn-primary" onclick="window.adminActions.runDiscovery()">${n("zap",15)} Run Discovery Now</button>
      </div>
    </div>
    <div class="stats-grid">
      ${l("rocket","Active Startups",u.activeStartups,12,0)}
      ${l("users","Alumni Founders",u.alumniFounders,8,1)}
      ${l("banknote","Funding Raised",u.fundingRaised,23,2)}
      ${l("trophy","Competition Wins",u.competitionWins,15,3)}
      ${l("handshake","Mentor Intros",u.mentorIntros,18,4)}
    </div>
    <div class="grid-sidebar">
      <div>
        <div class="section">
          <div class="section-header">
            <div class="section-title">Signal Feed</div>
            ${I(["All","Competition","Funding","GitHub","News","Alerts"],"All")}
          </div>
          <div class="signal-feed">${O.map((e,t)=>Q(e,t)).join("")}</div>
        </div>
      </div>
      <div>
        <div class="section">${r("Signal Activity","Last 30 days",'<div class="chart-container"><canvas id="chart-signals"></canvas></div>')}</div>
        <div class="section" style="margin-top:16px">${r("Signal Distribution","By type",'<div class="chart-container" style="height:220px"><canvas id="chart-types"></canvas></div>')}</div>
        <div class="section" style="margin-top:16px">
          ${r("Suggested Actions",null,`
            <div style="display:flex;flex-direction:column;gap:8px">
              <div class="approval-card" style="padding:12px 14px;cursor:pointer" onclick="window.vantageUI.showToast('Scheduling check-ins for stalled startups...','info')"><span>${n("alert-triangle",18)}</span><div class="approval-body"><div class="approval-title text-sm">3 startups show stall signals</div><div class="text-xs text-muted">Schedule coordinator check-ins</div></div></div>
              <div class="approval-card" style="padding:12px 14px;cursor:pointer" onclick="window.vantageUI.showToast('Opening mentor matches for review...','info')"><span>${n("users",18)}</span><div class="approval-body"><div class="approval-title text-sm">5 mentor matches ready</div><div class="text-xs text-muted">Review and send introductions</div></div></div>
              <div class="approval-card" style="padding:12px 14px;cursor:pointer" onclick="window.vantageUI.showToast('Opening NAAC report draft...','info')"><span>${n("file-text",18)}</span><div class="approval-body"><div class="approval-title text-sm">NAAC report draft ready</div><div class="text-xs text-muted">Criterion 3.4 evidence compiled</div></div></div>
            </div>`)}
        </div>
      </div>
    </div>`}function ce(){A("chart-signals",{type:"line",data:{labels:["Week 1","Week 2","Week 3","Week 4"],datasets:[{label:"Signals",data:[18,24,31,34],borderColor:"#6366f1",backgroundColor:"rgba(99,102,241,0.1)",fill:!0,tension:.4,pointRadius:4,pointBackgroundColor:"#6366f1"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{y:{beginAtZero:!0,grid:{color:"rgba(255,255,255,0.04)"}},x:{grid:{display:!1}}}}}),A("chart-types",{type:"doughnut",data:{labels:["Competition","Funding","GitHub","News","LinkedIn"],datasets:[{data:[28,18,22,15,17],backgroundColor:["#f59e0b","#10b981","#8b5cf6","#3b82f6","#06b6d4"],borderWidth:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{padding:12,usePointStyle:!0,pointStyle:"circle"}}},cutout:"60%"}})}function pe(){const e=["Idea","Prototype","MVP","Revenue","Funded"],t=["#64748b","#f59e0b","#3b82f6","#10b981","#a855f7"],a=["lightbulb","wrench","smartphone","banknote","trophy"],i=e.map(s=>f.filter(o=>o.stage===s));return`
    <div class="page-header">
      <div class="page-header-left">
        <div class="page-title">${n("rocket",20)} Startup Portfolio</div>
        <div class="page-subtitle">${f.length} tracked startups across all stages</div>
      </div>
      <div class="page-header-actions">${k("Search startups...")}<button class="btn btn-primary" onclick="window.adminActions.addStartup()">${n("plus",15)} Add Startup</button></div>
    </div>
    <div class="stats-grid" style="grid-template-columns:repeat(5,1fr)">${e.map((s,o)=>l(a[o],s,i[o].length,null,o)).join("")}</div>
    <div class="section">
      <div class="section-header"><div class="section-title">Stage Pipeline</div><button class="btn btn-sm btn-secondary" onclick="window.vantageUI.showToast('Switched to list view','info')">View as List</button></div>
      <div class="kanban-board">${e.map((s,o)=>Z(s,t[o],i[o])).join("")}</div>
    </div>
    <div class="section" style="margin-top:24px">
      ${r("Stall Alerts","Startups with no activity for 45+ days",`<div class="signal-feed">${f.filter(s=>s.stall).map(s=>`<div class="signal-item"><div class="signal-dot pulse" style="background:var(--danger)"></div><div class="signal-content"><div class="signal-title">${n("alert-triangle",14)} ${s.name} — Stalled at ${s.stage}</div><div class="signal-desc">No activity for 48 days. Founded by ${s.founder}. Readiness: ${s.readiness}%</div><div class="signal-actions" style="margin-top:8px"><button class="btn btn-sm btn-primary" onclick="window.vantageUI.showToast('Check-in scheduled for ${s.name}','success')">Schedule Check-in</button><button class="btn btn-sm btn-secondary" onclick="window.adminActions.assignMentor('${s.name}')">Assign Mentor</button></div></div></div>`).join("")}${f.filter(s=>s.stall).length===0?'<div class="text-muted text-sm" style="padding:12px">No stalls detected</div>':""}</div>`)}
    </div>
    <div class="section" style="margin-top:24px">
      ${r("Full Registry",null,E(["Startup","Domain","Stage","Readiness","Founder","Signals","Funding","Status"],f.map(s=>[`<span class="fw-600">${s.name}</span>`,d(s.domain,"purple"),d(s.stage,s.stage==="Revenue"?"green":s.stage==="MVP"?"blue":s.stage==="Prototype"?"yellow":"gray"),`<div class="progress-bar" style="width:80px"><div class="progress-bar-fill" style="width:${s.readiness}%"></div></div><span class="text-xs text-muted">${s.readiness}%</span>`,s.founder,s.signals,s.funding,s.stall?d("Stalled","red"):d("Active","green")])))}
    </div>`}function ve(){return`
    <div class="page-header">
      <div class="page-header-left">
        <div class="page-title">${n("handshake",20)} Mentor & Investor Pipeline</div>
        <div class="page-subtitle">Warm introductions · Engagement analytics · Investor watchlist</div>
      </div>
      <div class="page-header-actions">${k("Search mentors or investors...")}<button class="btn btn-primary" onclick="window.adminActions.addMentor()">${n("plus",15)} Add Mentor</button></div>
    </div>
    <div class="stats-grid" style="grid-template-columns:repeat(4,1fr)">
      ${l("handshake","Total Mentors",h.length,15,0)}
      ${l("mail","Intros Sent",66,22,1)}
      ${l("check-circle","Acceptance Rate","73%",5,2)}
      ${l("gem","Watching Investors",U.length,10,3)}
    </div>
    <div class="grid-sidebar">
      <div>
        <div class="section">
          <div class="section-header"><div class="section-title">Mentor Directory</div>${I(["All","Available","FinTech","AI/ML","SaaS"])}</div>
          <div class="grid-2" style="gap:12px">${h.map(e=>W(e)).join("")}</div>
        </div>
        <div class="section" style="margin-top:24px">
          <div class="section-title mb-md">Warm Introduction Preview</div>
          ${ee("Meera Joshi","Ananya Sharma (AgroSense)","pricing architecture for B2B IoT hardware")}
          <div style="margin-top:12px;display:flex;gap:8px">
            <button class="btn btn-primary" onclick="window.vantageUI.showToast('Introduction approved and sent to Meera Joshi','success')">${n("check",14)} Approve & Send</button>
            <button class="btn btn-secondary" onclick="window.adminActions.editIntroDraft()">${n("pencil",14)} Edit Draft</button>
            <button class="btn btn-ghost" onclick="window.vantageUI.showToast('Draft discarded','info')">Discard</button>
          </div>
        </div>
      </div>
      <div>
        <div class="section">${r("Engagement Trend","Monthly intros & acceptance",'<div class="chart-container"><canvas id="chart-mentor-engagement"></canvas></div>')}</div>
        <div class="section" style="margin-top:16px">
          ${r("Investor Watchlist",null,`<div style="display:flex;flex-direction:column;gap:10px">${U.map(e=>`<div class="glass-card" style="padding:12px 14px"><div class="flex justify-between items-center mb-sm"><div class="fw-600">${e.name}</div>${d(e.type,"cyan")}</div><div class="text-xs text-muted">${e.focus.join(" · ")}</div><div class="flex justify-between items-center" style="margin-top:8px"><span class="text-xs text-secondary">${e.stage} · ${e.checkSize}</span><span class="text-xs text-accent">${e.watching} watching</span></div></div>`).join("")}</div>`)}
        </div>
      </div>
    </div>`}function ue(){A("chart-mentor-engagement",{type:"bar",data:{labels:["Sep","Oct","Nov","Dec","Jan","Feb"],datasets:[{label:"Intros Sent",data:[8,12,10,14,18,22],backgroundColor:"rgba(99,102,241,0.5)",borderRadius:4},{label:"Accepted",data:[5,8,7,11,14,16],backgroundColor:"rgba(16,185,129,0.5)",borderRadius:4}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{usePointStyle:!0,pointStyle:"circle",padding:12}}},scales:{y:{beginAtZero:!0,grid:{color:"rgba(255,255,255,0.04)"}},x:{grid:{display:!1}}}}})}function ge(){return`
    <div class="page-header">
      <div class="page-header-left">
        <div class="page-title">${n("brain",20)} Tag Discovery Engine</div>
        <div class="page-subtitle">AI-powered ecosystem detection · Relationships · Clusters</div>
      </div>
      <div class="page-header-actions">${k("Search tags, domains, faculty...")}<button class="btn btn-primary" onclick="window.vantageUI.showToast('Tag scan refreshed — 3 new tags discovered','success')">${n("refresh-cw",15)} Refresh Tags</button></div>
    </div>
    <div class="stats-grid" style="grid-template-columns:repeat(5,1fr)">
      ${l("tag","Total Tags",w.length,18,0)}
      ${l("trending-up","Trending",w.filter(e=>e.trending).length,25,1)}
      ${l("landmark","Institutions",1,null,2)}
      ${l("flask-conical","Faculty Mapped",w.filter(e=>e.category==="faculty").length,null,3)}
      ${l("microscope","Research Labs",w.filter(e=>e.category==="lab").length,null,4)}
    </div>
    <div class="section">
      <div class="section-header">
        <div class="section-title">${n("git-branch",16)} Ecosystem Relationship Graph</div>
        <div class="flex gap-sm">${["domain","research","lab","incubation","faculty"].map(e=>{const t={domain:"#6366f1",research:"#a855f7",lab:"#06b6d4",incubation:"#10b981",faculty:"#f59e0b"};return`<span class="badge" style="background:${t[e]}20;color:${t[e]}">${e}</span>`}).join("")}</div>
      </div>
      <div class="tag-graph-container"><canvas id="tag-graph-canvas"></canvas></div>
    </div>
    <div class="grid-2" style="margin-top:24px">
      <div><div class="section">${r("Tag Cloud","Sized by frequency",te(w))}</div></div>
      <div><div class="section">
        ${r("Trending Tags","Rising in the last 30 days",`<div style="display:flex;flex-direction:column;gap:8px">${w.filter(e=>e.trending).map(e=>`<div class="flex items-center justify-between" style="padding:8px 10px;background:var(--glass-bg);border-radius:var(--radius-sm)"><div class="flex items-center gap-sm">${n("trending-up",16)}<div><div class="fw-600 text-sm">${e.name}</div><div class="text-xs text-muted">${e.category} · ${e.count} occurrences</div></div></div><span class="stat-change positive">trending</span></div>`).join("")}</div>`)}
      </div></div>
    </div>
    <div class="section" style="margin-top:24px">
      ${r("Tag-Entity Mapping",null,E(["Tag","Category","Occurrences","Trending","Connected"],w.slice(0,14).map(e=>[`<span class="fw-600">${e.name}</span>`,d(e.category,e.category==="domain"?"blue":e.category==="research"?"purple":e.category==="lab"?"cyan":e.category==="faculty"?"yellow":"green"),e.count,e.trending?'<span style="color:var(--warning)">Yes</span>':'<span class="text-muted">—</span>',`${d(Math.floor(Math.random()*5+1)+" startups","blue")} ${d(Math.floor(Math.random()*3+1)+" mentors","green")}`])))}
    </div>`}function me(){return`
    <div class="page-header">
      <div class="page-header-left">
        <div class="page-title">${n("check-circle",20)} Approvals & Recommendations</div>
        <div class="page-subtitle">Command center for ecosystem decisions</div>
      </div>
      <div class="page-header-actions">${I(["All","Startup","Mentor","Project","Internship","Challenge","Investor"])}</div>
    </div>
    <div class="stats-grid" style="grid-template-columns:repeat(4,1fr)">
      ${l("clipboard-list","Pending",D.filter(e=>e.status==="pending").length,null,0)}
      ${l("alert-circle","High Priority",D.filter(e=>e.priority==="high").length,null,1)}
      ${l("check-circle-2","Approved Today",8,null,2)}
      ${l("clock","Avg Response","4.2 hrs",null,3)}
    </div>
    <div class="grid-sidebar">
      <div><div class="section"><div class="section-title mb-md">Pending Approvals</div><div style="display:flex;flex-direction:column;gap:12px">${D.map((e,t)=>X(e,t)).join("")}</div></div></div>
      <div>
        <div class="section">${r("AI Recommendations",null,`<div style="display:flex;flex-direction:column;gap:10px">
          <div class="glass-card" style="padding:12px;background:rgba(99,102,241,0.06);border-color:rgba(99,102,241,0.15)"><div class="fw-600 text-sm" style="color:var(--accent-light)">${n("lightbulb",14)} Internship Match</div><div class="text-xs text-secondary" style="margin-top:4px">Priya Iyer's ML skills (92% match) align with DataWeave's open intern role.</div><div style="margin-top:8px"><button class="btn btn-sm btn-primary" onclick="window.vantageUI.showToast('Internship recommendation sent to Priya Iyer','success')">Send Recommendation</button></div></div>
          <div class="glass-card" style="padding:12px;background:rgba(16,185,129,0.06);border-color:rgba(16,185,129,0.15)"><div class="fw-600 text-sm" style="color:var(--success)">${n("handshake",14)} Mentor Pairing</div><div class="text-xs text-secondary" style="margin-top:4px">CloudBridge has 87% profile match with Arjun Kapoor (Ex-CTO, Swiggy).</div><div style="margin-top:8px"><button class="btn btn-sm btn-success" onclick="window.adminActions.reviewMatch('CloudBridge','Arjun Kapoor')">Review Match</button></div></div>
          <div class="glass-card" style="padding:12px;background:rgba(245,158,11,0.06);border-color:rgba(245,158,11,0.15)"><div class="fw-600 text-sm" style="color:var(--warning)">${n("alert-triangle",14)} Stall Intervention</div><div class="text-xs text-secondary" style="margin-top:4px">MediTrack AI stalled 48 days. Recommend assigning HealthTech mentor.</div><div style="margin-top:8px"><button class="btn btn-sm btn-secondary" onclick="window.vantageUI.showToast('Action plan created for MediTrack AI','success')">Create Action Plan</button></div></div>
        </div>`)}</div>
        <div class="section" style="margin-top:16px">${r("Recent Activity",null,`<div class="timeline">${[{time:"10 min ago",title:"Approved: FinPulse startup registration",desc:"By Dr. Ramesh K."},{time:"2 hours ago",title:"Sent mentor intro: Meera to AgroSense",desc:"Accepted within 15 min"},{time:"1 day ago",title:"Declined: Duplicate project submission",desc:"Notified student"}].map(e=>`<div class="timeline-item"><div class="timeline-item-time">${e.time}</div><div class="timeline-item-title">${e.title}</div><div class="timeline-item-desc">${e.desc}</div></div>`).join("")}</div>`)}</div>
      </div>
    </div>`}function be(){return`
    <div class="page-header">
      <div class="page-header-left">
        <div class="page-title">${n("bar-chart-3",20)} Reports & Analytics</div>
        <div class="page-subtitle">NAAC auto-reports · Ecosystem health · Cohort comparison</div>
      </div>
      <div class="page-header-actions"><button class="btn btn-secondary" onclick="window.vantageUI.showToast('Exporting all reports as ZIP...','info')">${n("download",15)} Export All</button><button class="btn btn-primary" onclick="window.vantageUI.showToast('NAAC Report generation started. This may take a moment...','info')">${n("file-text",15)} Generate NAAC Report</button></div>
    </div>
    <div class="grid-3" style="margin-bottom:24px">
      <div class="glass-card" style="text-align:center;padding:28px">${_(u.healthScore)}<div class="text-sm text-secondary" style="margin-top:12px">Ecosystem Health Score</div><div class="text-xs text-muted">Updated weekly · Peer rank: Top 15%</div></div>
      <div class="glass-card"><div class="glass-card-title mb-md">NAAC Quick Reports</div>${["3.2 — Innovation Ecosystem","3.3 — Research Funding","3.4 — Innovation Output"].map(e=>`<div class="flex items-center justify-between" style="padding:10px 0;border-bottom:1px solid var(--border)"><div><div class="text-sm fw-600">Criterion ${e}</div><div class="text-xs text-muted">Auto-generated · Last: 2 days ago</div></div><button class="btn btn-sm btn-primary" onclick="window.vantageUI.showToast('Generating Criterion ${e} report...','success')">Generate</button></div>`).join("")}<div style="margin-top:12px;display:flex;gap:8px"><button class="btn btn-sm btn-secondary" onclick="window.vantageUI.showToast('PDF report downloaded','success')">${n("file-text",13)} PDF</button><button class="btn btn-sm btn-secondary" onclick="window.vantageUI.showToast('Excel report downloaded','success')">${n("table",13)} Excel</button><button class="btn btn-sm btn-secondary" onclick="window.vantageUI.showToast('PPT report downloaded','success')">${n("presentation",13)} PPT</button></div></div>
      <div class="glass-card"><div class="glass-card-title mb-md">Key Metrics</div>${[["Students Tracked",u.studentsTracked],["Signals This Week",u.signalsThisWeek],["NAAC Reports Generated",u.naacReportsGenerated],["Mentor Accept Rate",u.mentorAcceptRate+"%"],["Active Partnerships","4"]].map(([e,t])=>`<div class="flex justify-between items-center" style="padding:8px 0;border-bottom:1px solid var(--border)"><span class="text-sm text-secondary">${e}</span><span class="fw-700">${t}</span></div>`).join("")}</div>
    </div>
    <div class="grid-2">
      <div class="section">${r("Funding Trend","Quarterly",'<div class="chart-container"><canvas id="chart-funding"></canvas></div>')}</div>
      <div class="section">${r("Ecosystem Radar","Multi-dimensional health",'<div class="chart-container"><canvas id="chart-radar"></canvas></div>')}</div>
    </div>`}function he(){A("chart-funding",{type:"bar",data:{labels:["Q1 2025","Q2 2025","Q3 2025","Q4 2025","Q1 2026"],datasets:[{label:"Funding (Cr)",data:[2.1,5.8,8.2,14.5,17.2],backgroundColor:"rgba(99,102,241,0.5)",borderRadius:6,borderSkipped:!1}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{y:{beginAtZero:!0,grid:{color:"rgba(255,255,255,0.04)"}},x:{grid:{display:!1}}}}}),A("chart-radar",{type:"radar",data:{labels:["Startups","Competitions","Funding","Mentorship","Alumni","Industry"],datasets:[{label:"Your Institution",data:[82,75,68,88,70,55],borderColor:"#6366f1",backgroundColor:"rgba(99,102,241,0.15)",pointBackgroundColor:"#6366f1"},{label:"Peer Average",data:[65,60,55,50,60,45],borderColor:"#64748b",backgroundColor:"rgba(100,116,139,0.08)",pointBackgroundColor:"#64748b",borderDash:[4,4]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{usePointStyle:!0,padding:12}}},scales:{r:{grid:{color:"rgba(255,255,255,0.06)"},pointLabels:{font:{size:11}},ticks:{display:!1},beginAtZero:!0,max:100}}}})}function ye(){return`
    <div class="page-header">
      <div class="page-header-left">
        <div class="page-title">${n("building-2",20)} Industry Challenges</div>
        <div class="page-subtitle">Corporate R&D problems matched to student teams</div>
      </div>
      <div class="page-header-actions"><button class="btn btn-primary" onclick="window.adminActions.postChallenge()">${n("plus",15)} Post New Challenge</button></div>
    </div>
    <div class="stats-grid" style="grid-template-columns:repeat(4,1fr)">
      ${l("building-2","Active Challenges",S.filter(e=>e.status==="active").length,null,0)}
      ${l("clipboard-list","Open for Teams",S.filter(e=>e.status==="open").length,null,1)}
      ${l("users","Teams Engaged",S.reduce((e,t)=>e+t.teams,0),null,2)}
      ${l("banknote","Total Prize Pool","₹7L",null,3)}
    </div>
    <div style="display:flex;flex-direction:column;gap:14px">
      ${S.map(e=>`<div class="glass-card glass-card-glow"><div class="flex items-center justify-between mb-md"><div><div class="fw-700">${e.title}</div><div class="text-sm text-secondary">${e.company} · ${e.domain}</div></div><div class="flex gap-sm items-center">${d(e.status==="active"?"Active":"Open",e.status==="active"?"green":"blue")} ${d("IP: "+e.ip,"gray")}</div></div><div class="flex gap-lg items-center text-sm"><span>${n("banknote",14)} Prize: <span class="fw-600">${e.prize}</span></span><span>${n("calendar",14)} Deadline: <span class="fw-600">${e.deadline}</span></span><span>${n("users",14)} Teams: <span class="fw-600">${e.teams}</span></span></div><div class="flex gap-sm" style="margin-top:14px"><button class="btn btn-sm btn-primary" onclick="window.vantageUI.showToast('Team matching algorithm running for ${e.title}...','info')">Match Teams</button><button class="btn btn-sm btn-secondary" onclick="window.adminActions.viewChallengeProgress('${e.title}')">View Progress</button><button class="btn btn-sm btn-ghost" onclick="window.adminActions.editChallenge('${e.title}')">Edit</button></div></div>`).join("")}
    </div>`}function fe(){const e=[{name:"Ananya Sharma",role:"Student",dept:"CSE",status:"Active",linked:!0},{name:"Priya Iyer",role:"Student",dept:"AI/ML",status:"Active",linked:!0},{name:"Vikram Patel",role:"Alumni",dept:"CSE 2019",status:"Active",linked:!0},{name:"Meera Joshi",role:"Mentor",dept:"External",status:"Active",linked:!1},{name:"Arjun Kapoor",role:"Mentor",dept:"External",status:"Limited",linked:!1},{name:"Blume Ventures",role:"Investor",dept:"—",status:"Pending",linked:!1},{name:"Dr. Ramesh K.",role:"Coordinator",dept:"Admin",status:"Active",linked:!0},{name:"Rahul Verma",role:"Student",dept:"ECE",status:"Inactive",linked:!1}];return`
    <div class="page-header">
      <div class="page-header-left">
        <div class="page-title">${n("user-cog",20)} User & Access Control</div>
        <div class="page-subtitle">Manage roles, permissions, and visibility</div>
      </div>
      <div class="page-header-actions">${k("Search users...")}<button class="btn btn-primary" onclick="window.adminActions.inviteUser()">${n("user-plus",15)} Invite User</button></div>
    </div>
    <div class="stats-grid" style="grid-template-columns:repeat(5,1fr)">
      ${l("graduation-cap","Students",e.filter(t=>t.role==="Student").length,null,0)}
      ${l("award","Alumni",e.filter(t=>t.role==="Alumni").length,null,1)}
      ${l("handshake","Mentors",e.filter(t=>t.role==="Mentor").length,null,2)}
      ${l("gem","Investors",e.filter(t=>t.role==="Investor").length,null,3)}
      ${l("shield","Coordinators",e.filter(t=>t.role==="Coordinator").length,null,4)}
    </div>
    <div class="section">
      ${r("All Users",null,E(["User","Role","Department","Status","Profile Linked","Actions"],e.map(t=>[`<div class="flex items-center gap-sm"><div class="leaderboard-avatar" style="width:30px;height:30px;font-size:0.65rem">${t.name.split(" ").map(a=>a[0]).join("")}</div><span class="fw-600">${t.name}</span></div>`,d(t.role,t.role==="Student"?"blue":t.role==="Mentor"?"green":t.role==="Alumni"?"purple":t.role==="Investor"?"cyan":"yellow"),t.dept,d(t.status,t.status==="Active"?"green":t.status==="Pending"?"yellow":"red"),t.linked?'<span style="color:var(--success)">Linked</span>':'<span class="text-muted">—</span>',`<div class="flex gap-sm"><button class="btn btn-sm btn-ghost" onclick="window.adminActions.editUser('${t.name}')">Edit</button><button class="btn btn-sm btn-ghost" onclick="window.adminActions.managePermissions('${t.name}')">Permissions</button></div>`])))}
    </div>`}const xe={dashboard:de,startups:pe,mentors:ve,tags:ge,approvals:me,reports:be,challenges:ye,users:fe};window.adminActions={exportFeed(){const e=`Type,Title,Description,Source,Time
`+O.map(i=>`${i.type},"${i.title}","${i.desc}",${i.source},${i.time}`).join(`
`),t=new Blob([e],{type:"text/csv"}),a=document.createElement("a");a.href=URL.createObjectURL(t),a.download="vantage-signal-feed.csv",a.click(),p().showToast("Signal feed exported as CSV","success")},runDiscovery(){p().showToast("Discovery scan initiated — scanning GitHub, LinkedIn, Crunchbase...","info"),setTimeout(()=>p().showToast("Discovery complete — 3 new signals found","success"),2e3)},addStartup(){p().showFormModal("Register New Startup",[{label:"Startup Name",placeholder:"e.g. AgroSense"},{label:"Domain",type:"select",options:["AgriTech","FinTech","HealthTech","EdTech","AI/ML","DevTools","CleanTech","Logistics","Other"]},{label:"Founder Name",placeholder:"e.g. Ananya Sharma"},{label:"Team Size",type:"number",placeholder:"3"},{label:"Stage",type:"select",options:["Idea","Prototype","MVP","Revenue"]},{label:"Description",type:"textarea",placeholder:"Brief description of the startup..."}],"Register Startup","Startup registered successfully and added to portfolio")},assignMentor(e){p().showFormModal(`Assign Mentor to ${e}`,[{label:"Select Mentor",type:"select",options:h.map(t=>t.name)},{label:"Notes",type:"textarea",placeholder:"Any specific focus areas..."}],"Assign",`Mentor assigned to ${e}`)},addMentor(){p().showFormModal("Add New Mentor",[{label:"Full Name",placeholder:"e.g. Meera Joshi"},{label:"Current Role",placeholder:"e.g. VP Engineering, Razorpay"},{label:"Domains",placeholder:"e.g. FinTech, SaaS (comma-separated)"},{label:"Alumni Batch Year",type:"number",placeholder:"2017"},{label:"Availability",type:"select",options:["Open","Limited","Closed"]}],"Add Mentor","Mentor added to the directory")},editIntroDraft(){p().showFormModal("Edit Introduction Draft",[{label:"Mentor",placeholder:"Meera Joshi"},{label:"Student / Startup",placeholder:"Ananya Sharma (AgroSense)"},{label:"Introduction Message",type:"textarea",placeholder:"Hi Meera, ..."}],"Save Draft","Introduction draft updated")},reviewMatch(e,t){p().showDetailModal(`Match Review: ${e} × ${t}`,[["Startup",e],["Mentor",t],["Match Score","87%"],["Domain Overlap","Logistics, Marketplace"],["Mentor Availability","Limited"],["Recommendation","Schedule 30-min intro call"]])},postChallenge(){p().showFormModal("Post New Industry Challenge",[{label:"Challenge Title",placeholder:"e.g. Predictive Maintenance for Factories"},{label:"Company",placeholder:"e.g. TCS"},{label:"Domain",type:"select",options:["AI/ML","Logistics","HealthTech","FinTech","IoT","CleanTech","Other"]},{label:"Prize Amount",placeholder:"e.g. 2,00,000"},{label:"Deadline",type:"date"},{label:"IP Ownership",type:"select",options:["Student-owned","Company-owned","Shared","Negotiable"]}],"Publish Challenge","Challenge published and open for team registration")},viewChallengeProgress(e){p().showDetailModal(`Progress: ${e}`,[["Status","Active"],["Teams Registered","3"],["Submissions","1 draft, 0 final"],["Days Remaining","45"],["Mentor Assigned","Yes"],["Last Activity","2 days ago"]])},editChallenge(e){p().showFormModal(`Edit Challenge: ${e}`,[{label:"Title",placeholder:e},{label:"Prize Amount",placeholder:"₹2,00,000"},{label:"Deadline",type:"date"},{label:"Status",type:"select",options:["Open","Active","Closed"]}],"Update",`Challenge "${e}" updated`)},inviteUser(){p().showFormModal("Invite New User",[{label:"Full Name",placeholder:"e.g. Priya Menon"},{label:"Email",type:"email",placeholder:"priya@college.edu"},{label:"Role",type:"select",options:["Student","Alumni","Mentor","Investor","Coordinator"]},{label:"Department",placeholder:"e.g. CSE"}],"Send Invitation","Invitation sent successfully")},editUser(e){p().showFormModal(`Edit User: ${e}`,[{label:"Full Name",placeholder:e},{label:"Email",type:"email",placeholder:"user@college.edu"},{label:"Role",type:"select",options:["Student","Alumni","Mentor","Investor","Coordinator"]},{label:"Status",type:"select",options:["Active","Inactive","Pending"]}],"Save Changes",`User "${e}" updated`)},managePermissions(e){const{showModal:t}=p();t(`Permissions: ${e}`,`
      <div style="display:flex;flex-direction:column;gap:10px">
        ${[["View Dashboard",!0],["View Startups",!0],["Edit Startups",!1],["View Reports",!0],["Generate Reports",!1],["Manage Users",!1],["Approve Requests",!1]].map(([a,i])=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border)">
          <span style="font-size:0.85rem">${a}</span>
          <button class="btn btn-sm ${i?"btn-primary":"btn-secondary"}" onclick="this.classList.toggle('btn-primary');this.classList.toggle('btn-secondary');this.textContent=this.textContent==='ON'?'OFF':'ON'">${i?"ON":"OFF"}</button>
        </div>`).join("")}
      </div>
    `,[{label:"Save Permissions",variant:"primary",action:"save"},{label:"Cancel",variant:"secondary",action:"close"}])}};document.addEventListener("click",e=>{var s,o,c;const t=e.target.closest(".approval-actions .btn");if(!t)return;const a=t.closest(".approval-card"),i=((s=a==null?void 0:a.querySelector(".approval-title"))==null?void 0:s.textContent)||"Item";t.textContent.includes("Approve")?(a.style.opacity="0.5",a.style.pointerEvents="none",p().showToast(`Approved: ${i}`,"success")):t.textContent.includes("Decline")?(a.style.opacity="0.5",a.style.pointerEvents="none",p().showToast(`Declined: ${i}`,"warning")):t.textContent.includes("View Details")&&p().showDetailModal(i,[["Type",((o=a.querySelector(".badge"))==null?void 0:o.textContent)||"N/A"],["Status","Pending Review"],["Submitted","Recently"],["Priority",((c=a.querySelector(".badge"))==null?void 0:c.textContent)||"Normal"]])});document.addEventListener("click",e=>{var s;const t=e.target.closest(".glass-card .btn-primary");if(!t||t.textContent.trim()!=="Draft Intro")return;const a=t.closest(".glass-card"),i=((s=a==null?void 0:a.querySelector(".fw-600"))==null?void 0:s.textContent)||"Mentor";p().showFormModal(`Draft Introduction to ${i}`,[{label:"Student / Startup",placeholder:"Select a student or startup..."},{label:"Topic",placeholder:"What do they need help with?"},{label:"Message",type:"textarea",placeholder:`Hi ${i}, ...`}],"Send Draft for Review",`Introduction draft to ${i} created and sent for review`)});const v=()=>window.vantageUI;function $e(e){const t=document.getElementById("page-content");if(!t)return;const a=Le[e];a&&(t.innerHTML=a(),we(e))}function we(e){e==="dashboard"&&ke(),x(),Se(e)}function Se(e){document.querySelectorAll(".search-box .input").forEach(t=>{t.addEventListener("input",a=>{const i=a.target.value.toLowerCase(),s=t.closest(".public-content"),o=s==null?void 0:s.querySelectorAll(".grid-3 > .glass-card, .grid-2 > .glass-card");o==null||o.forEach(c=>{const m=c.textContent.toLowerCase();c.style.display=m.includes(i)||!i?"":"none"})})}),document.querySelectorAll(".filter-pill").forEach(t=>{t.addEventListener("click",()=>{t.parentElement.querySelectorAll(".filter-pill").forEach(i=>i.classList.remove("active")),t.classList.add("active");const a=t.textContent.trim();e==="explorer"&&document.querySelectorAll(".grid-3 > .glass-card").forEach(s=>{if(a==="All"){s.style.display="";return}const o=s.textContent;s.style.display=o.includes(a)?"":"none"}),v().showToast(`Filtered: ${a}`,"info")})})}function Ae(){const e=f.filter(t=>t.readiness>60).slice(0,3);return`
    <div class="page-header">
      <div class="page-header-left">
        <div class="page-title">${n("sparkles",20)} Innovation Dashboard</div>
        <div class="page-subtitle">Live highlights from our innovation ecosystem</div>
      </div>
    </div>
    <div class="stats-grid">
      ${l("rocket","Active Startups",u.activeStartups,null,0)}
      ${l("trophy","Competition Wins",u.competitionWins,null,1)}
      ${l("banknote","Funding Raised",u.fundingRaised,null,2)}
      ${l("users","Alumni Founders",u.alumniFounders,null,3)}
      ${l("handshake","Mentor Network",h.length+"+",null,4)}
    </div>
    <div class="grid-sidebar">
      <div>
        <div class="section">
          <div class="section-title mb-md">${n("star",16)} Startup Spotlight</div>
          <div style="display:flex;flex-direction:column;gap:12px">
            ${e.map(t=>`<div class="glass-card glass-card-glow" style="cursor:pointer" onclick="window.publicActions.viewStartup('${t.name}')">
              <div class="flex justify-between items-center mb-sm"><div class="fw-700">${t.name}</div>${d(t.domain,"purple")}</div>
              <div class="text-sm text-secondary mb-sm">Founded by ${t.founder} · Team of ${t.team}</div>
              <div class="flex gap-sm mb-sm" style="flex-wrap:wrap">${t.tags.map(a=>d(a,"blue")).join("")}</div>
              <div class="flex justify-between items-center">
                <div style="flex:1"><div class="progress-bar"><div class="progress-bar-fill" style="width:${t.readiness}%"></div></div><div class="text-xs text-muted" style="margin-top:4px">Readiness: ${t.readiness}%</div></div>
                ${d(t.stage,t.stage==="Revenue"?"green":"blue")}
              </div>
            </div>`).join("")}
          </div>
        </div>
        <div class="section" style="margin-top:24px">
          ${r("Activity Trend","Last 4 weeks",'<div class="chart-container"><canvas id="chart-public-trend"></canvas></div>')}
        </div>
      </div>
      <div>
        <div class="section">
          ${r("Innovation Leaderboard","Top contributors",q(B.slice(0,5)))}
        </div>
        <div class="section" style="margin-top:16px">
          ${r("Quick Stats",null,`<div style="display:flex;flex-direction:column;gap:8px">
            ${[["Health Score",u.healthScore+"/100"],["Active Mentors",h.filter(t=>t.availability==="open").length],["Upcoming Competitions",V.length],["Industry Challenges",S.length]].map(([t,a])=>`<div class="flex justify-between items-center" style="padding:6px 0;border-bottom:1px solid var(--border)"><span class="text-sm text-secondary">${t}</span><span class="fw-600">${a}</span></div>`).join("")}
          </div>`)}
        </div>
      </div>
    </div>`}function ke(){A("chart-public-trend",{type:"line",data:{labels:["Week 1","Week 2","Week 3","Week 4"],datasets:[{label:"Activity Signals",data:[12,18,22,28],borderColor:"#6366f1",backgroundColor:"rgba(99,102,241,0.08)",fill:!0,tension:.4,pointRadius:4,pointBackgroundColor:"#6366f1"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{y:{beginAtZero:!0,grid:{color:"rgba(255,255,255,0.04)"}},x:{grid:{display:!1}}}}})}function Ie(){const e=[...new Set(f.map(t=>t.domain))];return`
    <div class="page-header">
      <div class="page-header-left">
        <div class="page-title">${n("compass",20)} Startup Explorer</div>
        <div class="page-subtitle">Browse and discover startups from our ecosystem</div>
      </div>
      <div class="page-header-actions">${k("Search startups, founders, domains...")}</div>
    </div>
    <div class="section-header">
      <div class="section-title">Filter by Domain</div>
      ${I(["All",...e])}
    </div>
    <div class="grid-3" style="margin-top:16px">
      ${f.map(t=>`<div class="glass-card glass-card-glow">
        <div class="flex justify-between items-center mb-sm">
          <div class="fw-700">${t.name}</div>
          ${d(t.stage,t.stage==="Revenue"?"green":t.stage==="MVP"?"blue":t.stage==="Prototype"?"yellow":"gray")}
        </div>
        <div class="text-sm text-secondary">${t.founder} · ${t.domain}</div>
        <div class="flex gap-sm mb-sm" style="margin-top:8px;flex-wrap:wrap">${t.tags.map(a=>d(a,"blue")).join("")}</div>
        <div class="progress-bar"><div class="progress-bar-fill" style="width:${t.readiness}%"></div></div>
        <div class="flex justify-between text-xs text-muted" style="margin-top:4px"><span>Readiness: ${t.readiness}%</span><span>${t.signals} signals</span></div>
        <div class="flex gap-sm" style="margin-top:12px">
          <button class="btn btn-sm btn-primary" onclick="window.publicActions.viewStartup('${t.name}')">${n("eye",13)} View Details</button>
          <button class="btn btn-sm btn-secondary" onclick="window.publicActions.requestIntro('${t.name}', '${t.founder}')">${n("mail",13)} Request Intro</button>
        </div>
      </div>`).join("")}
    </div>`}function Ce(){const e={};return h.forEach(t=>t.domain.forEach(a=>{e[a]||(e[a]=[]),e[a].push(t)})),`
    <div class="page-header">
      <div class="page-header-left">
        <div class="page-title">${n("users",20)} Mentor & Alumni Network</div>
        <div class="page-subtitle">Connect with experienced professionals from our ecosystem</div>
      </div>
      <div class="page-header-actions">${k("Search by name, domain, expertise...")}</div>
    </div>
    <div class="stats-grid" style="grid-template-columns:repeat(4,1fr)">
      ${l("users","Total Mentors",h.length,null,0)}
      ${l("check-circle","Available Now",h.filter(t=>t.availability==="open").length,null,1)}
      ${l("award","Alumni Network","156+",null,2)}
      ${l("globe","Cities Connected",8,null,3)}
    </div>
    <div class="section">
      <div class="section-title mb-md">${n("grid-3x3",16)} Domain Clusters</div>
      <div class="grid-3">
        ${Object.entries(e).slice(0,6).map(([t,a])=>`
          <div class="glass-card" style="cursor:pointer" onclick="window.vantageUI.showToast('Viewing ${t} cluster — ${a.length} mentors','info')"><div class="fw-600 mb-sm">${t}</div><div class="text-sm text-muted mb-sm">${a.length} mentors</div>
            <div style="display:flex;gap:6px;flex-wrap:wrap">${a.map(i=>`<div class="leaderboard-avatar" style="width:28px;height:28px;font-size:0.6rem" title="${i.name}">${i.avatar}</div>`).join("")}</div>
          </div>`).join("")}
      </div>
    </div>
    <div class="section" style="margin-top:24px">
      <div class="section-title mb-md">${n("star",16)} Mentor Spotlight</div>
      <div class="grid-3">${h.filter(t=>t.availability==="open").slice(0,3).map(t=>W(t)).join("")}</div>
    </div>
    <div class="section" style="margin-top:24px">
      ${r("Alumni Innovation Map","Where our founders are building",`<div class="grid-4" style="gap:10px">
        ${[["Bengaluru",42],["Mumbai",28],["Hyderabad",22],["Delhi NCR",18],["Pune",14],["Chennai",12],["Kochi",8],["International",12]].map(([t,a])=>`<div class="glass-card" style="text-align:center;padding:14px;cursor:pointer" onclick="window.vantageUI.showToast('${a} founders based in ${t}','info')"><div class="fw-600 text-sm">${t}</div><div class="stat-value" style="font-size:1.2rem;margin-top:4px">${a}</div><div class="text-xs text-muted">founders</div></div>`).join("")}
      </div>`)}
    </div>`}function Me(){return`
    <div class="page-header">
      <div class="page-header-left">
        <div class="page-title">${n("gift",20)} Opportunities Hub</div>
        <div class="page-subtitle">Competitions, challenges, grants, and internships</div>
      </div>
      <div class="page-header-actions">${I(["All","Hackathons","Challenges","Grants","Internships"])}</div>
    </div>
    <div class="grid-2">
      <div>
        <div class="section">
          <div class="section-title mb-md">${n("trophy",16)} Upcoming Competitions</div>
          <div style="display:flex;flex-direction:column;gap:10px">
            ${V.map(e=>`<div class="glass-card"><div class="flex justify-between items-center mb-sm"><div class="fw-600">${e.name}</div>${d(e.type,"purple")}</div><div class="flex gap-lg text-sm text-secondary"><span>${n("calendar",13)} ${e.deadline}</span><span>${n("tag",13)} ${e.domain}</span></div><div style="margin-top:10px"><button class="btn btn-sm btn-primary" onclick="window.publicActions.applyCompetition('${e.name}')">${n("external-link",13)} Apply Now</button></div></div>`).join("")}
          </div>
        </div>
      </div>
      <div>
        <div class="section">
          <div class="section-title mb-md">${n("building-2",16)} Industry Challenges</div>
          <div style="display:flex;flex-direction:column;gap:10px">
            ${S.map(e=>`<div class="glass-card"><div class="flex justify-between items-center mb-sm"><div class="fw-600">${e.title}</div>${d(e.status==="active"?"Active":"Open",e.status==="active"?"green":"blue")}</div><div class="text-sm text-secondary">${e.company} · ${e.domain}</div><div class="flex gap-lg text-sm" style="margin-top:8px"><span>${n("banknote",13)} ${e.prize}</span><span>${n("calendar",13)} ${e.deadline}</span></div><div style="margin-top:10px"><button class="btn btn-sm btn-primary" onclick="window.publicActions.viewChallenge('${e.title}', '${e.company}', '${e.prize}', '${e.deadline}', '${e.domain}')">View Challenge</button></div></div>`).join("")}
          </div>
        </div>
      </div>
    </div>
    <div class="grid-2" style="margin-top:24px">
      <div class="section">
        ${r("Grants & Funding",null,`<div style="display:flex;flex-direction:column;gap:10px">
          ${[{name:"BIRAC BIG Grant",amt:"Up to 50L",domain:"BioTech / AgriTech",dl:"Apr 30, 2026"},{name:"DST NIDHI Prayas",amt:"Up to 10L",domain:"Hardware Prototyping",dl:"Mar 15, 2026"},{name:"MeitY Startup",amt:"Up to 25L",domain:"IT / Software",dl:"Rolling"}].map(e=>`<div class="glass-card" style="padding:12px 14px"><div class="flex justify-between items-center"><div class="fw-600 text-sm">${e.name}</div><span class="text-accent fw-600 text-sm">${e.amt}</span></div><div class="text-xs text-muted" style="margin-top:4px">${e.domain} · Deadline: ${e.dl}</div><div style="margin-top:8px"><button class="btn btn-sm btn-secondary" onclick="window.vantageUI.showToast('Opening ${e.name} application portal...','info')">Learn More</button></div></div>`).join("")}
        </div>`)}
      </div>
      <div class="section">
        ${r("Internship Matches","Based on your profile",`<div style="display:flex;flex-direction:column;gap:10px">
          ${[{company:"DataWeave",role:"ML Intern",match:92,domain:"AI/ML"},{company:"Razorpay",role:"Backend Intern",match:85,domain:"FinTech"},{company:"Flipkart",role:"SDE Intern",match:78,domain:"E-commerce"}].map(e=>`<div class="glass-card" style="padding:12px 14px"><div class="flex justify-between items-center"><div><div class="fw-600 text-sm">${e.company} — ${e.role}</div><div class="text-xs text-muted">${e.domain}</div></div><div class="flex items-center gap-sm"><span class="stat-change positive">${e.match}% match</span><button class="btn btn-sm btn-primary" onclick="window.publicActions.applyInternship('${e.company}', '${e.role}')">Apply</button></div></div></div>`).join("")}
        </div>`)}
      </div>
    </div>`}function Te(){return`
    <div class="page-header">
      <div class="page-header-left">
        <div class="page-title">${n("user",20)} My Innovation Profile</div>
        <div class="page-subtitle">Track your contributions and build your innovation identity</div>
      </div>
      <div class="page-header-actions"><button class="btn btn-primary" onclick="window.publicActions.editProfile()">${n("pencil",15)} Edit Profile</button></div>
    </div>
    <div class="grid-sidebar">
      <div>
        <div class="glass-card mb-lg">
          <div class="flex items-center gap-md mb-md">
            <div class="leaderboard-avatar" style="width:60px;height:60px;font-size:1.2rem">AS</div>
            <div><div class="fw-700" style="font-size:1.1rem">Ananya Sharma</div><div class="text-sm text-secondary">CSE, 4th Year · Student Innovator</div><div class="text-xs text-muted">Innovation Score: 945 · Rank #1</div></div>
          </div>
          <div class="flex gap-sm" style="flex-wrap:wrap">${["IoT","Machine Learning","Agriculture","Hardware"].map(e=>d(e,"purple")).join("")}</div>
        </div>
        <div class="section">
          ${r("Linked Accounts","Passive signal sources",`<div style="display:flex;flex-direction:column;gap:8px">
            ${[["GitHub","ananya-sharma","Linked","green"],["LinkedIn","in/ananya-sharma","Linked","green"],["Google Scholar","—","Not linked","gray"],["Portfolio","ananya.dev","Linked","green"]].map(([e,t,a,i])=>`<div class="flex justify-between items-center" style="padding:8px 0;border-bottom:1px solid var(--border);cursor:pointer" onclick="window.publicActions.toggleLink('${e}', '${a}')"><div><div class="text-sm fw-600">${e}</div><div class="text-xs text-muted">${t}</div></div>${d(a,i)}</div>`).join("")}
          </div>`)}
        </div>
        <div class="section" style="margin-top:16px">
          ${r("Domain Declaration","Tell Vantage your interests",`<div class="flex gap-sm" style="flex-wrap:wrap;margin-bottom:12px">${["IoT","ML","Agriculture","Embedded Systems","Sensor Networks"].map(e=>d(e,"blue")).join("")}</div><button class="btn btn-sm btn-secondary" onclick="window.publicActions.addDomain()">${n("plus",13)} Add Domain</button>`)}
        </div>
      </div>
      <div>
        <div class="section">
          ${r("Achievements",null,`<div style="display:flex;flex-direction:column;gap:10px">
            ${[["SIH 2025 — 2nd Place","Smart Agriculture Track","trophy"],["AgroSense — MVP Stage","Innovation Week Featured","rocket"],["100+ GitHub Stars","DriftDetect ML Toolkit","star"],["Top Innovator Q4 2025","College-wide Recognition","award"]].map(([e,t,a])=>`<div class="flex items-center gap-sm" style="padding:8px 0;border-bottom:1px solid var(--border)">${n(a,18)}<div><div class="text-sm fw-600">${e}</div><div class="text-xs text-muted">${t}</div></div></div>`).join("")}
          </div>`)}
        </div>
        <div class="section" style="margin-top:16px">
          ${r("Privacy Controls",null,`<div style="display:flex;flex-direction:column;gap:10px">
            ${[["Profile visible to mentors",!0],["Profile visible to investors",!1],["Allow mentor intro requests",!0],["Show on leaderboard",!0]].map(([e,t])=>`<div class="flex justify-between items-center"><span class="text-sm">${e}</span><button class="btn btn-sm ${t?"btn-primary":"btn-secondary"}" onclick="this.classList.toggle('btn-primary');this.classList.toggle('btn-secondary');const isOn=this.textContent==='ON';this.textContent=isOn?'OFF':'ON';window.vantageUI.showToast('${e}: '+(isOn?'Disabled':'Enabled'),'info')">${t?"ON":"OFF"}</button></div>`).join("")}
          </div>`)}
        </div>
        <div class="section" style="margin-top:16px">
          ${r("Achievement Timeline",null,`<div class="timeline">
            ${[{time:"Feb 2026",title:"SIH 2025 Win Detected",desc:"Auto-featured on dashboard"},{time:"Jan 2026",title:"AgroSense reached MVP",desc:"Stage updated in portfolio"},{time:"Dec 2025",title:"GitHub 100 stars milestone",desc:"Signal generated automatically"},{time:"Nov 2025",title:"Profile created",desc:"Linked GitHub and LinkedIn"}].map(e=>`<div class="timeline-item"><div class="timeline-item-time">${e.time}</div><div class="timeline-item-title">${e.title}</div><div class="timeline-item-desc">${e.desc}</div></div>`).join("")}
          </div>`)}
        </div>
      </div>
    </div>`}function Pe(){return`
    <div class="page-header">
      <div class="page-header-left">
        <div class="page-title">${n("award",20)} Recognition & Showcase</div>
        <div class="page-subtitle">Celebrating our ecosystem's success stories</div>
      </div>
    </div>
    <div class="section">
      <div class="section-title mb-md">${n("medal",16)} Innovation Leaderboard</div>
      <div class="glass-card">${q(B)}</div>
    </div>
    <div class="section" style="margin-top:24px">
      <div class="section-title mb-md">${n("star",16)} Hall of Fame</div>
      <div class="grid-3">
        ${[{name:"Vikram Patel",startup:"LogiStack",achievement:"Raised 2.5Cr from Blume Ventures",batch:"2019"},{name:"Meera Joshi",startup:"—",achievement:"VP Engineering at Razorpay",batch:"2017"},{name:"Rohan Mehta",startup:"DataWeave",achievement:"Acquired — Successful Exit",batch:"2016"}].map(e=>`<div class="glass-card glass-card-glow" style="text-align:center;padding:24px;cursor:pointer" onclick="window.vantageUI.showDetailModal('${e.name}', [['Startup','${e.startup}'],['Achievement','${e.achievement}'],['Batch','Class of ${e.batch}'],['Status','Alumni — Active Mentor']])">
          <div class="leaderboard-avatar" style="width:50px;height:50px;font-size:1rem;margin:0 auto 12px">${e.name.split(" ").map(t=>t[0]).join("")}</div>
          <div class="fw-700">${e.name}</div><div class="text-sm text-accent">${e.startup}</div>
          <div class="text-sm text-secondary" style="margin-top:6px">${e.achievement}</div>
          <div class="text-xs text-muted" style="margin-top:4px">Class of ${e.batch}</div>
        </div>`).join("")}
      </div>
    </div>
    <div class="grid-2" style="margin-top:24px">
      <div class="section">
        ${r("Press Mentions",null,`<div style="display:flex;flex-direction:column;gap:10px">
          ${[{title:"AgroSense featured in YourStory",source:"YourStory",date:"Feb 2026"},{title:"LogiStack raises 2.5Cr Seed Round",source:"Crunchbase",date:"Jan 2026"},{title:"NeuralForge wins SIH 2025",source:"SIH Official",date:"Dec 2025"}].map(e=>`<div class="glass-card" style="padding:12px 14px;cursor:pointer" onclick="window.vantageUI.showToast('Opening article: ${e.title}','info')"><div class="flex justify-between items-center"><div class="fw-600 text-sm">${e.title}</div>${d(e.source,"blue")}</div><div class="text-xs text-muted" style="margin-top:4px">${e.date}</div></div>`).join("")}
        </div>`)}
      </div>
      <div class="section">
        ${r("Demo Day Gallery",null,`<div class="grid-2" style="gap:10px">
          ${["Innovation Week 2026","Startup Showcase Q4","Hackathon Finals","Industry Connect Day"].map(e=>`<div class="glass-card" style="text-align:center;padding:20px;background:var(--glass-bg);cursor:pointer" onclick="window.vantageUI.showToast('Opening gallery: ${e}','info')"><div style="margin-bottom:8px">${n("image",24)}</div><div class="text-sm fw-600">${e}</div><div class="text-xs text-muted">View Gallery</div></div>`).join("")}
        </div>`)}
      </div>
    </div>`}function Re(){return`
    <div class="page-header">
      <div class="page-header-left">
        <div class="page-title">${n("send",20)} Apply & Request</div>
        <div class="page-subtitle">Submit requests, apply for opportunities, and connect</div>
      </div>
    </div>
    <div class="grid-3">
      ${[{ic:"mail",title:"Request Mentor Introduction",desc:"Get connected with industry mentors through verified warm intros.",btn:"Request Intro",variant:"primary",action:"requestMentorIntro"},{ic:"rocket",title:"Submit Startup for Portfolio",desc:"Register your startup in the Vantage portfolio for visibility and tracking.",btn:"Submit Startup",variant:"primary",action:"submitStartup"},{ic:"trophy",title:"Apply for Competition",desc:"Express interest in upcoming hackathons and innovation challenges.",btn:"Browse Competitions",variant:"secondary",action:"browseCompetitions"},{ic:"briefcase",title:"Apply for Internship Match",desc:"Let Vantage match you with relevant industry internship opportunities.",btn:"Get Matches",variant:"primary",action:"getMatches"},{ic:"link",title:"Link Profile / Accounts",desc:"Connect your GitHub, LinkedIn, and other profiles for passive signal generation.",btn:"Link Accounts",variant:"secondary",action:"linkAccounts"},{ic:"message-square",title:"General Inquiry",desc:"Have a question about the ecosystem? Reach out to the innovation cell.",btn:"Send Message",variant:"secondary",action:"sendMessage"}].map(e=>`<div class="glass-card glass-card-glow">
        <div style="margin-bottom:12px">${n(e.ic,28)}</div>
        <div class="fw-700 mb-sm">${e.title}</div>
        <div class="text-sm text-secondary" style="margin-bottom:16px">${e.desc}</div>
        <button class="btn btn-${e.variant}" onclick="window.publicActions.${e.action}()">${e.btn}</button>
      </div>`).join("")}
    </div>
    <div class="section" style="margin-top:32px">
      ${r("Your Active Requests",null,`<div style="display:flex;flex-direction:column;gap:10px">
        ${[{title:"Mentor Intro: Karthik Nair (Hardware)",status:"Pending Coordinator Review",date:"2 days ago",badge:"Pending",color:"yellow"},{title:"Startup Registration: AgroSense",status:"Approved — Added to Portfolio",date:"1 week ago",badge:"Approved",color:"green"},{title:"Internship Match Request",status:"3 matches found — Review ready",date:"3 days ago",badge:"Ready",color:"blue"}].map(e=>`<div class="glass-card" style="padding:14px 16px;cursor:pointer" onclick="window.vantageUI.showDetailModal('${e.title}', [['Status','${e.status}'],['Submitted','${e.date}'],['Result','${e.badge}']])"><div class="flex justify-between items-center"><div><div class="fw-600 text-sm">${e.title}</div><div class="text-xs text-muted" style="margin-top:2px">${e.status} · ${e.date}</div></div>${d(e.badge,e.color)}</div></div>`).join("")}
      </div>`)}
    </div>`}const Le={dashboard:Ae,explorer:Ie,network:Ce,opportunities:Me,profile:Te,showcase:Pe,apply:Re};window.publicActions={viewStartup(e){const t=f.find(a=>a.name===e);t&&v().showDetailModal(t.name,[["Domain",t.domain],["Stage",t.stage],["Readiness",t.readiness+"%"],["Founder",t.founder],["Team Size",t.team],["Signals",t.signals],["Funding",t.funding],["Tags",t.tags.join(", ")],["Status",t.stall?"Stalled":"Active"]])},requestIntro(e,t){v().showFormModal(`Request Introduction — ${e}`,[{label:"Your Name",placeholder:"Enter your full name"},{label:"Your Department",placeholder:"e.g. CSE, 3rd Year"},{label:"Reason for Introduction",type:"textarea",placeholder:`Why would you like to connect with ${t}?`}],"Submit Request",`Introduction request sent to ${t} (${e}). The coordinator will review shortly.`)},applyCompetition(e){v().showFormModal(`Apply — ${e}`,[{label:"Team Name",placeholder:"Your team name"},{label:"Team Size",type:"number",placeholder:"3"},{label:"Team Members",type:"textarea",placeholder:"List team member names and departments..."},{label:"Motivation",type:"textarea",placeholder:"Why do you want to participate?"}],"Submit Application",`Application for ${e} submitted. You will receive a confirmation shortly.`)},viewChallenge(e,t,a,i,s){v().showDetailModal(e,[["Company",t],["Domain",s],["Prize",a],["Deadline",i],["IP Policy","Negotiable"],["Teams Registered","3"],["Status","Active"]])},applyInternship(e,t){v().showFormModal(`Apply: ${e} — ${t}`,[{label:"Full Name",placeholder:"Your full name"},{label:"Year & Department",placeholder:"e.g. 3rd Year CSE"},{label:"Resume Link",placeholder:"https://drive.google.com/..."},{label:"Why this role?",type:"textarea",placeholder:"Briefly explain your interest and relevant experience..."}],"Submit Application",`Application for ${t} at ${e} submitted successfully.`)},editProfile(){v().showFormModal("Edit Profile",[{label:"Full Name",placeholder:"Ananya Sharma"},{label:"Department",placeholder:"CSE, 4th Year"},{label:"Bio",type:"textarea",placeholder:"A short bio about yourself..."},{label:"GitHub Username",placeholder:"ananya-sharma"},{label:"LinkedIn URL",placeholder:"linkedin.com/in/ananya-sharma"},{label:"Portfolio URL",placeholder:"ananya.dev"}],"Save Profile","Profile updated successfully")},addDomain(){v().showFormModal("Add Domain Interest",[{label:"Domain",type:"select",options:["AI/ML","IoT","FinTech","HealthTech","EdTech","Blockchain","Cloud Computing","Cybersecurity","Robotics","AR/VR","Other"]},{label:"Proficiency (optional)",type:"select",options:["Beginner","Intermediate","Advanced","Expert"]}],"Add Domain","Domain interest added to your profile")},toggleLink(e,t){t==="Linked"?v().showToast(`${e} account unlinked`,"warning"):v().showFormModal(`Link ${e}`,[{label:`${e} Username/URL`,placeholder:`Enter your ${e} handle or profile URL`}],"Link Account",`${e} account linked successfully`)},requestMentorIntro(){v().showFormModal("Request Mentor Introduction",[{label:"Preferred Mentor",type:"select",options:["Any Available",...h.filter(e=>e.availability==="open").map(e=>e.name)]},{label:"Domain",type:"select",options:["FinTech","AI/ML","SaaS","HealthTech","EdTech","Hardware","Other"]},{label:"What do you need help with?",type:"textarea",placeholder:"Describe what guidance you are looking for..."}],"Submit Request","Mentor introduction request submitted for coordinator review")},submitStartup(){v().showFormModal("Submit Startup for Portfolio",[{label:"Startup Name",placeholder:"e.g. AgroSense"},{label:"Domain",type:"select",options:["AgriTech","FinTech","HealthTech","EdTech","AI/ML","DevTools","CleanTech","Other"]},{label:"Stage",type:"select",options:["Idea","Prototype","MVP","Revenue"]},{label:"Team Members",type:"textarea",placeholder:"List team members with names and departments..."},{label:"Description",type:"textarea",placeholder:"Brief description of what your startup does..."}],"Submit","Startup submitted for review. You will be notified once approved.")},browseCompetitions(){window.location.hash="#/public/opportunities"},getMatches(){v().showToast("Running matching algorithm against your profile...","info"),setTimeout(()=>{v().showDetailModal("Internship Matches Found",[["DataWeave — ML Intern","92% match"],["Razorpay — Backend Intern","85% match"],["Flipkart — SDE Intern","78% match"],["TCS — Research Intern","71% match"]])},1500)},linkAccounts(){window.location.hash="#/public/profile"},sendMessage(){v().showFormModal("Send Message to Innovation Cell",[{label:"Subject",placeholder:"e.g. Query about incubation process"},{label:"Category",type:"select",options:["General Inquiry","Technical Support","Mentorship","Funding","Events","Other"]},{label:"Message",type:"textarea",placeholder:"Type your message here..."}],"Send Message","Message sent to the Innovation Cell. You will receive a response within 24 hours.")}};document.addEventListener("click",e=>{var i;const t=e.target.closest(".glass-card .btn-primary");if(!t)return;if(t.textContent.trim()==="Draft Intro"){const s=t.closest(".glass-card"),o=((i=s==null?void 0:s.querySelector(".fw-600"))==null?void 0:i.textContent)||"Mentor";v().showFormModal(`Request Introduction to ${o}`,[{label:"Your Name & Department",placeholder:"e.g. Ananya Sharma, CSE 4th Year"},{label:"Topic",placeholder:"What do you need guidance on?"},{label:"Message",type:"textarea",placeholder:`Hi ${o}, I would like to connect because...`}],"Send Request",`Introduction request to ${o} submitted for coordinator review`)}});function j(){return localStorage.getItem("vantage-theme")||"dark"}function G(e){document.body.classList.toggle("light-theme",e==="light"),localStorage.setItem("vantage-theme",e)}function De(){const e=j()==="dark"?"light":"dark";G(e),document.querySelectorAll(".theme-toggle").forEach(t=>{t.innerHTML=e==="dark"?`${n("moon",15)} Dark`:`${n("sun",15)} Light`,x()})}G(j());window.toggleTheme=De;function N(){const e=j();return`<button class="theme-toggle" onclick="toggleTheme()">${n(e==="dark"?"moon":"sun",15)} ${e==="dark"?"Dark":"Light"}</button>`}function P(e){window.location.hash=e}function Y(){const e=window.location.hash.slice(1)||"/login",t=document.getElementById("app");if(e==="/login"||e==="/"){t.innerHTML=Ee(),Fe(),x();return}if(e.startsWith("/admin")){const a=e.replace("/admin/","")||"dashboard";t.innerHTML=He(a),oe(a),x();return}if(e.startsWith("/public")){const a=e.replace("/public/","")||"dashboard";t.innerHTML=Oe(a),$e(a),x();return}P("/login")}window.addEventListener("hashchange",Y);window.addEventListener("DOMContentLoaded",Y);function Ee(){return`<div class="login-page">
    <div class="login-bg"></div>
    <div class="login-grid"></div>
    <div class="login-container animate-scale">
      <div style="position:absolute;top:24px;right:24px">${N()}</div>
      <div class="login-logo">Vantage</div>
      <p class="login-subtitle">Institutional Innovation Intelligence Platform<br>
        <span class="text-xs text-muted">See your ecosystem. Without asking anyone.</span>
      </p>
      <div class="login-roles">
        <div class="login-role-card" id="login-admin">
          <span class="login-role-icon">${n("shield",36)}</span>
          <div class="login-role-title">Admin Portal</div>
          <div class="login-role-desc">Coordinator · Incubation · Institution — Full ecosystem control</div>
        </div>
        <div class="login-role-card" id="login-public">
          <span class="login-role-icon">${n("globe",36)}</span>
          <div class="login-role-title">Public Portal</div>
          <div class="login-role-desc">Student · Alumni · Visitor · Investor — Explore & connect</div>
        </div>
      </div>
      <p style="margin-top:32px;font-size:0.7rem;color:var(--text-muted)">Vantage v1.0 · Institutional Innovation Intelligence</p>
    </div>
  </div>`}function Fe(){var e,t;(e=document.getElementById("login-admin"))==null||e.addEventListener("click",()=>P("/admin/dashboard")),(t=document.getElementById("login-public"))==null||t.addEventListener("click",()=>P("/public/dashboard"))}const je=[{section:"Intelligence",items:[{id:"dashboard",lucide:"radio",label:"Intelligence Feed",badge:5},{id:"startups",lucide:"rocket",label:"Startup Portfolio"},{id:"mentors",lucide:"users",label:"Mentor & Investors"},{id:"tags",lucide:"brain",label:"Tag Discovery",badge:null}]},{section:"Operations",items:[{id:"approvals",lucide:"check-circle",label:"Approvals",badge:6},{id:"reports",lucide:"bar-chart-3",label:"Reports & Analytics"},{id:"challenges",lucide:"building-2",label:"Industry Challenges"},{id:"users",lucide:"user-cog",label:"User Management"}]}],Ne={dashboard:"Intelligence Feed",startups:"Startup Portfolio",mentors:"Mentor & Investor Pipeline",tags:"Tag Discovery Engine",approvals:"Approvals & Recommendations",reports:"Reports & Analytics",challenges:"Industry Challenges",users:"User & Access Control"};function He(e){return`<div class="admin-layout">
    <aside class="sidebar">
      <div class="sidebar-brand">
        <h1>Vantage</h1>
        <span>Innovation Intelligence</span>
      </div>
      <nav class="sidebar-nav">
        ${je.map(t=>`
          <div class="sidebar-section">
            <div class="sidebar-section-title">${t.section}</div>
            ${t.items.map(a=>`
              <a class="nav-item ${a.id===e?"active":""}" href="#/admin/${a.id}">
                <span class="nav-icon">${n(a.lucide,18)}</span>
                ${a.label}
                ${a.badge?`<span class="nav-badge">${a.badge}</span>`:""}
              </a>
            `).join("")}
          </div>
        `).join("")}
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
          <div class="topbar-title">${Ne[e]||"Dashboard"}</div>
        </div>
        <div class="topbar-right">
          ${N()}
          <button class="topbar-btn" title="Notifications" onclick="window.vantageShowNotifications()">${n("bell",18)}<span class="dot"></span></button>
          <button class="topbar-btn" title="Settings" onclick="window.vantageShowSettings()">${n("settings",18)}</button>
          <button class="topbar-btn" title="Sign Out" onclick="window.location.hash='/login'">${n("log-out",18)}</button>
        </div>
      </header>
      <main class="content" id="page-content"></main>
    </div>
  </div>`}const Ue=[{id:"dashboard",label:"Dashboard"},{id:"explorer",label:"Startups"},{id:"network",label:"Network"},{id:"opportunities",label:"Opportunities"},{id:"profile",label:"Profile"},{id:"showcase",label:"Showcase"},{id:"apply",label:"Apply"}];function Oe(e){return`<div class="public-layout">
    <nav class="public-nav">
      <a class="public-nav-brand" href="#/public/dashboard">Vantage</a>
      <div class="public-nav-links">
        ${Ue.map(t=>`
          <a class="public-nav-link ${t.id===e?"active":""}" href="#/public/${t.id}">${t.label}</a>
        `).join("")}
      </div>
      <div class="public-nav-actions">
        ${N()}
        <button class="btn btn-sm btn-secondary" onclick="window.location.hash='/login'">Switch Role</button>
      </div>
    </nav>
    <main class="public-content" id="page-content"></main>
  </div>`}window.vantageShowNotifications=function(){const{showModal:e}=window.vantageUI;e("Notifications",`
    <div style="display:flex;flex-direction:column;gap:10px">
      ${[{title:"SIH 2025 Winner Detected",desc:"Team NeuralForge won 2nd place",time:"2h ago",color:"#f59e0b"},{title:"Alumni Funding Round",desc:"Vikram Patel raised 2.5Cr Seed",time:"4h ago",color:"#10b981"},{title:"GitHub Milestone — 100+ Stars",desc:"DriftDetect ML Toolkit crossed 100 stars",time:"6h ago",color:"#8b5cf6"},{title:"3 Pending Approvals",desc:"Review new startup registrations",time:"1d ago",color:"#3b82f6"},{title:"Stall Alert — MediTrack AI",desc:"No activity for 48 days",time:"1d ago",color:"#ef4444"}].map(t=>`<div style="display:flex;align-items:start;gap:12px;padding:12px;background:var(--glass-bg);border-radius:var(--radius-sm);border:1px solid var(--border)">
        <div style="width:8px;height:8px;border-radius:50%;background:${t.color};margin-top:6px;flex-shrink:0"></div>
        <div style="flex:1"><div style="font-weight:600;font-size:0.85rem">${t.title}</div><div style="font-size:0.75rem;color:var(--text-secondary)">${t.desc}</div><div style="font-size:0.65rem;color:var(--text-muted);margin-top:2px">${t.time}</div></div>
      </div>`).join("")}
    </div>
  `,[{label:"Mark All Read",variant:"primary",action:"markAllRead"},{label:"Close",variant:"secondary",action:"close"}]),x()};window.vantageShowSettings=function(){const{showModal:e}=window.vantageUI;e("Settings",`
    <div style="display:flex;flex-direction:column;gap:16px">
      <div style="font-weight:600;font-size:0.9rem;color:var(--accent-light)">Preferences</div>
      ${[["Email Notifications",!0],["Signal Alerts",!0],["Weekly Digest",!1],["Auto-generate Reports",!0],["Show on Leaderboard",!0]].map(([t,a])=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border)">
        <span style="font-size:0.85rem">${t}</span>
        <button class="btn btn-sm ${a?"btn-primary":"btn-secondary"}" onclick="this.classList.toggle('btn-primary');this.classList.toggle('btn-secondary');this.textContent=this.textContent==='ON'?'OFF':'ON'">${a?"ON":"OFF"}</button>
      </div>`).join("")}
      <div style="font-weight:600;font-size:0.9rem;color:var(--accent-light);margin-top:8px">Account</div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-sm btn-secondary" onclick="window.vantageUI.showToast('Profile updated','success')">Save Changes</button>
        <button class="btn btn-sm btn-ghost" onclick="window.vantageUI.showToast('Changes discarded','info')">Reset Defaults</button>
      </div>
    </div>
  `,[{label:"Close",variant:"secondary",action:"close"}]),x()};window.vantageNavigate=P;
