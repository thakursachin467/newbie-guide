window.sr=ScrollReveal();
/*sr.reveal('.main',{
  duration:2000,
  opacity: 0,
  origin:'left',
  distance:'300px',


}); */



sr.reveal('.ptext ',{
  duration:2000,
  origin:'left',
  reset: true,
  viewFactor: 0.2,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
  distance:'400px',
  rotate: { x:0, y: 40, z: 0 }
});

sr.reveal('.main3',{
  duration:3000,
  origin:'left',
  reset: true,
  mobile: false,
  viewFactor: 0.2,
  opacity:0,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
  distance:'1300px',
  rotate: { x:0, y: 40, z: 0 }
}, 50);

sr.reveal('.main4',{
  duration:3000,
  origin:'left',
  delay:2000,
  mobile: false,
  opacity:0,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
  distance:'1300px',
  rotate: { x:0, y: 40, z: 0 }
}, 50);

sr.reveal('.main5',{
  duration:3000,
  origin:'left',
  delay:2000,
  mobile: false,
  opacity:0,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
  distance:'1800px',
  rotate: { x:0, y: 40, z: 0 }
}, 50);

sr.reveal('.main6',{
  duration:3000,
  origin:'left',
  viewFactor: 0.5,
  delay:2000,
  mobile: false,
  opacity:0,
  reset: true,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
  distance:'1300px',
  rotate: { x:0, y: 40, z: 0 }
}, 50);

sr.reveal('.main7',{
  duration:3000,
  origin:'left',
  delay:2000,
  mobile: false,
  opacity:0,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
  distance:'1300px',
  rotate: { x:0, y: 40, z: 0 }
}, 50);

sr.reveal('.main8',{
  duration:3000,
  origin:'right',
  reset: true,
  delay:1000,
  mobile: false,
  opacity:0,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
  distance:'1800px',
  rotate: { x:0, y: 40, z: 0 }
}, 50);



$(window).scroll(function(){
    if ($(window).scrollTop() >= $(window).height() * 1) {
      $('.nav').css("display","block");

    } else {
        $('.nav').css("display","none");
    }
  });
