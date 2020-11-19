const range__slider = document.querySelector('.range__slider');
const rangeLeft = document.querySelector('.range__left');
const rangeRight = document.querySelector('.range__right');


const rangeLeftX = rangeLeft.getBoundingClientRect().x
const rangeRightX = rangeRight.getBoundingClientRect().x
let currentLeft = rangeLeftX;
let currentRight = rangeRightX;

// этот для левой
const mousemoveHandler = (e) =>{
    
    if( (e.x > rangeLeftX) && (e.x < currentRight ) ){
        console.log('here');
        let w = getComputedStyle(rangeLeft).getPropertyValue('--circle-width');
        w = parseInt(w);
        let offSet = e.x - rangeLeftX - w/2;
        rangeLeft.style.left = `${offSet}px`;
    }
}


const clickHandler = (e) =>{
    rangeLeft.addEventListener('mousemove', mousemoveHandler);
    rangeLeft.addEventListener('mouseup', 
            () => rangeLeft.removeEventListener('mousemove', mousemoveHandler));
}
rangeLeft.addEventListener('mousedown', clickHandler )

// MOUSELEAVE

// и черную линию обработать