gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

tl.from('.content',{
    y: '-30%',
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut
})

tl.from('.stagger1',{
    opacity: 0,
    y: -50,
    stagger: .3,
    ease: Power4.easeOut,
    duration: 2
},"-=1.7")

gsap.from(".transition2",{
    scrollTrigger:{
        trigger: '.transition2',
        start: "top bottom"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .3
})

gsap.from(".transition3",{
    scrollTrigger:{
        trigger: '.transition3',
        start: "top center"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .6
})