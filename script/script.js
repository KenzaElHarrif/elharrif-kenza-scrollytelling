gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(MotionPathPlugin);
//gsap.registerPlugin(DrawSVGPlugin);
//gsap.registerPlugin(MorphSVGPlugin);
/*POUR HTML: <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/DrawSVGPlugin3.min.js"></script>
    <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/MorphSVGPlugin3.min.js"></script>*/

const tlChap1 = gsap.timeline({
    scrollTrigger:{
        trigger:"#chapitre1",
        pin:true,
    
        scrub:true,
        start:"top top",
        end:"+=2000"
    }
});
const tlChap2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#chapitre2",
        pin:true,
        scrub:true,
        start:"top top",
        end:"+=5000"
    }
});
const tlChap3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#chapitre3",
        pin:true,
        scrub:true,
        start:"top top",
        end:"+=5000"
    }
});
const tlChap4 = gsap.timeline({
    scrollTrigger:{
        trigger:"#chapitre4",
        pin:true,
        scrub:true,
        start:"top top",
        end:"+=5000"
    }
});

const tlChap5 = gsap.timeline({
    scrollTrigger:{
        trigger:"#chapitre5",
        pin:true,
        scrub:true,
        start:"top top",
        end:"+=5000"
    }
});

const tlChap6 = gsap.timeline({
    scrollTrigger:{
        trigger:"#chapitre6",
        pin:true,
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

.fromTo('.scene1-lilo-triste-1', {y:"50vh"},{y: "51vh", ease:"power1.inOut", yoyo:true, repeat:-1, duration:0.5},0.5)
//parallax
tlChap1
.fromTo(".scene1-titre", {opacity:1}, {opacity:0, duration:1},5)
.to(".scene1-parallax1", { backgroundPosition: "100% 0", ease: "none",duration:15},5)
.to(".scene1-parallax2", { backgroundPosition: "200% 0", ease: "none",duration:13},5)
.to(".scene1-parallax3", { backgroundPosition: "300% 0", ease: "none",duration:11},5)
.to(".scene1-parallax4", { backgroundPosition: "400% 0", ease: "none",duration:9},5)
.fromTo(".scene1-parallax1, .scene1-parallax2, .scene1-parallax3, .scene1-parallax4, .scene1-texte1, .scene1-texte2", {opacity:1}, {opacity:0, duration:4},7)
.fromTo('.scene1-lilo-triste-1', {x:0, opacity:0},{x:"11vw",opacity:1, ease:"power1.out", duration:3.5,},0.5)
.fromTo('.scene1-lilo-triste-1', {x:"11vw"},{x:"65vw", ease:"power1.inOut", duration:8},10.5)
.fromTo('.scene1-lilo-triste-1', {rotate:0},{rotate:25, ease:"power1.Out", duration:0.7,}, 14.5)
.fromTo('.scene1-lilo-triste-1', {opacity:1},{opacity:0, ease:"power2.inOut", duration:0.5}, 14.7)

//CHAPITRE 2

/*gsap.set("#path",{drawSVG:"0% 0%"});
gsap.to("#path",{
    scrollTrigger:{
        trigger:".scene2-poisson4",
        markers:true,
        scrub:true,
        start:"top top",
        end:"+=2000"
    },
    drawSVG:"100% 0%",
    duration:7,
    ease:"power1.inOut"})*/

gsap.fromTo(".scene2-lilo-tombe", {y:0, opacity:1, rotation:0},{
    scrollTrigger:{
        trigger:"#chapitre2",
        start: "top top",
        toggleActions: "play complete reverse reset"
    },
    y:"60vh", opacity:0, rotation:360, ease:"power1-out", duration:3.5})

tlChap2
.fromTo(".scene2-titre",{y:0}, {y:"-100vh", ease:"none", duration:3},2.5)
.fromTo(".scene2",{y:"0"}, {y:"-100vh", ease:"none", duration:3},2.5)
.fromTo(".sur-nuage-1",{y:"150vh"}, {y:"150vh", ease:"none", duration:3},0)
.fromTo(".sur-nuage-1",{y:"150vh"}, {y:"-60vh", ease:"power1.inOut", duration:5},2.5)
.fromTo(".scene2-texte1", {y:"100vh"}, {y:"-140vh",ease:"none", duration:8},5)
.fromTo(".scene2-texte2", {y:"100vh"}, {y:"-150vh",ease:"none", duration:9},6)
.fromTo(".scene2-texte3", {y:"100vh"}, {y:"-160vh",ease:"none", duration:12},7)
.fromTo(".sur-nuage-1",{y:"-61vh", opacity:1}, {y:"-210vh", ease:"back.Out", opacity:0, duration:4},13.5)
.fromTo(".file-peche",{}, {y:"-210vh", ease:"none", duration:3.5},13.5)
.fromTo(".scene2",{}, {y:"-300vh", ease:"none", duration:5}, 13.5)
.fromTo(".scene2-poisson1",{y:"-100vh"},{y:"-300vh",ease:"none", duration:5}, 13.5)
.fromTo(".scene2-poisson1",{opacity:0, x:0},{x:"20vh", opacity:1, ease:"power1.Out", duration:2}, 18.8)
.fromTo(".scene2-poisson2",{y:"-100vh"},{y:"-300vh",ease:"none", duration:5}, 10.5)
.fromTo(".scene2-poisson2",{opacity:0, x:0},{x:"20vh", opacity:1, ease:"power1.Out", duration:2}, 18.5)
.fromTo(".scene2-poisson3",{y:"-100vh"},{y:"-300vh",ease:"none", duration:5}, 10.5)
.fromTo(".scene2-poisson3",{opacity:0, x:0},{x:"20vh", opacity:1, ease:"power1.Out", duration:2}, 19.2)
.fromTo(".scene2-poisson4",{y:"-100vh"},{y:"-300vh",ease:"none", duration:5}, 10.5)
.fromTo(".scene2-poisson4",{opacity:0, x:0},{x:"-20vh", opacity:1, ease:"power1.Out", duration:2}, 19.8)


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

//CHAPITRE 4
tlChap4
.fromTo(".sur-nuage-3",{x:"-100vw"}, {x:"100vw", ease:"power1.inOut",duration:7},1)
.fromTo(".scene4-titre",{y:0}, {y:"-400vh", ease:"none", duration:7},4.5)
.fromTo(".scene4-fond",{y:"0"}, {y:"-400vh", ease:"none", duration:7},4.5)
.fromTo(".scene4-fond-blanc",{y:0}, {y:"-400vh", ease:"none", duration:7},4.5)
.fromTo(".scene4-transition",{y:"0"}, {y:"-400vh", ease:"none", duration:7},4.5)
.fromTo(".scene4-noir",{y:"0"}, {y:"-400vh", ease:"none", duration:7},4.5)
.fromTo(".scene4-noir",{}, {y:"-400vh", ease:"none", duration:7},12)
//texte
.fromTo(".scene4-texte",{y:"100vh"}, {y:"-20vh", ease:"none", duration:3},4.5)
.fromTo(".scene4-texte1", {opacity:0, scale:0},{opacity:1,scale:1, ease:"power1.inOut"}, 12.9)
.fromTo(".scene4-texte1", {},{opacity:0}, 13.9)
.fromTo(".scene4-texte2", {opacity:0,scale:0},{opacity:1,scale:1, ease:"power1.inOut"}, 13.5)
.fromTo(".scene4-texte2", {},{opacity:0}, 14.5)
.fromTo(".scene4-texte3", {opacity:0,scale:0},{opacity:1,scale:1, ease:"power1.inOut"}, 15)
.fromTo(".scene4-texte3", {},{opacity:0}, 16)
.fromTo(".scene4-texte4", {opacity:0,scale:0},{opacity:1,scale:1, ease:"power1.inOut"}, 16.5)
.fromTo(".scene4-texte4", {},{opacity:0}, 17.5)
.fromTo(".scene4-texte5", {opacity:0, scale:0},{opacity:1, scale:3,ease:"power1.inOut",duration:1}, 18.5)
.fromTo(".scene4-texte5", {rotation:0},{rotation:5, yoyo:true, repeat:3, ease:"power1.inOut"}, 18.5)
.fromTo(".scene4-texte5", {},{opacity:0, duration:2}, 19.5)
.fromTo(".scene4-texte6", {opacity:0, scale:0},{opacity:1,scale:1, ease:"power1.inOut"}, 20.5)
.fromTo(".scene4-texte6", {},{opacity:0}, 21.5)
.fromTo(".scene4-texte7", {opacity:0, scale:0},{opacity:1,scale:1, ease:"power1.inOut"}, 22)
.fromTo(".scene4-texte7", {},{opacity:0}, 23)
.fromTo(".scene4-texte8", {opacity:0, scale:0},{opacity:1,scale:1, ease:"power1.inOut"}, 23.5)
.fromTo(".scene4-texte8", {},{opacity:0}, 24.5)
.fromTo(".scene4-texte9", {opacity:0, scale:0, x:0},{opacity:1, scale:3,x:"-50vw",ease:"power1.inOut",duration:1}, 25.5)
.fromTo(".scene4-texte9", {rotation:0},{rotation:5, yoyo:true, repeat:3, ease:"power1.inOut"}, 25.5)
.fromTo(".scene4-texte9", {},{opacity:0}, 26.5)
.fromTo(".scene4-texte10", {x:0, scale:1},{scale:5,x:"-300vw",ease:"power1.inOut",duration:2}, 27)
.fromTo(".scene4-texte10", {rotation:0},{rotation:5, yoyo:true, repeat:3, ease:"power1.inOut"}, 27)
.fromTo(".scene4-texte10", {},{opacity:0}, 28)
.fromTo(".scene4-texte11", {x:0,scale:1},{scale:5, x:"-300vw",ease:"power1.inOut",duration:2}, 27.5)
.fromTo(".scene4-texte11", {rotation:0},{rotation:5, yoyo:true, repeat:3, ease:"power1.inOut"}, 27.5)
.fromTo(".scene4-texte11", {},{opacity:0}, 28.5)
.fromTo(".scene4-noir",{y:"-400vh"}, {y:"-600vh", ease:"none", duration:3},29)
.fromTo(".scene4-transition2",{y:"-400vh"}, {y:"-600vh", ease:"none", duration:3},29)
.fromTo(".scene4-kiwi",{y:"-400vh"}, {y:"-600vh", ease:"none", duration:3},29)
.fromTo(".sprite1", {scale:0},{scale:1, duration:2})

//CHAPITRE 5

tlChap5
.fromTo(".scene5-titre", {opacity:1}, {opacity:1, duration:2},0)
.fromTo(".scene5-titre", {opacity:1}, {opacity:0, duration:4},3)
.fromTo(".sur-nuage-4", {opacity:0}, {opacity:1, duration:2},5)
.to(".sur-nuage-4", {
    motionPath: {
        align: '#courbe',
        path: '#courbe',
        alignOrigin: [0.5, 0.5]
    },
    duration: 20}, 5)
.fromTo(".sur-nuage-4", {}, {opacity:0, duration:2},17.5)
.fromTo(".scene5-texte1", {opacity:0}, {opacity:1, duration:2},6.5)
.fromTo(".scene5-texte2", {opacity:0}, {opacity:1, duration:2},9)
.fromTo(".scene5-texte3", {opacity:0}, {opacity:1, duration:2},15)
.fromTo(".scene5-texte4", {opacity:0}, {opacity:1, duration:2},19)
.fromTo('.sprite2', {opacity:0},{opacity:1, duration:4},19)
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
/*.to("#patte", {
    morphSVG: "#coeur"
})*/
.fromTo(".fin", {opacity:0}, {opacity:1, duration:2})