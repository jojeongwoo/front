const slideList = document.querySelector(".slide-list");
const slideContents = document.querySelectorAll(".slide-content");
const slideBtnNext = document.querySelector(".btn-next");
const slideBtnPrev = document.querySelector(".btn-prev");
const pagination = document.querySelector(".slide-pagination");
const slideLen = slideContents.length;
const slideWidth = 1536;
const slideSpeed = 300;
const startNum = 0;

slideList.style.width = slideWidth * (slideLen + 2) + "px";

let firstChild = slideList.firstElementChild;
let lastChild = slideList.lastElementChild;
let clonedFirst = firstChild.cloneNode(true);
let clonedLast = lastChild.cloneNode(true);

slideList.appendChild(clonedFirst);
slideList.insertBefore(clonedLast, slideList.firstElementChild);

slideList.style.transform = "translate3d(-" + (slideWidth * (startNum + 1)) + "px, 0px, 0px)";


let curIndex = startNum;
let curSlide = slideContents[curIndex];
curSlide.classList.add("slide_active");

slideBtnNext.addEventListener("click", next);

function next(){
    if(curIndex <= slideLen - 1){
        slideList.style.transition = slideSpeed + "ms";
        slideList.style.transform = "translate3d(-" + (slideWidth * (curIndex + 2)) + "px, 0px, 0px)";
    }
    if(curIndex === slideLen - 1){
        setTimeout(function(){
            slideList.style.transition = "0ms";
            slideList.style.transform = "translate3d(-" + slideWidth  + "px, 0px, 0px)";
        }, slideSpeed);
        curIndex = -1;
    }
    curSlide.classList.remove("slide_active");
    curSlide = slideContents[++curIndex];
    curSlide.classList.add("slide_active");
};

slideBtnPrev.addEventListener("click", prev);

function prev(){
    if(curIndex >= 0){
        slideList.style.transition = slideSpeed + "ms";
        slideList.style.transform = "translate3d(-" + (slideWidth * curIndex) + "px, 0px ,0px)";
    }
    
    if(curIndex === 0){
        setTimeout(function(){
            slideList.style.transition = "0ms";
            slideList.style.transform = "tranlate3d(-" + (slideWidth * slideLen) + "px, 0px, 0px)";
        }, slideSpeed);
        curIndex = slideLen;
    }
    curSlide.classList.remove("slide_active");
    curSlide = slideContents[--curIndex];
    curSlide.classList.add("slide_active");
}

function init(){
    next();
    prev();
}

init();