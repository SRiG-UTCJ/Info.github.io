let chart;

function createChart(lang) {
    const ctx = document.getElementById('efficiencyChart').getContext('2d');
    if(chart) chart.destroy();

    const labels = [i18n[lang].chart_label_manual, i18n[lang].chart_label_srig];
    
    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                data: [100, 60],
                backgroundColor: ['#cbd5e1', '#1f6fae'],
                borderRadius: 8
            }]
        },
        options: {
            plugins: { 
                title: { display: true, text: lang === 'es' ? 'Eficiencia de Consumo %' : 'Consumption Efficiency %' },
                legend: { display: false }
            },
            scales: { y: { max: 100, beginAtZero: true } }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    let currentLang = localStorage.getItem('lang') || 'es';

    const applyLang = (l) => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if(i18n[l][key]) el.innerHTML = i18n[l][key];
        });
        document.getElementById('langToggle').textContent = l === 'es' ? 'EN' : 'ES';
        localStorage.setItem('lang', l);
        createChart(l); // Actualizar gráfica
    };

    // Navegación
    const handleRoute = () => {
        const id = location.hash.replace('#', '') || 'inicio';
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById(id)?.classList.add('active');
        window.scrollTo(0,0);
    };

    window.addEventListener('hashchange', handleRoute);
    document.getElementById('langToggle').addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        applyLang(currentLang);
    });

    applyLang(currentLang);
    handleRoute();
});
