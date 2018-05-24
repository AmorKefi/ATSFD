import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PdvServiceService } from '../Services/pdvService/pdv-service.service';
import { Location } from '@angular/common';
import { CompteFinancierService } from '../Services/compte-financier.service';

@Component({
  selector: 'app-viewpdv',
  templateUrl: './viewpdv.component.html',
  styleUrls: ['./viewpdv.component.scss']
})
export class ViewpdvComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location : Location,private cptservice: CompteFinancierService ,private service: PdvServiceService) { }
  ID;
  PDV:any;
  sfd:any;
  cpt:any;
  ngOnInit() {
    this.route.params.subscribe(params=>this.ID=params.id);
    this.service.getbyid(this.ID).subscribe(res=>{
      this.PDV=res;
    console.log(res);},err=>console.log(err));
    this.cptservice.getbypdvcode(this.ID).subscribe(res=>this.cpt=res,err=>console.log(err));
   
  }
  back(){
    this.location.back();
  }
}
