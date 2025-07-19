import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

import Lenis from 'lenis';

const lenis = window.lenis

import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);


export function animateTitleContent() {
    // gsap.fromTo('.title-content', 
    // {
    //     opacity: 0,
    // },
    // {
    //     opacity: 1,
    //     duration: 1.2,
    //     delay: 1,
    //     ease: "power1.inOut",
    //     }
    // );

    const titleWords = document.querySelectorAll(".title-split");

    gsap.set(titleWords, {
        opacity: 1,
    });
    const splitedIntro = new SplitType(titleWords, {
        types: "words, chars",
    });

    var charDelay = 1; 
    splitedIntro.chars.forEach((char) => {
        gsap.to(char, {
            opacity: 1,
            filter: "blur(0px)",
            delay: charDelay,
        });
        charDelay = charDelay + 0.05;
    });



    const textWords = document.querySelectorAll(".text-split");
    const splitedText = new SplitType(textWords, {
        types: "words, chars",
    });

    var textDelay = 0; 
    splitedText.chars.forEach((char) => {
        gsap.set(char, {
            opacity: 0,
            filter: "blur(0px)",
        });

        gsap.to(char, {
            opacity: 1,
            filter: "blur(0px)",
            delay: textDelay,

            scrollTrigger: {
                trigger: textWords,
                start: 'top center+=20%',
                end: 'bottom center',
            }
        });
        textDelay = textDelay + 0.02;
    });

    
    
    const contentWords = document.querySelectorAll(".content-split");
    contentWords.forEach((contentElement, index) => {
        const splitedContentText = new SplitType(contentElement, {
            types: "words",
        });
        
        let textDelay = 0;
        splitedContentText.words.forEach((word) => {
            gsap.set(word, {
                opacity: 0,
                filter: "blur(10px)",
                x: 100,
            });
            gsap.to(word, {
                opacity: 1,
                filter: "blur(0px)",
                x: 0,
                ease: "power1.inOut",
                duration: 0.5,
                delay: textDelay,
                scrollTrigger: {
                    trigger: contentElement,
                    start: 'top center+=20%',
                    end: 'bottom center',
                }
            });
            textDelay = textDelay + 0.02;
        });
    });






    gsap.fromTo('.cloud-1', 
        { y: 50 },
        {
            y: -100,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: '.cloud-1',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            }
        }
    );



    lenis.stop();
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const cloud2 = document.querySelector('.cloud-2');
    gsap.fromTo(cloud2,
        {
            y: 100,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 0.5,
            ease: "power2.out",
            duration: 2,
            onComplete: () => {
                lenis.start();
                document.body.style.overflow = ""; // Réactive le scroll
                gsap.fromTo(cloud2, {
                        y: -16,
                    },
                    {y: 200,
                    ease: "power1.inOut",
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: cloud2,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    }
                });
            }
        }
    );


    document.querySelectorAll('.lines').forEach((line) => {
        gsap.fromTo(line,
            {
                scale: 1.5,
                y: -50,
            },
            {
                scale: 2,
                y: 50,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: line,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1,
                  
                }
            }
        );
    });


    //svg animations
    const paths = document.querySelectorAll(".icon path");
    paths.forEach((path) => {
        const length = path.getTotalLength();

        gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
        });

        gsap.to(path, {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power1.out",
            scrollTrigger: {
            trigger: path,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
            }
        });
    });

    
}


export function initPageAnimations() {
  animateTitleContent();
}