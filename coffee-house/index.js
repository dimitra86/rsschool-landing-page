console.log('hello world');

const burger = document.querySelector('.burger');
const twoLine = document.querySelector('.twoLine');
const closeBurger = document.querySelector('.closeBurger');
const burgerMenuNav=document.querySelector('.burgerMenuNav')


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

  console.log(closeBurger.classList);
})