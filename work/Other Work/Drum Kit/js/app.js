 // whenever we press any of those keys that we have chosen will play the sound (A,S,D,F,G,H,J,K,L,)
 window.addEventListener('keydown' , playSound);
function playSound (e){

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(!audio) return; // Stop the function from running all together
    // let's ad that transition for this player
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    key.classList.add('playing')

    audio.currentTime = 0;
    // i was pressing the keys a lot. but, it deson't function like the first player. whenever we press the key to play the sound we should wait until the sound finish, but here is the solution
    audio.play() 
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing')
}