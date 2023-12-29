function redirectToAnotherPage() {
    window.location.href ="makeup.html";
}
document.addEventListener("DOMContentLoaded", function() {
    var startButton = document.getElementById("startButton");
    startButton.addEventListener("click", redirectToAnotherPage);
});




function getRandomPosition(windowDimension, imgDimension){
    return Math.floor(Math.random() * (windowDimension - imgDimension))

}

function getRandomRotation() {
    return Math.floor(Math.random() * 360); 
}

function getDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function isTooClose(x, y, existingImages, minDistance) {
    for (var i = 0; i < existingImages.length; i++) {
        var existingImage = existingImages[i];
        var imgRect = existingImage.getBoundingClientRect();
        var distance = getDistance(x, y, imgRect.x, imgRect.y);

        if (distance < minDistance) {
            return true;
        }
    }
    return false;
}

window.onload = function(){
    var numimages = 14;
    var existingImages = [];
    var minDistance = 200; 

    for (var i = 0; i < numimages; i++) {
        var img = document.createElement('img');
        img.src = 'straw.png'; 
        img.alt = 'Random Image';
        img.className = 'random-image';

        var windowHeight = window.innerHeight;
        var windowWidth = window.innerWidth;
        var imgHeight = 90; 
        var imgWidth = 90; 

        var randomX, randomY;

        do {
            randomX = getRandomPosition(windowWidth, imgWidth);
            randomY = getRandomPosition(windowHeight, imgHeight);
        } while (isTooClose(randomX, randomY, existingImages, minDistance));

        var randomRotation = getRandomRotation();

        img.style.top = randomY + 'px';
        img.style.left = randomX + 'px';
        img.style.width = imgWidth + 'px'; 
        img.style.height = imgHeight + 'px'; 
        img.style.transform = 'rotate(' + randomRotation + 'deg)';

        document.body.appendChild(img);
        existingImages.push(img)
    }
};

