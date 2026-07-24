/* ==========================================================================
   TEIA Website - JavaScript Controller
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initCharts();
});

function handleAccessRequest(e) {
    e.preventDefault();
    const form = e.target;
    form.classList.add('hidden');
    const msg = document.getElementById('success-msg');
    if (msg) {
        msg.classList.remove('hidden');
    }
}

let chart1 = null;
let chart2 = null;

function initCharts() {
    const ctx1 = document.getElementById('paperChart1');
    const ctx2 = document.getElementById('paperChart2');

    if (!ctx1 || !ctx2) return;

    if (chart1) chart1.destroy();
    if (chart2) chart2.destroy();

    chart1 = new Chart(ctx1.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['Coincidência Estrutural PDB (80%)', 'Variação Periférica (20%)'],
            datasets: [{
                data: [80, 20],
                backgroundColor: ['#2DD4BF', '#1E293B'],
                borderColor: 'rgba(255,255,255,0.08)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '72%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: '#94A3B8', font: { size: 12, family: 'Plus Jakarta Sans' } }
                }
            }
        }
    });

    chart2 = new Chart(ctx2.getContext('2d'), {
        type: 'radar',
        data: {
            labels: ['Sensibilidade (100%)', 'Especificidade (100%)', 'AUROC (1.0000)', 'Precisão (100%)', 'Enriquecimento (10x)'],
            datasets: [{
                label: 'Métricas da TEIA',
                data: [100, 100, 100, 100, 100],
                backgroundColor: 'rgba(14, 165, 233, 0.2)',
                borderColor: '#0EA5E9',
                pointBackgroundColor: '#2DD4BF',
                pointBorderColor: '#FFFFFF'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    grid: { color: 'rgba(255,255,255,0.08)' },
                    angleLines: { color: 'rgba(255,255,255,0.15)' },
                    ticks: { display: false },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}
