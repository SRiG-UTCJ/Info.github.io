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
