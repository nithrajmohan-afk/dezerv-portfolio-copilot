const navItems = document.querySelectorAll('.nav-item');
const views = document.querySelectorAll('.view');
const tabs = document.querySelectorAll('.tab');
const outputs = document.querySelectorAll('.output-card');
const toast = document.getElementById('toast');

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    navItems.forEach((nav) => nav.classList.remove('active'));
    views.forEach((view) => view.classList.remove('active'));
    item.classList.add('active');
    document.getElementById(item.dataset.view).classList.add('active');
  });
});

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((item) => item.classList.remove('active'));
    outputs.forEach((output) => output.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.output).classList.add('active');
  });
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1600);
}

document.getElementById('copyFounderMessage').addEventListener('click', async () => {
  const note = `Hi Vaibhav,\n\nI applied for the Product Manager role at Dezerv, but wanted to go beyond just sharing my profile.\n\nI noticed that active portfolio management creates an explainability challenge for relationship managers: how do advisors explain portfolio actions to HNI clients quickly, clearly, and consistently without increasing manual workload?\n\nI built a quick working prototype around that idea: an Advisor Copilot that converts portfolio decisions into client-ready WhatsApp/email explanations, advisor notes, and a decision timeline.\n\nSharing it here: <your link>\n\nWould love your feedback.`;
  await navigator.clipboard.writeText(note);
  showToast('Outreach note copied');
});

document.getElementById('regenerate').addEventListener('click', () => {
  showToast('Explanation generated');
});
