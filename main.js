
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



const textrev = gsap.timeline();
const text = gsap.timeline();
const text2 = gsap.timeline();
const text3 = gsap.timeline();
const text4 = gsap.timeline();


textrev.from(".hidetext", 1.8, {

    y: 200,
    ease: "power4.out",
 
    skewY: 3,
    stagger: {
        amount: 0.4,
    },
});



textrev.from(".hidetext2", {

  duration:1.5,
  y: 200,
  ease: "power4.out",

  stagger: {
      amount: 0.4,
  },
}, "-=1.5");

textrev.from(".button_style_top2",1,{
opacity:0,
ease:"power4.out",

}, "-=1")

textrev.from(".hidetext3", 1.8,{
  y: 200,
  ease: "power4.out",

  stagger: {
      amount: 0.4,
  },
}, "-=0.9");

text.from(".hidetext4", {

    duration:1.5,
  y: 200,
  ease: "power4.out",

  stagger: {
      amount: 0.4,
  },
});

text2.from(".hidetext5", {

  duration:1.5,
y: 200,
ease: "power4.out",

stagger: {
    amount: 0.4,
},
});

text3.from(".hidetext6", {

  duration:1.5,
y: 200,
ease: "power4.out",

stagger: {
    amount: 0.4,
},
});

text4.from(".hidetext7", {

  duration:1.5,
y: 200,
ease: "power4.out",

stagger: {
    amount: 0.4,
},
});


ScrollTrigger.create({
  animation: text,
  trigger:".hidetext4",
  start: "20px 90%",
  toggleActions:"play none none none",


});
ScrollTrigger.create({
  animation: text2,
  trigger:".hidetext5",
  start: "20px 90%",
  toggleActions:"play none none none",


});

ScrollTrigger.create({
  animation: text3,
  trigger:".hidetext6",
  start: "20px 90%",
  toggleActions:"play none none none",


});


ScrollTrigger.create({
  animation: text3,
  trigger:".hidetext6",
  start: "20px 90%",
  toggleActions:"play none none none",


});

ScrollTrigger.create({
  animation: text4,
  trigger:".hidetext7",
  start: "20px 90%",
  toggleActions:"play none none none",


});





const slices = [...document.querySelectorAll(".uncover_slice")];
const tl = new gsap.timeline();

tl.to(".uncover_slice", 1.5 , { 
  height : 0 ,  
  ease: "expo.inOut", 
  delay:0.5,

} , 'start')

  tl.from(".myimg", 1.8 , {    
    scale: 0.9 ,  
    ease: "expo.inOut", 
    delay:0.5, 
} , 'start');



function initMap(){
  let location = {lat: 56.064780, lng: 10.151430};
  let map = new google.maps.Map(document.getElementById("map"),{
    zoom: 4,
    center: location

  });
var marker = new google.maps.Marker({
  position: location,
  map: map
});

}


