const YESBTN = document.querySelector('#YESBTN');

YESBTN.addEventListener('click', function () { 
    alert('sabia q dirias que si <3, estoy esperando que me lo envies jsjs :3')

});

const NOBTN = document.querySelector('#NOBTN');

     NOBTN.addEventListener('mouseover', function () {
          const randomX = parseInt(Math.random()*100);
          const randomY = parseInt(Math.random()*100);
          NOBTN.style.setProperty('top', randomY+'%');
          NOBTN.style.setProperty('left', randomX+ '%');
          NOBTN.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
     }) 