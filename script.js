const posts = [
  {
    title: "Bubble Night – DJ Special",
    text: "Neon, Bass & Drinks bis spät. Dresscode: Glow ✨",
    date: "2026-01-12T22:00:00"
  },
  {
    title: "Weekend Warm-Up",
    text: "Der perfekte Start ins Wochenende 🎧",
    date: "2026-01-18T21:30:00"
  }
];

const feed = document.getElementById("feed");

posts.forEach(p => {
  const post = document.createElement("div");
  post.className = "post";
  post.innerHTML = `
    <div class="post-header">
      <div class="avatar"></div>
      <div class="username">partybubble_penzberg</div>
    </div>
    <div class="post-content">
      <h2>${p.title}</h2>
      <p>${p.text}</p>
    </div>
    <div class="post-footer">
      ${new Date(p.date).toLocaleString("de-DE")}
    </div>
  `;
  feed.appendChild(post);
});

// Theme toggle
const toggle = document.getElementById("themeToggle");
const current = localStorage.getItem("theme");

if (current) document.body.dataset.theme = current;

toggle.onclick = () => {
  const theme = document.body.dataset.theme === "dark" ? "" : "dark";
  document.body.dataset.theme = theme;
  localStorage.setItem("theme", theme);
};
