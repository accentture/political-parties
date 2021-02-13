import { MaxHeapMyxin } from './max-heap-myxin';

/* this maxHeap serves to sort candidates's votes */
export class VotesMaxHeap extends MaxHeapMyxin() {
    private candidates: any[] = [];

    constructor() {
        super();
    }
    private swap(index1: number, index2: number) {
        let temp = this.candidates[index1];
        this.candidates[index1] = this.candidates[index2];
        this.candidates[index2] = temp;
    }
    private parentIndex(index: number) {
        //to evit negative index
        if (Math.floor((index - 1) / 2) == -1) {
            return 0;
        } else {
            return Math.floor((index - 1) / 2);
        }
    }

    private leftChildIndex(index: number) {
        return index * 2 + 1;
    }
    private rightChildIndex(index: number) {
        return index * 2 + 2;
    }
    private parent(index: number) {
        return this.candidates[this.parentIndex(index)];
    }
    private leftChild(index: number) {
        return this.candidates[this.leftChildIndex(index)];
    }
    private rightChild(index: number) {
        return this.candidates[this.rightChildIndex(index)];
    }
    private peek(): void {
        return this.candidates[0];
    }
    private size() {
        return this.candidates.length;
    }

    add(candidate: any[]) {
        this.candidates[this.candidates.length] = candidate;
        this.bubbleUp();
    }
    //method to eliminate the first element of this.candidates

    poll() {
        let candidate = this.candidates[0];
        this.candidates[0] = this.candidates[this.candidates.length - 1];

        this.candidates.pop();
        this.bubbleDown();
        return candidate;
    }

    //the percolation allows to keep its structure
    //percolation buble down
    private bubbleDown() {
        let index = 0,
            indexVotes = 1;

        while (
            this.fixUndefined_myxin(this.leftChild(index), indexVotes) >
                this.fixUndefined_myxin(this.candidates[index], indexVotes) ||
            this.fixUndefined_myxin(this.rightChild(index), indexVotes) >
                this.fixUndefined_myxin(this.candidates[index], indexVotes)
        ) {
            let biggerIndex = this.leftChildIndex(index),
                biggerValue =
                    this.candidates[biggerIndex] == undefined ? null : this.candidates[biggerIndex][indexVotes];

            if (
                this.fixUndefined_myxin(this.rightChild(index), indexVotes) >
                this.fixUndefined_myxin(this.candidates[biggerIndex], indexVotes)
            ) {
                biggerIndex = this.rightChildIndex(index);
            }

            this.swap(biggerIndex, index);

            index = biggerIndex;
        }
    }

    //percolation bubble up
    private bubbleUp() {
        let index = this.candidates.length - 1,
            indexVotes = 1;

        while (
            this.fixUndefined_myxin(this.parent(index), indexVotes) <
            this.fixUndefined_myxin(this.candidates[index], indexVotes)
        ) {
            this.swap(this.parentIndex(index), index);
            index = this.parentIndex(index); //index take the parent's position
        }
    }
}
