/**
 * SRIG - Main Logic Control
 * Gestión de navegación SPA, Menú Móvil, Cards Colapsables y Traducción.
 */

let impactChart = null; // Instancia global de la gráfica

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializar Iconos Lucide
    lucide.createIcons();

    // 2. Determinar estado inicial
    let currentLang = localStorage.getItem('lang') || 'es';

    // 3. Control del Menú Hamburguesa
    const hamburger = document.getElementById('hamburger');
    const mainNav = document.getElementById('mainNav');

    if (hamburger && mainNav) {
        hamburger.addEventListener('click', () => {
            mainNav.classList.toggle('mobile-active');
        });

        // Cerrar menú al hacer clic en cualquier enlace (para móviles)
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('mobile-active');
            });
        });
    }

    // 4. Control de Cards Colapsables
    document.querySelectorAll('.card.collapsible .card-header').forEach(header => {
        header.addEventListener('click', () => {
            const card = header.parentElement;
            card.classList.toggle('active');
            // Re-inicializar iconos por si cambian
            lucide.createIcons();
        });
    });

    // 5. Configuración de Ruteo (SPA)
    window.addEventListener('hashchange', handleRoute);
    handleRoute();

    // 6. Toggles de Idioma y Tema
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'es' ? 'en' : 'es';
            applyLanguage(currentLang);
        });
    }

    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        // Cargar tema guardado
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
            themeBtn.textContent = '☀️';
        }

        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            document.body.classList.toggle('light-theme');
            const isDark = document.body.classList.contains('dark-theme');
            themeBtn.textContent = isDark ? '☀️' : '🌙';
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            // Refrescar gráfica para colores
            initChart(currentLang);
        });
    }

    // 7. Renderizado Inicial
    applyLanguage(currentLang);
});

/**
 * Navegación entre secciones sin recargar página
 */
function handleRoute() {
    const hash = location.hash.replace('#', '') || 'inicio';
    
    // Cambiar visibilidad de secciones
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    
    const target = document.getElementById(hash);
    if (target) target.classList.add('active');

    // Actualizar estado del menú de navegación
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${hash}`);
    });

    window.scrollTo(0, 0);
}

/**
 * Traduce el contenido y regenera componentes dinámicos
 */
function applyLanguage(lang) {
    localStorage.setItem('lang', lang);
    const data = i18n[lang];

    // Traducción de textos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (data[key]) el.innerHTML = data[key];
    });

    // Actualizar texto del botón de idioma
    document.getElementById('langToggle').textContent = lang === 'es' ? 'EN' : 'ES';

    // Ejecutar renderizado de componentes técnicos
    renderObjectives(data);
    renderPESTEL(data);
    renderFlow(data);
    renderEDT(data);
    renderRisks(data);
    renderTeam(data);
    initChart(lang);
}

// --- FUNCIONES DE RENDERIZADO TÉCNICO ---

function renderObjectives(data) {
    const list = document.getElementById('objectiveList');
    if (!list) return;
    const items = [data.obj_item_1, data.obj_item_2, data.obj_item_3, data.obj_item_4];
    list.innerHTML = items.filter(i => i).map(item => `
        <li><i data-lucide="check-circle" style="color: var(--accent); margin-right: 10px;"></i> ${item}</li>
    `).join('');
    lucide.createIcons();
}

function renderPESTEL(data) {
    const container = document.getElementById('pestelGrid');
    if (!container) return;
    const items = [
        { l: "P", d: data.pest_p }, { l: "E", d: data.pest_e },
        { l: "S", d: data.pest_s }, { l: "T", d: data.pest_t },
        { l: "E", d: data.pest_env }, { l: "L", d: data.pest_l }
    ];
    container.innerHTML = items.map(item => `
        <div class="pestel-box">
            <div class="pestel-letter">${item.l}</div>
            <p>${item.d}</p>
        </div>
    `).join('');
}

function renderFlow(data) {
    const container = document.getElementById('flowSteps');
    if (!container) return;
    const steps = [data.flow_1, data.flow_2, data.flow_3, data.flow_4, data.flow_5];
    container.innerHTML = steps.filter(s => s).map((s, i) => `
        <div class="flow-step-item">
            <div class="step-circle">${i + 1}</div>
            <div class="step-text">${s}</div>
        </div>
        ${i < 4 ? '<div class="flow-connector"></div>' : ''}
    `).join('');
}

function renderEDT(data) {
    const container = document.getElementById('edtTimeline');
    if (!container) return;
    const phases = [data.edt_1, data.edt_2, data.edt_3, data.edt_4, data.edt_5];
    container.innerHTML = phases.filter(p => p).map(p => `
        <div class="edt-phase">${p}</div>
    `).join('');
}

function renderRisks(data) {
    const body = document.getElementById('riskTableBody');
    if (!body) return;
    const risks = [
        { n: data.r1_n, i: data.r1_i, m: data.r1_m },
        { n: data.r2_n, i: data.r2_i, m: data.r2_m },
        { n: data.r3_n, i: data.r3_i, m: data.r3_m }
    ];
    body.innerHTML = risks.filter(r => r.n).map(r => `
        <tr>
            <td><strong>${r.n}</strong></td>
            <td>${r.i}</td>
            <td style="color: var(--primary); font-weight: 600;">${r.m}</td>
        </tr>
    `).join('');
}

function renderTeam(data) {
    const body = document.getElementById('teamTableBody');
    if (!body) return;
    const team = [
        { n: "Ortega Rojas David Alonso", r: data.role_dev },
        { n: "Alvidrez Garduño Julio Cesar", r: data.role_mfg },
        { n: "Bretado Barrera Carolina", r: data.role_proc },
        { n: "Trujillo López Juana Araceli", r: data.role_doc }
    ];
    body.innerHTML = team.map(t => `
        <tr>
            <td>${t.n}</td>
            <td><span class="role-badge">${t.r}</span></td>
        </tr>
    `).join('');
}

function initChart(lang) {
    const ctx = document.getElementById('impactChart');
    if (!ctx) return;

    if (impactChart) impactChart.destroy();

    const isDark = document.body.classList.contains('dark-theme');
    const textColor = isDark ? '#f1f5f9' : '#1e293b';

    impactChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [
                lang === 'es' ? 'Ahorro Hídrico' : 'Water Savings',
                lang === 'es' ? 'Consumo Optimizado' : 'Optimized Use'
            ],
            datasets: [{
                data: [45, 55],
                backgroundColor: ['#22c55e', '#1f6fae'],
                borderColor: isDark ? '#1e293b' : '#ffffff',
                borderWidth: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: textColor, font: { weight: '600' } }
                }
            }
        }
    });
}
