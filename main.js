//https://bashooka.com/coding/30-css-animated-gradient-examples/
//https://codepen.io/ray7551/pen/EbVmZd


const lugares = [
  "header-wrapper",
  "about-end",
  "technologies-end",
  "project-1-placeholder",
  "project-2-placeholder",
  "project-3-placeholder"
]

let i = 0;

function goDown(){
  if (i < lugares.length) {
    i++;
    const element = document.getElementById(lugares[i]);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}

function goUp(){
  if (i > 0) {
    i--;
    const element = document.getElementById(lugares[i]);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  if(i == 0){
    window.scrollTo({ top: 0});
  }
} 

document.addEventListener("DOMContentLoaded", function(){

    //<a> para ir a inicio

    document.getElementById('header-wrapper').addEventListener('click', function() {
        if (this.classList.contains('scrolled-header')) {
        window.scrollTo({ top: 0});
        }
    });

    //todas las escenas para ScrollMagic

    var controller = new ScrollMagic.Controller();

    var h1controller = new ScrollMagic.Scene({
        triggerElement: "#header-placeholder",
        triggerHook: 0.4,
        reverse: true
    })
    // .setClassToggle("#header-wrapper","scrolled-header")
    .on("enter", function(){
      document.getElementById("header-wrapper").classList.add("scrolled-header");
      document.getElementById("menu").classList.add("moved-menu-phone");
    })
    .on("leave", function(){
      document.getElementById("header-wrapper").classList.remove("scrolled-header");
      document.getElementById("menu").classList.remove("moved-menu-phone");
    })
    // esto se supone que quita el absolute-center, que es lo que hace que el top:0 no funcione 
    // .on("enter", function () {
    //     document.querySelector("#header-wrapper").classList.remove("absolute-center");
    // })
    // .on("leave", function () {
    //     document.querySelector("#header-wrapper").classList.add("absolute-center");
    // })
    .addTo(controller);


    var frontendScene = new ScrollMagic.Scene({
      triggerElement: "#technologies-placeholder",
      triggerHook: 0.8,
      reverse: true
    })
    .setClassToggle("#frontend", "frontend-moved")
    .addTo(controller);

var backendScene = new ScrollMagic.Scene({
  triggerElement: "#technologies-placeholder",
  triggerHook: 0.5,
   reverse: true
 })
 .setClassToggle("#backend", "backend-moved")
 .addTo(controller);

     var uiScene = new ScrollMagic.Scene({
       triggerElement: "#technologies-placeholder",
       triggerHook: 0.1,
       reverse: true
     })
     .on("enter", function(event){
      document.getElementById("ui").classList.add("ui-moved");
      i = 2;
      console.log("i cambiado a 2");
     })
     .on("leave", function(event){
      i = 2;
      console.log("ui quitado");
      document.getElementById("ui").classList.remove("ui-moved");
     })

    //  .setClassToggle("#ui", "ui-moved")
     .addTo(controller);

     var hideAllTechScene = new ScrollMagic.Scene({
       triggerElement: "#h2-technologies",
       triggerHook: 0,
       reverse: true
     })
     .on("enter", function (event) {
         document.getElementById("frontend").classList.remove("frontend-moved");
         document.getElementById("backend").classList.remove("backend-moved");
         document.getElementById("ui").classList.remove("ui-moved");
     })
     .on("leave", function (event) {
       document.getElementById("frontend").classList.add("frontend-moved");
       document.getElementById("backend").classList.add("backend-moved");
       document.getElementById("ui").classList.add("ui-moved");
     })
     .addTo(controller);
  
    //  var projectsWrapper = new ScrollMagic.Scene({
    //   triggerElement: "#projects-placeholder",
    //   triggerHook: 1,
    //   reverse: true
    //  })
    //  .on("enter", function(event){
    //   console.log("hola");
    //   document.getElementById("projects-wrapper").classList.remove("display-none");    
    //  })
    //  .on("leave", function(event){
    //   console.log("adios");
    //   setTimeout(()=>{
    //     document.getElementById("projects-wrapper").classList.add("display-none")
    //   }, 1000)
    //  })
    //  .addTo(controller);

     var techsChecker = new ScrollMagic.Scene({
      triggerElement: "#techs-checker",
      triggerHook: 1,
      reverse: true
     })
     .on("enter", function(event){
      console.log("gola");
      if (document.getElementById("ui").classList.contains("ui-moved")) {
        console.log("Escondiendo techs");
        document.getElementById("frontend").classList.remove("frontend-moved");
        document.getElementById("backend").classList.remove("backend-moved");
        document.getElementById("ui").classList.remove("ui-moved");
      }
     })
     .addTo(controller);

     var techsChecker2 = new ScrollMagic.Scene({
      triggerElement: "#techs-checker2",
      triggerHook: 0.85,
      reverse: true
     })
     .on("enter", function(event){
      console.log("gola");
      if (document.getElementById("ui").classList.contains("ui-moved")) {
        console.log("Escondiendo techs 2");
        document.getElementById("frontend").classList.remove("frontend-moved");
        document.getElementById("backend").classList.remove("backend-moved");
        document.getElementById("ui").classList.remove("ui-moved");
      }
     })
     .addTo(controller);

     var project1Scene = new ScrollMagic.Scene({
      triggerElement: "#projects-placeholder",
      triggerHook: 0.95,
      reverse: true
    })
    .on("enter", function(event){
      i = 3;
      console.log("funciona");
      document.getElementById("project-1").classList.remove("display-none"); 
      setTimeout(()=>{
        console.log("none");
        document.getElementById("project-1").classList.add("project-active");
      },1) 
      if (document.getElementById("ui").classList.contains("ui-moved")) {
        console.log("Escondiendo techs");
        document.getElementById("frontend").classList.remove("frontend-moved");
        document.getElementById("backend").classList.remove("backend-moved");
        document.getElementById("ui").classList.remove("ui-moved");
      }
    })
    .on("leave", function(event){
      document.getElementById("project-1").classList.remove("project-active");  
      setTimeout(()=>{
        console.log("none");
        document.getElementById("project-1").classList.add("display-none"); 
      },1000) 
    })
    .addTo(controller);

    var project1SceneLeave = new ScrollMagic.Scene({
      triggerElement: "#projects-placeholder",
      triggerHook: 0.01,
      reverse: true  
    })
    .on("enter", function(event){
      console.log("adios");
      document.getElementById("project-1").classList.remove("project-active");
      setTimeout(()=>{
        console.log("none");
        document.getElementById("project-1").classList.add("display-none"); 
      },1000)
    })
    .on("leave", function(event){
      i = 3
      console.log("adios");
      document.getElementById("project-1").classList.remove("display-none"); 
      setTimeout(()=>{
        console.log("none");
        document.getElementById("project-1").classList.add("project-active");
      },1)
    })
    .addTo(controller);

    var project2Scene = new ScrollMagic.Scene({
      triggerElement: "#projects-placeholder-2",
      triggerHook: 0.95,
      reverse: true
    })
    .on("enter", function(event){
      i = 4;
      console.log("funciona");
      document.getElementById("project-2").classList.remove("display-none"); 
      setTimeout(()=>{
        console.log("none");
        document.getElementById("project-2").classList.add("project-active");
      },1) 
    })
    .on("leave", function(event){
      document.getElementById("project-2").classList.remove("project-active");  
      setTimeout(()=>{
        console.log("none");
        document.getElementById("project-2").classList.add("display-none"); 
      },1000) 
    })
    .addTo(controller);

    var project2SceneLeave = new ScrollMagic.Scene({
      triggerElement: "#projects-placeholder-2",
      triggerHook: 0.01,
      reverse: true  
    })
    .on("enter", function(event){
      console.log("adios");
      document.getElementById("project-2").classList.remove("project-active");
      setTimeout(()=>{
        console.log("none");
        document.getElementById("project-2").classList.add("display-none"); 
      },1000)
    })
    .on("leave", function(event){
      i = 4
      console.log("adios");
      document.getElementById("project-2").classList.remove("display-none"); 
      setTimeout(()=>{
        console.log("none");
        document.getElementById("project-2").classList.add("project-active");
      },1)
    })
    .addTo(controller);

    var project3Scene = new ScrollMagic.Scene({
      triggerElement: "#projects-placeholder-3",
      triggerHook: 0.95,
      reverse: true
    })
    .on("enter", function(event){
      i = 5;
      console.log("funciona");
      document.getElementById("project-3").classList.remove("display-none"); 
      setTimeout(()=>{
        console.log("none");
        document.getElementById("project-3").classList.add("project-active");
      },1) 
    })
    .on("leave", function(event){
      document.getElementById("project-3").classList.remove("project-active");  
      setTimeout(()=>{
        console.log("none");
        document.getElementById("project-3").classList.add("display-none"); 
      },1000) 
    })
    .addTo(controller);

    // var project3SceneLeave = new ScrollMagic.Scene({
    //   triggerElement: "#projects-placeholder-3",
    //   triggerHook: 0.01,
    //   reverse: true  
    // })
    // .on("enter", function(event){
    //   console.log("adios");
    //   document.getElementById("project-3").classList.remove("project-active");
    //   setTimeout(()=>{
    //     console.log("none");
    //     document.getElementById("project-3").classList.add("display-none"); 
    //   },1000)
    // })
    // .on("leave", function(event){
    //   console.log("adios");
    //   document.getElementById("project-3").classList.remove("display-none"); 
    //   setTimeout(()=>{
    //     console.log("none");
    //     document.getElementById("project-3").classList.add("project-active");
    //   },1)
    // })
    // .addTo(controller);

    // .setClassToggle("#project-1", "project-active")
    // .addTo(controller);

  // var project2Scene = new ScrollMagic.Scene({
  //   triggerElement: "#projects-placeholder-2",
  //   triggerHook: 0.7,
  //   reverse: true
  // })
  // .on("enter", function(event){
  //   console.log("funciona2");
  //   document.getElementById("project-2").classList.add("project-active");
  //   document.getElementById("project-1").classList.remove("project-active");
  // })
  // .on("leave", function(event){
  //   document.getElementById("project-2").classList.remove("project-active");
  // })
  // .addTo(controller);
  // .setClassToggle("#project-2", "project-active")
  // .addTo(controller);

    //  var project3Scene = new ScrollMagic.Scene({
    //    triggerElement: "#projects-placeholder-3",
    //    triggerHook: 0.7,
    //    reverse: true
    //  })
    //  .on("enter", function(event){
    //   document.getElementById("project-3").classList.add("project-active");
    //   document.getElementById("project-2").classList.remove("project-active");
    //  })
    //  .on("leave", function(event){
    //   document.getElementById("project-3").classList.remove("project-active");
    //  })
    //  .setClassToggle("#project-3", "project-active")
    //  .addTo(controller);

    //  var hideAllTechScene = new ScrollMagic.Scene({
    //    triggerElement: "#h2-projects",
    //    triggerHook: 0,
    //    reverse: true
    //  })
    //  .on("enter", function (event) {
    //      document.getElementById("project-1").classList.remove("project-active");
    //      document.getElementById("project-2").classList.remove("project-active");
    //      document.getElementById("project-3").classList.remove("project-active");
    //  })
    //  .on("leave", function (event) {
    //    document.getElementById("project-1").classList.add("project-active");
    //    document.getElementById("project-2").classList.add("project-active");
    //    document.getElementById("project-3").classList.add("project-active");
    //  })
    //  .addTo(controller);
     var aboutScene = new ScrollMagic.Scene({
      triggerElement: "#about-placeholder",
      triggerHook: 0.95,
      reverse: true
    })
    .setClassToggle("#socials", "socials-zoom")
    .addTo(controller);
    var aboutScene2 = new ScrollMagic.Scene({
      triggerElement: "#about-placeholder",
      triggerHook: 0.95,
      reverse: true
    })
    .on("enter", function(event){
      document.querySelector('.about-wrapper').classList.add("about-on");
      i = 1;
    })
    .on("leave", function(event){
      i = 0;
      console.log("holaje");
      document.querySelector('.about-wrapper').classList.remove("about-on");
    })
    .addTo(controller);
    var aboutScene3 = new ScrollMagic.Scene({ 
      triggerElement: "#about-placeholder",
      triggerHook: 0.00,
      reverse: true
    })
    .on("enter", function(evemt){
      document.querySelector('.about-wrapper').classList.remove("about-on");
      document.querySelector("#socials").classList.remove("socials-zoom");
    })
    .on("leave", function(event){
      i = 1;
      console.log("holaji");
      document.querySelector('.about-wrapper').classList.add("about-on");
      document.querySelector("#socials").classList.add("socials-zoom");
    })
    .addTo(controller);
});


