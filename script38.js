gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();


var tl=gsap.timeline();
gsap.set("#ball",{top:"-120%"})
gsap.set(".a",{y:50,opacity:0})
tl.to("#rect",{
  opacity:0,
    delay:2,
  ease:Power1
  
})

tl.to("#starting",{
  opacity:0,
    delay:2.5,
  ease:Power1
  
})

tl.to("#ball",{
     top:"70%",
     delay:1.2,
     ease:"power1.out"
 
 })
 tl.to(".a",{
    y:0,

    
    stagger:.8,
 
    opacity:1,
    ease:"power1.out"

})

 var tl1= gsap.timeline({
     scrollTrigger:{
         trigger:"#overlay",
         start:"top top",
       //  markers:true,
        // pin:`#overlay`,
       scroller: "#main",
        // pin:true,
        // end:"+=" + (window.innerHeight * 2),
        // end:"50%",
         scrub:1,
 }
 });
 tl1.to("#ball img",{
  delay:.03,
ease:Power1,
   rotation:"10",
    
},"a")

 tl1.to("#ball img",{
     delay:.1,

    x:`200%`,
    y:`80%`,
    ease:Power1,
     rotation:"360",
    
 },"a")
 tl1.to(".b",{
    
  duration:.3,
 rotate:`14deg`,
  ease:"power1.out"
},"a")

tl1.to(".b",{
    
  duration:.4,
 rotate:`-11deg`,
  ease:"power1.out",
  delay:.5
},"a")
tl1.to(".b",{
rotate:`5deg`,
ease:"power1.out",
delay:1
},"a")
tl1.to(".b",{
  
rotate:`-1deg`,
ease:"power1.out",
delay:1.5
},"a")

tl1.to(".b",{
  
rotate:`0deg`,
ease:"power1.out",
delay:2
},"a")


var tl2= gsap.timeline({
   scrollTrigger:{
       trigger:"#home2",
       start:"top top",
       //markers:true,
     // pin:`#overlay`,
      scroller: "#main",
//       // pin:true,
//       // end:"+=" + (window.innerHeight * 2),
//       // end:"50%",
      scrub:1,}
});
 gsap.set(".e",{y:60,opacity:0})
 tl2.to(".e",{
    opacity:1,
    delay:4,
 
  stagger:.2,
   y:0,
  ease:"power1.out"
 },"b")
 gsap.set(".split1 p ",{y:50})
  tl2.to(".split1 p ",{
 y:-15,
stagger:.09,
duration:.9,
delay:1,

 ease:Power1
  
 },"b")

 

tl2.to("#circle",{
  


  delay:4,
 
 
 bottom:"-40%",
 ease:Power1
  
 
},"b")

 tl2.to("#card1",{
  

  delay:5,
 duration:2,
  bottom:"8%",
  transform:` rotate(-10deg) `,
  ease:Power1
   
  
 },"b")
 tl2.to("#card2",{
  duration:2,
  
  delay:5,
 
  bottom:"10%",
  transform:` rotate(10deg) `,
  ease:Power1
   
  
 },"b")
 tl2.fromTo(".snake__text-path", {
  attr: { startOffset: "100%" }
}, {
  attr: { startOffset: '0%' },
  ease: 'power4.inOut',
  delay:.2,
  duration: 15,
}, 'b')
function cardShow(){
  document.querySelectorAll(".hovertxt ")
  .forEach(function(hovertxt){
   // var showingImg;
    hovertxt.addEventListener("mouseenter",function(dets){
  // console.log(dets.target)
     // showingImg = dets.target;
   document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
   dets.target.style.color= "#51733f";
   

 })
     hovertxt.addEventListener("mouseleave",function(dets){
       document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 0;
   dets.target.style.color= "#1b1c1e"

        })
      
  })
}
function boxHover(){
  document.querySelectorAll(".bx")
  .forEach(function(hovertxt){
    //var showingImg;
    hovertxt.addEventListener("mouseenter",function(dets){
  // console.log(dets.target.dataset.index)
  //dets.target.dataset.index.style.backgroundColor="#51733f";
   // showingImg = dets.target;
   dets.target.style.backgroundColor= "#" + dets.target.dataset.color;
   dets.target.style.transform="rotate(3deg)";
   
  







 })
      hovertxt.addEventListener("mouseleave",function(dets){
       document.querySelector(".box1").style.backgroundColor = "#F5F5EB";
       document.querySelector(".box2").style.backgroundColor = "#F5F5EB";
       document.querySelector(".box3").style.backgroundColor = "#F5F5EB";
       document.querySelector(".box4").style.backgroundColor = "#F5F5EB";
       document.querySelector(".box5").style.backgroundColor = "#F5F5EB";
       dets.target.style.transform="rotate(0deg)";
  
      
       


     
     
     
     
        })
      
  })
}


function cardImg(){
  document.querySelectorAll(".mouse p ,button")
  .forEach(function(hovertxt){
   // var showingImg;
    hovertxt.addEventListener("mousemove",function(dets){
  // console.log(dets.target.dataset)
   var dim = document.querySelector(".mouse").getBoundingClientRect();
   // showingImg = dets.target;
   document.querySelector("#cursor8").children[dets.target.dataset.index].style.opacity = 1;
   document.querySelector("#cursor8").children[dets.target.dataset.index].style.transform =`translate(${dets.clientX}px, ${dets.clientY}px)`;
   //document.querySelector("#cursor8").children[dets.target.dataset.index].style.top =(dets.y-30)+"px";
   //document.querySelector("#cursor8").children[dets.target.dataset.index].style.left =(dets.x)+"px";
 document.querySelector("#cursor8").children[dets.target.dataset.index].style.top =(dets.y - dim.y)+"px";



 })
     hovertxt.addEventListener("mouseleave",function(dets){
    //    //document.querySelector("#cursor8").children[dets.target.dataset.index].style.opacity = 0;
      document.querySelector("#cursor8").children[dets.target.dataset.index].style.opacity = 0;
      })
      
  })
}



var tl3= gsap.timeline({
  scrollTrigger:{
      trigger:"#home4",
      start:"top bottom",
   //  markers:true,
    // pin:`#overlay`,
     scroller: "#main",
     end:"bottom 100%",
//       // pin:true,
      
//       // end:"50%",
     scrub:2,}
});
gsap.set(".f",{y:60,opacity:0})
 tl3.to(".f",{
    opacity:1,
    delay:1,
 
  stagger:.2,
   y:0,
  ease:"power1.out"
 },"i")
 
gsap.set(".split2 p ",{y:67})
tl3.to(".split2 p ",{
  y:-15,
 stagger:.03,
 duration:.3,
 
 delay:.5,
 ease:Power1

  
   
  },"i")
  tl3.to("#btn-3",{
  
    scale:1,
     
    delay:1.3,
    duration:1,
      ease:Power1
       
      
     },"i")
     
 
  gsap.set(".g",{y:"-65%",x:"62%"})

   tl3.to(".g",{
 duration:1,
 delay:.5,
  rotate:180,
  x:"15%",
  y:"-13%",
ease:"power1.out"
 })
 var tl5= gsap.timeline({
  scrollTrigger:{
      trigger:"#home5",
      start:"top 90%",
   //  markers:true,
    // pin:`#overlay`,
     scroller: "#main",
     end:"bottom 200%",
//       // pin:true,
       
//       // end:"50%",
     scrub:1,}
});
gsap.set(".h",{y:60,opacity:0})
 tl5.to(".h",{
    opacity:1,
    
 
  
   y:0,
  ease:"power1.out"
 },"h")


gsap.set(".split3 p ",{y:63})
tl5.to(".split3 p ",{
  y:-15,
 stagger:.03,
 duration:.3,
 
 ease:Power1

  
   
  },"h")
  gsap.set(".k",{y:-1200,opacity:0})

   tl5.to(".k",{
//  duration:3,
//  delay:1,
//  stagger:.09,
//   rotate:90,
//   x:0,
//   y:0,
// ease:"power1.out"
duration:20,
stagger:3,
delay:20,
opacity:1,
// rotate:180,
y:0,

 },"h")
 




 var tl6= gsap.timeline({
  scrollTrigger:{
      trigger:"#home6",
      start:"top 180%",
    // markers:true,
    // pin:`#overlay`,
     scroller: "#main",
     end:"bottom 200%",
//       // pin:true,
       
//       // end:"50%",
     scrub:1,}
});
gsap.set(".j",{y:60,opacity:0})
 tl6.to(".j",{
    opacity:1,
    delay:.3,
   y:0,
  ease:"power1.out"
 },"d")


gsap.set(".split4 p ",{y:63})
tl6.to(".split4 p ",{
  y:-15,
 stagger:.02,
 duration:.2,
 
 ease:"power1.out"
 },"d")
 

tl6.to("#anim-circle",{
  scale:25,
  delay:1,
  
  ease:"power1.out"
},"d")
var tl7= gsap.timeline({
  scrollTrigger:{
      trigger:"#home7",
      start:"top 100%",
    // markers:true,
    // pin:`#overlay`,
     scroller: "#main",
     end:"bottom 240%",
//       // pin:true,
       
//       // end:"50%",
     scrub:1,}
});
gsap.set(".split5 p ",{y:63})
tl7.to(".split5 p ",{
  y:-15,
 stagger:.02,
 duration:.2,
 
 ease:"power1.out"
 })
 
 gsap.set(".split6 p ",{y:63})
 tl7.to(".split6 p ",{
   y:-15,
  stagger:.02,
  duration:.2,
  
  ease:"power1.out"
  })
  
//  tl7.to("#home7-img img ",{
//   y:0,
//  x:0,
//  duration:2,
//  rotate:"180deg",
 
//  ease:"power1.out"
//  },"a")
var tl11= gsap.timeline({
  scrollTrigger:{
      trigger:"#home7",
      start:"top 70%",
    // markers:true,
    // pin:`#overlay`,
     scroller: "#main",
    end:"bottom 180%",
//       // pin:true,
       
//       // end:"50%",
     scrub:2,}
});
 
gsap.set("#home7-img ",{x:"130%", y:-80})
tl11.to("#home7-img ",{
 y:0,
x:0,
rotation:"360",

duration:1.5,
ease:"power1.out"
},"a")
tl11.to("#home7-img ",{
  y:"90%",
 x:"-9%",
 
 duration:.5,
 ease:"power1.out"
 })
 tl11.to("#home7-img ",{
  
 x:"-15%",
 duration:.5,
 ease:"power1.out"
 })
 tl11.to("#home7-img ",{
  y:"300%",
  
  duration:.5,
 ease:"power1.out"
 })

  tl11.to("#home7-img ",{
  x:"-45%",
  y:"400%",
 
   duration:.5,
 
 ease:"power1.out"
 })




  var tl8= gsap.timeline({
    scrollTrigger:{
        trigger:"#home8",
        start:"top 80%",
      // markers:true,
      // pin:`#overlay`,
       scroller: "#main",
       end:"bottom 250%",
  //       // pin:true,
         
  //       // end:"50%",
       scrub:1,}
  });
  gsap.set(".split7 p ",{y:64})
  tl8.to(".split7 p ",{
    y:-15,
   stagger:.02,
   duration:.2,
   
   ease:"power1.out"
   })
   
   gsap.set(".split8 p ",{y:66})
   tl8.to(".split8 p ",{
     y:-15,
    stagger:.02,
    duration:.2,
    
    ease:"power1.out"
    })
      
      
   
 
    var tl9= gsap.timeline({
      scrollTrigger:{
          trigger:"#home9",
          start:"top 100%",
       //  markers:true,
        // pin:`#overlay`,
         scroller: "#main",
         end:"bottom 350%",
    //       // pin:true,
           
    //       // end:"50%",
         scrub:1,}
    });
    gsap.set(".split9 p ",{y:64})
    tl9.to(".split9 p ",{
      y:-15,
     stagger:.02,
     duration:.2,
     
     ease:"power1.out"
     })
     
     gsap.set(".split10 p ",{y:66})
     tl9.to(".split10 p ",{
       y:-15,
      stagger:.02,
      duration:.2,
      
      ease:"power1.out"
      })
        
    
var tl10= gsap.timeline({
  scrollTrigger:{
      trigger:"#home10",
      start:"top 180%",
    //markers:true,
    // pin:`#overlay`,
     scroller: "#main",
     end:"bottom 200%",
//       // pin:true,
//       // end:"+=" + (window.innerHeight * 2),
//       // end:"50%",
     scrub:1,}
});

tl10.fromTo(".help__text-path", {
  attr: { startOffset: "-100%" }
}, {
  attr: { startOffset: '0%' },
  ease: 'power4.inOut',
  duration: .5,

}, 'e')


cardShow();
boxHover();
cardImg();
