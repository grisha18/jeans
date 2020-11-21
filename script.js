const range__slider = document.querySelector('.range__slider');
const rangeLeft = document.querySelector('.range__left');
const rangeRight = document.querySelector('.range__right');
const shopLineBlack = document.querySelector('.shop-line__black');
const priceSliderNumber =  document.querySelector('.price-slider__number');
const priceRangeNumber = document.querySelector('.price-range__number');



const rangeLeftX = rangeLeft.getBoundingClientRect().x;
const rangeRightX = rangeRight.getBoundingClientRect().x;

const length = rangeRightX - rangeLeftX;

const minLeft = 0;
const maxRight = 1000;
const diapazon = maxRight - minLeft;
priceSliderNumber.innerHTML = `$ ${minLeft}`;
priceRangeNumber.innerHTML = `$ ${maxRight}`;


let currentLeft = rangeLeftX;
let currentRight = rangeRightX;

// этот для левой
const mousemoveHandler = (e) =>{
    
    if( (e.x > rangeLeftX) && (e.x < currentRight ) ){
        console.log('here');
        let w = getComputedStyle(rangeLeft).getPropertyValue('--circle-width');
        w = parseInt(w);
        let offSet = e.x - rangeLeftX - w/2;
        currentLeft = rangeLeftX + offSet;
        
        
        rangeLeft.style.left = `${offSet}px`;
        shopLineBlack.style.left = `${offSet}px`
        const movedInPixel = (currentLeft - rangeLeftX) > 0 ? (currentLeft - rangeLeftX) : 0;
        
        const movedInPercent = movedInPixel * 100 / length;
        
        const Indollars = Math.round(( diapazon  / 100 ) * movedInPercent);
        priceSliderNumber.innerHTML = `$ ${minLeft+Indollars}`;
        
    }
}
const clickHandler = (e) =>{
    document.addEventListener('mousemove', mousemoveHandler);
    document.addEventListener('mouseup', 
            () => document.removeEventListener('mousemove', mousemoveHandler));
}
rangeLeft.addEventListener('mousedown', clickHandler )

// MOUSELEAVE

// и черную линию обработать

const mousemoveClick = (e) => {
    let w = getComputedStyle(rangeRight).getPropertyValue('--circle-width');
    w = parseInt(w);
    console.log(rangeRightX, e.x)   
    if( (e.x < (rangeRightX + w + 1)) && (e.x > (currentLeft + w)) ){
        console.log(rangeRightX, e.x)
        let offSet =  rangeRightX -e.x + w/2;
        rangeRight.style.right = `${offSet}px`;
        shopLineBlack.style.right = `${offSet}px`;
        currentRight = rangeRightX - offSet - w/2;
        const movedInPixel = (rangeRightX - currentRight) > 0 ? (rangeRightX - currentRight) : 0;
        
       const movedInPercent = movedInPixel * 100 / length;
    
        const Indollars = Math.round(( diapazon  / 100 ) * movedInPercent);
        priceRangeNumber.innerHTML = `$ ${maxRight-Indollars}`; 
    }
}
const click = (e) =>{
    document.addEventListener('mousemove', mousemoveClick);
    document.addEventListener('mouseup', 
            () => document.removeEventListener('mousemove', mousemoveClick));
}
rangeRight.addEventListener('mousedown', click)