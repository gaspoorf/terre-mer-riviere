import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

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
                scrub: true,
                invalidateOnRefresh: true,
            }
        }
    );



    
    const cloud2 = document.querySelector('.cloud-2');
    gsap.fromTo(cloud2,
        {
            y: 100,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 2,
            onComplete: () => {
                gsap.to(cloud2, {
                    y: 200,
                    ease: "power1.inOut",
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: cloud2,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                        invalidateOnRefresh: true,
                    }
                });
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