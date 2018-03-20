var i = 0;
var images = [];
var time = 3000;

images[0] = "images/single-loose-copy-paper.jpg";
images[1] = "images/single-stack-paper.jpg";
images[2] = "images/medium-copy-paper.jpg";
images[3] = "images/big-box-copy-paper.jpg";

function changeImg() {
    document.slide.src = images[i];
    if(i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;