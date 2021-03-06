const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 500;

let cw = canvas.width;
let ch = canvas.height;

let canvasX = 0;
let canvasY = 0;

let rectX = 0;
let rectY = ch / 2;

let rectSize = 50;
const rectSizeLeft = 50;
const rectSizeRight = 100;
let rectSpeed = 5;

let currentColors = randomColors();

function field() {

    ctx.fillStyle = '#ddd';
    ctx.fillRect(canvasX, canvasY, cw, ch);

    window.requestAnimationFrame(field);

}

function randomColors() {

    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return 'rgb(' + r + ',' + g + ',' + b + ')';

}


function rect() {

    if (rectX % 20 === 0) {
        currentColors = randomColors();
    }

    ctx.fillStyle = currentColors;

    ctx.fillRect(rectX, rectY, rectSize, rectSize);

    rectX += rectSpeed;

    if (rectX <= 0) {
        rectSize = rectSizeLeft
        rectSpeed = -rectSpeed;
    } else if (rectX + rectSizeRight >= cw) {
        rectSize = rectSizeRight;
        rectSpeed = -rectSpeed;
    }

    window.requestAnimationFrame(rect);
}


function animate() {
    field();
    rect();
}

window.requestAnimationFrame(animate);