// auto change year in footer copyright
var date = new Date();
var year = date.getFullYear();

document.getElementById('actualYear').innerHTML = year;
// end auto year



// show topMenu
var menuBtn = document.getElementById('topMenuBtn');
    nav = document.getElementById('topMenu');
    body = document.getElementsByTagName('HTML')[0];

menuBtn.addEventListener('click', function() {
  if(nav.hasAttribute('style')){
    nav.removeAttribute('style');
    menuBtn.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
    body.style.overflowY = 'initial';
  }
  else {
    nav.style.display = 'block';
    menuBtn.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
    body.style.overflowY = 'hidden';
  }
})
//end topMenu




// stick header
var header = document.getElementsByTagName('header')[0];
    div = document.getElementsByClassName('pageTitle')[0];
    wrapper = document.getElementsByClassName('wrapper')[0];
    slider = document.getElementsByClassName('slider')[0];

window.onscroll = function() {
  var distance = window.pageYOffset;
      margin = header.offsetHeight;

  if ( distance > margin ) {
    header.classList.add('stick');
    header.nextElementSibling.style.marginTop = margin + 'px';
  }
  else {
    header.removeAttribute('class');
    header.nextElementSibling.style.marginTop = '0';
  }
}
// end header

// ctaBtn
var hours = date.getHours();
    ctaBtn = document.getElementsByClassName('ctaBtn')[0];

// if ( hours >= 8 && hours <= 17 ) {
//   ctaBtn.setAttribute('href', 'tel:+55-21-2587-1505');
// }
// else {
  ctaBtn.setAttribute('href', 'tel:+55-21-99766-7338');
// }
//end ctaBtn


//budgetCta
setTimeout(
    function(){
        document.querySelector(".budgetCta").classList.remove("hidden");
    },
    3000
);
//end budgetCta





// start homepage scripts
if(window.location.pathname == '/') {

  // main slider engine
  var myIndex = 0;
  function carousel() {
      var i;
      var slides = document.getElementsByClassName('mySlides');
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = 'none';
      }
      myIndex++;
      if (myIndex > slides.length) {myIndex = 1}
      slides[myIndex-1].style.display = 'flex';
      setTimeout(carousel, 2000);
  }

  carousel();
  // end main slider

}
// end homepage scripts





//start contact page scripts
if(window.location.pathname == '/contato.html') {


  // google maps
  function initMap() {
    var myLatLng = {lat: -22.8537095, lng: -43.3169656};

    // map
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 15,
        disableDefaultUI: true,
    });

    // marker
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Maxsigns'
    });
  }
  // end google maps
}
// end contact page scripts



// start about page scripts
if(window.location.pathname == '/sobre.html') {


  // client logo slider
  var clientIndex = 0;
  function clientSlide() {
      var u;
      var clientLogo = document.getElementsByClassName('clientLogo');
      for (u = 0; u < clientLogo.length; u++) {
         clientLogo[u].style.opacity = '.2';
      }
      clientIndex++;
      if (clientIndex > clientLogo.length) {clientIndex = 1}
      clientLogo[clientIndex-1].style.opacity = '1';
      setTimeout(clientSlide, 4000);
  }

  clientSlide();
  //end client slider
}
// end about page scripts
