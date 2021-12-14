
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}




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

