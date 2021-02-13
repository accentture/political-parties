import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable, forkJoin } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class InstagramAPIService {
    private photosCollectionControl$ = new Subject<any>()
    candidates: any;

    private urlToGetPhoto: string = 'https://graph.instagram.com/idPhoto?fields=id,media_type,media_url,username,timestamp&access_token=';
    private urlToGetIdsByPhotos: string = 'https://graph.instagram.com/me/media?fields=id,caption&access_token='
    private token:string = 'IGQVJYRnJSLTZATSXFlcTgtdDFoRmlBV0FvY1k2X1FKMUVCazRQT1dEMHlGZA255OWhWRk8tZAVBYdXdHd1hZAMkF0ajFEajBCMTNTMDJueFpsOGs2NEh1ZAUxrZAjFHNm92SjJOdlFqTXZAR'

    photoLinkCollection:any[] = []
    photoCollection:any[] = []
    constructor(private http: HttpClient) {
        this.candidates = {
            idPresitential: [
                '17893974742675499',
                '17848035548463192',
                '17906089105569566',
            ],
            idCongressman: ['17894926228684501', '17850301256375667'],
        };

        this.toGetPhotosfromAPI()
    }
    
    private toGetPhotosfromAPI(){

        this.getIdAllPhotos().subscribe( (response:any)  => {
            //console.log(response.instagram.data)
            this.getDataOfPhotos(response.instagram.data)
        })
    }
    private getIdAllPhotos(){
        return forkJoin({instagram:this.http.get(`${this.urlToGetIdsByPhotos}${this.token}`)})
    }

    private getDataOfPhotos(arrayIds:any[]){
        //const photoCollection:any[] = []
        this.fullArrayWithRequest(arrayIds)

        forkJoin(this.photoLinkCollection).subscribe((response:any) => {
            this.photoCollection.push(response)
        }, error => {
            console.error(error);
        })
        console.log(this.photoCollection)

        this.photosCollectionControl$.next(this.photoCollection)
    }
    private fullArrayWithRequest(arrayIds:any[]){
        for(let id in arrayIds){
            this.photoLinkCollection.push(
                this.getPhoto(arrayIds[id].id)
            )
        }
    }
    public getPhoto(photoId:string): Observable<any> {
        return this.http.get( `${this.urlToGetPhoto.replace('idPhoto', photoId )}${this.token}` );
    }
    get getphotos(){
        return this.photosCollectionControl$.asObservable()
    }
}
/* 

  pasar valores con observables  - https://angular.io/guide/observables
  forkJoin - https://asfo.medium.com/usando-concatmap-mergemap-y-forkjoin-en-angular-para-peticiones-http-c70f65df54af
*/