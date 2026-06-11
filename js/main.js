/**
 * SRIG - Main Logic Control
 * Gestión de: Navegación por pestañas, Menú Hamburguesa, Cards Colapsables e Idiomas.
 */

let impactChart = null; // Instancia global de la gráfica

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializar Iconos Lucide
    lucide.createIcons();

    // 2. Determinar idioma inicial
    let currentLang = localStorage.getItem('lang') || 'es';

    // 3. NUEVO: Control del Menú Hamburguesa
    const hamburger = document.getElementById('hamburger');
    const mainNav = document.getElementById('mainNav');

    if (hamburger && mainNav) {
        hamburger.addEventListener('click', () => {
            mainNav.classList.toggle('mobile-active');
        });

        // Cerrar menú automáticamente al hacer clic en un enlace (móvil)
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('mobile-active');
            });
        });
    }

    // 4. NUEVO: Control de Cards Colapsables
    // Busca todas las tarjetas con la clase 'collapsible'
    document.querySelectorAll('.card.collapsible .card-header').forEach(header => {
        header.addEventListener('click', () => {
            const card = header.parentElement;
            card.classList.toggle('active');
            // Re-escanea iconos por si el cambio de estado lo requiere
            lucide.createIcons();
        });
    });

    // 5. NAVEGACIÓN POR PESTAÑAS (SPA)
    // Detecta cambios en la URL (ej. #ingenieria) y muestra la sección correspondiente
    const handleRoute = () => {
        const hash = location.hash.replace('#', '') || 'inicio';
        
        // Ocultar todas las páginas
        const pages = document.querySelectorAll('.page');
        pages.forEach(p => p.classList.remove('active'));
        
        // Mostrar la página destino
        const target = document.getElementById(hash);
        if (target) target.classList.add('active');

        // Actualizar clase 'active' en el menú de navegación
        document.querySelectorAll('.main-nav a').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${hash}`);
        });

        // Si entramos a la pestaña de negocio, refrescamos la gráfica
        if (hash === 'negocio' || hash === 'contacto') {
            initChart(currentLang);
        }

        window.scrollTo(0, 0);
        lucide.createIcons();
    };

    window.addEventListener('hashchange', handleRoute);
    handleRoute(); // Ejecución inicial

    // 6. CONTROL DE IDIOMAS
    const applyLanguage = (lang) => {
        localStorage.setItem('lang', lang);
        const data = i18n[lang];

        // Traducir todos los elementos con data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (data[key]) el.innerHTML = data[key];
        });

        // Actualizar texto del botón de idioma
        document.getElementById('langToggle').textContent = lang === 'es' ? 'EN' : 'ES';

        // Renderizar componentes técnicos dinámicos
        renderObjectives(data);
        renderPESTEL(data);
        renderFlow(data);
        renderEDT(data);
        renderRisks(data);
        renderTeam(data);
        renderSpecs(data);
        initChart(lang);
    };

    document.getElementById('langToggle').addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        applyLanguage(currentLang);
    });

    // 7. MODO OSCURO
    const themeBtn = document.getElementById('themeToggle');
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
        initChart(currentLang);
    });

    applyLanguage(currentLang);
});

// --- FUNCIONES DE RENDERIZADO TÉCNICO (Contenido del PDF) ---

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
        { l: "P", t: data.pest_p_t, d: data.pest_p_d },
        { l: "E", t: data.pest_e_t, d: data.pest_e_d },
        { l: "S", t: data.pest_s_t, d: data.pest_s_d },
        { l: "T", t: data.pest_t_t, d: data.pest_t_d },
        { l: "E", t: data.pest_env_t, d: data.pest_env_d },
        { l: "L", t: data.pest_l_t, d: data.pest_l_d }
    ];

    container.innerHTML = items.map(i => `
        <div class="pestel-box">
            <div class="pestel-letter">${i.l}</div>
            <div class="pestel-info">
                <h4>${i.t}</h4>
                <p>${i.d}</p>
            </div>
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
        ${i < steps.length - 1 ? '<div class="flow-connector"></div>' : ''}
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
            <td style="color: var(--primary); font-weight: 700;">${r.m}</td>
        </tr>
    `).join('');
}

function renderSpecs(data) {
    const table = document.getElementById('specsTable');
    if (!table) return;
    const specs = [
        { k: data.spec_volt, v: data.spec_volt_val },
        { k: data.spec_type, v: data.spec_type_val },
        { k: data.spec_config, v: data.spec_config_val },
        { k: data.spec_comp, v: data.spec_comp_val },
        { k: data.spec_carac, v: data.spec_carac_val }
    ];
    table.innerHTML = `<table class="tech-table">` + 
        specs.filter(s => s.k).map(s => `<tr><td><strong>${s.k}</strong></td><td>${s.v}</td></tr>`).join('') + 
        `</table>`;
}

function renderTeam(data) {
    const body = document.getElementById('teamTableBody');
    if (!body) return;
    const team = [
        { n: "Ortega Rojas David Alonso", r: data.role_dev, e: "al24320557@utcj.edu.mx" },
        { n: "Alvidrez Garduño Julio Cesar", r: data.role_mfg, e: "--" },
        { n: "Bretado Barrera Carolina", r: data.role_proc, e: "--" },
        { n: "Trujillo López Juana Araceli", r: data.role_doc, e: "--" }
    ];
    body.innerHTML = team.map(t => `
        <tr>
            <td><strong>${t.n}</strong><br><small>${t.e}</small></td>
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



