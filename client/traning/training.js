let mangoes = [];
let cotton = [];
// format zeros
function formatZeros(item) {
  return item.toString().padStart(3, "0");
}
// preload stuffs
function preload() {
  for (let i = 1; i < 10; i++) {
    cotton[i] = loadImage(`/training-data/cotton${formatZeros(i)}.png`);
    mangoes[i] = loadImage(`/training-data/mango${formatZeros(i)}.png`);
  }
}

// setup canvas
function setup() {
  createCanvas(800, 800);
  background(255, 255, 200);

  const options = {
    inputs: [600, 400, 4],
    task: "imageClassification",
    debug: true,
  };
  let iamgeClassifier = ml5.neuralNetwork(options);
  for (let i = 1; i < mangoes.length; i++) {
    iamgeClassifier.addData({ image: mangoes[i] }, { label: "Aamba" });
    iamgeClassifier.addData({ image: cotton[i] }, { label: "Kapus" });
  }
  iamgeClassifier.normalizeData();
  iamgeClassifier.train({ epochs: 100 }, finishedTraning);
}

function finishedTraning() {
  console.log("finished traning ");
}
