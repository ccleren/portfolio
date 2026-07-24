// ============================================================================
// SCRIPT PRINCIPAL
// ============================================================================

let currentLang = localStorage.getItem('lang') || 'es';
let currentTheme = localStorage.getItem('theme') || 'dark';
let currentFilter = 'all';

let projectsGrid, modal, modalClose, filterBtns, navLinks, navBurger;

document.addEventListener('DOMContentLoaded', function () {
    projectsGrid = document.getElementById('projectsGrid');
    modal = document.getElementById('projectModal');
    modalClose = document.getElementById('modalClose');
    filterBtns = document.querySelectorAll('.filter-btn');
    navLinks = document.getElementById('navLinks');
    navBurger = document.getElementById('navBurger');

    applyTheme(currentTheme);
    applyLanguage(currentLang);
    renderProjects();
    initFilters();
    initModal();
    initThemeToggle();
    initLangToggle();
    initMobileNav();
    initScrollFade();
    initCertToggle();
});

// ----------------------------------------------------------------------------
// Translation helper
// ----------------------------------------------------------------------------
function t(key) {
    return (i18n[currentLang] && i18n[currentLang][key]) || key;
}

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });

    document.title = t('meta.title');

    const grid = document.querySelector('.cert-grid');
    const certLabel = document.getElementById('certToggleLabel');
    if (grid && certLabel) {
        certLabel.textContent = grid.classList.contains('expanded')
            ? t('education.certToggleHide')
            : t('education.certToggleShow');
    }

    const langLabel = document.getElementById('langLabel');
    if (langLabel) langLabel.textContent = lang === 'es' ? 'EN' : 'ES';

    renderProjects();
    if (activeProject && modal.classList.contains('open')) {
        renderModal();
    }
}

function initLangToggle() {
    const btn = document.getElementById('langToggle');
    btn.addEventListener('click', () => {
        applyLanguage(currentLang === 'es' ? 'en' : 'es');
    });
}

// ----------------------------------------------------------------------------
// Theme
// ----------------------------------------------------------------------------
function applyTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
}

function initThemeToggle() {
    const btn = document.getElementById('themeToggle');
    btn.addEventListener('click', () => {
        applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
}

// ----------------------------------------------------------------------------
// Mobile nav
// ----------------------------------------------------------------------------
function initMobileNav() {
    navBurger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
}

// ----------------------------------------------------------------------------
// Projects
// ----------------------------------------------------------------------------
function renderProjects() {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = '';

    const countEl = document.getElementById('statProjectCount');
    if (countEl) countEl.textContent = projects.length;

    const filtered = currentFilter === 'all'
        ? projects
        : projects.filter(p => p.tag === currentFilter);

    filtered.forEach((project, index) => {
        const card = createProjectCard(project);
        card.style.animationDelay = `${index * 0.06}s`;
        projectsGrid.appendChild(card);
    });
}

function createProjectCard(project) {
    const data = project[currentLang];
    const card = document.createElement('div');
    card.className = 'project-card';
    card.addEventListener('click', () => openModal(project));

    card.innerHTML = `
        <img src="${project.image}" alt="${data.title}" class="project-image">
        <div class="project-info">
            <h3 class="project-title">${data.title}</h3>
            <p class="project-description">${data.description}</p>
            <div class="project-tags">
                <span class="project-tag tag-${project.tag}">${t('filter.' + project.tag)}</span>
            </div>
            <a href="${project.github}" target="_blank" class="project-link" data-role="code-link">
                <i class="fab fa-github"></i>
                ${t('project.viewCode')}
            </a>
        </div>
    `;

    const link = card.querySelector('[data-role="code-link"]');
    link.addEventListener('click', (e) => {
        e.stopPropagation();
        if (link.getAttribute('href') === '#') {
            e.preventDefault();
            alert(t('project.noLink'));
        }
    });

    return card;
}

function initFilters() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            renderProjects();
        });
    });
}

// ----------------------------------------------------------------------------
// Modal
// ----------------------------------------------------------------------------
let activeProject = null;

function initModal() {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    modalClose.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });

    const imgContainer = document.getElementById('modalImageContainer');
    if (imgContainer) {
        imgContainer.addEventListener('click', () => {
            if (activeProject) window.open(activeProject.image, '_blank');
        });
    }
}

function openModal(project) {
    activeProject = project;
    renderModal();
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function renderModal() {
    if (!activeProject) return;
    const data = activeProject[currentLang];

    document.getElementById('modalTitle').textContent = data.title;
    const img = document.getElementById('modalImage');
    img.src = activeProject.image;
    img.alt = data.title;
    document.getElementById('modalDescription').textContent = data.fullDescription;

    document.getElementById('modalTechnologies').innerHTML = activeProject.technologies
        .map(tech => `<span class="modal-tech-tag">${tech}</span>`)
        .join('');

    const githubBtn = document.getElementById('modalGithub');
    githubBtn.href = activeProject.github;
    githubBtn.onclick = (e) => {
        if (activeProject.github === '#') {
            e.preventDefault();
            alert(t('project.noLink'));
        }
    };
}

function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    activeProject = null;
}

// ----------------------------------------------------------------------------
// Certifications toggle
// ----------------------------------------------------------------------------
function initCertToggle() {
    const btn = document.getElementById('certToggle');
    const grid = document.querySelector('.cert-grid');
    const label = document.getElementById('certToggleLabel');
    if (!btn || !grid) return;

    btn.addEventListener('click', () => {
        const isOpen = grid.classList.toggle('expanded');
        btn.classList.toggle('open', isOpen);
        label.textContent = isOpen ? t('education.certToggleHide') : t('education.certToggleShow');
    });
}

// ----------------------------------------------------------------------------
// Scroll helpers
// ----------------------------------------------------------------------------
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function initScrollFade() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('animate-in');
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.timeline-card, .edu-card, .cert-chip, .contact-card, .about-facts').forEach(el => observer.observe(el));
}
