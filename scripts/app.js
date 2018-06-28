let slideIndex = 0;
let timer = setInterval(showSlide, 10000);

window.onload = function() {
  startClock();
};

//  When a tab in the navbar is clicked, switch the content page
function tabClick(event, tab) {
  var i;

  let content = document.getElementsByClassName("content");
  for (i = 0; i < content.length; ++i) {
    content[i].style.display = "none";
  }

  let tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; ++i) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tab).style.display = "block";
  event.currentTarget.className += " active";
}

//  Display a clock on the navbar
function startClock() {
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();

  var abrev;

  if (hour > 12) {
    hour -= 12;
    abrev = "PM";
  } else {
    abrev = "AM";
  }

  if (minute < 10) { minute = "0" + minute; }

  document.getElementById('clock').innerHTML = hour + ":" + minute + " " + abrev;

  //  Update clock every 500 millisecondss
  let clockTimer = setTimeout(startClock, 500);
}

//  Switch slides in the slide show in the 'Work' section
function showSlide() {
  var i;
  let slides = document.getElementsByClassName("slide");

  for (i = 0; i < slides.length; ++i) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";

  ++slideIndex;
  if (slideIndex >= slides.length) slideIndex = 0;
}

//  Manually select a slide in the slide show in the 'Work' section
function setSlideIndex(index) {
  slideIndex = index;
  showSlide();
}
