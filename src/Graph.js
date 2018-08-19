const { Node } = require('./Node');

class Graph {
    constructor() {
        this.nodes = [];
        this.start = null;
        this.end = null;
    }
    addNode(node) {
        this.nodes.push(node);
    }
    reset() {
        for (let i = 0; i < this.nodes.length; i++) {
            this.nodes[i].searched = false;
            this.nodes[i].parent = null;
        }
    }
    generateChilds(currentNode) {
        let auxState = Object.assign(Object.create(currentNode.state), currentNode.state);
        if ((auxState.transition(2, 0)) && !(auxState.isEndGame())) {
            let n = new Node(auxState);
            this.addNode(n);
            currentNode.addEdge(n);
        }
        auxState = Object.assign(Object.create(currentNode.state), currentNode.state);
        if ((auxState.transition(0, 2)) && !(auxState.isEndGame())) {
            let n = new Node(auxState);
            this.addNode(n);
            currentNode.addEdge(n);
        }
        auxState = Object.assign(Object.create(currentNode.state), currentNode.state);
        if ((auxState.transition(1, 1)) && !(auxState.isEndGame())) {
            let n = new Node(auxState);
            this.addNode(n);
            currentNode.addEdge(n);
        }
        auxState = Object.assign(Object.create(currentNode.state), currentNode.state);
        if ((auxState.transition(1, 0)) && !(auxState.isEndGame())) {
            let n = new Node(auxState);
            this.addNode(n);
            currentNode.addEdge(n);
        }
        auxState = Object.assign(Object.create(currentNode.state), currentNode.state);
        if ((auxState.transition(0, 1)) && !(auxState.isEndGame())) {
            let n = new Node(auxState);
            this.addNode(n);
            currentNode.addEdge(n);
        }
    }
    bfs() {
        this.reset();
        let queue = [];
        let nodeIsFound = false;
        this.start.searched = true;
        queue.push(this.start);
        while (queue.length > 0) {
            let current = queue.shift();
            if (current.state.isEqual(this.end.state)) {
                this.end = Object.assign(Object.create(current), current);
                nodeIsFound = true;
                break;
            }
            this.generateChilds(current);
            let edges = current.edges;
            for (let i = 0; i < edges.length; i++) {
                let neighbor = edges[i];
                if (!neighbor.searched) {
                    neighbor.searched = true;
                    neighbor.parent = current;
                    queue.push(neighbor);
                }
            }
        }
        if (nodeIsFound) {
            let path = [];
            path.push(this.end);
            let next = this.end.parent;
            do {
                path.push(next);
                next = next.parent;
            } while (next != null);

            for(let i=(path.length-1), j=0;i>=0;i--,j++) {
                console.log("State " + j +
                    ": {mL:" + path[i].state.missionaryLeft +
                    ",cL:" + path[i].state.cannibalLeft +
                    ",mR:" + path[i].state.missionaryRight +
                    ",cR:" + path[i].state.cannibalRight +
                    "}");
            }
            // console.log(path);
        }
        else {
            console.log("Solution not found");
        }
    }
}

exports.Graph = Graph;