import Lenis from 'lenis';

const lenis = new Lenis({
    // duration: 1.2,
    // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    // smooth: true,
    // smoothTouch: true,
    // touchMultiplier: 1.5,

    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    smoothTouch: true,
    touchMultiplier: 1.5,
    infinite: false,
    autoResize: true,

});
  



function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
