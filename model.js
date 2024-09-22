import SimpleLinkedList from "./simplelinkedlist.js";

const list = new SimpleLinkedList();

function init() {
  console.log("Model init");
  loadCannon();
}

function dump() {
  let node = list.head;
  let output = "";
  while(node != null) {
    output += '"' + node.data + node.id +'"';
    output += " -> ";
   
    node = node.next;
  }
  output += "null";
  console.log(output);
}

// **** WRAPPERS ****
function getFirstBall() {
  return list.head;
}

function getNextBall(ball) {
  if(!ball) return null;
  return ball.next;
}

function getPreviousBall(ball) {
  if(!ball) return null;
  return ball.prev;
}

function addRandomBall() {
  return list.add(randomBall());
}

function addBall(ball) {
  let newNode = null;
  if(!!ball) newNode = list.add(ball);
  return newNode;
}
  
function insertBallAfter(ball, node) {
  let newNode = null;
  if(!!ball) newNode = list.insertAfter(ball, node);
  return newNode;
}

function insertBallBefore(ball, node) {
  let newNode = null;
  if(!!ball) newNode = list.insertBefore(ball, node);
  return newNode;
}

function numberOfBalls() {
  return list.size();
}

function removeBall(node) {
  list.remove(node);
}

// **** CANNON ****
let cannonBall;

function loadCannon() {
  cannonBall = randomBall();
}

function getCannonBall() {
  return cannonBall;
}

// **** MATCHES ****
function findMatches(node) { 
  if(!node) return [];
  const matches = [];
  let current = node;

  while(!!current.prev && current.prev.data === node.data) {
    matches.push(current.prev);
    current = current.prev;
  }

  matches.push(node);

  current = node;
  while(!!current.next && current.next.data === node.data) {
    matches.push(current.next);
    current = current.next;
  }

  return matches;
}

function removeMatches(matches) {
  if (matches.length < 3) return;
  matches.forEach((match) => removeBall(match));
}


// **** BALLS ****

const balls = ["🔴", "🔵","🟡","🟢"];

function randomBall() {
  return balls[Math.floor(Math.random()*balls.length)];
}

function red() {
  return balls[0];
}

function blue() {
  return balls[1];
}

function yellow() {
  return balls[2];
}

function green() {
  return balls[3];
}


export { init, dump, addRandomBall, addBall, insertBallAfter, insertBallBefore, findMatches, removeMatches, removeBall, numberOfBalls, loadCannon, getCannonBall, randomBall, red, blue, yellow, green, getFirstBall, getNextBall, getPreviousBall }; 