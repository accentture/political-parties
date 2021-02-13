import { Injectable } from '@angular/core';
import { VotesMaxHeap } from '../../models/vote-manager/votes-max-heap.model';
import { HashTablesManagerByZoneService } from './hash-tables-manager-by-zone.service';
import { CandidatesHashTable } from '../../models/vote-manager/candidates-hash-table.model';
import { ZonesAVLTree } from '../../models/vote-manager/zones-AVL-tree.model';

@Injectable({
    providedIn: 'root',
})
export class VotesMaxHeapManagerService {
    private collectionMaxHeap: object;
    /* private collectionHashTable: object; */
    private zonesWithMaxHeap: ZonesAVLTree; //zones that will have maxheap

    constructor(private hashTablesManager: HashTablesManagerByZoneService) {
        //this collection is an AVL
        this.collectionMaxHeap = {};
        this.zonesWithMaxHeap = undefined;
    }
    private createZonesWithMaxHeap() {
        let hashTableCollection = this.hashTablesManager.collectionTables;

        for (let zone in hashTableCollection) {
            if (this.zonesWithMaxHeap === undefined) {
                this.zonesWithMaxHeap = new ZonesAVLTree(zone);
            } else {
                this.zonesWithMaxHeap.insert(zone);
            }
        }
    }
    private createMaxHeap(zone: string) {
        const hashTable: any[] = this.hashTablesManager.collectionTables[zone].getHashTable, //getting hash table by zone
            candidateIndex = 0;

        this.collectionMaxHeap[zone] = undefined; //cleaning maxheap

        if (this.collectionMaxHeap[zone] === undefined) {
            this.collectionMaxHeap[zone] = new VotesMaxHeap();
        }

        for (let bucket = 0; bucket < hashTable.length; bucket++) {
            //checking if exist data of candidate
            if (hashTable[bucket][candidateIndex] !== undefined) {
                this.collectionMaxHeap[zone].add(hashTable[bucket]);
            }
        }
    }
    getMaxHeap(zone: string) {
        this.createMaxHeap(zone);
        return this.collectionMaxHeap[zone];
    }

    get getzones() {
        this.createZonesWithMaxHeap();

        //checking if exists zones in zonesWithMaxHeap
        if (this.zonesWithMaxHeap !== undefined) {
            return this.zonesWithMaxHeap.traverseInOrder();
        }

        return undefined;
    }
}
