buttonToff = document.querySelector('#timeoff');
buttonTclock = document.querySelector('#timeclock');
buttonTword = document.querySelector('#timeword');
buttonTout = document.querySelector('#timeout');

pageTimeOff = document.querySelector('.pagetimeoff');
pageTimeWord = document.querySelector('.pagetimeword');
pageTimeClock = document.querySelector('.pagetimeclock');
pageTimeOut = document.querySelector('.pagetimeout');

clickBar = 'off';
arPages = [pageTimeClock,pageTimeWord,pageTimeOff,pageTimeOut];
arButt = [buttonTclock,buttonTword,buttonToff,buttonTout];





buttonToff.addEventListener('click', function(){
  page('off');
})

buttonTclock.addEventListener('click', function(){
  page('clock');
})

buttonTword.addEventListener('click', function(){
  page('word');
})

buttonTout.addEventListener('click', function(){
  page('out');
})

function page(clickBar){
  for (var t = 0; t < arPages.length; t++) {
    arPages[t].style.display ='none';
    arButt[t].style.borderBottom = 'none';
  }
  if (clickBar == 'off') {
    pageTimeOff.style.display = 'block';
    buttonToff.style.borderBottom = '2px solid black';
  } else if (clickBar == 'out') {
    pageTimeOut.style.display = 'block';
    buttonTout.style.borderBottom = '2px solid black';
  } else if (clickBar == 'word') {
    pageTimeWord.style.display = 'block';
    buttonTword.style.borderBottom = '2px solid black';
  } else if (clickBar == 'clock') {
    pageTimeClock.style.display = 'block';
    buttonTclock.style.borderBottom = '2px solid black';
  }
}