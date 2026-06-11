document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    let lang = localStorage.getItem('lang') || 'es';

    const team = [
        { n: "Ortega Rojas David", r: "Desarrollo SRIG / Technical Lead", e: "al24320557@utcj.edu.mx" },
        { n: "Alvidrez Garduño Julio", r: "Ingeniería de Manufactura", e: "--" },
        { n: "Bretado Barrera Carolina", r: "Control de Procesos", e: "--" },
        { n: "Trujillo López Juana", r: "Documentación y Calidad", e: "--" }
    ];

    const risks = [
        { r: "Asfixia Radicular", i: "Pérdida de árboles", m: "Ajuste de programación y sensores" },
        { r: "Vandalismo", i: "Daño a electrónica", m: "Gabinete NEMA y monitoreo" },
        { r: "Falla Presostato", i: "Falta de riego", m: "Revisiones semanales y alarmas" }
    ];

    const apply = (l) => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if(i18n[l][key]) el.innerHTML = i18n[l][key];
        });

        // Inyectar Listas
        document.getElementById('obj_list').innerHTML = `<li>${i18n[l].obj_1}</li><li>${i18n[l].obj_2}</li><li>${i18n[l].obj_3}</li>`;
        
        const pestel = ["Político", "Económico", "Social", "Tecnológico", "Ecológico", "Legal"];
        document.getElementById('pestel_container').innerHTML = pestel.map(p => `<div class="b"><strong>${p}</strong><br>Análisis ${l}</div>`).join('');

        document.getElementById('risk_body').innerHTML = risks.map(r => `<tr><td>${r.r}</td><td>${r.i}</td><td>${r.m}</td></tr>`).join('');
        document.getElementById('team_body').innerHTML = team.map(t => `<tr><td>${t.n}</td><td>${t.r}</td><td>${t.e}</td></tr>`).join('');
        
        document.getElementById('langToggle').textContent = l === 'es' ? 'EN' : 'ES';
        renderCharts(l);
    };

    const renderCharts = (l) => {
        const commonOptions = { responsive: true, plugins: { legend: { display: false } } };
        new Chart(document.getElementById('savingsChart'), {
            type: 'doughnut',
            data: { labels: ['Ahorro', 'Consumo'], datasets: [{ data: [45, 55], backgroundColor: ['#22c55e', '#1f6fae'] }] },
            options: commonOptions
        });
        new Chart(document.getElementById('marketChart'), {
            type: 'bar',
            data: { labels: ['Manual', 'SRIG'], datasets: [{ data: [100, 60], backgroundColor: ['#94a3b8', '#1f6fae'] }] },
            options: commonOptions
        });
    };

    const handleRoute = () => {
        const id = location.hash.replace('#', '') || 'inicio';
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById(id)?.classList.add('active');
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
    };

    window.addEventListener('hashchange', handleRoute);
    document.getElementById('langToggle').addEventListener('click', () => { lang = lang === 'es' ? 'en' : 'es'; apply(lang); });
    document.getElementById('themeToggle').addEventListener('click', () => document.body.classList.toggle('dark'));

    apply(lang);
    handleRoute();
});
