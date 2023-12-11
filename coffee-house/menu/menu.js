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
const menuCards=document.querySelector('.menuCards');
const menuCardsTea=document.querySelector('.menuCardsTea');
const menuCardsDessets=document.querySelector('.menuCardsDessets');
const refresh=document.querySelector('.refresh');
const cards=document.querySelectorAll('div.menuCards>div.cards');
const cardsTea=document.querySelectorAll('div.menuCardsTea>div.cards');
const cardsDesserts=document.querySelectorAll('div.menuCardsDessets>div.cards');


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




//page menu tab
coffeeTab.addEventListener('click', function (e) {
  if(coffeeTab.classList=='activeTab'){}
  else{
    teaTab.classList.remove('activeTab');
    dessertTab.classList.remove('activeTab');
    coffeeTab.classList.add('activeTab');

    menuCards.classList.remove('displaynone');
    menuCardsTea.classList.add('displaynone');
    menuCardsDessets.classList.add('displaynone');
  }
})

teaTab.addEventListener('click', function (e) {
  // console.log(coffeeTab.classList=='activeTab');
  if(teaTab.classList=='activeTab'){}
  else{
    teaTab.classList.add('activeTab');
    dessertTab.classList.remove('activeTab');
    coffeeTab.classList.remove('activeTab');

    menuCards.classList.add('displaynone');
    menuCardsTea.classList.remove('displaynone');
    menuCardsDessets.classList.add('displaynone');
  }
})

dessertTab.addEventListener('click', function (e) {
  // console.log(dessertTab.classList=='activeTab');
  if(teaTab.classList=='activeTab'){}
  else{
    teaTab.classList.remove('activeTab');
    dessertTab.classList.add('activeTab');
    coffeeTab.classList.remove('activeTab');

    menuCards.classList.add('displaynone');
    menuCardsTea.classList.add('displaynone');
    menuCardsDessets.classList.remove('displaynone');
  }
})

refresh.addEventListener('click', function (e) {
console.log (dessertTab.classList=='dessertTab activeTab');
  if(coffeeTab.classList=='coffeeTab activeTab'){
    cards.forEach(e=>{
      e.classList.value='cards';
      refresh.classList.add('displaynone');
    
      }
    )
  }
  // cards.classList.remove('off');
  else if(teaTab.classList=='teaTab activeTab'){
    cardsTea.forEach(e=>{
      e.classList.value='cards';
      refresh.classList.add('displaynone');
    
      }
    )
  }

  else if(dessertTab.classList=='dessertTab activeTab'){
    cardsDesserts.forEach(e=>{
      e.classList.value='cards';
      refresh.classList.add('displaynone');
    
      }
    )
  }
})