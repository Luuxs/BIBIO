document.addEventListener("DOMContentLoaded", () => {
    // 1. EFECTO DE ESCRITURA
    const text = "fetch_data --user rivera --status --all";
    const speed = 70;
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typewriter").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(() => {
                const out = document.getElementById("terminal-out");
                if (out) {
                    out.classList.remove("hidden");
                    out.style.opacity = "1";
                }
            }, 500);
        }
    }
    setTimeout(typeWriter, 1500);

    // 2. RASTREO DE COORDENADAS (LIMA/VENTANILLA)
    setInterval(() => {
        const lat = (-11.87 + (Math.random() * 0.01)).toFixed(4);
        const lon = (-77.12 + (Math.random() * 0.01)).toFixed(4);
        const geoLoc = document.getElementById("geo-loc");
        if(geoLoc) geoLoc.innerText = `LOC: ${lat}S / ${lon}W`;
    }, 3000);

    // 3. GLITCH EN EL NOMBRE
    const name = document.getElementById("glitch-name");
    setInterval(() => {
        if (Math.random() > 0.98 && name) {
            name.style.color = "#ff0055";
            name.style.textShadow = "2px 0 #00ffff";
            setTimeout(() => {
                name.style.color = "white";
                name.style.textShadow = "none";
            }, 150);
        }
    }, 2000);

    // 4. SONIDO DE INTERFAZ
    const hoverAudio = new Audio('https://www.soundjay.com/buttons/sounds/button-28.mp3');
    hoverAudio.volume = 0.05;

    const playBeep = () => {
        const s = hoverAudio.cloneNode();
        s.volume = 0.05;
        s.play().catch(() => {});
    };

    // Aplicar a bordes y iconos sociales
    document.querySelectorAll('.tech-border, .social-icon').forEach(el => {
        el.addEventListener('mouseenter', playBeep);
    });
});