let timeMS = document.getElementById('timems'),
timeS = document.getElementById('times'),
timeMin = document.getElementById('timemin'),
per = document.getElementById('per'),
perbar = document.querySelector('.period'),
nos = document.querySelector('.sl'),

buttonST = document.getElementById('startTimer'),
buttonPT = document.getElementById('stopTimer'),
buttonRT = document.getElementById('resetTimer'),
buttonPR = document.getElementById('periodBu');
var isRan = false,
arTimer = [00,00,00],
arMath = [],
time = 0,
sec = 0,
min = 0,
i = 0;


buttonST.addEventListener('click', function(){
  if (!isRan) {
    isRan = true;
    buttonST.style.zIndex = '0';
    buttonPT.style.zIndex = '1';
    buttonRT.style.zIndex = '0';
    buttonPR.style.zIndex = '1';
    buttonPR.style.color = '#000'; 
    updateTimer();
    if (arTimer[2]) {
      updateTimerM();
    }
  }
});
buttonPT.addEventListener('click', function(){
  if (isRan) {
    isRan = false;
    buttonST.style.zIndex = '1';
    buttonPT.style.zIndex = '0';
    buttonRT.style.zIndex = '1';
    buttonPR.style.zIndex = '0';
    buttonST.textContent = 'استئناف';
    updateTimer();
  }
})
buttonRT.addEventListener('click', function(){
  isRan = 0;
  buttonST.textContent = 'ابدأ';
  buttonPR.style.zIndex = '1';
  buttonPR.style.color = '#797979';
  per.textContent = '';
  updateTimer();
})
buttonPR.addEventListener('click', function(){
  if (isRan == true) {
    col = `${topad(min)}:${topad(sec)}:${topad(time)}`;
    document.querySelector('.time').style.marginTop = '7.5%';
    document.querySelector('#buttons').style.marginTop = '23.5%';
    
    updateTimerM();
    
    arMath.push(arTimerP);
    
    lope(colc,col);
    
    perbar.style.display = 'flex';
    per.style.visibility = 'visible';
    
    arTimer = [min, sec, time];
  }
})

function topad(str) {
  str = Math.abs(str);
  ret = str.toString().padStart(2, "0");
  return ret;
}

function lope(x,y) {
  i++;
  divNan = document.createElement('div');
  wn = document.createElement('div');
  to = document.createElement('div');
  tr = document.createElement('div');
  wn.textContent = topad(i);
  to.textContent = x;
  tr.textContent = y;
  wn.classList.add('numb'+i);
  nos.insertBefore(divNan, nos.firstChild);
  divNan.appendChild(tr);
  divNan.appendChild(to);
  divNan.appendChild(wn);
  for (var j = 1; j < arMath.length; j++) {
    document.querySelector(`.numb${j}`).style.color = '#777777';
  }
  if (arMath[2]) {
    mini = mathmn(arMath)[0]+1;
    maxi = mathmn(arMath)[1]+1;
    document.querySelector(`.numb${mini}`).style.color = '#6163ED';
    document.querySelector(`.numb${maxi}`).style.color = '#D52742';
  }
}

function updateTimer() {
  timeMS.textContent = topad(time);
  timeS.textContent = topad(sec);
  timeMin.textContent = topad(min);
  if (isRan === true) {
    time++;
    if (time == '60') {
      sec++;
      time = 0;
      if (sec == '60') {
        min++;
        sec = 0;
      }
    }
    t = setTimeout(updateTimer, (1000 / 60))
  }else if (isRan === false) {
    return;
  }else if (isRan == 0) {
    time = 0;
    sec = 0;
    min = 0;
    i = 0;
    nos.innerHTML = '';
    perbar.style.display = 'none';
    per.style.visibility = 'hidden';
    document.querySelector('.time').style.marginTop = '31%';
    document.querySelector('#buttons').style.marginTop = '0';
    arTimer = [00,00,00];
    arMath = [];
    isRan = false;
    updateTimer();
  } 
}
function updateTimerM(){
  arTimerP = pac(time,sec,min)-pac(arTimer[2],arTimer[1],arTimer[0]);
  colc = cap(arTimerP);
  per.textContent = colc;
  if (isRan === true) {
    setTimeout(updateTimerM,(1000/60));
  }
}

function mathmn(arMath) {
  maxNu = Math.max(...arMath);
  minNu = Math.min(...arMath);
  maxIn = arMath.indexOf(maxNu);
  minIn = arMath.indexOf(minNu);
  return [minIn,maxIn];
}

function pac (ti,se,mi) {
  irpac = parseInt((3600*mi)+(60*se)+ti);
  return irpac;
  
  
  
  
  
  
  
  
}
function cap (irpac){
  minN = Math.floor(irpac / 3600);
  secN = Math.floor((irpac-(minN*3600))/60);
  timeN = (irpac-(minN*3600)-(secN*60));
  return `${topad(minN)}:${topad(secN)}:${topad(timeN)}`;
}


