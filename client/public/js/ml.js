let img;
let detector;

function preload() {
  img = loadImage("/client/public/person.webp");
  detector = ml5.objectDetector("cocossd");
}

function gotDetections(error, results) {
  error && console.log(error);
  const counted = results.reduce((acc, curr) => {
    let label = curr.label;
    if (acc[label]) {
      acc[label] = acc[label] + 1;
      return acc;
    }
    acc[label] = 1;
    return acc;
  }, {});
  console.log(counted);
  for (let detection of results) {
    console.log(detection);
    stroke(200, 0, 0);
    strokeWeight(2);
    noFill();
    rect(detection.x, detection.y, detection.width, detection.height);
    noStroke();
    fill(0, 255, 0);
    textSize(20);
    text(detection.label, detection.x + 10, detection.y + 20);
    text(
      Math.round(detection.confidence * 100) + "%",
      detection.x + 10,
      detection.y + 40
    );
  }
}

function setup() {
  createCanvas(800, 800);
  detector.detect(img, gotDetections);
  image(img, 0, 0);
}
