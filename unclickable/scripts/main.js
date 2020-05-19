let myButton = document.querySelector('form');

function randomPosition(element) {
    const x = document.body.offsetHeight - element.offsetHeight;
    const y = document.body.offsetWidth - element.offsetWidth;
    const randX = Math.floor(Math.random() * x);
    const randY = Math.floor(Math.random() * y);
    return [randX, randY];
}

myButton.onmouseover = function () {
    const newXY = randomPosition(myButton);
    myButton.style.top = newXY[0] + 'px';
    myButton.style.left = newXY[1] + 'px';
}
