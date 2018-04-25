import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { SfdserviceService } from '../../Services/SFDService/sfdservice.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-sfd',
  templateUrl: './view-sfd.component.html',
  styleUrls: ['./view-sfd.component.scss']
})
export class ViewSfdComponent implements OnInit {

  constructor(private route: ActivatedRoute,private sfd: SfdserviceService, private location : Location) { }
  ID;
  SFD;
  responsable:any;
  ngOnInit() {
    this.route.params.subscribe(params=>this.ID=params.id);
    this.sfd.getbyId(this.ID).subscribe(res=>this.SFD=res,err=>console.log(err));
    this.sfd.getResponsableSFD(this.ID).subscribe(res=>{this.responsable=res;
    console.log(res)},err=>console.log(err));
  }
  back(){
  this.location.back();
  }

}
