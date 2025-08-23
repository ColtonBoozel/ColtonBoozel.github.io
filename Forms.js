// Forms.js
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("pdfModal");
  const pdfFrame = document.getElementById("pdfFrame");

  // ---- Event Delegation ----
  document.addEventListener("click", (e) => {
    // ===== 1) PREVIEW BUTTON =====
    const previewBtn = e.target.closest(".preview-btn");
    if (previewBtn) {
      e.preventDefault(); // prevent <a> navigation if used
      const pdfUrl =
        previewBtn.getAttribute("data-pdf") || previewBtn.getAttribute("href");
      if (!pdfUrl || !modal || !pdfFrame) return;

      pdfFrame.src = pdfUrl;
      modal.style.display = "block";
      document.body.style.overflow = "hidden"; // prevent background scroll
      return;
    }

    // ===== 2) CLOSE MODAL (X button or backdrop click) =====
    const closeBtn = e.target.closest(".modal-close, .close");
    if (closeBtn || (modal && e.target === modal)) {
      if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
        if (pdfFrame) pdfFrame.src = ""; // clear PDF
      }
      return;
    }

    // ===== 3) GROUP TOGGLE =====
    const groupToggle = e.target.closest(".group-toggle");
    if (groupToggle) {
      const content = groupToggle.nextElementSibling;
      if (!content) return;

      // Optional: accordion mode (only one open at a time)
      const container = groupToggle.closest(".Forms-Container");
      const single = container && container.dataset.accordion === "single";
      if (single) {
        // Find only direct siblings at the same level
        const parentGroup = groupToggle.closest(".Form-Group");
        if (parentGroup && parentGroup.parentElement) {
          const siblings = parentGroup.parentElement.querySelectorAll(
            ":scope > .Form-Group .group-content.show"
          );
          siblings.forEach((open) => {
            if (open !== content) {
              open.classList.remove("show");
              const t = open.previousElementSibling;
              if (t && t.classList.contains("group-toggle")) {
                t.setAttribute("aria-expanded", "false");
                const arrow = t.querySelector(".arrow");
                if (arrow) arrow.textContent = "▾";
              }
            }
          });
        }
      }

      const isOpen = content.classList.toggle("show");
      groupToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");

      // Update arrow indicator
      const arrowEl = groupToggle.querySelector(".arrow");
      if (arrowEl) {
        arrowEl.textContent = isOpen ? "▴" : "▾";
      } else {
        // Fallback: toggle last char if it's an arrow
        const txt = groupToggle.textContent.trim();
        const endsWithArrow = /[▾▴]$/.test(txt);
        groupToggle.textContent = endsWithArrow
          ? txt.slice(0, -1) + (isOpen ? "▴" : "▾")
          : txt + (isOpen ? " ▴" : " ▾");
      }
    }
  });

  // ===== Esc key closes modal =====
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.style.display === "block") {
      modal.style.display = "none";
      document.body.style.overflow = "";
      if (pdfFrame) pdfFrame.src = "";
    }
  });
});
