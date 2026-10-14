function startGame() {
    const btn = document.getElementById('startBtn');
    btn.innerHTML = `⚠️ INITIALIZING BREACH...`;
    btn.disabled = true;

    setTimeout(() => {
        alert(`🚨 SITE-20 CONTAINMENT BREACH INITIATED\n\nWelcome, Overseer Omega Black.\n\nThe game is ready.`);

        btn.innerHTML = `
            <span class="icon">⚙︎</span>
            START GAME
            <span class="arrow">→</span>
        `;
        btn.disabled = false;
    }, 800);
}

document.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') startGame();
});
