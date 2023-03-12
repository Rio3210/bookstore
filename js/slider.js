var img = document.getElementById('img');

var slides=['./assets/emil-widlund-xrbbXIXAWY0-unsplash.jpg','./assets/book.png', './assets/cover.jpg','./assets/cover2.jpg','./assets/cover3.png', './assets/book.webp', './assets/Bb.jpg','./assets/logo.jpg'];

var Start=0;

function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    // console.log(img);
    img.innerHTML = "<img src="+slides[Start-1]+">";
   
}
setInterval(slider,3000);