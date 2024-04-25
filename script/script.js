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

//CHAPITRE 1
gsap.timeline()
//parallax
.to(".scene1-parallax1", { backgroundPosition: "100% 0", ease: "none",duration:22, repeat: -1},0)
.to(".scene1-parallax2", { backgroundPosition: "100% 0", ease: "none",duration:19, repeat: -1},0)
.to(".scene1-parallax3", { backgroundPosition: "100% 0", ease: "none",duration:15, repeat: -1},0)
.to(".scene1-parallax4", { backgroundPosition: "100% 0", ease: "none",duration:13, repeat: -1},0)
//apparition titre
.fromTo(".scene1-titre", {opacity:1}, {opacity:1, duration:2},0)
.fromTo(".scene1-titre", {opacity:1}, {opacity:0, duration:4},3)
//apparition scène 1 partie 1
.fromTo(".scene1-parallax1, .scene1-parallax2, .scene1-parallax3, .scene1-parallax4", {opacity:1}, {opacity:1, duration:1})
//note à moi-même: animations texte 1 et texte 2 entre entré et sortie parallax<-----
.fromTo(".scene1-parallax1, .scene1-parallax2, .scene1-parallax3, .scene1-parallax4, .scene1-texte1, .scene1-texte2", {opacity:1}, {opacity:0, duration:4},)
//note à moi-même: animations texte 3 et texte 4 entre entré et sortie parallax<-----
.fromTo('.scene1-lilo-triste-1', {x:0, opacity:0},{x:"11vw",opacity:1, ease:"power1.out", duration:3.5,},0.5)
.fromTo('.scene1-lilo-triste-1', {y:"54vh"},{y: "53vh", ease:"power1.inOut", yoyo:true, repeat:-1, duration:0.5},0.5)
.fromTo('.scene1-lilo-triste-1', {x:"11vw"},{x:"65vw", ease:"power1.inOut", duration:8},10.5)
.fromTo('.scene1-lilo-triste-1', {rotate:0},{rotate:25, ease:"power1.Out", duration:0.7,}, 14.5)
.fromTo('.scene1-lilo-triste-1', {opacity:1},{opacity:0, ease:"power2.inOut", duration:0.5}, 14.7)


//CHAPITRE 2
gsap.timeline()

.fromTo(".scene2-lilo-tombe", {y:0, opacity:1},{y:"30vh", opacity:0, duration:3})
.fromTo(".scene2-titre",{y:0}, {y:"-100vh", ease:"none", duration:3},2.5)
.fromTo(".scene2",{y:"0"}, {y:"-100vh", ease:"none", duration:3},2.5)
.fromTo(".sur-nuage-1",{y:"150vh"}, {y:"150vh", ease:"none", duration:3},0)
.fromTo(".sur-nuage-1",{y:"150vh"}, {y:"-60vh", ease:"power1.inOut", duration:5},2.5)
.fromTo('.sur-nuage-1', {y:"-60vh"},{y: "-61vh", ease:"power1.inOut", yoyo:true, repeat:-1, duration:0.5})

//note à moi-même: texte va se mettre ici<--------------
.fromTo(".sur-nuage-1",{y:"-61vh", opacity:1}, {y:"-200vh", ease:"power1.inOut", opacity:0, duration:4},10.5)
.fromTo(".scene2",{}, {y:"-300vh", ease:"none", duration:5}, 10.5)
.fromTo(".scene2-poisson1",{y:"-100vh"},{y:"-300vh",ease:"none", duration:5}, 10.5)
.fromTo(".scene2-poisson1",{opacity:0, x:0},{x:"20vh", opacity:1, ease:"power1.Out", duration:2}, 14.8)
.fromTo(".scene2-poisson2",{y:"-100vh"},{y:"-300vh",ease:"none", duration:5}, 10.5)
.fromTo(".scene2-poisson2",{opacity:0, x:0},{x:"20vh", opacity:1, ease:"power1.Out", duration:2}, 14.5)
.fromTo(".scene2-poisson3",{y:"-100vh"},{y:"-300vh",ease:"none", duration:5}, 10.5)
.fromTo(".scene2-poisson3",{opacity:0, x:0},{x:"20vh", opacity:1, ease:"power1.Out", duration:2}, 15.2)
.fromTo(".scene2-poisson4",{y:"-100vh"},{y:"-300vh",ease:"none", duration:5}, 10.5)
.fromTo(".scene2-poisson4",{opacity:0, x:0},{x:"-20vh", opacity:1, ease:"power1.Out", duration:2}, 15.8)


//CHAPITRE 3





 
    let h2 = document.querySelectorAll("h2");
    let h3 = document.querySelectorAll("h3");

    gsap.timeline()
    .fromTo(h2, {opacity:0, y:0},{opacity:1, y: "-3vh", ease:"power1.inOut", duration:1})
    .fromTo(h3, {opacity:0, x:"-3vw"},{opacity:1, x: 0, ease:"power1.inOut", duration:1.5},0.5)