const draggableImages = document.querySelectorAll('.img-hover-zoom');
const initialPositions = new Map();
const activeImages = new Map();
const projects = document.getElementById("projects")

const projectos = document.querySelectorAll(".project-wrapper");

function saveInitialPositions(){
  draggableImages.forEach((img) => {
    initialPositions.set(img, {
      left: img.offsetLeft,
      top: img.offsetTop
    });
  });

}

function dragStart(e, img) {



  const initialMouseOffsetX = e.clientX - img.offsetLeft;
  const initialMouseOffsetY = e.clientY - img.offsetTop;

//hacerlo asi no permite que tambien se quite la opacidad con el hover también
  draggableImages.forEach((imgD) => {
    if(imgD != img){
      imgD.classList.add('img-hover-zoom-disabled');
    }
  })

  activeImages.set(img, {
    initialMouseOffsetX,
    initialMouseOffsetY
  });

  //!important no funciona
  img.classList.add('grabbing');
  img.classList.add('img-hover-zoom-perma');
  
  document.body.classList.add('grabbing');

  document.addEventListener('mousemove', dragMove);
  document.addEventListener('mouseup', (event) => {
    dragEnd(event, img);
  });
}

function dragMove(e) {
  activeImages.forEach((data, img) => {
    const imgX = e.clientX - data.initialMouseOffsetX;
    const imgY = e.clientY - data.initialMouseOffsetY;

    img.animate({
      left: `${imgX}px`,
      top: `${imgY}px`
    }, {duration: 1000, fill: "forwards"});
  });
}

function dragEnd(event, img) {

  activeImages.clear();
  document.removeEventListener('mousemove', dragMove);
  document.removeEventListener('mouseup', dragEnd);
  
  document.body.classList.remove('grabbing');

  img.classList.remove('img-hover-zoom-disabled');
  img.classList.remove('img-hover-zoom-perma');
  img.classList.remove('grabbing');

  initialPositions.forEach((initialPos, img) => {
    img.animate({
      left: `${initialPos.left}px`,
      top: `${initialPos.top}px`
    }, {duration: 900, fill: "forwards"});
  });

  draggableImages.forEach((imgD) => {
    if(imgD.classList.contains('img-hover-zoom-disabled')){
      imgD.classList.remove('img-hover-zoom-disabled');
    }
  })

}

draggableImages.forEach((img) => {
  img.addEventListener('mousedown', (e) => {
    dragStart(e, img);
  });
});

//no se guardan las posiciones y punto
//para hacerlo bien se tienen que guardar cuando aparezca un proyecto sus respectivas imágenes en draggable images y guardarse, y asi 
//cada vez que aparezca ese proyecto (o guardar todas a la vez al principio)

// function onElementTransitionEnd() {
//   // Asegúrate de que la función se ejecute solo una vez
//   projects.removeEventListener('transitionend', onElementTransitionEnd);
  
//   saveInitialPositions();
// }
//cuando pasa esto el resto de img que no están en escena no se registran sus valores xq display none
// projects.addEventListener('transitionend', onElementTransitionEnd); 


//-----------------------------------------------------

// projectos.forEach((projectWrapper) =>{

// const handleClassChange = () => {
//   saveInitialPositions();
//   if (projectWrapper.classList.contains('display-none')) {
//     console.log('La clase display-none se ha agregado');
//   } else {
//     console.log('La clase display-none se ha eliminado');
//   }
// };

// const observer = new MutationObserver(handleClassChange);

// const config = { attributes: true, attributeFilter: ['class'] };

// observer.observe(projectWrapper, config);
// })
