# Missionaries and Cannibals problem

This program solves the classic missionaries and cannibals problem. This is part of an exercise from computational intelligence class.

Problem: 

```
Three missionaries and three cannibals are on one side of a river. They all need to get to the 
other side of the river and the only method of doing so is by means of a two person rowing 
boat. Unfortunately, if there are ever more cannibals than missionaries in the same place, 
the missionaries will get eaten. How can they all get safely across the river?
```

## How to run

Just install nodejs and run:

```
$ node src/index.js
```

## Method

I used Breadth-first search to find the solution in the tree of possibilities.

<p align="center">
	<a href="">
		<img alt="bfs" src="./Animated_BFS.gif" width="200px">
	</a>
</p>

## Example

Initial State: 

```javascript
let firstState = new Node( new State(3,3,0,0,true) );
```

Final State: 

```javascript
let objetiveState = new Node( new State(0,3,3,0,true) );
```

Output:
```
Missionaries and Cannibals problem
State 0: {mL:3,cL:3,mR:0,cR:0}
State 1: {mL:3,cL:1,mR:0,cR:2}
State 2: {mL:3,cL:2,mR:0,cR:1}
State 3: {mL:3,cL:0,mR:0,cR:3}
State 4: {mL:3,cL:1,mR:0,cR:2}
State 5: {mL:1,cL:1,mR:2,cR:2}
State 6: {mL:2,cL:2,mR:1,cR:1}
State 7: {mL:0,cL:2,mR:3,cR:1}
State 8: {mL:0,cL:3,mR:3,cR:0}
```
