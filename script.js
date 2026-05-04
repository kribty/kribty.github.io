const currentPage = window.location.pathname.split("/").pop() || "index.html";
const navLinks = document.querySelectorAll('.main-nav a');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

function toggleMenu() {
    const nav = document.getElementById('navMenu');
    nav.classList.toggle('active');
}

const cForm = document.getElementById('contactForm');
if (cForm) {
    cForm.onsubmit = function(e) {
        e.preventDefault();
        alert('Сообщение отправлено!');
        cForm.reset();
    };
}

const chartEl = document.getElementById('ssdChart');
if (chartEl) {
    new Chart(chartEl, {
        type: 'bar',
        data: {
            labels: ['HDD (7200 RPM)', 'SATA III SSD', 'NVMe Gen 4'],
            datasets: [{
                label: 'Скорость чтения (МБ/с)',
                data: [150, 560, 7500],
                backgroundColor: [
                    '#95a5a6', 
                    '#3498db', 
                    '#2c3e50'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}