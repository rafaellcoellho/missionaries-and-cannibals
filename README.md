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

Just install nodejs and npm and run:

```
$ npm i
$ npm run build
```

## Method

I used Breadth-first search to find the solution in the tree of possibilities.

<p align="center">
	<a href="">
		<img alt="bfs" src="./Animated_BFS.gif" width="200px">
	</a>
</p>

## Example

**C** = Cannibal

**M** = Missionary

**Arrow** = Side of the boat

Initial State: 

```javascript
const initialState = 'CCCMMM<'
```

Final State: 

```javascript
const objectiveState = 'CCC<MMM'
```

Output:
```
Missionaries and Cannibals problem
CCCMMM< -> CCC<MMM
[ 'CCCMMM<',
  'CMMM>CC',
  'CCMMM<C',
  'MMM>CCC',
  'CMMM<CC',
  'CM>CCMM',
  'CCMM<CM',
  'CC>CMMM',
  'CCC<MMM' ]
```
