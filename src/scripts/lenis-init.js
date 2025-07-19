import Lenis from 'lenis';

const lenis = new Lenis({

    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    smoothTouch: true,
    touchMultiplier: 1.5,
    infinite: false,
    autoResize: true,

});
  
window.lenis = lenis;



function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
