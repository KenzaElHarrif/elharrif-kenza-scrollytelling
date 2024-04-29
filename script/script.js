gsap.registerPlugin(ScrollTrigger);

const tlChap1 = gsap.timeline({
    scrollTrigger:{
        trigger:"#chapitre1",
        pin:true,
        markers:true,
        scrub:true,
        start:"top top",
        end:"+=3000"
    }
});
const tlChap2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#chapitre2",
        pin:true,
        markers:true,
        scrub:true,
        start:"top top",
        end:"+=5000"
    }
});
const tlChap3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#chapitre3",
        pin:true,
        markers:true,
        scrub:true,
        start:"top top",
        end:"+=5000"
    }
});
const tlChap4 = gsap.timeline({
    scrollTrigger:{
        trigger:"#chapitre4",
        pin:true,
        markers:true,
        scrub:true,
        start:"top top",
        end:"+=5000"
    }
});

const tlChap5 = gsap.timeline({
    scrollTrigger:{
        trigger:"#chapitre5",
        pin:true,
        markers:true,
        scrub:true,
        start:"top top",
        end:"+=5000"
    }
});

const tlChap6 = gsap.timeline({
    scrollTrigger:{
        trigger:"#chapitre6",
        pin:true,
        markers:true,
        scrub:true,
        start:"top top",
        end:"+=5000"
    }
});

//Sprites
let timer;

window.addEventListener("scroll", () => {
    document.body.classList.add("is-scrolling");

    clearTimeout(timer);

    timer = setTimeout(function(){
        document.body.classList.remove("is-scrolling");
    }, 100);

});

//Appel à l'action
gsap.set('.appel', { y: 0, ease:"power3.in"})
gsap.from('.appel', { y: '35%', repeat:-1, yoyo:true, ease:"power1.inOut"});

//Foreach titre sections
let section = document.querySelectorAll("section")

section.forEach(function(monTitre) {
    let h2 = monTitre.querySelectorAll("h2");
    let h3 = monTitre.querySelectorAll("h3");
    
    gsap.timeline({
      scrollTrigger:{
        markers:true,
        start:"top 50%",
        end:"bottom",
        trigger: monTitre,
        scrub:true,
      }
    })
    .fromTo(h2, {opacity:0, y:0},{opacity:1, y: "-3vh", ease:"power1.inOut", duration:1})
    .fromTo(h3, {opacity:0, x:"-3vw"},{opacity:1, x: 0, ease:"power1.inOut", duration:1.5},0.5)
})


//CHAPITRE 1
gsap.timeline()
.to(".scene1-parallax1", { backgroundPosition: "100% 0", ease: "none",duration:22, repeat: -1},1)
.to(".scene1-parallax2", { backgroundPosition: "100% 0", ease: "none",duration:19, repeat: -1},1)
.to(".scene1-parallax3", { backgroundPosition: "100% 0", ease: "none",duration:15, repeat: -1},1)
.to(".scene1-parallax4", { backgroundPosition: "100% 0", ease: "none",duration:13, repeat: -1},1)
.fromTo('.scene1-lilo-triste-1', {y:"60vh"},{y: "61vh", ease:"power1.inOut", yoyo:true, repeat:-1, duration:0.5},0.5)
//parallax
tlChap1
.fromTo(".scene1-titre", {opacity:1}, {opacity:0, duration:1},3)
.fromTo(".scene1-parallax1, .scene1-parallax2, .scene1-parallax3, .scene1-parallax4", {opacity:1}, {opacity:1, duration:1})
.fromTo(".scene1-parallax1, .scene1-parallax2, .scene1-parallax3, .scene1-parallax4, .scene1-texte1, .scene1-texte2", {opacity:1}, {opacity:0, duration:4})
.fromTo('.scene1-lilo-triste-1', {x:0, opacity:0},{x:"11vw",opacity:1, ease:"power1.out", duration:3.5,},0.5)
.fromTo('.scene1-lilo-triste-1', {x:"11vw"},{x:"65vw", ease:"power1.inOut", duration:8},10.5)
.fromTo('.scene1-lilo-triste-1', {rotate:0},{rotate:25, ease:"power1.Out", duration:0.7,}, 14.5)
.fromTo('.scene1-lilo-triste-1', {opacity:1},{opacity:0, ease:"power2.inOut", duration:0.5}, 14.7)

//le scroll ne fonctionne pas avec ceux-ci
//
/**/




//CHAPITRE 2
tlChap2
.fromTo(".scene2-lilo-tombe", {y:0, opacity:1},{y:"30vh", opacity:0, ease:"power1-out", duration:3},1)
.fromTo(".scene2-titre",{y:0}, {y:"-100vh", ease:"none", duration:3},2.5)
.fromTo(".scene2",{y:"0"}, {y:"-100vh", ease:"none", duration:3},2.5)
.fromTo(".sur-nuage-1",{y:"150vh"}, {y:"150vh", ease:"none", duration:3},0)
.fromTo(".sur-nuage-1",{y:"150vh"}, {y:"-60vh", ease:"power1.inOut", duration:5},2.5)
.fromTo(".scene2-texte1", {y:"100vh"}, {y:"-150vh",ease:"none", duration:8},5)
.fromTo(".scene2-texte2", {y:"100vh"}, {y:"-150vh",ease:"none", duration:9},6)
.fromTo(".scene2-texte3", {y:"100vh"}, {y:"-150vh",ease:"none", duration:12},7)
.fromTo(".sur-nuage-1",{y:"-61vh", opacity:1}, {y:"-200vh", ease:"power1.inOut", opacity:0, duration:4},13.5)
.fromTo(".scene2",{}, {y:"-300vh", ease:"none", duration:5}, 13.5)
.fromTo(".scene2-poisson1",{y:"-100vh"},{y:"-300vh",ease:"none", duration:5}, 13.5)
.fromTo(".scene2-poisson1",{opacity:0, x:0},{x:"20vh", opacity:1, ease:"power1.Out", duration:2}, 18.8)
.fromTo(".scene2-poisson2",{y:"-100vh"},{y:"-300vh",ease:"none", duration:5}, 10.5)
.fromTo(".scene2-poisson2",{opacity:0, x:0},{x:"20vh", opacity:1, ease:"power1.Out", duration:2}, 18.5)
.fromTo(".scene2-poisson3",{y:"-100vh"},{y:"-300vh",ease:"none", duration:5}, 10.5)
.fromTo(".scene2-poisson3",{opacity:0, x:0},{x:"20vh", opacity:1, ease:"power1.Out", duration:2}, 19.2)
.fromTo(".scene2-poisson4",{y:"-100vh"},{y:"-300vh",ease:"none", duration:5}, 10.5)
.fromTo(".scene2-poisson4",{opacity:0, x:0},{x:"-20vh", opacity:1, ease:"power1.Out", duration:2}, 19.8)

//le scroll ne fonctionne pas avec ceux-ci
//.fromTo('.sur-nuage-1', {y:"-60vh"},{y: "-61vh", ease:"power1.inOut", yoyo:true, repeat:-1, duration:0.5})

//CHAPITRE 3
tlChap3
.fromTo(".scene3-titre",{y:0}, {y:"-100vh", ease:"none", duration:3},2.5)
.fromTo(".scene3",{y:"0"}, {y:"-100vh", ease:"none", duration:3},2.5)
.fromTo(".scene3",{}, {y:"-220vh", ease:"none", duration:5}, 9.5)
.fromTo(".scene3-texte",{y:"100vh"}, {y:"20vh", ease:"none", duration:3},4)
.fromTo(".scene3-texte",{}, {y:"-120vh", ease:"none", duration:3},9.5)
.fromTo(".sur-nuage-2",{y:"100vh"}, {y:"-115vh", ease:"power1.Out", duration:3},0)

.fromTo(".sur-nuage-2",{x:"0"}, {x:"35vw", ease:"power1.inOut",duration:2},4)
.fromTo(".sur-nuage-2",{}, {x:"60vw", ease:"power1.inOut",duration:2},6)
.fromTo(".sur-nuage-2",{}, {x:"100vw", ease:"power1.inOut",duration:2},8)
//gros cristal
.fromTo(".scene3-cristal-1", {y:"-80vh"},{y:"40vh", ease:"power1.in", duration:2},14.5)
.fromTo(".scene3-cristal-2", {y:"-80vh"},{y:"40vh",ease:"power1.in", duration:2},14.5)
.fromTo(".scene3-cristal-3", {y:"-80vh", rotation:0},{y:"40vh",ease:"power1.in", rotation:0, duration:2},14.5)
.fromTo(".scene3-cristal-3",{rotation:-5},{rotation:5, yoyo:true, repeat:1}, 16.5)
.fromTo(".scene3-cristal-1", {x:0, opacity:1},{y:"-30vh",x:"-60vw", opacity:0, duration:2},17)
.fromTo(".scene3-cristal-2", {x:0, opacity:1},{y:"-30vh",x:"60vw", opacity:0,duration:2},17)
//petit cristaux
.fromTo(".scene3-cristal-4",{y:"-20vh"},{y:"110vh", duration:1.5},4.5)
.fromTo(".scene3-cristal-5",{y:"-20vh"},{y:"110vh", duration:1.5},6.5)
.fromTo(".scene3-cristal-6",{y:"-20vh"},{y:"110vh", duration:1.5},8.5)
.fromTo(".scene3-cristal-7",{y:"-20vh"},{y:"110vh", duration:1.5},9)

//le scroll ne fonctionne pas avec ceux-ci
//.fromTo('.sur-nuage-2', {y:"-115vh"},{y: "-113vh", ease:"power1.inOut", yoyo:true, repeat:-1, duration:0.5}, 3)

//CHAPITRE 4
tlChap4

.fromTo(".sur-nuage-3",{x:"-100vw"}, {x:"100vw", ease:"power1.inOut",duration:7},1)
.fromTo(".scene4-titre",{y:0}, {y:"-400vh", ease:"none", duration:7},4.5)
.fromTo(".scene4-fond",{y:"0"}, {y:"-400vh", ease:"none", duration:7},4.5)
.fromTo(".scene4-fond-blanc",{y:0}, {y:"-400vh", ease:"none", duration:7},4.5)
.fromTo(".scene4-transition",{y:"0"}, {y:"-400vh", ease:"none", duration:7},4.5)
.fromTo(".scene4-noir",{y:"0"}, {y:"-400vh", ease:"none", duration:7},4.5)
.fromTo(".scene4-noir",{}, {y:"-400vh", ease:"none", duration:7},12)
.fromTo(".scene4-texte",{y:"100vh"}, {y:"-20vh", ease:"none", duration:3},4.5)
//Animation de texte va être ici.
.fromTo(".scene4-noir",{y:"-400vh"}, {y:"-600vh", ease:"none", duration:3},16)
.fromTo(".scene4-transition2",{y:"-400vh"}, {y:"-600vh", ease:"none", duration:3},16)
.fromTo(".scene4-kiwi",{y:"-400vh"}, {y:"-560vh", ease:"none", duration:3},16)
//le scroll ne fonctionne pas avec ceux-ci
//.fromTo('.sur-nuage-3', {y:"15vh"},{y: "18vh", ease:"power1.inOut", yoyo:true, repeat:-1, duration:0.5})

//CHAPITRE 5
tlChap5
.fromTo(".scene5-titre", {opacity:1}, {opacity:1, duration:2},0)
.fromTo(".scene5-titre", {opacity:1}, {opacity:0, duration:4},3)
//.fromTo('.sur-nuage-4', {y:"0vh"},{y: "3vh", ease:"power1.inOut", yoyo:true, repeat:-1, duration:0.5}, 0)
.fromTo('.sur-nuage-4', {x:"-100vw"},{x: "0vw", ease:"power1.inOut", duration:4}, 3)
.fromTo(".scene5-texte1", {opacity:0}, {opacity:1, duration:2})
.fromTo('.sur-nuage-4', {},{x: "30vw", ease:"power1.inOut", duration:4})
.fromTo(".scene5-texte2", {opacity:0}, {opacity:1, duration:2})
.fromTo('.sur-nuage-4', {},{x: "100vw", ease:"power1.inOut", duration:4})
.fromTo(".scene5-texte3", {opacity:0}, {opacity:1, duration:2},15)
.fromTo(".scene5-texte4", {opacity:0}, {opacity:1, duration:2},19)
.fromTo('.sprite2', {opacity:0},{opacity:1, duration:4})
.fromTo(".scene5-texte1", {}, {opacity:0, duration:2},10)
.fromTo(".scene5-texte2", {}, {opacity:0, duration:2},14)
.fromTo(".scene5-texte3", {}, {opacity:0, duration:2},19)

//CHAPITRE 6
tlChap6
.fromTo(".scene6-titre", {y:0}, {y:"-100vh",ease: "none", duration:2},2)
.fromTo(".scene6", {y:0}, {y:"-100vh",ease: "none", duration:2},2)
//escaliers apparait
.fromTo(".scene6-escalier1",{x:"100vw"}, {x:"0",ease: "power1.out", duration:2},3)
.fromTo(".scene6-escalier2",{x:"100vw"}, {x:"0",ease: "power1.out", duration:2},3.3)
.fromTo(".scene6-escalier3",{x:"100vw"}, {x:"0",ease: "power1.out", duration:2},3.6)
.fromTo(".scene6-escalier4",{x:"100vw"}, {x:"0",ease: "power1.out", duration:2},3.9)
.fromTo(".scene6-escalier5",{x:"100vw"}, {x:"0",ease: "power1.out", duration:2},4.2)
.fromTo(".scene6-escalier6",{x:"100vw"}, {x:"0",ease: "power1.out", duration:2},4.5)
.fromTo(".scene6-texte1", {opacity:0}, {opacity:1, duration:1})
.fromTo(".scene6-texte2", {opacity:0}, {opacity:1, duration:1})
.fromTo(".scene6-texte3", {opacity:0}, {opacity:1, duration:1})
.fromTo(".scene6-texte1", {}, {opacity:0, duration:1})
.fromTo(".scene6-texte2", {}, {opacity:0, duration:1})
.fromTo(".scene6-texte3", {}, {opacity:0, duration:1})
.fromTo(".scene6-texte4", {opacity:0}, {opacity:1, duration:1})
.fromTo(".scene6-lilo-mimi-calin", {opacity:0}, {opacity:1, duration:2},6.5)
.fromTo(".scene6-lilo-mimi-calin", {}, {opacity:0, duration:4},10)
.fromTo(".scene6-lilo-droite", {opacity:0}, {opacity:1, duration:2},13)
.fromTo(".scene6-texte4", {}, {opacity:0, duration:1})
.fromTo(".scene6-lilo-droite", {rotation:0}, {rotation:-35, ease:"power1.out", duration:1},13.5)
.fromTo(".scene6-lilo-droite", {x:0, y:0}, {x:"100vw", y:"-75vh",ease:"power1.inOut", duration:6},14)
//escaliers disparaits
.fromTo(".scene6-escalier1",{}, {x:"100vw",ease: "power1.out", duration:2},17)
.fromTo(".scene6-escalier2",{}, {x:"100vw",ease: "power1.out", duration:2},17.3)
.fromTo(".scene6-escalier3",{}, {x:"100vw",ease: "power1.out", duration:2},17.6)
.fromTo(".scene6-escalier4",{}, {x:"100vw",ease: "power1.out", duration:2},17.9)
.fromTo(".scene6-escalier5",{}, {x:"100vw",ease: "power1.out", duration:2},18.2)
.fromTo(".scene6-escalier6",{}, {x:"100vw",ease: "power1.out", duration:2},18.5)
.fromTo(".scene6", {}, {y:"-200vh",ease: "none", duration:2},19)
.fromTo(".scene6-fin", {}, {y:"-200vh",ease: "power1.out", duration:3},19)
.fromTo(".fin", {opacity:0}, {opacity:1, duration:2})