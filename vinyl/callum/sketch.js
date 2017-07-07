var mouseDown = false;
var folder = "finalTest1";
var folderNames = ["background", "song", "artist"];
var brushSizes = [700, 700, 700];
var currentFolder = 0;
var images = [];
var imagePixels = []
var currentPos = [];
var currentOffset = {"x" : 0, "y" : 0};

var nImages = 60;
var loadedImages = 0;
var totalImages = nImages * folderNames.length;
var areImagesLoaded = false;
for(i = 0; i < folderNames.length; i++) {
    images[i] = [];
    imagePixels[i] = [];
}

var currentLayer = 1;

var maskLayer = [];
var finalImage = [];
var resizedSize = 0;

var simpleBrush;
var simpleBrushAlpha;
var simpleBrushTest;

var lastMouseX = 0;
var lastMouseY = 0;

var resizeFactor = 1.5;

var refPoint = 0;
var refPointX = 0;
var refPointY = 0;


// function preload() {
//     for(i = 0; i < nImages; i++) {
//         for(j = 0; j < folderNames.length; j++) {
//             images[j][i] = loadImage(folder+'/'+folderNames[j]+'/image_'+nf(i, 5)+'.jpg');
//         }
//     }
// }

function setup() {
    //var myCanvas = createCanvas(windowHeight*0.9, windowHeight*0.9);
    var myCanvas = createCanvas(540, 540);
    background(255, 0, 0);

    resizedSize = width/resizeFactor;
    for(i = 0; i < nImages; i++) {
        for(j = 0; j < folderNames.length; j++) {
            (function(i, j) {
                images[j][i] = loadImage(folder+'/'+folderNames[j]+'/image_'+nf(i, 5)+'.jpg', function(img) {
                    // img.resize(resizedSize, resizedSize);
                    img.loadPixels();
                    imagePixels[j][i] = [];
                    for(k = 0; k < img.pixels.length; k++){
                        imagePixels[j][i][k] = img.pixels[k];
                    }

                    if(i == 0) {
                        currentPos[j] = {"x" : -brushSizes[j], "y" : -brushSizes[j]};

                        maskLayer[j] = createGraphics(resizedSize, resizedSize);
                        maskLayer[j].background(255);
                        maskLayer[j].imageMode(CENTER);


                        finalImage[j] = createImage(resizedSize, resizedSize);
                        finalImage[j].drawingContext.drawImage(images[j][0].canvas, 0, 0);
                        // finalImage[j].copy(images[j][0], 0, 0, resizedSize, resizedSize, 0, 0, resizedSize, resizedSize);

                        brushSizes[j] /= resizeFactor;
                        finalImage[j].loadPixels();
                        for(i = 0; i < finalImage[j].pixels.length;i += 4) {
                            if(i != finalImage[j].pixels.length && j != 0) {
                                var alpha = 255 - finalImage[j].pixels[i];
                                finalImage[j].pixels[i] = 255*(j%2);
                                finalImage[j].pixels[i+1] = 255*(j%2);
                                finalImage[j].pixels[i+2] = 255*(j%2);
                                finalImage[j].pixels[i+3] = alpha;
                            }
                        }
                        finalImage[j].updatePixels();
                    }

                    loadedImages++;
                    if(loadedImages == totalImages - 1) {
                        areImagesLoaded = true;
                        image(finalImage[0], 0, 0, width, height);
                        image(finalImage[1], 0, 0, width, height);
                        image(finalImage[2], 0, 0, width, height);
                        $("#cache").removeClass('active');
                    }
                });
            })(i, j);
        }
    }

    myCanvas.elt.classList.add('song');
    myCanvas.parent("directCanvas");
    myCanvas.imageSmoothingEnabled = false;
}

function draw() {
    if(areImagesLoaded) {
        if(mouseDown) {
            finalImage[currentLayer].copy(images[currentLayer][0], 0, 0, resizedSize, resizedSize, 0, 0, resizedSize, resizedSize);
            finalImage[currentLayer].loadPixels();

            currentPos[currentLayer].x += (mouseX - currentPos[currentLayer].x)/2;
            currentPos[currentLayer].y += (mouseY - currentPos[currentLayer].y)/2;

            var startX = currentPos[currentLayer].x/resizeFactor - brushSizes[currentLayer]/2;
            var startY = currentPos[currentLayer].y/resizeFactor - brushSizes[currentLayer]/2;
            var centerX = currentPos[currentLayer].x/resizeFactor;
            var centerY = currentPos[currentLayer].y/resizeFactor;
            for(i = 0; i < brushSizes[currentLayer]*brushSizes[currentLayer]; i++) {
                var currentX = floor(startX + i%brushSizes[currentLayer]);
                var currentY = floor(startY + floor(i/brushSizes[currentLayer]));
                if(currentX > 0 && currentY > 0 && currentX < resizedSize && currentY < resizedSize) {
                    var dist = sqrt(pow((currentX - centerX), 2) + pow((currentY - centerY), 2));
                    var refImageN = floor(constrain(map(dist, 0,  brushSizes[currentLayer]/2, nImages, 0), 0, nImages - 1));
                    var currentPixel = 4*(currentX + currentY*resizedSize);
                    finalImage[currentLayer].pixels[currentPixel] = imagePixels[currentLayer][refImageN][currentPixel];
                    finalImage[currentLayer].pixels[currentPixel+1] = imagePixels[currentLayer][refImageN][currentPixel+1];
                    finalImage[currentLayer].pixels[currentPixel+2] = imagePixels[currentLayer][refImageN][currentPixel+2];
                    finalImage[currentLayer].pixels[currentPixel+3] = imagePixels[currentLayer][refImageN][currentPixel+3];
                }
            }
            for(i = 0; i < finalImage[currentLayer].pixels.length;i += 4) {
                if(i != finalImage[currentLayer].pixels.length && currentLayer != 0) {
                    var alpha = 255 - finalImage[currentLayer].pixels[i];
                    finalImage[currentLayer].pixels[i] = 255*(currentLayer%2);
                    finalImage[currentLayer].pixels[i+1] = 255*(currentLayer%2);
                    finalImage[currentLayer].pixels[i+2] = 255*(currentLayer%2);
                    finalImage[currentLayer].pixels[i+3] = alpha;
                }
            }
            finalImage[currentLayer].updatePixels();
            background(255, 0, 0);
            image(finalImage[0], 0, 0, width, height);
            image(finalImage[2], 0, 0, width, height);
            image(finalImage[1], 0, 0, width, height);
        }
    }
}
function mousePressed() {
    if(mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        mouseDown = true;
    }
}
function mouseReleased() {
    mouseDown = false;
}
