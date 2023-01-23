// let mangoes = [];
// let cotton = [];
// let cotton_model = {
//   weight: "./cotton_model/model.weights.bin",
//   metadata: "./cotton_model/model_meta.json",
//   model: "./cotton_model/model.json",
// };
// // format zeros
// function formatZeros(item) {
//   return item.toString().padStart(3, "0");
// }
// // preload stuffs
// function preload() {
//   for (let i = 1; i < 20; i++) {
//     cotton[i] = loadImage(`/cotton/cotton${i} _small.jpg`);
//   }
// }

// console.log(cotton);
// // setup canvas
// function setup() {
//   createCanvas(800, 800);
//   background(250,0, 200);
//   const options = {
//     inputs: [128, 128, 4],
//     task: "imageClassification",
//     debug: true,
//   };
//   let iamgeClassifier = ml5.neuralNetwork(options);
//   for (let i = 1; i < cotton.length; i++) {
//     // console.log(cotton[i])
//     iamgeClassifier.addData({ image: cotton[i] }, { label: "Kapus" });
//   }
//   iamgeClassifier.normalizeData();
//   iamgeClassifier.train({ epochs: 10 }, finishedTraning);
// }

// function finishedTraning() {
//   console.log("finished traning ");
//   iamgeClassifier.save();
// }


let bacterial_blight = [];
let curl_virus = [];
let fussarium_wilt = [];
let healthy = [];

//console.log("index");
let cotton=[]
function preload() {
  for (let i = 1; i < 50; i++) {
    //117 is a number of images for training
    // let index = nf(i + 1, 4, 0);
    // let lbl1 = localStorage.getItem("lblcotton1");
    // let lbl2 = localStorage.getItem("lblcotton2");
    // let lbl3 = localStorage.getItem("lblcotton3");
    // let lbl4 = localStorage.getItem("lblcotton4");

    // bacterial_blight[i] = loadImage(
    //   `training/cotton/` + lbl1 + `/` + lbl1 + `-${index}.jpg`
    // );
    // curl_virus[i] = loadImage(
    //   `training/cotton/` + lbl2 + `/` + lbl2 + `-${index}.jpg`
    // );
    // fussarium_wilt[i] = loadImage(
    //   `training/cotton/` + lbl3 + `/` + lbl3 + `-${index}.jpg`
    // );
    cotton[i] = loadImage(
      `cotton/cotton${i} _small.jpg`
    );
  }
}

let imgClassifier; //shapeClassifier

function setup() {
  createCanvas(400, 400);
  let customlayers = [
    {
      type: "conv2d",
      filters: 8,
      kernelSize: 5,
      strides: 1,
      activation: "relu",
      kernelInitializer: "varianceScaling",
    },
    {
      type: "maxPooling2d",
      poolSize: [2, 2],
      strides: [2, 2],
    },
    {
      type: "flatten",
    },
    {
      type: "dense",
      kernelInitializer: "varianceScaling",
      activation: "softmax",
    },
  ];

  let options = {
    inputs: [64, 64, 4],
    task: "imageClassification",
    layers: customlayers,
    debug: true,
  };
  // //console.log(options.inputs);
  imgClassifier = ml5.neuralNetwork(options);
  // //console.log(imgClassifier);
  //bacterial_blight curl_virus fussarium_wilt healthy
  for (let i = 0; i < cotton.length; i++) {
    imgClassifier.addData(
      { image: cotton[i] },
      { label: "Kapus" }
    );
  }

  imgClassifier.normalizeData();
  imgClassifier.train({ epochs: 50 }, finishedTraining);

  //80epoch 43
  //200epoch
}

function finishedTraining() {
  console.log("finished training!");
  imgClassifier.save();
}