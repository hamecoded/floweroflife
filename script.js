// Flower of Life - Interactive JavaScript

class FlowerOfLife {
    constructor() {
        this.isAnimating = false;
        this.particles = [];
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.createParticles();
        this.startAnimation();
    }

    setupEventListeners() {
        // Mouse movement for flower interaction
        document.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        document.addEventListener('mouseleave', () => this.resetFlowerPosition());
        
        // Click effects on petals
        document.querySelectorAll('.petal').forEach((petal, index) => {
            petal.addEventListener('click', () => this.handlePetalClick(petal, index));
        });

        // CTA button interaction
        const ctaButton = document.querySelector('.cta-button');
        ctaButton.addEventListener('click', () => this.exploreFlower());

        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
    }

    handleMouseMove(e) {
        if (this.isAnimating) return;
        
        const flower = document.querySelector('.flower');
        const rect = flower.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - centerX) / 50;
        const deltaY = (e.clientY - centerY) / 50;
        
        flower.style.transform = `translate(-50%, -50%) translate(${deltaX}px, ${deltaY}px)`;
    }

    resetFlowerPosition() {
        const flower = document.querySelector('.flower');
        flower.style.transform = 'translate(-50%, -50%) translate(0px, 0px)';
    }

    handlePetalClick(petal, index) {
        // Change petal color
        petal.style.background = 'radial-gradient(circle, #ff6b6b 0%, #ff9a9e 50%, #fecfef 100%)';
        
        // Create particle effect
        this.createParticleEffect(petal);
        
        // Reset color after animation
        setTimeout(() => {
            petal.style.background = 'radial-gradient(circle, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)';
        }, 500);

        // Play sound effect (if audio is available)
        this.playClickSound();
    }

    createParticleEffect(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < 5; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = centerX + 'px';
            particle.style.top = centerY + 'px';
            particle.style.animationDelay = Math.random() * 0.5 + 's';
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 3000);
        }
    }

    playClickSound() {
        // Create a simple click sound using Web Audio API
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        } catch (error) {
            // Audio not supported or blocked
            console.log('Audio not available');
        }
    }

    exploreFlower() {
        this.isAnimating = true;
        
        // Animate the flower
        const flower = document.querySelector('.flower');
        flower.style.animation = 'none';
        flower.offsetHeight; // Trigger reflow
        flower.style.animation = 'petalRotate 2s ease-in-out';
        
        // Show exploration message
        this.showExplorationMessage();
        
        // Reset animation state
        setTimeout(() => {
            this.isAnimating = false;
        }, 2000);
    }

    showExplorationMessage() {
        const messages = [
            "🌸 The Flower of Life contains the blueprint of all creation",
            "🌀 Each petal represents a different aspect of existence",
            "✨ Sacred geometry reveals the hidden patterns of the universe",
            "🌺 The pattern appears in nature, art, and architecture",
            "🔮 Ancient cultures used this symbol for spiritual guidance"
        ];
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        // Create a beautiful notification
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            font-size: 14px;
            max-width: 300px;
            z-index: 1000;
            animation: slideIn 0.5s ease-out;
        `;
        notification.textContent = randomMessage;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.5s ease-in forwards';
            setTimeout(() => notification.remove(), 500);
        }, 3000);
    }

    handleKeyPress(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.exploreFlower();
        } else if (e.key === 'Escape') {
            this.resetFlowerPosition();
        }
    }

    createParticles() {
        // Create floating particles in the background
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 2px;
                height: 2px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                pointer-events: none;
                z-index: 1;
                left: ${Math.random() * 100}vw;
                top: ${Math.random() * 100}vh;
                animation: floatParticle ${5 + Math.random() * 10}s linear infinite;
            `;
            
            document.body.appendChild(particle);
        }
    }

    startAnimation() {
        // Add CSS for particle animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
            
            @keyframes floatParticle {
                0% { transform: translateY(0) rotate(0deg); opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize the Flower of Life when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new FlowerOfLife();
});

// Add some additional utility functions
function createFlowerVariation() {
    const petals = document.querySelectorAll('.petal');
    petals.forEach((petal, index) => {
        const hue = (index * 30) % 360;
        petal.style.background = `radial-gradient(circle, hsl(${hue}, 70%, 70%) 0%, hsl(${hue + 20}, 50%, 80%) 100%)`;
    });
}

function resetFlowerColors() {
    const petals = document.querySelectorAll('.petal');
    petals.forEach(petal => {
        petal.style.background = 'radial-gradient(circle, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)';
    });
}

// Export functions for global access
window.createFlowerVariation = createFlowerVariation;
window.resetFlowerColors = resetFlowerColors;

