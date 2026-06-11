document.addEventListener('DOMContentLoaded', () => {
    // Inicializar Iconos
    lucide.createIcons();

    // Inicializar Animaciones
    AOS.init({
        duration: 1000,
        once: true
    });

    // Configuración de la Gráfica de Eficiencia
    const ctx = document.getElementById('efficiencyChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Riego Manual', 'SRIG (Optimizado)'],
            datasets: [{
                label: 'Consumo de Agua (Litros/Mes)',
                data: [4500, 2700],
                backgroundColor: ['#cbd5e1', '#1f6fae'],
                borderRadius: 10
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                title: { display: true, text: 'Comparativa de Consumo Hídrico' }
            }
        }
    });

    // Dark Mode Toggle
    const themeBtn = document.getElementById('themeToggle');
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    });
});
// Variable global de idioma
let currentLang = localStorage.getItem('lang') || 'es';

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    initChart();
    applyLanguage(currentLang);

    // Navegación por Hash
    window.addEventListener('hashchange', handleRoute);
    handleRoute();

    // Toggles
    document.getElementById('langToggle').addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        applyLanguage(currentLang);
    });

    document.getElementById('themeToggle').addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });
});

function handleRoute() {
    const id = location.hash.replace('#', '') || 'inicio';
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.main-nav a').forEach(a => a.classList.remove('active'));
    
    const target = document.getElementById(id);
    if(target) target.classList.add('active');
    
    const navLink = document.querySelector(`.main-nav a[href="#${id}"]`);
    if(navLink) navLink.classList.add('active');

    // Breadcrumb
    document.getElementById('breadcrumb').textContent = id.charAt(0).toUpperCase() + id.slice(1);
}

function applyLanguage(lang) {
    localStorage.setItem('lang', lang);
    document.getElementById('langToggle').textContent = lang === 'es' ? 'EN' : 'ES';
    
    // Buscar todos los elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang][key]) {
            el.innerHTML = i18n[lang][key]; // Usamos innerHTML para permitir negritas
        }
    });
}

function initChart() {
    const ctx = document.getElementById('efficiencyChart');
    if(!ctx) return;
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Manual', 'SRIG'],
            datasets: [{
                data: [100, 60],
                backgroundColor: ['#cbd5e1', '#1f6fae']
            }]
        },
        options: { plugins: { title: { display: true, text: 'Consumo de Agua %' } } }
    });
}
