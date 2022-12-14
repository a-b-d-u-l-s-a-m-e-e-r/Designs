function show(elem) {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
       el: document.querySelector(elem),
       smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(elem, {
       scrollTop(value) {
          return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
       },
       getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
       },
       pinType: document.querySelector(elem).style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
 }
 show("#bg");


var arp=["https://images.unsplash.com/photo-1470406852800-b97e5d92e2aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","https://images.unsplash.com/photo-1522008660239-1bbdb39444c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"];
var ars=["This comprehensive biography of the fashion icon is based on hundreds of interviews with Wintours closest friends and colleagues, and delves into her childhood in 1960s London and her long career at Vogue. Journalist Odell weaves in the history of Condé Nast and turbulent changes in the fashion world with Wintours personal life.","Crosley, a prolific essayist, has written a novel that combines experimental psychology with modern dating. Her protagonist, 37-year-old Lola, keeps bumping into exes in New York City and then gets roped into a psychological experiment with a cult-like figure in which participants lure past partners to get closure on the relationships. The novel has been hailed as sharp and perceptive about the trappings of online dating.",
"This revealing memoir dives into Davis traumatic childhood in which she dealt with poverty,abuse and an alcoholic father, and takes readers through how she discovered acting and honed her craft at Juilliard. The Oscar and Emmy Award-winning actress also talks about turning down stereotypical roles offered to Black women, paving the way for her to star in several critically acclaimed roles in films such as Fences and Ma Rainey Black Bottom."];
var art=["--amy odell","--sloane crosley","--viola davis"] ;
var c=0;
setInterval(function(){
if(c<=2){
   document.querySelector("#main #prt1").innerHTML=`
   <img id="pic"
    src="${arp[c]}"
    alt="">
    <div id="text">
<h1 id="sum">${ars[c]}</h1>
<h2 id="aut">${art[c]}</h2>
</div>`;
    c++;
}
if(c===3){
    c=0;
clearInterval();
}
},1500)

var sf;
var f=1;
var g=1;
setInterval(function(){
    sf="#sldrs"+String(f+1);
    if(f<3){
    document.querySelector("#main "+sf).style.backgroundColor="aliceblue";
        f++;
}
else{
    document.querySelector("#main #sldrs1").style.backgroundColor="transparent";
    document.querySelector("#main #sldrs2").style.backgroundColor="transparent";
    document.querySelector("#main #sldrs3").style.backgroundColor="transparent";
    f=0;
    clearInterval();
}
},1500)

gsap.from("#main #prt2>h1", {
   opacity:0,
   duration:4,
   y:150,
    onStart: function () {
       $('#main #prt2>h1').textillate({ in: { effect: 'rotateIn' } });
    }
 })

 function clr(q){
   document.querySelector(q).addEventListener("mousemove",function(){
      document.querySelector("#main2 #prt3 #pr1 #c1").style.color="red";
      document.querySelector("#main2 #prt3 #pr1 #c2").style.color="red";
    })
    document.querySelector(q).addEventListener("mouseleave",function(){
      document.querySelector("#main2 #prt3 #pr1 #c1").style.color="aliceblue";
      document.querySelector("#main2 #prt3 #pr1 #c2").style.color="aliceblue";
    })
 }
 clr("#main2 #prt3 #pr1 ");
 clr("#main2 #prt3 #pr1");



 gsap.from("#main3>h1",{
   opacity:0,
   y:100,
   scrollTrigger: {
      trigger: "#main3>h1",
      scroller: "#bg",
      start: "top 180%",
      end: "top 150%",
      scrub: true,
      scrub:true
   },
   onStart: function () {
      $('#main3>h1>span').textillate({ in: { effect: 'bounceIn' } });
   }
 })


 gsap.from("#main4 #hd",{
   opacity:0,
   y:100,
   scrollTrigger: {
      trigger: "#main4 .bk",
      scroller: "#bg",
      start: "top 275%",
      end: "top 230%",
      scrub: true,
      scrub:true
   },
   onStart: function () {
      $('#main4 #hd').textillate({ in: { effect: 'flip' } });
   }
 })

function books(a,b){
   document.querySelector(a).addEventListener("mouseenter",function(){
      gsap.to(a,{
         opacity:0,
         duration:1
      })
    })
    document.querySelector(a).addEventListener("mouseleave",function(){
      gsap.to(a,{
         opacity:1,
         duration:1
      })
    })
    document.querySelector(b).addEventListener("mouseenter",function(){
      gsap.to(a,{
         opacity:0,
         duration:1
      })
    })
    document.querySelector(b).addEventListener("mouseleave",function(){
      gsap.to(a,{
         opacity:1,
         duration:1
      })
    })   
}

books("#main4 #bk1","#main4 #cr1");
books("#main4 #bk2","#main4 #cr2");
books("#main4 #bk3","#main4 #cr3");
books("#main4 #bk4","#main4 #cr4");

var hc=["~daily offer~","~sale~","~20% off~","~buy now~"];
var h=0;
setInterval(function(){
   if(h<4){
      document.querySelector("#main4 #hd1").textContent=hc[h];
      h++;
   }
   else{
      clearInterval();
      h=0;
   }
},1000)