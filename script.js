let conteiner = document.createElement('div')
document.querySelector('body').appendChild(conteiner)
conteiner.className = 'background'


let checkpoints = [
  {left: '177px', bottom: '90px'},
  {left: '345px', bottom: '250px'},
  {left: '590px', bottom: '350px'},
  {left: '850px', bottom: '185px'},
  {left: '1030px', bottom: '372px'},
  
];


let score = document.createElement('div')
conteiner.appendChild(score)
score.className = 'score'
score.innerText = 'ты начал свое восхождение '


let flag = document.createElement('img')
conteiner.appendChild(flag)
flag.className = 'flag'
flag.src = "img/win.gif"


let mountain = document.createElement('img')
conteiner.appendChild(mountain)
mountain.className = 'mountain'
mountain.src = "img/mountains.png" 


let climber = document.createElement('img')
conteiner.appendChild(climber)
climber.className = 'alphin'
climber.src = "img/climber.png"


let checkpoint = document.createElement('div')
conteiner.appendChild(checkpoint)
checkpoint.className = 'chekpoint'
checkpoint.id = 'c-0'


let checkpoint1 = document.createElement('div')
conteiner.appendChild(checkpoint1)
checkpoint1.className = 'chekpoint'
checkpoint1.id ='c-1'


let checkpoint2 = document.createElement('div')
conteiner.appendChild(checkpoint2)
checkpoint2.className = 'chekpoint'
checkpoint2.id ='c-2'


let checkpoint3 = document.createElement('div')
conteiner.appendChild(checkpoint3)
checkpoint3.className = 'chekpoint'
checkpoint3.id ='c-3'


let checkpoint4 = document.createElement('div')
conteiner.appendChild(checkpoint4)
checkpoint4.className = 'chekpoint'
checkpoint4.id ='c-4'

let counter = 0;
let maxCount = (checkpoints.length - 1) * 100;
const counterUp = () => {
  if (counter < maxCount) {
    return counter += 100;
  } else {
    return counter;
  }
};

const counterDown = () => {
  if (counter > 0) {
    return counter -= 100;
  } else {
    return counter;
  }
};




const win = () => {
  if (counter === maxCount) {
    flag.style.visibility = 'visible';
    score.innerText = 'ты на вершине'
  }if (counter === 100) {
    flag.style.visibility = 'hidden';
    score.innerText = 'продолжай в том же духе'
    flag.style.visibility = 'hidden';
  } if (counter === 200) {
    flag.style.visibility = 'hidden';
    score.innerText = 'ты на полпути'
  } if (counter === 300) {
    flag.style.visibility = 'hidden';
    score.innerText = 'ещё чуть-чуть'
  } if (counter === 0) {
    flag.style.visibility = 'hidden';
    score.innerText = 'ты начал свое восхождение'
    
    
  }

  
}

document.querySelector('html').addEventListener('keydown', (char) => {
  if (char.key === 'x' ||  char.key === 'ч') {
    counterUp ()
    climber.style.left = checkpoints[counter/100].left 
    climber.style.bottom = checkpoints[counter/100].bottom
    win ()
  } else if (char.key === 'z' || char.key === 'я') {
    counterDown ()
    climber.style.left = checkpoints[counter/100].left 
    climber.style.bottom = checkpoints[counter/100].bottom
    win ()
  


  }
})





  

