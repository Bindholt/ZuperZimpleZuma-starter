import * as model from "./model.js";
import * as view from "./view.js";

window.addEventListener("load", init);

function init() {
  console.log("Controller init");
  model.init();
  view.init();

  createInitialChain();
  view.updateDisplay(model);
  // show debug info on the model
  model.dump();
  
  // store "shortcuts" to model and view in window
  window.model = model;
  window.view = view;
}

function createInitialChain() {
  for (let i = 0; i < 5; i++) {
    model.addRandomBall();
  }
}

// TODO: Add controller functions to handle things happening in the view
function addRandomBall() {
  const newBall = model.addRandomBall();
  view.updateDisplay(model);
  view.animateNewBall(model, newBall);
}

function insertBallAfter(ball) {
  const newBall = model.getCannonBall();
  const insertedBall = model.insertBallAfter(newBall, ball);
  model.loadCannon();
  view.updateDisplay(model);
  view.animateCannonBall(model, insertedBall);
}

// **** ANIMATIONS ****

export function removeMatches(ball) {
  const matches = model.findMatches(ball);
  if (matches.length < 3) return;
  view.animateRemoveBalls(model, matches);
}

export function removeBalls(balls) {
  model.removeMatches(balls);
}


export {addRandomBall, insertBallAfter};