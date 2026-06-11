/**
 * SRIG - Main Logic Control
 * Gestión de navegación, traducción dinámica y renderizado de componentes industriales.
 */

let impactChart = null; // Instancia global de Chart.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializar Iconos Lucide
    lucide.createIcons();

    // 2. Determinar idioma inicial
    let currentLang = localStorage.getItem('lang') || 'es';

    // 3. Configurar navegación (SPA)
    window.addEventListener('hashchange', handleRoute);
    handleRoute();

    // 4. Configurar Toggles (Idioma y Tema)
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'es' ? 'en' : 'es';
            applyLanguage(currentLang);
        });
    }

    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            document.body.classList.toggle('light-theme');
            const isDark = document.body.classList.contains('dark-theme');
            themeBtn.textContent = isDark ? '☀️' : '🌙';
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            // Refrescar gráfica para actualizar colores de fuente
            initChart(currentLang);
        });
    }

    // Aplicar preferencia de tema guardada
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        themeBtn.textContent = '☀️';
    }

    // 5. Renderizado Inicial
    applyLanguage(currentLang);
});

/**
 * Gestiona la visibilidad de las secciones basado en el Hash de la URL
 */
function handleRoute() {
    const hash = location.hash.replace('#', '') || 'inicio';
    
    // Cambiar visibilidad de páginas
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    
    const target = document.getElementById(hash);
    if (target) target.classList.add('active');

    // Actualizar estado del menú
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${hash}`);
    });

    window.scrollTo(0, 0);
}

/**
 * Aplica traducciones y reconstruye componentes dinámicos
 */
function applyLanguage(lang) {
    localStorage.setItem('lang', lang);
    const data = i18n[lang];

    // Traducción de etiquetas simples
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (data[key]) el.innerHTML = data[key];
    });

    // Actualizar botón
    document.getElementById('langToggle').textContent = lang === 'es' ? 'EN' : 'ES';

    // Renderizar contenidos dinámicos complejos
    renderObjectives(data);
    renderPESTEL(data);
    renderFlow(data);
    renderEDT(data);
    renderRisks(data);
    renderTeam(data, lang);
    initChart(lang);
}

/**
 * Renderiza la lista de objetivos
 */
function renderObjectives(data) {
    const list = document.getElementById('objectiveList');
    list.innerHTML = `
        <li><i data-lucide="check-circle"></i> ${data.obj_item_1}</li>
        <li><i data-lucide="check-circle"></i> ${data.obj_item_2}</li>
        <li><i data-lucide="check-circle"></i> ${data.obj_item_3}</li>
        <li><i data-lucide="check-circle"></i> ${data.obj_item_4}</li>
    `;
    lucide.createIcons();
}

/**
 * Construye la cuadrícula PESTEL
 */
function renderPESTEL(data) {
    const container = document.getElementById('pestelGrid');
    const items = [
        { t: "P", d: data.pest_p }, { t: "E", d: data.pest_e },
        { t: "S", d: data.pest_s }, { t: "T", d: data.pest_t },
        { t: "E", d: data.pest_env }, { t: "L", d: data.pest_l }
    ];
    container.innerHTML = items.map(item => `
        <div class="pestel-box">
            <div class="pestel-letter">${item.t}</div>
            <p>${item.d}</p>
        </div>
    `).join('');
}

/**
 * Genera el flujo visual de operación
 */
function renderFlow(data) {
    const container = document.getElementById('flowSteps');
    const steps = [data.flow_1, data.flow_2, data.flow_3, data.flow_4, data.flow_5];
    container.innerHTML = steps.map((s, i) => `
        <div class="flow-step-item">
            <div class="step-circle">${i + 1}</div>
            <div class="step-text">${s}</div>
        </div>
        ${i < steps.length - 1 ? '<div class="flow-connector"></div>' : ''}
    `).join('');
}

/**
 * Renderiza la línea de tiempo de la EDT / WBS
 */
function renderEDT(data) {
    const container = document.getElementById('edtTimeline');
    const phases = [data.edt_1, data.edt_2, data.edt_3, data.edt_4, data.edt_5];
    container.innerHTML = phases.map(p => `<div class="edt-phase">${p}</div>`).join('');
}

/**
 * Llenado de la Matriz de Riesgos
 */
function renderRisks(data) {
    const body = document.getElementById('riskTableBody');
    const risks = [
        { n: data.r1_n, i: data.r1_i, m: data.r1_m },
        { n: data.r2_n, i: data.r2_i, m: data.r2_m },
        { n: data.r3_n, i: data.r3_i, m: data.r3_m }
    ];
    body.innerHTML = risks.map(r => `
        <tr>
            <td><strong>${r.n}</strong></td>
            <td>${r.i}</td>
            <td class="mitigation-cell">${r.m}</td>
        </tr>
    `).join('');
}

/**
 * Llenado de la Tabla de Equipo
 */
function renderTeam(data, lang) {
    const body = document.getElementById('teamTableBody');
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

/**
 * Inicialización de Gráfica de Impacto (Chart.js)
 */
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
                },
                title: {
                    display: true,
                    text: lang === 'es' ? 'Impacto en el Consumo de Agua' : 'Water Consumption Impact',
                    color: textColor
                }
            }
        }
    });
}
