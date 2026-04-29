document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const restartBtn = document.getElementById('restartBtn');
    const startScreen = document.getElementById('startScreen');
    const bgMusic = document.getElementById('bgMusic');
    const petalsContainer = document.getElementById('petalsContainer');
    
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    let sequenceTimeout;

    // Create falling petals
    function createPetals() {
        petalsContainer.innerHTML = '';
        const colors = ['#ff6b81', '#ff4757', '#eccc68', '#ff7f50'];
        for (let i = 0; i < 40; i++) {
            const petal = document.createElement('div');
            petal.classList.add('petal');
            petal.style.left = Math.random() * 100 + 'vw';
            petal.style.animationDelay = Math.random() * 5 + 's';
            petal.style.animationDuration = Math.random() * 3 + 5 + 's';
            petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            const size = Math.random() * 10 + 10;
            petal.style.width = size + 'px';
            petal.style.height = size + 'px';
            petalsContainer.appendChild(petal);
        }
    }

    // Slide orchestrator
    function showSlide(index) {
        // Hide all slides
        slides.forEach(s => s.classList.remove('active'));
        
        if (index < slides.length) {
            slides[index].classList.add('active');
            let duration = 6000; // default duration per slide

            // Custom timings per slide
            if (slides[index].id === 'slide1') duration = 5000; // Ganesha
            if (slides[index].id === 'slide2') duration = 6000; // Families
            if (slides[index].id === 'slide3') duration = 5000; // Names
            
            // Slide 4 is the 3D book revealing events
            if (slides[index].id === 'slide4') {
                duration = 10000; // Leave time to read
                const book = document.getElementById('weddingBook');
                book.classList.remove('is-open'); // Reset if replaying
                setTimeout(() => {
                    book.classList.add('is-open');
                }, 1500); // Open after showing cover for a bit
            }

            // Move to next slide
            if (index < slides.length - 1) {
                sequenceTimeout = setTimeout(() => {
                    showSlide(index + 1);
                }, duration);
            }
        }
    }

    function startVideo() {
        startScreen.classList.add('hidden');
        bgMusic.currentTime = 0;
        bgMusic.play().catch(e => console.log("Audio failed:", e));
        createPetals();
        
        // Start from slide 0 after a brief delay
        setTimeout(() => {
            showSlide(0);
        }, 500);
    }

    startBtn.addEventListener('click', startVideo);

    restartBtn.addEventListener('click', () => {
        clearTimeout(sequenceTimeout);
        showSlide(0);
    });
});
