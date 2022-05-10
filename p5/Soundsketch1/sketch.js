let hand;

let sliderVolume;
let sliderPan;
let sliderRate;

function setup() {
  createCanvas(200, 200);
  hand = loadSound("hand.mp3", loaded);

  sliderVolume = createSlider(0, 5, 2, 0.01);
  sliderPan = createSlider(-1, 1, 0, 0.01);
  sliderRate = createSlider(0, 2, 1, 0.01);
}

function loaded() {
  hand.loop();
}

function draw() {
  background(0);
  hand.setVolume(sliderVolume.value());
  hand.pan(sliderPan.value());
  hand.rate(sliderRate.value());

  if (key == "s") {
    hand.stop();
  }
}
