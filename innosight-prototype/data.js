// ============================================================
// Vantage — Mock Data
// Realistic demo data for all pages (emoji-free)
// ============================================================

export const signals = [
  { id: 1, type: 'competition', lucide: 'trophy', color: '#f59e0b', title: 'SIH 2025 Winner Detected', desc: 'Team NeuralForge (Ananya Sharma, Ravi Kumar) won 2nd place in Smart Agriculture track.', time: '2 hours ago', source: 'Smart India Hackathon', actions: ['Congratulate', 'Feature on Website', 'Connect to Investor'] },
  { id: 2, type: 'funding', lucide: 'banknote', color: '#10b981', title: 'Alumni Funding Round Discovered', desc: 'Vikram Patel (Class of 2019) raised ₹2.5Cr Seed round for LogiStack from Blume Ventures.', time: '4 hours ago', source: 'Crunchbase', actions: ['Add to Report', 'Request Mentorship'] },
  { id: 3, type: 'github', lucide: 'zap', color: '#8b5cf6', title: 'GitHub Milestone — 100+ Stars', desc: 'Priya Iyer\'s open-source ML toolkit "DriftDetect" crossed 100 GitHub stars.', time: '6 hours ago', source: 'GitHub', actions: ['Acknowledge', 'Feature on Dashboard'] },
  { id: 4, type: 'news', lucide: 'newspaper', color: '#3b82f6', title: 'Press Mention in YourStory', desc: 'Student startup AgroSense featured in YourStory article on agritech innovation.', time: '8 hours ago', source: 'YourStory', actions: ['Share', 'Add to NAAC Report'] },
  { id: 5, type: 'stall', lucide: 'alert-triangle', color: '#ef4444', title: 'Stall Alert — MediTrack AI', desc: 'No activity detected for 48 days. Last stage: Prototype. Coordinator check-in recommended.', time: '1 day ago', source: 'Vantage AI', actions: ['Schedule Check-in', 'Assign Mentor'] },
  { id: 6, type: 'linkedin', lucide: 'link', color: '#06b6d4', title: 'Alumni Role Change — VP Engineering', desc: 'Meera Joshi (2017 batch) promoted to VP Engineering at Razorpay. Potential mentor.', time: '1 day ago', source: 'LinkedIn', actions: ['Add to Mentor Pool', 'Send Intro'] },
  { id: 7, type: 'competition', lucide: 'trophy', color: '#f59e0b', title: 'NASSCOM Innovation Award Shortlist', desc: 'Team CloudBridge shortlisted for NASSCOM Deep Tech Innovation Award 2025.', time: '2 days ago', source: 'NASSCOM', actions: ['Congratulate', 'Track Progress'] },
  { id: 8, type: 'funding', lucide: 'banknote', color: '#10b981', title: 'Pre-Seed Announcement', desc: 'DroneYard (founded by 2021 alumni) raised ₹50L from angel investors.', time: '3 days ago', source: 'AngelList', actions: ['Verify', 'Add to Portfolio'] },
];

export const startups = [
  { id: 1, name: 'AgroSense', domain: 'AgriTech', stage: 'MVP', readiness: 72, founder: 'Ananya Sharma', team: 4, stall: false, signals: 12, funding: '₹0', tags: ['IoT', 'ML', 'Agriculture'] },
  { id: 2, name: 'LogiStack', domain: 'Logistics', stage: 'Revenue', readiness: 89, founder: 'Vikram Patel', team: 6, stall: false, signals: 28, funding: '₹2.5Cr', tags: ['SaaS', 'B2B', 'Supply Chain'] },
  { id: 3, name: 'MediTrack AI', domain: 'HealthTech', stage: 'Prototype', readiness: 35, founder: 'Rahul Verma', team: 3, stall: true, signals: 4, funding: '₹0', tags: ['AI', 'Healthcare', 'NLP'] },
  { id: 4, name: 'EduBridge', domain: 'EdTech', stage: 'Idea', readiness: 18, founder: 'Neha Gupta', team: 2, stall: false, signals: 2, funding: '₹0', tags: ['EdTech', 'SaaS', 'AI'] },
  { id: 5, name: 'CloudBridge', domain: 'DevTools', stage: 'MVP', readiness: 64, founder: 'Arjun Nair', team: 3, stall: false, signals: 9, funding: '₹0', tags: ['Cloud', 'DevOps', 'API'] },
  { id: 6, name: 'DroneYard', domain: 'Drones', stage: 'Revenue', readiness: 78, founder: 'Kavya Reddy', team: 5, stall: false, signals: 18, funding: '₹50L', tags: ['Hardware', 'AI', 'Mapping'] },
  { id: 7, name: 'FinPulse', domain: 'FinTech', stage: 'Prototype', readiness: 42, founder: 'Siddharth Das', team: 3, stall: false, signals: 6, funding: '₹0', tags: ['FinTech', 'UPI', 'Analytics'] },
  { id: 8, name: 'GreenRoute', domain: 'CleanTech', stage: 'Idea', readiness: 22, founder: 'Pooja Menon', team: 2, stall: false, signals: 3, funding: '₹0', tags: ['Sustainability', 'EV', 'Logistics'] },
  { id: 9, name: 'NeuralForge', domain: 'AI/ML', stage: 'MVP', readiness: 58, founder: 'Ravi Kumar', team: 4, stall: false, signals: 8, funding: '₹0', tags: ['Deep Learning', 'Computer Vision', 'SaaS'] },
];

export const mentors = [
  { id: 1, name: 'Meera Joshi', role: 'VP Engineering, Razorpay', domain: ['FinTech', 'SaaS', 'Payments'], availability: 'open', acceptRate: 85, intros: 12, batch: '2017', avatar: 'MJ' },
  { id: 2, name: 'Arjun Kapoor', role: 'Ex-CTO, Swiggy', domain: ['Logistics', 'Marketplace', 'Scale'], availability: 'limited', acceptRate: 72, intros: 8, batch: '2015', avatar: 'AK' },
  { id: 3, name: 'Priya Venkatesh', role: 'Partner, Matrix Partners', domain: ['VC', 'B2B SaaS', 'Enterprise'], availability: 'open', acceptRate: 90, intros: 22, batch: '2014', avatar: 'PV' },
  { id: 4, name: 'Rohan Mehta', role: 'Founder, DataWeave (Acq.)', domain: ['AI/ML', 'Data', 'Exit'], availability: 'open', acceptRate: 68, intros: 6, batch: '2016', avatar: 'RM' },
  { id: 5, name: 'Sunita Rao', role: 'Head of Innovation, TCS', domain: ['Enterprise', 'R&D', 'Strategy'], availability: 'closed', acceptRate: 55, intros: 3, batch: '2012', avatar: 'SR' },
  { id: 6, name: 'Karthik Nair', role: 'Angel Investor', domain: ['DeepTech', 'Hardware', 'Drones'], availability: 'open', acceptRate: 78, intros: 15, batch: '2013', avatar: 'KN' },
];

export const investors = [
  { id: 1, name: 'Blume Ventures', type: 'VC', focus: ['SaaS', 'FinTech', 'D2C'], stage: 'Seed-Series A', checkSize: '₹50L–5Cr', watching: 3 },
  { id: 2, name: 'Indian Angel Network', type: 'Angel Network', focus: ['EdTech', 'HealthTech', 'AgriTech'], stage: 'Pre-Seed–Seed', checkSize: '₹10–50L', watching: 5 },
  { id: 3, name: '100X.VC', type: 'Micro VC', focus: ['Dev Tools', 'AI/ML', 'B2B'], stage: 'Pre-Seed', checkSize: '₹25L', watching: 2 },
  { id: 4, name: 'Nexus Venture Partners', type: 'VC', focus: ['Enterprise', 'Cloud', 'Data'], stage: 'Series A–B', checkSize: '₹5–25Cr', watching: 1 },
];

export const tags = [
  { name: 'Machine Learning', count: 34, category: 'domain', trending: true },
  { name: 'IoT', count: 22, category: 'domain', trending: false },
  { name: 'FinTech', count: 28, category: 'domain', trending: true },
  { name: 'Computer Vision', count: 15, category: 'research', trending: true },
  { name: 'NLP', count: 18, category: 'research', trending: false },
  { name: 'Blockchain', count: 12, category: 'domain', trending: false },
  { name: 'SaaS', count: 31, category: 'domain', trending: true },
  { name: 'HealthTech', count: 19, category: 'domain', trending: false },
  { name: 'AgriTech', count: 16, category: 'domain', trending: true },
  { name: 'Robotics', count: 8, category: 'research', trending: false },
  { name: 'EdTech', count: 24, category: 'domain', trending: false },
  { name: 'CleanTech', count: 11, category: 'domain', trending: true },
  { name: 'Deep Learning Lab', count: 14, category: 'lab', trending: false },
  { name: 'IIIC Incubation Cell', count: 42, category: 'incubation', trending: false },
  { name: 'Dr. S. Ramanathan', count: 9, category: 'faculty', trending: false },
  { name: 'Dr. A. Kulkarni', count: 7, category: 'faculty', trending: false },
  { name: 'Center for AI Research', count: 20, category: 'lab', trending: true },
  { name: 'Supply Chain', count: 13, category: 'domain', trending: false },
  { name: 'Cybersecurity', count: 10, category: 'research', trending: false },
  { name: 'Data Analytics', count: 26, category: 'domain', trending: true },
  { name: 'Cloud Computing', count: 17, category: 'domain', trending: false },
  { name: 'Drone Technology', count: 6, category: 'research', trending: false },
  { name: 'AR/VR', count: 5, category: 'research', trending: false },
  { name: 'DevOps', count: 14, category: 'domain', trending: false },
];

export const approvals = [
  { id: 1, type: 'startup', lucide: 'rocket', title: 'New Startup Registration — FinPulse', desc: 'Siddharth Das submitted FinPulse for incubation. Domain: FinTech. Stage: Prototype.', status: 'pending', priority: 'high', time: '1 hour ago' },
  { id: 2, type: 'mentor', lucide: 'users', title: 'Mentor Introduction Request', desc: 'Ananya Sharma (AgroSense) requested intro to Karthik Nair for hardware mentorship.', status: 'pending', priority: 'medium', time: '3 hours ago' },
  { id: 3, type: 'project', lucide: 'clipboard-list', title: 'Student Project Approval — AI Water Quality', desc: 'Team of 3 submitted capstone project on AI-based water quality monitoring.', status: 'pending', priority: 'low', time: '5 hours ago' },
  { id: 4, type: 'internship', lucide: 'briefcase', title: 'Internship Recommendation', desc: 'Priya Iyer matched for internship at DataWeave based on GitHub activity and ML expertise.', status: 'pending', priority: 'medium', time: '1 day ago' },
  { id: 5, type: 'challenge', lucide: 'building-2', title: 'Industry Challenge Approval', desc: 'TCS submitted "Predictive Maintenance for Smart Factories" challenge. ₹2L prize.', status: 'pending', priority: 'high', time: '1 day ago' },
  { id: 6, type: 'investor', lucide: 'gem', title: 'Investor Access Request', desc: 'Blume Ventures requested access to view curated startup portfolio.', status: 'pending', priority: 'high', time: '2 days ago' },
];

export const challenges = [
  { id: 1, title: 'Predictive Maintenance for Smart Factories', company: 'TCS', prize: '₹2,00,000', deadline: 'Apr 15, 2026', teams: 3, status: 'active', domain: 'AI/ML', ip: 'Shared' },
  { id: 2, title: 'Sustainable Last-Mile Delivery Optimization', company: 'Flipkart', prize: '₹1,50,000', deadline: 'Mar 30, 2026', teams: 5, status: 'active', domain: 'Logistics', ip: 'Student-owned' },
  { id: 3, title: 'Rural Health Monitoring IoT System', company: 'Wipro', prize: '₹1,00,000', deadline: 'May 01, 2026', teams: 0, status: 'open', domain: 'HealthTech', ip: 'Negotiable' },
  { id: 4, title: 'Fintech Compliance Automation', company: 'Razorpay', prize: '₹2,50,000', deadline: 'Jun 15, 2026', teams: 2, status: 'active', domain: 'FinTech', ip: 'Company-owned' },
];

export const competitions = [
  { name: 'Smart India Hackathon 2026', deadline: 'Mar 15, 2026', domain: 'Open', type: 'Hackathon', url: '#' },
  { name: 'NASSCOM AI Innovation Award', deadline: 'Apr 01, 2026', domain: 'AI/ML', type: 'Award', url: '#' },
  { name: 'Toycathon 2026', deadline: 'Feb 28, 2026', domain: 'Product Design', type: 'Innovation', url: '#' },
  { name: 'NITI Aayog Grand Challenge', deadline: 'May 20, 2026', domain: 'GovTech', type: 'Challenge', url: '#' },
  { name: 'IIM Bangalore Startup Summit', deadline: 'Mar 25, 2026', domain: 'Business', type: 'Pitch', url: '#' },
];

export const leaderboard = [
  { rank: 1, name: 'Ananya Sharma', dept: 'CSE, 4th Year', score: 945, signals: 18, badges: ['Winner', 'Active', 'Featured'] },
  { rank: 2, name: 'Priya Iyer', dept: 'AI/ML, 3rd Year', score: 870, signals: 15, badges: ['Active', 'Connected'] },
  { rank: 3, name: 'Ravi Kumar', dept: 'ECE, 4th Year', score: 812, signals: 12, badges: ['Winner', 'Innovator'] },
  { rank: 4, name: 'Arjun Nair', dept: 'IT, 3rd Year', score: 756, signals: 9, badges: ['Active'] },
  { rank: 5, name: 'Neha Gupta', dept: 'CSE, 2nd Year', score: 680, signals: 7, badges: ['Innovator'] },
  { rank: 6, name: 'Siddharth Das', dept: 'CSE, 3rd Year', score: 645, signals: 6, badges: ['Builder'] },
  { rank: 7, name: 'Kavya Reddy', dept: 'Mech, 4th Year', score: 610, signals: 8, badges: ['Winner', 'Connected'] },
  { rank: 8, name: 'Pooja Menon', dept: 'Civil, 3rd Year', score: 540, signals: 5, badges: ['Pioneer'] },
];

export const ecosystemStats = {
  activeStartups: 42,
  alumniFounders: 156,
  fundingRaised: '₹47.8Cr',
  competitionWins: 28,
  mentorIntros: 89,
  mentorAcceptRate: 73,
  healthScore: 78,
  studentsTracked: 1240,
  signalsThisWeek: 34,
  naacReportsGenerated: 6,
};

export const graphNodes = [
  { id: 'ml', label: 'Machine Learning', x: 300, y: 200, r: 28, cat: 'domain', connections: ['cv', 'nlp', 'dl', 'ai-center', 'agri', 'health'] },
  { id: 'cv', label: 'Computer Vision', x: 480, y: 140, r: 20, cat: 'research', connections: ['ml', 'dl', 'drone'] },
  { id: 'nlp', label: 'NLP', x: 180, y: 130, r: 18, cat: 'research', connections: ['ml', 'ai-center'] },
  { id: 'dl', label: 'Deep Learning Lab', x: 420, y: 300, r: 22, cat: 'lab', connections: ['ml', 'cv', 'ai-center'] },
  { id: 'ai-center', label: 'Center for AI', x: 300, y: 80, r: 26, cat: 'lab', connections: ['ml', 'nlp', 'dl', 'dr-r'] },
  { id: 'iiic', label: 'IIIC Incubation', x: 550, y: 280, r: 30, cat: 'incubation', connections: ['fintech', 'saas', 'agri'] },
  { id: 'fintech', label: 'FinTech', x: 620, y: 180, r: 24, cat: 'domain', connections: ['iiic', 'saas'] },
  { id: 'saas', label: 'SaaS', x: 680, y: 320, r: 22, cat: 'domain', connections: ['iiic', 'fintech', 'cloud'] },
  { id: 'agri', label: 'AgriTech', x: 130, y: 280, r: 20, cat: 'domain', connections: ['ml', 'iot', 'iiic'] },
  { id: 'iot', label: 'IoT', x: 80, y: 200, r: 18, cat: 'domain', connections: ['agri', 'drone'] },
  { id: 'drone', label: 'Drone Tech', x: 200, y: 350, r: 16, cat: 'research', connections: ['iot', 'cv'] },
  { id: 'health', label: 'HealthTech', x: 400, y: 380, r: 20, cat: 'domain', connections: ['ml', 'iot'] },
  { id: 'cloud', label: 'Cloud/DevOps', x: 580, y: 400, r: 18, cat: 'domain', connections: ['saas'] },
  { id: 'dr-r', label: 'Dr. Ramanathan', x: 350, y: 30, r: 14, cat: 'faculty', connections: ['ai-center'] },
];
