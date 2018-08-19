class State {
    constructor(missionaryLeft, cannibalLeft, missionaryRight, cannibalRight, boatIsInTheLeft) {
        this.missionaryLeft = missionaryLeft;
        this.missionaryRight = missionaryRight;
        this.cannibalLeft = cannibalLeft;
        this.cannibalRight = cannibalRight;
        this.boatIsInTheLeft = boatIsInTheLeft;
    }
    transition(qtdMissionary, qtdCannibal) {
        let qtdToTransfer = qtdMissionary + qtdCannibal;
        if (qtdToTransfer > 2) {
            return false;
        }
        if (this.boatIsInTheLeft) {
            if ((this.missionaryLeft < qtdMissionary) || (this.cannibalLeft < qtdCannibal) || (qtdCannibal == 1 && qtdMissionary == 0) || (qtdMissionary == 1 && qtdMissionary == 0)) {
                return false;
            }
            this.missionaryLeft -= qtdMissionary;
            this.missionaryRight += qtdMissionary;
            this.cannibalLeft -= qtdCannibal;
            this.cannibalRight += qtdCannibal;
            this.boatIsInTheLeft = false;
        }
        else {
            if ((this.missionaryRight < qtdMissionary) || (this.cannibalRight < qtdCannibal)) {
                return false;
            }
            this.missionaryRight -= qtdMissionary;
            this.missionaryLeft += qtdMissionary;
            this.cannibalRight -= qtdCannibal;
            this.cannibalLeft += qtdCannibal;
            this.boatIsInTheLeft = true;
        }
        return true;
    }
    isEndGame() {
        return ((this.missionaryLeft != 0) && (this.missionaryLeft < this.cannibalLeft)) ||
            ((this.missionaryRight != 0) && (this.missionaryRight < this.cannibalRight));
    }
    isEqual(anotherState) {
        return (this.missionaryLeft == anotherState.missionaryLeft) &&
            (this.cannibalLeft == anotherState.cannibalLeft) &&
            (this.missionaryRight == anotherState.missionaryRight) &&
            (this.cannibalRight == anotherState.cannibalRight) &&
            (this.boatIsInTheLeft == anotherState.boatIsInTheLeft);
    }
}

exports.State = State;