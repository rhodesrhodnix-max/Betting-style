function() {
  'use strict';

  const tapeStack = document.querySelector('.tape-stack');

  if (tapeStack) {
    document.addEventListener('mousemove', (e) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 60;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 60;
      tapeStack.style.transform = 
        `rotate(${-1.5 + xAxis * 0.15}deg) skewX(${yAxis * 0.05}deg)`;
    });

    document.addEventListener('mouseleave', () => {
      tapeStack.style.transform = 'rotate(-1.5deg)';
    });
  }

  console.log('%c BATING.STYLE ', 
    'background:#1a1a1a; color:#fffcf7; padding:4px 8px; font-weight:600;'
  );
})();
