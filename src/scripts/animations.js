// animations.js
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Enregistrer le plugin
gsap.registerPlugin(ScrollTrigger);

export function animateTitleContent() {
    gsap.fromTo('.title-content', 
    {
        opacity: 0,
    },
    {
        opacity: 1,
        duration: 1.2,
        ease: "power1.inOut",
        }
    );

    gsap.fromTo('.cloud-1', 
    {
        y: 0,
    },
    {
        y: -50,

        ease: "power1.inOut",
        scrub: true,
        scrollTrigger: {
            trigger: '.cloud-1',
            start: 'top center',
            end: 'bottom bottom',
            scrub: true,
        }
    }
    );

    gsap.fromTo('.cloud-2', 
    {
        y: -100,
    },
    {
        y: 100,
      
        ease: "power1.inOut",
        scrub: true,
        scrollTrigger: {
            trigger: '.cloud-2',
            start: 'top-=100% center',
            end: 'bottom+=100% center',
            scrub: true,
        }
    }
    );


    document.querySelectorAll('.lines').forEach((line) => {
        gsap.fromTo(line,
        {
            scale: 1.5,
            y: -150,
        },
        {
            scale: 2,
            y: 150,
        
            ease: "power1.inOut",
            scrub: true,
            scrollTrigger: {
                trigger: '.lines-1',
                start: 'top-=100% center',
                end: 'bottom+=100% center',
                scrub: true,
            }
        }
        );
    }
    );
    
}


export function initPageAnimations() {
  animateTitleContent();
}