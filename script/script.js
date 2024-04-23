gsap.registerPlugin(ScrollTrigger);

let timer;


window.addEventListener("scroll", () => {
    document.body.classList.add("is-scrolling");

    clearTimeout(timer);

    timer = setTimeout(function(){
        document.body.classList.remove("is-scrolling");
    }, 100);

});

gsap.set('.appel', { y: 0, ease:"power3.in"})
gsap.from('.appel', { y: '35%', repeat:-1, yoyo:true, ease:"power1.inOut"});

/*------Défilement de chaque chapitres test--------*/


/*gsap.to('.defilement1', {y: "-300vh", ease:"linear", duration:5,
scrollTrigger: {
    pin: true,
    markers:true,
    scrub: 0.5,
    start: 'top 0%',
    end: 'bottom 73%',
    trigger: '#chapitre1'}

})*/

//gsap.to(".scene1-lilo-triste-1, .scene1-lilo-triste-1", {y:"300vh"})

gsap.timeline()
//apparition titre
.fromTo(".scene1-titre", {opacity:1}, {opacity:1, duration:2})
.fromTo(".scene1-titre", {opacity:1}, {opacity:0, duration:4})
//apparition scène 1 partie 1
.fromTo(".scene1-parallax1, .scene1-parallax2, .scene1-parallax3, .scene1-parallax4", {opacity:1}, {opacity:1, duration:2})
.fromTo(".scene1-parallax1, .scene1-parallax2, .scene1-parallax3, .scene1-parallax4", {opacity:1}, {opacity:0, duration:4})
.fromTo('.scene1-lilo-triste-1', {x:0, opacity:0},{x:"11vw",opacity:1, ease:"power1.out", duration:3.5,},0.5)
.fromTo('.scene1-lilo-triste-1', {y:"54vh"},{y: "53vh", ease:"power1.inOut", yoyo:true, repeat:-1, duration:0.5},0.5)
.fromTo('.scene1-lilo-triste-1', {opacity:1},{opacity:0, duration:5},8.5)
//apparition scène 1 partie 2
.fromTo('.scene1-lilo-triste-2', {opacity:0},{opacity:0, ease:"power2.inOut", duration:2.5,},0)
.fromTo('.scene1-lilo-triste-2', {y:"54vh"},{y: "53vh", ease:"power1.inOut", yoyo:true, repeat:-1, duration:0.5,}, 14)
.fromTo('.scene1-lilo-triste-2', {opacity:0},{opacity:1, ease:"power2.inOut", duration:2.5,}, 15)
.fromTo('.scene1-lilo-triste-2', {x:0},{x:"69vw", ease:"power1.inOut", duration:8},15.5)
.fromTo('.scene1-lilo-triste-2', {rotate:0},{rotate:25, ease:"power1.Out", duration:0.7,}, 22)
.fromTo('.scene1-lilo-triste-2', {opacity:1},{opacity:0, ease:"power2.inOut", duration:0.5}, 22.3)
 
    let h2 = document.querySelectorAll("h2");
    let h3 = document.querySelectorAll("h3");

    gsap.timeline()
    .fromTo(h2, {opacity:0, y:0},{opacity:1, y: "-3vh", ease:"power1.inOut", duration:1})
    .fromTo(h3, {opacity:0, x:"-3vw"},{opacity:1, x: 0, ease:"power1.inOut", duration:1.5},0.5)

    gsap.timeline()
    gsap.to(".scene1-parallax1", {
        backgroundPosition: "50% 100%",
        ease: "none"})