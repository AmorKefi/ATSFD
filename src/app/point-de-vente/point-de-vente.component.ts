import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PdvServiceService } from '../Services/pdvService/pdv-service.service';
import { PdvDiagComponent } from '../pdv-diag/pdv-diag.component';

@Component({
  selector: 'app-point-de-vente',
  templateUrl: './point-de-vente.component.html',
  styleUrls: ['./point-de-vente.component.scss']
})
export class PointDeVenteComponent implements OnInit {

  pdvs:any;
  constructor(private diag : MatDialog, private service: PdvServiceService) { }

  ngOnInit() {
    this.service.getAll().subscribe(res=>this.pdvs=res,err=>console.log(err));
  }
  ajouter(){
    let datapdv={
      caller:''
    }
    datapdv.caller="Modifier SFD"
    const dialogConfig = new MatDialogConfig();
     dialogConfig.height='400px';
     dialogConfig.width='600px';
     dialogConfig.data = datapdv;
     this.diag.open(PdvDiagComponent, dialogConfig);

     this.diag.afterAllClosed.subscribe(res=>{
      this.ngOnInit();
      });


  }

}
