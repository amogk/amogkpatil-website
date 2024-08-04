let duration = 250;

const greeting = document.getElementById('greeting');

let swapcount = 0;

function swap(){
    if (swapcount % 2 != 0) {
        greeting.src = 'images/title_alt.png';
    }
    else {
        greeting.src = 'images/title.png';
    }
    swapcount++;
}

window.onload = function () {
    setInterval(swap, duration);
};
