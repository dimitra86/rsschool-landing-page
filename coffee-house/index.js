// console.log('hello world');

const burger = document.querySelector('.burger');
const twoLine = document.querySelector('.twoLine');
const closeBurger = document.querySelector('.closeBurger');
const burgerMenuNav=document.querySelector('.burgerMenuNav');
const slides=document.querySelector('.slides');
const slides2=document.querySelector('.slides2');
const slides3=document.querySelector('.slides3');
const sliderLeft=document.querySelector('.sliderLeft');
const sliderRight=document.querySelector('.sliderRight');
const btnCarousel=document.querySelector('.btnCarousel');
const btnCarousel2=document.querySelector('.btnCarousel2');
const btnCarousel3=document.querySelector('.btnCarousel3');
const coffeeTab=document.querySelector('.coffeeTab');
const teaTab=document.querySelector('.teaTab');
const dessertTab=document.querySelector('.dessertTab');


//burger menu function
burger.addEventListener('click', function (e) {
  if (closeBurger.classList == 'closeBurger displaynone') {
    closeBurger.classList.remove('displaynone');
    twoLine.classList.add('displaynone');
    burgerMenuNav.classList.add('active');
    // burgerMenuNav.classList.remove('noactive');
  }
  else if (closeBurger.classList == 'closeBurger') {
    closeBurger.classList.add('displaynone');
    twoLine.classList.remove('displaynone');
    // burgerMenuNav.classList.add('noactive');
    burgerMenuNav.classList.remove('active');
  }

  burgerMenuNav.addEventListener('click',function(e){
    burgerMenuNav.classList.remove('active');
    closeBurger.classList.add('displaynone');
    twoLine.classList.remove('displaynone');
  }

  )

  // console.log(closeBurger.classList);
})

//slider function
sliderRight.addEventListener('click', function (e) {
  if (slides.classList == 'slides') {
    slides2.classList.remove('displaynone');
    slides.classList.add('displaynone');

    btnCarousel.classList.remove('active');
    btnCarousel2.classList.add('active');
    curPos+=1;
  }
  else if (slides2.classList == 'slides2') {
    slides3.classList.remove('displaynone');
    slides2.classList.add('displaynone');

    btnCarousel2.classList.remove('active');
    btnCarousel3.classList.add('active');
    curPos+=1;
  }
  else if (slides3.classList == 'slides3') {
    slides.classList.remove('displaynone');
    slides3.classList.add('displaynone');

    btnCarousel3.classList.remove('active');
    btnCarousel.classList.add('active');
    curPos=curPos-2;
  }
  console.log (curPos);
})
let curPos=0;
function changeImage(){
  let arr=[slides, slides2, slides3];
 
  
  if (arr[curPos].classList == 'slides') {
    slides2.classList.remove('displaynone');
    slides.classList.add('displaynone');

    btnCarousel.classList.remove('active');
    btnCarousel2.classList.add('active');
    curPos+=1;
  }
  else if (arr[curPos].classList == 'slides2') {
    slides3.classList.remove('displaynone');
    slides2.classList.add('displaynone');

    btnCarousel2.classList.remove('active');
    btnCarousel3.classList.add('active');
    curPos+=1;
  }
  else if (arr[curPos].classList == 'slides3') {
    slides.classList.remove('displaynone');
    slides3.classList.add('displaynone');

    btnCarousel3.classList.remove('active');
    btnCarousel.classList.add('active');
    curPos=curPos-2;
  }
  console.log (curPos);
}

sliderLeft.addEventListener('click', function (e) {
  if (slides.classList == 'slides') {
    slides3.classList.remove('displaynone');
    slides.classList.add('displaynone');

    btnCarousel.classList.remove('active');
    btnCarousel3.classList.add('active');
    curPos=2;
  }
  else if (slides2.classList == 'slides2') {
    slides.classList.remove('displaynone');
    slides2.classList.add('displaynone');

    btnCarousel2.classList.remove('active');
    btnCarousel.classList.add('active');
    curPos=0;
  }
  else if (slides3.classList == 'slides3') {
    slides2.classList.remove('displaynone');
    slides3.classList.add('displaynone');

    btnCarousel3.classList.remove('active');
    btnCarousel2.classList.add('active');
    curPos=1;
  }
})

setInterval(changeImage, 5000); //start change image slider
// console.log (curPos);


//page menu tab
coffeeTab.addEventListener('click', function (e) {
  if(coffeeTab.classList=='activeTab'){}
  else if (teaTab.classList=='activeTab'){
    teaTab.classList.remove('activeTab');
    coffeeTab.classList.add('activeTab');
  }
  else if (dessertTab.classList=='activeTab'){
    coffeeTab.classList.add('activeTab');
    dessertTab.classList.remove('activeTab');
  }
})

teaTab.addEventListener('click', function (e) {
  console.log('click');
  if(teaTab.classList=='activeTab'){}
  else if (coffeeTab.classList=='activeTab'){
    coffeeTab.classList.remove('activeTab');
    teaTab.classList.add('activeTab');
  }
  else if (dessertTab.classList=='activeTab'){
    tea.classList.add('activeTab');
    dessertTab.classList.remove('activeTab');
  }
})