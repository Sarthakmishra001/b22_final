function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

init();

// -------------------- CURSOR INTERACTIONS -------------------- //
var overlay = document.querySelector("#overlay");
var iscroll = document.querySelector("#scroll");

overlay.addEventListener("mouseenter", function () {
    iscroll.style.scale = 1;
});
overlay.addEventListener("mouseleave", function () {
    iscroll.style.scale = 0;
});
overlay.addEventListener("mousemove", function (dets) {
    iscroll.style.left = `${dets.x - 45}px`;
    iscroll.style.top = `${dets.y - 38}px`;
});

// -------------------- PAGE 3 IMAGE FOLLOW -------------------- //
document.querySelector("#page3").addEventListener("mousemove", function (dets) {
    document.querySelector("#page3 #img-div").style.left = `${dets.x}px`;
    document.querySelector("#page3 #img-div").style.top = `${dets.y}px`;
});

// -------------------- PAGE 4 IMAGE & BUTTON FOLLOW -------------------- //
document.querySelector("#page4").addEventListener("mousemove", function (dets) {
    document.querySelector("#page4>img").style.left = dets.x + "px";
    document.querySelector("#page4>img").style.top = dets.y + "px";
    document.querySelector("#page4>button").style.left = (dets.x + 50) + "px";
    document.querySelector("#page4>button").style.top = (dets.y + 200) + "px";
});

// -------------------- PAGE 4 IMAGE CHANGE ON HOVER -------------------- //
var elem = document.querySelectorAll(".elem");
elem.forEach(function (e) {
    var a = e.getAttribute("data-img");
    e.addEventListener("mouseenter", function () {
        document.querySelector("#page4>img").setAttribute("src", a);
    });
});

// -------------------- TEXT ANIMATIONS -------------------- //
$('#page1 h1').textillate({
    in: {
        effect: 'fadeInUp',
        delayScale: 1,
    }
});

gsap.from("#page2 h1", {
    duration: 0.5,
    onStart: function () {
        $('#page2 h1').textillate({
            in: {
                effect: 'bounceIn',
                delayScale: 0.5,
            }
        });
    },
    scrollTrigger: {
        trigger: "#page2 h1",
        scroller: "#main",
        start: "top 90%"
    }
});

gsap.to("#page2 img", {
    rotate: -5,
    scrollTrigger: {
        scroller: "#main",
        trigger: "#page2 img",
        start: "top 80%",
        scrub: 3
    }
});

gsap.to("#main", {
    backgroundColor: "#111",
    scrollTrigger: {
        scroller: "#main",
        trigger: "#page2",
        start: "top -100%",
        end: "top -100%",
        scrub: 3
    }
});

// -------------------- SVG + NAV BLACK SECTION -------------------- //
var tlBlack = gsap.timeline({
    scrollTrigger: {
        trigger: "svg",
        scroller: "#main",
        start: "top 0%",
        end: "top -140%",
        scrub: true,
    }
});

tlBlack.to("svg", {
    scale: 1,
    top: "5%",
    fill: "#111",
});
tlBlack.to("#nav", {
    color: "#111",
    background: "linear-gradient(#ffffffeb,#ffffff6e,#ffffff00)",
});

// -------------------- NAV COLOR CHANGE ON PAGE 3 -------------------- //
let navColorChange = gsap.timeline({
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        start: "top 80%",
        end: "bottom bottom",
        scrub: true,
        onEnter: () => {
            gsap.to("svg", { fill: "#fff", duration: 0.5 });
            gsap.to("#nav", {
                color: "#fff",
                background: "linear-gradient(#000000d5,#00000089,#00000000)",
                duration: 0.5
            });
        },
        onEnterBack: () => {
            gsap.to("svg", { fill: "#111", duration: 0.5 });
            gsap.to("#nav", {
                color: "#111",
                background: "linear-gradient(#ffffffeb,#ffffff6e,#ffffff00)",
                duration: 0.5
            });
        }
    }
});

// -------------------- PAGE 7 ANIMATIONS -------------------- //
gsap.from(".page7-heading", {
    y: 80,
    autoAlpha: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#page7",
        scroller: "#main",
        start: "top 75%",
        once: true
    }
});

gsap.from(".page7-stat", {
    y: 40,
    autoAlpha: 0,
    duration: 0.9,
    ease: "power2.out",
    stagger: 0.15,
    scrollTrigger: {
        trigger: ".page7-stats",
        scroller: "#main",
        start: "top 80%",
        once: true
    }
});

gsap.from(".page7-card", {
    y: 60,
    autoAlpha: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.18,
    scrollTrigger: {
        trigger: ".page7-right",
        scroller: "#main",
        start: "top 85%",
        once: true
    }
});

// -------------------- CONTACT SECTION ANIMATIONS -------------------- //
gsap.from(".contact-header", {
    y: 70,
    autoAlpha: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#contact",
        scroller: "#main",
        start: "top 80%",
        once: true
    }
});

gsap.from(".contact-card", {
    y: 40,
    autoAlpha: 0,
    duration: 0.9,
    ease: "power2.out",
    stagger: 0.12,
    scrollTrigger: {
        trigger: ".contact-cards",
        scroller: "#main",
        start: "top 85%",
        once: true
    }
});

gsap.from([".contact-channel", ".contact-meta"], {
    y: 50,
    autoAlpha: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.15,
    scrollTrigger: {
        trigger: ".contact-channels",
        scroller: "#main",
        start: "top 85%",
        once: true
    }
});

gsap.from(".contact-form", {
    x: 80,
    autoAlpha: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#contact",
        scroller: "#main",
        start: "top 70%",
        once: true
    }
});

gsap.from([".contact-assurance", ".contact-service-areas"], {
    y: 60,
    autoAlpha: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".contact-assurance",
        scroller: "#main",
        start: "top 85%",
        once: true
    }
});

// -------------------- FULL SCREEN NAV -------------------- //
document.querySelector("#nav i").addEventListener("click", function () {
    document.querySelector("#full-scr").style.top = "0vh";
});
document.querySelector("#full-scr i").addEventListener("click", function () {
    document.querySelector("#full-scr").style.top = "-100vh";
});

// -------------------- RELOAD ON RESIZE -------------------- //
// window.addEventListener("resize", function () {
//     location.reload();
// });
