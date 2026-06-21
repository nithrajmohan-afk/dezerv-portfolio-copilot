const narratives = [
  "We have not reduced your growth ambition. We have reduced the chance that one overheated part of the market dominates your outcomes. Mid-cap exposure had become larger than intended for your risk profile, so part of it has been moved into a more diversified equity strategy and a liquidity buffer. This keeps the portfolio growth-oriented while improving resilience if markets turn volatile.",
  "Your portfolio remains built for long-term wealth creation, but the risk mix needed a reset. Recent gains in mid-caps increased concentration and valuation risk. The change protects part of those gains, improves liquidity, and keeps enough equity exposure to participate in future upside.",
  "The decision is best seen as risk housekeeping, not a bearish call. We are preserving your ability to compound while reducing the impact of a sharp correction in one market segment. The portfolio is now better balanced across growth, diversification, and near-term liquidity."
];
let narrativeIndex = 0;
const riskData = [
  { title: "Style concentration", detail: "Growth + mid-cap exposure had crossed the intended band for this client profile.", status: "Needs action", type: "warn" },
  { title: "Liquidity readiness", detail: "Debt/liquid allocation now covers near-term rebalancing needs.", status: "Improved", type: "ok" },
  { title: "Client communication", detail: "Action requires proactive explanation because headline returns may trail aggressive peers short-term.", status: "Advisor note", type: "warn" }
];
const timeline = [
  { date: "18 Jun", title: "Rebalance approved", body: "Investment committee approved reduction in mid-cap exposure after valuation and volatility review." },
  { date: "16 Jun", title: "Risk threshold crossed", body: "Portfolio drift detected: mid-cap allocation moved 4 percentage points above the target band." },
  { date: "11 Jun", title: "Alternative evaluated", body: "Considered holding allocation unchanged, but rejected because risk-adjusted upside had weakened." },
  { date: "04 Jun", title: "Client profile reviewed", body: "Growth objective confirmed, but drawdown tolerance remained moderate rather than aggressive." }
];
function setNarrative() { document.getElementById('narrative').textContent = narratives[narrativeIndex]; }
function renderRisks() {
  document.getElementById('riskList').innerHTML = riskData.map(r => `
    <div class="risk"><div><strong>${r.title}</strong><span>${r.detail}</span></div><div class="badge ${r.type}">${r.status}</div></div>
  `).join('');
}
function renderTimeline() {
  document.getElementById('timelineItems').innerHTML = timeline.map(t => `
    <div class="timeline-item"><time>${t.date}</time><h4>${t.title}</h4><p>${t.body}</p></div>
  `).join('');
}
setNarrative(); renderRisks(); renderTimeline();
document.querySelectorAll('.nav').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active-view'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.view).classList.add('active-view');
    document.getElementById('pageTitle').textContent = btn.textContent;
  });
});
document.getElementById('regenerateBtn').addEventListener('click', () => {
  narrativeIndex = (narrativeIndex + 1) % narratives.length;
  setNarrative();
});
document.getElementById('exportBtn').addEventListener('click', async () => {
  const note = `Hi Vaibhav, I applied for the PM role at Dezerv and wanted to show how I think about the product. I noticed that active wealth management creates an explainability challenge: clients need to understand why portfolio actions are taken, and advisors need to communicate those decisions consistently. I built a quick prototype called Portfolio Decision Copilot that turns portfolio actions into client-ready narratives, advisor talking points, risk flags, and a decision timeline. Would love to share it and get your feedback.`;
  await navigator.clipboard.writeText(note);
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
});
