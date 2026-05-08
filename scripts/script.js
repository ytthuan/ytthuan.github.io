const skills = [
  { mark: "LZ", title: "Azure infrastructure & landing zones", detail: "Networking, compute, storage, hybrid connectivity, IaC, and CAF/WAF-aligned landing zones." },
  { mark: "DA", title: "Microsoft Fabric & Azure data platform", detail: "Fabric Lakehouse/Warehouse, OneLake, Direct Lake, Spark, Synapse, Azure SQL, Purview, semantic models, RLS." },
  { mark: "AI", title: "Azure AI & generative AI", detail: "Azure OpenAI, AI Foundry, AI Search, Document Intelligence, Semantic Kernel, prompt engineering, Responsible AI." },
  { mark: "AG", title: "Foundry agents & multi-agent orchestration", detail: "Microsoft Foundry Agent Service, AI Foundry Agents SDK, sequential workflows, group chat, HITL, MCP, Logic Apps." },
  { mark: "CA", title: "AI coding agents & delivery workflows", detail: "GitHub Copilot, Claude Code, Codex, OpenCode, and Cursor for code review, refactoring, test triage, and repeatable patch workflows." },
  { mark: "AM", title: "App modernization & Azure PaaS", detail: "App Service, Functions, AKS, Container Apps, API Management, microservices, GitHub Actions, Azure DevOps." },
  { mark: "SE", title: "Security, identity & governance", detail: "Microsoft Entra ID, Defender for Cloud, Zero Trust, policy, and cost governance across enterprise and SMB." },
  { mark: "MA", title: "Customer architecture & enablement", detail: "Discovery, landing-zone planning, workshops, MSX/MCEM, solution framing, and customer enablement from enterprise to SMB." },
];

const certifications = [
  {
    slug: "azure-solutions-architect-expert",
    title: "Azure Solutions Architect Expert",
    issuer: "Microsoft Certified",
    badge: "images/badges/azure-solutions-architect-expert.svg",
    verifyUrl: "https://learn.microsoft.com/api/credentials/share/en-us/LeoYen/4B07B24757624A30?sharingId=82841004015F6DB8",
  },
  {
    slug: "fabric-analytics-engineer-associate",
    title: "Fabric Analytics Engineer Associate",
    issuer: "Microsoft Certified",
    badge: "images/badges/fabric-analytics-engineer-associate.svg",
    verifyUrl: "https://learn.microsoft.com/api/credentials/share/en-us/LeoYen/45B72295A89F0789?sharingId=82841004015F6DB8",
  },
  {
    slug: "fabric-data-engineer-associate",
    title: "Fabric Data Engineer Associate",
    issuer: "Microsoft Certified",
    badge: "images/badges/fabric-data-engineer-associate.svg",
    verifyUrl: "https://learn.microsoft.com/api/credentials/share/en-us/LeoYen/652BB47F9FBA6796?sharingId=82841004015F6DB8",
  },
  {
    slug: "github-copilot",
    title: "GitHub Copilot",
    issuer: "GitHub Certifications",
    badge: "images/badges/github-copilot.svg",
    verifyUrl: "https://learn.microsoft.com/api/credentials/share/en-us/LeoYen/AC9949A4C9D25A08?sharingId=82841004015F6DB8",
  },
];

const timeline = [
  {
    years: "2022 - now",
    company: "Azure Cloud Solution Architect",
    role: "Active practice",
    summary:
      "Working with customers from enterprise to SMB on Azure adoption across infrastructure, data, AI, app modernization, and security — combining architecture guidance, presales solution design, and migration delivery.",
    tags: ["Azure", "Enterprise", "Migration", "AI"],
  },
  {
    years: "2020 - 2021",
    company: "Microsoft",
    role: "Azure Ranger, SMCC segment",
    summary:
      "Delivered cloud migration consulting, landing-zone guidance, and secure Azure architecture across migration, SAP, IoT, and IP co-sell scenarios.",
    tags: ["Landing zones", "Migration", "Security", "Architecture"],
  },
  {
    years: "2018 - 2020",
    company: "Freelance",
    role: "Azure developer and administrator",
    summary:
      "Built serverless solutions with Azure Functions, Cognitive Services, IoT capabilities, and ARM-template automation.",
    tags: ["Azure Functions", "Automation", "IoT", "APIs"],
  },
  {
    years: "2015 - 2020",
    company: "Tek-Experts",
    role: "Senior Software Support Engineer",
    summary:
      "Supported enterprise customers across Dynamics 365 Finance and Operations plus MicroFocus Network Node Manager, with root-cause analysis and mentoring.",
    tags: ["Dynamics 365", "Support", "Troubleshooting", "Mentorship"],
  },
  {
    years: "2014 - 2015",
    company: "FPT Software",
    role: "Developer",
    summary:
      "Built SharePoint and .NET components for enterprise collaboration projects and established a foundation in software engineering.",
    tags: ["SharePoint", ".NET", "Enterprise apps"],
  },
];

const renderList = (items) => items.map((item) => `<li>${item}</li>`).join("");

const renderSkills = () => {
  const skillGrid = document.querySelector("#skill-grid");
  if (!skillGrid) return;

  skillGrid.innerHTML = skills
    .map(
      (skill) => `
        <article class="skill-card glass-panel interactive-surface" data-surface>
          <span class="skill-mark">${skill.mark}</span>
          <div class="skill-body">
            <h4>${skill.title}</h4>
            <p>${skill.detail}</p>
          </div>
        </article>
      `,
    )
    .join("");
};

const renderCertifications = () => {
  const track = document.querySelector("[data-cert-track]");
  const status = document.querySelector("[data-cert-status]");
  if (!track) return;

  const total = certifications.length;

  track.innerHTML = certifications
    .map(
      (cert, i) => `
        <li class="cert-slide" data-cert-slide data-index="${i}" aria-roledescription="slide" aria-label="${i + 1} of ${total}: ${cert.title}">
          <article class="cert-card">
            <div class="cert-badge">
              <img src="${cert.badge}" alt="${cert.title} badge" width="160" height="160" loading="lazy" decoding="async" />
            </div>
            <div class="cert-meta">
              <p class="cert-issuer">${cert.issuer}</p>
              <h3 class="cert-title">${cert.title}</h3>
              <a class="cert-verify" href="${cert.verifyUrl}" target="_blank" rel="noreferrer noopener">Verify credential
                <svg viewBox="0 0 24 24" aria-hidden="true" width="14" height="14"><path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </a>
            </div>
          </article>
        </li>
      `,
    )
    .join("");

  if (status) {
    status.textContent = `Continuously cycling through ${total} verified credentials.`;
  }
};

const renderTimeline = () => {
  const timelineRoot = document.querySelector("#timeline");
  if (!timelineRoot) return;

  timelineRoot.innerHTML = timeline
    .map(
      (item, index) => `
        <article class="timeline-item glass-panel">
          <div class="timeline-marker">
            <span class="timeline-dot ${index % 2 === 0 ? "warm" : "cool"}"></span>
            <p>${item.years}</p>
          </div>
          <div class="timeline-body">
            <header>
              <h3>${item.company}</h3>
              <p>${item.role}</p>
            </header>
            <p>${item.summary}</p>
            <ul class="tag-list compact">
              ${renderList(item.tags)}
            </ul>
          </div>
        </article>
      `,
    )
    .join("");
};

const setupReveal = () => {
  const revealItems = [...document.querySelectorAll("[data-reveal]")];
  revealItems.forEach((item, index) => {
    item.style.setProperty("--reveal-delay", `${Math.min(index * 65, 520)}ms`);
  });

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8%" },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
};

const setupInteractiveSurfaces = () => {
  const surfaces = [...document.querySelectorAll("[data-surface]")];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  surfaces.forEach((surface) => {
    const resetSurface = () => {
      surface.style.setProperty("--rotate-x", "0deg");
      surface.style.setProperty("--rotate-y", "0deg");
      surface.style.setProperty("--pointer-x", "50%");
      surface.style.setProperty("--pointer-y", "50%");
    };

    resetSurface();

    surface.addEventListener("pointermove", (event) => {
      if (reduceMotion.matches) return;

      const bounds = surface.getBoundingClientRect();
      const relativeX = (event.clientX - bounds.left) / bounds.width;
      const relativeY = (event.clientY - bounds.top) / bounds.height;
      const rotateY = (relativeX - 0.5) * 8;
      const rotateX = (0.5 - relativeY) * 6;

      surface.style.setProperty("--rotate-x", `${rotateX.toFixed(2)}deg`);
      surface.style.setProperty("--rotate-y", `${rotateY.toFixed(2)}deg`);
      surface.style.setProperty("--pointer-x", `${(relativeX * 100).toFixed(2)}%`);
      surface.style.setProperty("--pointer-y", `${(relativeY * 100).toFixed(2)}%`);
    });

    surface.addEventListener("pointerleave", resetSurface);
  });
};

const setupScrollState = () => {
  const progressBar = document.querySelector(".scroll-progress span");
  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll(".nav-link")];

  const updateScrollState = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;

    if (progressBar) {
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      progressBar.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`;
    }

    const focusLine = window.scrollY + window.innerHeight * 0.34;
    let activeId = sections[0]?.id ?? "";
    const isAtPageEnd = scrollable > 0 && window.scrollY >= scrollable - 8;

    if (isAtPageEnd && sections.length > 0) {
      activeId = sections[sections.length - 1].id;
    } else {
      sections.forEach((section) => {
        if (focusLine >= section.offsetTop) {
          activeId = section.id;
        }
      });
    }

    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${activeId}`);
    });
  };

  window.addEventListener("scroll", updateScrollState, { passive: true });
  window.addEventListener("resize", updateScrollState);
  updateScrollState();
};

const setupPrimaryNav = () => {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("#primary-navigation");
  const topbar = toggle?.closest(".topbar");

  if (!toggle || !nav || !topbar) return;

  const desktopQuery = window.matchMedia("(min-width: 901px)");
  document.documentElement.classList.add("nav-enhanced");

  const isOpen = () => toggle.getAttribute("aria-expanded") === "true";

  const setOpen = (open, { restoreFocus = false } = {}) => {
    toggle.setAttribute("aria-expanded", String(open));
    topbar.classList.toggle("is-nav-open", open);

    if (!open && restoreFocus) {
      toggle.focus();
    }
  };

  toggle.addEventListener("click", () => {
    setOpen(!isOpen());
  });

  nav.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (target?.closest("a")) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen()) {
      setOpen(false, { restoreFocus: true });
    }
  });

  document.addEventListener("pointerdown", (event) => {
    if (isOpen() && !topbar.contains(event.target)) {
      setOpen(false);
    }
  });

  const handleBreakpointChange = () => {
    if (desktopQuery.matches) {
      setOpen(false);
    }
  };

  if (typeof desktopQuery.addEventListener === "function") {
    desktopQuery.addEventListener("change", handleBreakpointChange);
  } else if (typeof desktopQuery.addListener === "function") {
    desktopQuery.addListener(handleBreakpointChange);
  }

  handleBreakpointChange();
};

const setupCertMarquee = () => {
  const root = document.querySelector("[data-cert-carousel]");
  if (!root) return;

  const track = root.querySelector("[data-cert-track]");
  if (!track) return;

  const originals = [...track.querySelectorAll("[data-cert-slide]")];
  if (originals.length === 0) return;

  // Clone the slide list once and append for a seamless looping marquee.
  // Clones are aria-hidden so screen readers don't see them twice.
  originals.forEach((slide) => {
    const clone = slide.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    clone.setAttribute("data-clone", "true");
    clone.removeAttribute("data-index");
    // Make clone inert to focus + click traversal.
    clone.querySelectorAll("a, button").forEach((el) => {
      el.setAttribute("tabindex", "-1");
      el.setAttribute("aria-hidden", "true");
    });
    track.appendChild(clone);
  });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const applyReducedAttr = () => {
    if (reduceMotion.matches) {
      root.setAttribute("data-reduced", "true");
    } else {
      root.removeAttribute("data-reduced");
    }
  };

  const pause = () => root.classList.add("is-paused");
  const resume = () => root.classList.remove("is-paused");

  root.addEventListener("pointerenter", pause);
  root.addEventListener("pointerleave", resume);
  root.addEventListener("focusin", pause);
  root.addEventListener("focusout", resume);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      pause();
    } else {
      resume();
    }
  });

  const onMotionChange = () => applyReducedAttr();
  if (typeof reduceMotion.addEventListener === "function") {
    reduceMotion.addEventListener("change", onMotionChange);
  } else if (typeof reduceMotion.addListener === "function") {
    reduceMotion.addListener(onMotionChange);
  }

  applyReducedAttr();
};

const setupSigilFloat = () => {
  const targets = [...document.querySelectorAll(".brandmark-sigil")];
  if (targets.length === 0) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const apply = () => {
    if (reduceMotion.matches) {
      targets.forEach((el) => el.classList.remove("is-floating"));
    } else {
      targets.forEach((el) => el.classList.add("is-floating"));
    }
  };

  apply();

  if (typeof reduceMotion.addEventListener === "function") {
    reduceMotion.addEventListener("change", apply);
  } else if (typeof reduceMotion.addListener === "function") {
    reduceMotion.addListener(apply);
  }
};

const setupTimelineDotPulse = () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduceMotion.matches) return;

  const dots = [...document.querySelectorAll(".timeline-dot")];
  if (dots.length === 0) return;

  if (!("IntersectionObserver" in window)) {
    dots.forEach((dot) => dot.classList.add("is-pulsing"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-pulsing");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );

  dots.forEach((dot) => observer.observe(dot));
};

const setupHeadingShimmer = () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduceMotion.matches) return;

  const headings = [...document.querySelectorAll(".section-heading h2")];
  if (headings.length === 0) return;

  if (!("IntersectionObserver" in window)) {
    headings.forEach((h) => h.classList.add("is-shimmering"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = entry.target;
        target.classList.add("is-shimmering");
        const onEnd = () => {
          target.classList.remove("is-shimmering");
          target.removeEventListener("animationend", onEnd);
        };
        target.addEventListener("animationend", onEnd);
        observer.unobserve(target);
      });
    },
    { threshold: 0.4 },
  );

  headings.forEach((h) => observer.observe(h));
};

const init = () => {
  renderSkills();
  renderCertifications();
  renderTimeline();

  const yearNode = document.querySelector("#current-year");
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  setupReveal();
  setupInteractiveSurfaces();
  setupPrimaryNav();
  setupScrollState();
  setupCertMarquee();
  setupSigilFloat();
  setupTimelineDotPulse();
  setupHeadingShimmer();
};

init();
