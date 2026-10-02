document.addEventListener("DOMContentLoaded", function() {
    
    // 1. 滚动淡入动画 (Intersection Observer)
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // 2. Hero 区鼠标跟随视差效果
    const heroSection = document.getElementById('hero');
    const parallaxBg = document.getElementById('parallax-bg');

    if (heroSection && parallaxBg) {
        heroSection.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;
            
            // 背景图形缓慢跟随鼠标移动
            parallaxBg.style.transform = `translate(${x}px, ${y}px)`;
        });
    }
});