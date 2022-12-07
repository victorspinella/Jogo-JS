const mario = document.querySelector('.mario');/* pega class css */
const pipe = document.querySelector('.pipe');
  
/* função para fazer pular, adicionando class jump no mario*/
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');            

    },500)
}


const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); /* pega o style computado(altura de quando pula) */

    console.log(marioPosition);
    /* quando o jogo acaba */
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) { /* intervalo do pulo */

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;/* pega a posição computada em cima */

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/doh.png'; /* imagem que é mostrada quando perde */
        mario.style.width = '110px';
        mario.style.left = '10px';

        clearInterval(loop);/* para o jogo */
    }

} ,10)

/* event para fazer pular */
document.addEventListener('keydown', jump);