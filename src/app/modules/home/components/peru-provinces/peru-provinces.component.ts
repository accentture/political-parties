import { Component, OnInit } from '@angular/core';
import { PeruProvincesArrayService } from '../../../../core/services/peru-provinces.service' 

@Component({
  selector: 'peru-provinces',
  templateUrl: './peru-provinces.component.html',
  styleUrls: ['./peru-provinces.component.css']
})
export class PeruProvincesComponent implements OnInit {
  public peruProvinces:Array<any>

  constructor() { 
    this.peruProvinces = PeruProvincesArrayService
  }

  showListOfDepartments(){
    
  }
  ngOnInit(): void {
    this.peruProvinces.forEach(element => {
      console.log(element)
    });
  }

}
