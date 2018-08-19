const { Node } = require('./Node');
const { State } = require('./State');
const { Graph } = require('./Graph');

console.log("Missionaries and Cannibals problem");

let stateTree = new Graph();

let firstState = new Node( new State(3,3,0,0,true) );
let objetiveState = new Node( new State(0,3,3,0,true) );

stateTree.start = firstState;
stateTree.addNode(firstState);

stateTree.end = objetiveState;

stateTree.bfs();