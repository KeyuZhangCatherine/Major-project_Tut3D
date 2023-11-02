let noiseOffsetX = 0;
let noiseOffsetY = 1000;


function setup() {
createCanvas(windowWidth, windowHeight);
background(229, 228, 240); // 设置背景颜色
let yPosArray = [0, 10, 20, 35, 45, 80, 90];
let xPosArray = [0, 10, 15, 20, 35, 42, 85, 90, 100];


horizontalStreets(yPosArray);
verticalStreets(xPosArray);
// 创建紫色方块
createBlock(4, 7.5, 13, 13.5, color(150, 150, 220));
createBlock(97, 6, 7, 7.5, color(150, 150, 220));
createBlock(42, 58.5, 5, 9, color(150, 150, 220));
createBlock(34.5, 33, 5, 4.5, color(150, 150, 220));
// 创建红色方块
createBlock(7.5, 7.5, 1.5, 13.5, color(255, 70, 70));
createBlock(63, 52, 9, 8, color(255, 70, 70));
createBlock(16.5, 60, 18.5, 7.5, color(255, 70, 70));
createBlock(75, 6, 8, 21, color(255, 70, 70));


// 创建蓝色方块
createBlock(75, 12, 8, 1.5, color(50,50,220));
createBlock(34.5, 49.5, 9, 3, color(50,50,220));
// 创建灰色方块
createBlock(15, 4.5, 3, 3, color(169));
createBlock(25.5, 12, 6, 7, color(169));
createBlock(12, 37, 4.5, 5, color(169));
createBlock(40, 2, 5, 3, color(169));
createBlock(90, 33, 6, 9, color(169));
createBlock(40, 2, 5, 3, color(169));


// 创建灰色方块的中心
createBlock(16, 5.5, 1.5, 1.5, color(255,2,0));
createBlock(27, 13.5, 3.5, 3.5, color(255,255,0));
createBlock(13, 38, 2.5, 2.5, color(255,255,0));
createBlock(41.5, 3, 2.5, 1.5, color(255,255,0));
createBlock(91.5, 34.5, 3.5, 5.5, color(255,255,0));
}


function createBlock(x, y, w, h, c) {
let canvasWidth = width / 100;
let canvasHeight = height / 100;
let noiseFactor = map(noise(noiseOffsetX, noiseOffsetY), 0, 1, 0.8, 1.2);
let blockWidth = w * canvasWidth * noiseFactor;
let blockHeight = h * canvasHeight * noiseFactor;
fill(c);
rect(x * canvasWidth, y * canvasHeight, blockWidth, blockHeight);
}






function horizontalStreets(yPosArray) {
for (let yPos of yPosArray) {
for (let i = 0; i < 75; i++) {
let x = i * 1.5;
let num = floor(random(101));
let c = colourMap(num);
createBlock(x, yPos, 1.5, 1.5, c);
}
}
}


function verticalStreets(xPosArray) {
for (let xPos of xPosArray) {
for (let i = 0; i < 60; i++) {
let y = i * 1.5;
let num = floor(random(101));
let c = colourMap(num);
createBlock(xPos, y, 1.5, 1.5, c);
}
}
noiseOffsetY += 0.1; // 更新噪声的Y偏移以获得动态效果
}


function colourMap(num) {
if (num >= 0 && num <= 25) {
return color(220, 255, 220); // 绿色
} else if (num >= 26 && num <= 50) {
return color(50,50,220); // 蓝色
} else if (num >= 51 && num <= 75) {
return color(255, 0, 255); // 粉红色
} else if (num >= 76 && num <= 100) {
return color(255, 165, 0); // 橙色
} else {
return color(0); // 添加一个默认返回值，可以是任意颜色
}
}
