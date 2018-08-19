class Node {
    constructor(state) {
        this.state = state;
        this.edges = [];
        this.searched = false;
        this.parent = null;
    }
    addEdge(neighbor) {
        this.edges.push(neighbor);
        neighbor.edges.push(this);
    }
}
exports.Node = Node;