document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    let currentLang = localStorage.getItem('lang') || 'es';

    // Manejo de Páginas
    const handleRoute = () => {
        const id = location.hash.replace('#', '') || 'inicio';
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        const target = document.getElementById(id);
        if(target) target.classList.add('active');
        
        // Scroll al inicio
        window.scrollTo(0,0);
    };

    window.addEventListener('hashchange', handleRoute);
    handleRoute();

    // Idioma
    const applyLang = (l) => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if(i18n[l][key]) el.innerHTML = i18n[l][key];
        });
        document.getElementById('langToggle').textContent = l === 'es' ? 'EN' : 'ES';
        localStorage.setItem('lang', l);
    };

    document.getElementById('langToggle').addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        applyLang(currentLang);
    });

    // Tema
    document.getElementById('themeToggle').addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });

    // Gráfica de Ahorro
    const ctx = document.getElementById('savingsChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
            datasets: [{
                label: 'Consumo Manual (L)',
                data: [1200, 1250, 1180, 1300],
                borderColor: '#cbd5e1',
                fill: false
            }, {
                label: 'Consumo SRIG (L)',
                data: [800, 750, 780, 720],
                borderColor: '#1f6fae',
                backgroundColor: 'rgba(31, 111, 174, 0.1)',
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: { title: { display: true, text: 'Eficiencia Hídrica: SRIG vs Tradicional' } }
        }
    });

    applyLang(currentLang);
});
