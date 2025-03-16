// Inisialisasi ulang AOS untuk memicu animasi pada konten yang baru ditampilkan
    AOS.refresh();

// Animasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {

    // Animasi untuk tombol navigasi
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach((button, index) => {
        setTimeout(() => {
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        }, index * 200); // Delay untuk setiap tombol
    });

    // Animasi untuk kartu konten
    const contentCards = document.querySelectorAll('.content-card');
    contentCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200); // Delay untuk setiap kartu
    });

    // Animasi untuk image placeholder
    const imagePlaceholder = document.querySelector('.image-placeholder');
    setTimeout(() => {
        imagePlaceholder.style.opacity = '1';
        imagePlaceholder.style.transform = 'translateY(0)';
    }, 1000); // Delay untuk image placeholder
});

// Ambil elemen wrapper marquee
const motionCtaWrapper = document.querySelector('.motion-cta-wrapper');

// Fungsi untuk mengatur kecepatan animasi
function setMarqueeSpeed(speed) {
    motionCtaWrapper.style.animationDuration = `${speed}s`;
}

setMarqueeSpeed(40);

document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.documentElement;

    // Periksa apakah ada tema yang tersimpan di localStorage
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
        darkModeToggle.checked = savedTheme === 'dark';
    } else {
        // Default ke tema sistem
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        body.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
        darkModeToggle.checked = prefersDark;
    }

    // Tambahkan event listener untuk toggle
    darkModeToggle.addEventListener('change', function() {
        if (this.checked) {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
});
