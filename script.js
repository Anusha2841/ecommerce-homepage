// Enhanced script.js (keeps PDF content static, adds clean UX)

document.addEventListener("DOMContentLoaded", () => {
  setupBestsellerTabs();
  setupSearch();
  setupSmoothScroll();
  setupActiveNavOnScroll();
});

/* 1) Bestseller tabs: only active styling (PDF is static) */
function setupBestsellerTabs() {
  const tabs = document.querySelectorAll(".bestseller-tabs .tab");
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });
}

/* 2) Search: click icon or press Enter */
function setupSearch() {
  const input = document.querySelector(".search-bar input");
  const icon = document.querySelector(".search-icon");
  if (!input) return;

  const submit = () => {
    const q = input.value.trim();
    if (!q) return;
    alert(`Searching for: ${q}`);
  };

  if (icon) icon.addEventListener("click", submit);

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") submit();
  });
}

/* 3) Smooth scroll for anchor links (if you use #section IDs) */
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;

      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

/* 4) Highlight nav item while scrolling (optional) */
function setupActiveNavOnScroll() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".main-nav a");

  // only works if nav links have href="#id"
  const linkMap = new Map();
  navLinks.forEach((a) => {
    const href = a.getAttribute("href") || "";
    if (href.startsWith("#")) linkMap.set(href.substring(1), a);
  });

  if (!sections.length || !linkMap.size) return;

  const setActive = (id) => {
    navLinks.forEach((a) => a.classList.remove("active"));
    const link = linkMap.get(id);
    if (link) link.classList.add("active");
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { root: null, threshold: 0.55 }
  );

  sections.forEach((sec) => observer.observe(sec));
}
