gsap.set('.appel', { y: 0, ease:"power3.in"})
gsap.from('.appel', { y: '35%', repeat:-1, yoyo:true, ease:"power3.in"});


window.addEventListener("scroll", () => {
    var timer = setTimeout(100);

});