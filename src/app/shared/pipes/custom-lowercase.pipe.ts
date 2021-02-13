
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name:'customLowercase'
})
export class CustomLowerCasePipe implements PipeTransform {
    transform(word:string){
        return `${word.slice(0,1)}${word.slice(1).toLowerCase()}`
    }
}