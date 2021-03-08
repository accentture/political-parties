import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable, forkJoin } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class InstagramAPIService {
    private photosCollectionControl$ = new Subject<any[]>()
    //candidates: any;
  
    private urlToGetPhoto: string = 'https://graph.instagram.com/idPhoto?fields=id,media_type,media_url,username,timestamp&access_token=';

    private urlToGetIdsByPhotos: string = 'https://graph.instagram.com/me/media?fields=id,caption&access_token='
    private token:string = 'IGQVJWNEtUWWN5R2xfeG1EcUIxX2pBSEhjV0NIM0ZAreVNTQ21kTF9rRHhlejhYa013cXJ6Tmp3ZAGtma2M2OWNucVItTURqX0hmUS1zcWhLZAzNTNDhsWGVmMGtESUstRURaUXF4Qm9R'

    photoPromiseCollection:any[] = []
    photoCollection:any[] = []
    collectionIdsPhotos:any[] = []
    constructor(private http: HttpClient) {
        this.obtainPhotosfromAPI()
    }
    
    private obtainPhotosfromAPI(){
        this.obtainIdAllPhotos().subscribe( (response:any)  => {
            console.log(response)
            this.collectionIdsPhotos = response.data
            
            this.obtainIdOfPhotos(this.collectionIdsPhotos)
        })
    }
    
    
    private obtainIdOfPhotos(arrayIds:any[]){
        this.fullArrayWithRequest(arrayIds)
        this.obtainResponseOfSusbscriptions()
        
        this.photosCollectionControl$.next(this.photoPromiseCollection)
    }
    private obtainResponseOfSusbscriptions(){
        for(let x in this.photoPromiseCollection){
            this.photoPromiseCollection[x].subscribe((response:any) => {
                this.photoCollection.push(response)
            })
        }
        
        return
    }

    private fullArrayWithRequest(arrayIds:any){
        for(let item in arrayIds){
            this.photoPromiseCollection.push(
                this.obtainPhoto(arrayIds[item].id)
            )
        }
        console.log(this.photoPromiseCollection.length)
        return
    }
    private obtainIdAllPhotos():Observable<any>{
        //return forkJoin({instagram:this.http.get(`${this.urlToGetIdsByPhotos}${this.token}`)})
        return this.http.get(`${this.urlToGetIdsByPhotos}${this.token}`)
    }
    public obtainPhoto(photoId:string): Observable<any> {
        return this.http.get( `${this.urlToGetPhoto.replace('idPhoto', photoId )}${this.token}` );
    }
    
    get getphotos():Observable<any>{
        return this.photosCollectionControl$.asObservable()
    }
}

/* 

  pasar valores con observables  - https://angular.io/guide/observables
  forkJoin - https://asfo.medium.com/usando-concatmap-mergemap-y-forkjoin-en-angular-para-peticiones-http-c70f65df54af
*/