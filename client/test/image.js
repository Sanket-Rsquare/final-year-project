function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

// image classifier
const imageClassifier = ml5.imageClassifier("MobileNet", () =>
  console.log("model loaded!!!")
);

// p5
// let  mango = createImg("./mango.jpg", imageOnLoad);
// mango.hide();
function imageOnLoad() {
  // image(mango, 0, 0, height, weight);
}
