function setup() {
  createCanvas(windowWidth, windowHeight);
  background(229, 228, 240); // 设置背景颜色
  
  // 根据浏览器窗口大小重新计算位置
  let yPosArray = calculatePositions([10, 50, 120, 150, 220, 250, 280, 340, 440], windowHeight);
  let xPosArray = calculatePositions([10, 30, 70, 140, 300, 330, 420, 440, 480, 500], windowWidth);
  
  horizontalStreets(yPosArray);
  verticalStreets(xPosArray);
  
  // 创建紫色方块
  createBlock(windowWidth * 0.1, windowHeight * 0.16, windowWidth * 0.06, windowHeight * 0.06, color(150, 150, 220));
  createBlock(windowWidth * 0.1, windowHeight * 0.7, windowWidth * 0.08, windowHeight * 0.08, color(150, 150, 220));
  createBlock(windowWidth * 0.32, windowHeight * 0.52, windowWidth * 0.06, windowHeight * 0.1, color(150, 150, 220));
  createBlock(windowWidth * 0.76, windowHeight * 0.32, windowWidth * 0.1, windowHeight * 0.2, color(150, 150, 220));
  createBlock(windowWidth * 0.82, windowHeight * 0.7, windowWidth * 0.08, windowHeight * 0.08, color(150, 150, 220));
  
  // 创建红色方块
  createBlock(windowWidth * 0.16, windowHeight * 0.04, windowWidth * 0.04, windowHeight * 0.18, color(255, 70, 70));
  createBlock(windowWidth * 0.26, windowHeight * 0.04, windowWidth * 0.08, windowHeight * 0.12, color(255, 70, 70));
  createBlock(windowWidth * 0.16, windowHeight * 0.54, windowWidth * 0.12, windowHeight * 0.08, color(2255, 70, 70));
  createBlock(windowWidth * 0.58, windowHeight * 0.4, windowWidth * 0.12, windowHeight * 0.1, color(255, 70, 70));
  createBlock(windowWidth * 0.68, windowHeight * 0.6, windowWidth * 0.1, windowHeight * 0.14, color(255, 70, 70));
  
  // 创建灰色方块
  createBlock(windowWidth * 0.28, windowHeight * 0.08, windowWidth * 0.06, windowHeight * 0.06, color(169));
  createBlock(windowWidth * 0.46, windowHeight * 0.22, windowWidth * 0.1, windowHeight * 0.14, color(169));
  createBlock(windowWidth * 0.46, windowHeight * 0.74, windowWidth * 0.06, windowHeight * 0.1, color(169));
  createBlock(windowWidth * 0.74, windowHeight * 0.62, windowWidth * 0.08, windowHeight * 0.04, color(169));
  createBlock(windowWidth * 0.8, windowHeight * 0.04, windowWidth * 0.1, windowHeight * 0.06, color(169));
}

function calculatePositions(positionArray, canvasSize) {
  // 将原始位置按照新画布大小进行调整
  let adjustedPositions = [];
  for (let pos of positionArray) {
    adjustedPositions.push((pos / 500) * canvasSize);
  }
  return adjustedPositions;
}

function createBlock(x, y, w, h, c) {
  fill(c);
  rect(x, y, w, h);
}

function horizontalStreets(yPosArray) {
  for (let yPos of yPosArray) {
    for (let i = 0; i < width; i += 20) {
      let num = floor(random(101));
      let c = colourMap(num);
      createBlock(i, yPos, 20, 20, c);
    }
  }
}

function verticalStreets(xPosArray) {
  for (let xPos of xPosArray) {
    for (let i = 0; i < height; i += 20) {
      let num = floor(random(101));
      let c = colourMap(num);
      createBlock(xPos, i, 20, 20, c);
    }
  }
}

function colourMap(num) {
  if (num >= 0 && num <= 65) {
    return color(255, 255, 0); // green
  } else if (num >= 66 && num <= 80) {
    return color(0); // Black
  } else if (num >= 81 && num <= 85) {
    return color(255, 0, 0); // blue
  } else if (num >= 86 && num <= 100) {
    return color(255,0,255); // pink
  }else if (num >= 76 && num <= 100) {
    return color(255, 165, 0); // 橙色
      
  }
}

function windowResized() {
  // 处理浏览器窗口大小变化时的情况
  resizeCanvas(windowWidth, windowHeight);
  setup(); // 重新创建和绘制图形
}