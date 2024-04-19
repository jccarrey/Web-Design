document.addEventListener('DOMContentLoaded', function () {
    const achievementsSection = document.querySelector('.achievements-section');
    const achievements = document.querySelectorAll('.achievement');
  
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
    }
  
    function onScroll() {
      if (isElementInViewport(achievementsSection)) {
        achievements.forEach((achievement, index) => {
          // Solo inicia la animación si no se ha realizado previamente
          if (achievement.textContent === '0') {
            // Ajusta los valores de inicio y final según tus necesidades
            let startValue, endValue;
            if (index === 0) {
              startValue = 0;
              endValue = 50;
            } else if (index === 1) {
              startValue = 0;
              endValue = 150;
            } else if (index === 2) {
              startValue = 0;
              endValue = 20;
            }
            animateNumber(achievement, startValue, endValue, 1000);
          }
        });
        // Elimina el oyente de eventos después de la primera activación
        window.removeEventListener('scroll', onScroll);
      }
    }
  
    // Agrega el oyente de eventos al desplazarse
    window.addEventListener('scroll', onScroll);
  });
  
  function animateNumber(element, start, end, duration) {
    let current = start;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    
    function update() {
      current += increment;
      element.textContent = current;
      element.style.opacity = 1; // Muestra el elemento al comenzar la animación
  
      if ((increment > 0 && current < end) || (increment < 0 && current > end)) {
        setTimeout(update, stepTime);
      }
    }
  
    update();
  }
