'use strict'

const Graph = require("graph-data-structure")

const initialState = 'CCCMMM<'
const objectiveState = 'CCC<MMM'

function moveBoat(state, passengers){
    let side = state.indexOf('<') !== -1 ? '<' : '>'
    const arrayPassengers = passengers
        .split('')
    let left = state
        .split(side)[0]
    let right = state
        .split(side)[1]
    
    if(side === '<'){
        arrayPassengers.forEach(p => {
            left = left.replace(p,'')
            right = right.concat(p)
        })
        side = '>'
    }else{
        arrayPassengers.forEach(p => {
            left = left.concat(p)
            right = right.replace(p,'')
        })
        side = '<'
    }

    left = left.split('').sort().join('')
    right = right.split('').sort().join('')

    return left + side + right
}

function isValidState(state){
    const side = state.indexOf('<') !== -1 ? '<' : '>'
    const left = state.split(side)[0].split('')
    const right = state.split(side)[1].split('')
    const qtdMissionary = left.filter(p => p === 'M').length + right.filter(p => p === 'M').length
    const qtdCannibal = left.filter(p => p === 'C').length + right.filter(p => p === 'C').length
    const qtdTotal = qtdMissionary + qtdCannibal
    
    return (qtdTotal === 6) && (qtdCannibal === 3) && (qtdMissionary === 3)
}

function isEndGame(state){
    const side = state.indexOf('<') !== -1 ? '<' : '>'
    const left = state.split(side)[0].split('')
    const right = state.split(side)[1].split('')
    const qtdMissionaryLeft = left.filter(p => p === 'M').length
    const qtdMissionaryRight = right.filter(p => p === 'M').length
    const qtdCannibalLeft = left.filter(p => p === 'C').length
    const qtdCannibalRight = right.filter(p => p === 'C').length

    return ((qtdMissionaryLeft !== 0) && (qtdMissionaryLeft < qtdCannibalLeft)) ||
        ((qtdMissionaryRight !== 0) && (qtdMissionaryRight < qtdCannibalRight))
}

function expandGraph(state, graph){
    const possibilites = ['CC', 'MM', 'CM','C', 'M']

    possibilites.forEach(p => {
        let auxState = moveBoat(state, p)
        if(isValidState(auxState) && !isEndGame(auxState)){
            graph.addEdge(state, auxState)
        }
    })
}

function breadthFirstSearch(initial, final){
    let current

    let graph = Graph()
        .addNode(initial)

    let queue = []
    queue.push(initial)

    let cameFrom = {}
    cameFrom[initial] = null

    while(queue.length){
        current = queue.shift()
        if(current === final){
            break
        }
        expandGraph(current, graph)
        let edges = graph.adjacent(current)
        edges.forEach(edge => {
            if(!cameFrom.hasOwnProperty(edge)){
                queue.push(edge)
                cameFrom[edge] = current
            }
        })
    }

    current = final;
    let path = [];
    while ( current != initial ) {
        path.push(current);
        current = cameFrom[current];
    }
    path.push(initial);
    path.reverse();
    return path;
}

console.log('Missionaries and Cannibals problem')
console.log(initialState + " -> " + objectiveState)
console.log(breadthFirstSearch(initialState, objectiveState))



