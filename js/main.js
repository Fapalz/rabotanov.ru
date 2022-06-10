AOS.init({
  once: true,
});

Fancybox.bind("[data-fancybox]", {
  // Your options go here
});


let items = document.querySelector('.section-7 .items');

if(items) {

  let tl = gsap.timeline({
  // yes, we can add it to an entire timeline!
  scrollTrigger: {
    trigger: ".items-wrapper",
    pin: true,   // pin the trigger element while active
    start: "center center", // when the top of the trigger hits the top of the viewport
    end: "+=1000", // end after scrolling 500px beyond the start
    scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  }
});

  let width = items.scrollWidth - items.offsetWidth;

  tl.to(".items", { x: -1 * width })
    .from(".items", {})
}
