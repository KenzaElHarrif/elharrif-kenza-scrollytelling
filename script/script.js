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

/*------Défilement de chaque chapitres--------*/

/*gsap.to('.defilement', { y: "-300vh", ease:"linear", duration:5})
gsap.to('.scene1-lilo-triste-1', {y: "-300vh", ease:"linear"})
gsap.to('.scene1-lilo-triste-2', { y: "-300vh", ease:"linear"})*/