import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
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
    this.service.getAll().subscribe(res=>console.log(res),err=>console.log(err));
  }
  ajouter(){
  this.diag.open(PdvDiagComponent);
  
  }

}
