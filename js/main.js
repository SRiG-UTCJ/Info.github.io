let efficiencyChart;

function initChart(lang) {
    const ctx = document.getElementById('savingsChart').getContext('2d');
    if (efficiencyChart) efficiencyChart.destroy();

    efficiencyChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [i18n[lang].chart_manual, i18n[lang].chart_srig],
            datasets: [{
                data: [100, 55], // Basado en el ahorro del 45% promedio del PDF
                backgroundColor: ['#cbd5e1', '#1f6fae'],
                borderRadius: 10
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                title: { display: true, text: lang === 'es' ? 'Eficiencia de Consumo %' : 'Consumption Efficiency %' }
            },
            scales: { y: { beginAtZero: true, max: 100 } }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    let currentLang = localStorage.getItem('lang') || 'es';

    const applyLang = (l) => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18n[l][key]) el.textContent = i18n[l][key];
        });
        document.getElementById('langToggle').textContent = l === 'es' ? 'EN' : 'ES';
        localStorage.setItem('lang', l);
        initChart(l);
    };

    const handleRoute = () => {
        const id = location.hash.replace('#', '') || 'inicio';
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        const target = document.getElementById(id);
        if (target) target.classList.add('active');
        window.scrollTo(0,0);
    };

    window.addEventListener('hashchange', handleRoute);
    document.getElementById('langToggle').addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        applyLang(currentLang);
    });

    document.getElementById('themeToggle').addEventListener('click', () => {
        document.body.classList.toggle('dark');
        document.getElementById('themeToggle').textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    });

    applyLang(currentLang);
    handleRoute();
});
