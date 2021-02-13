import { Injectable } from '@angular/core';
import { CandidatesHashTable } from '../../models/vote-manager/candidates-hash-table.model';

@Injectable({
    providedIn: 'root',
})
export class HashTablesManagerByZoneService {
    private hashTableCollection: object;

    constructor() {
        this.hashTableCollection = {};
    }
    createHashTable(zone: string, size: number) {
        this.hashTableCollection[zone] = new CandidatesHashTable(zone, size);
    }
    get collectionTables() {
        return this.hashTableCollection;
    }
}
