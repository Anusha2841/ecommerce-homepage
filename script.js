/* KILANGI - script.js
   Works with your current index.html structure (tabs, anchors, header actions). */

document.addEventListener("DOMContentLoaded", () => {
  initSmoothScroll();
  initBestsellerTabs();
  initSearch();
  initHeaderActions();
});

/* ---------------- Smooth scroll for #links ---------------- */
function initSmoothScroll() {
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      // Optional: update URL hash without jumping
      history.pushState(null, "", href);
    });
  });
}

/* ---------------- Bestsellers tabs (UI only) ----------------
   Your HTML has buttons: .bestseller-tabs .tab
   If you later add data-category attributes + multiple grids, this can be extended. */
function initBestsellerTabs() {
  const tabList = document.querySelector(".bestseller-tabs");
  if (!tabList) return;

  const tabs = Array.from(tabList.querySelectorAll(".tab"));
  if (tabs.length === 0) return;

  const setActive = (activeTab) => {
    tabs.forEach((t) => {
      const isActive = t === activeTab;
      t.classList.toggle("active", isActive);
      t.setAttribute("aria-selected", String(isActive));
      // Keep role="tab" semantics intact if present
    });
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      setActive(tab);
      // Placeholder hook for future filtering:
      // const category = tab.dataset.category;
      // filterProducts(category);
    });

    tab.addEventListener("keydown", (e) => {
      const idx = tabs.indexOf(tab);
      if (e.key === "ArrowRight") {
        e.preventDefault();
        const next = tabs[(idx + 1) % tabs.length];
        next.focus();
        setActive(next);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        const prev = tabs[(idx - 1 + tabs.length) % tabs.length];
        prev.focus();
        setActive(prev);
      }
    });
  });

  // Ensure one active tab on load
  const initiallyActive = tabs.find((t) => t.classList.contains("active")) || tabs[0];
  setActive(initiallyActive);
}

/* ---------------- Search bar ---------------- */
function initSearch() {
  const searchInput = document.querySelector('.search-bar input[type="search"]');
  const searchBtn = document.querySelector(".search-icon");

  if (!searchInput || !searchBtn) return;

  const runSearch = () => {
    const q = (searchInput.value || "").trim();
    if (!q) return;

    // For now: simple UX. Later you can redirect to a search page:
    // window.location.href = `search.html?q=${encodeURIComponent(q)}`;
    alert(`Search: ${q}`);
  };

  searchBtn.addEventListener("click", runSearch);
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") runSearch();
  });
}

/* ---------------- Header icons (demo actions) ---------------- */
function initHeaderActions() {
  const headerActions = document.querySelector(".header-actions");
  if (!headerActions) return;

  const [wishlist, account, cart] = headerActions.querySelectorAll("a");

  if (wishlist) {
    wishlist.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Wishlist coming soon.");
    });
  }

  if (account) {
    account.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Account login coming soon.");
    });
  }

  if (cart) {
    cart.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Cart coming soon.");
    });
  }
}
