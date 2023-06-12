

buttonToff = document.querySelector('#timeoff');
buttonTclock = document.querySelector('#timeclock');
buttonTword = document.querySelector('#timeword');
buttonTout = document.querySelector('#timeout');

pageTimeOff = document.querySelector('.pagetimeoff');







buttonToff.addEventListener('click', function(){
  
  pageTimeOff.style.display = 'block';
  buttonToff.style.borderBottom = '2px solid black';
  buttonTout.style.border = 'none';
  buttonTword.style.border = 'none';
  buttonTclock.style.border = 'none';
})

buttonTclock.addEventListener('click', function(){
  
  pageTimeOff.style.display = 'none';
  buttonTclock.style.borderBottom = '2px solid black';
  buttonTout.style.border = 'none';
  buttonTword.style.border = 'none';
  buttonToff.style.border = 'none';
})

buttonTword.addEventListener('click', function(){
  
  pageTimeOff.style.display = 'none';
  buttonTword.style.borderBottom = '2px solid black';
  buttonTout.style.border = 'none';
  buttonToff.style.border = 'none';
  buttonTclock.style.border = 'none';
})

buttonTout.addEventListener('click', function(){
  
  pageTimeOff.style.display = 'none';
  buttonTout.style.borderBottom = '2px solid black';
  buttonToff.style.border = 'none';
  buttonTword.style.border = 'none';
  buttonTclock.style.border = 'none';
})