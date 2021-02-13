/* every hash table will have candidate list by zone */
export class CandidatesHashTable {
    private size: number;
    private table: any[];
    private limit: number;
    private zone: string;

    constructor(zone: string, size: number) {
        this.zone = zone;
        this.size = size;
        this.table = new Array(size);
        this.limit = 0;
        this.buildChain();
    }
    //add buckets to the table
    buildChain() {
        for (let a = 0; a < this.table.length; a++) {
            this.table[a] = new Array();
        }
    }
    putCandidate(candidate: string, votes: number) {
        //ensure that there are buckets ih the table
        if (this.table.length > 0) {
            if (this.limit >= this.size) return 'The table is full';

            let indexHashed = this.hash(candidate),
                index = 0,
                squareIndex = 1;

            while (this.table[indexHashed][index] != null) {
                indexHashed += Math.pow(squareIndex, 2);
                indexHashed = indexHashed % this.size;

                squareIndex++;
            }
            this.table[indexHashed][index] = candidate;
            this.table[indexHashed][index + 1] = votes;
            this.limit++;

            return this.table[indexHashed]; //return bucket of candidate
        }
    }
    getCandidate(candidate: string) {
        //ensure that there are buckets ih the table
        if (this.table.length > 0) {
            let indexHashed = this.hash(candidate),
                index = 0,
                squareIndex = 1,
                contador = 0;

            while (this.table[indexHashed][index] != candidate && contador < this.size) {
                indexHashed += Math.pow(squareIndex, 2);
                indexHashed = indexHashed % this.size;

                squareIndex++;
                contador++;
            }

            //chek if size of array was surpassed
            if (contador >= this.size) {
                return null;
            } else {
                return this.table[indexHashed];
            }
        }
    }
    updateVotes(candidate: string, votes: number) {
        let indexHashed = this.hash(candidate),
            index = 0,
            squareIndex = 1;

        while (this.table[indexHashed][index] != candidate) {
            indexHashed += Math.pow(squareIndex, 2);
            indexHashed = indexHashed % this.size;

            squareIndex++;
        }

        this.table[indexHashed][index + 1] += votes;
        return this.table[indexHashed];
    }
    private hash(candidate: string) {
        let number: number = 0;

        //transfrom a string to number
        for (let x = 0; x < candidate.length; x++) {
            //charCodeAt() - extract the ASCII of character
            number = this.size * number + candidate.charCodeAt(x);
        }

        return number % this.size;
    }
    get getHashTable() {
        return this.table;
    }
}

