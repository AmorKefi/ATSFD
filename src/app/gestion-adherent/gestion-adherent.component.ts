import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AdherentService } from '../Services/adherent.service';
import { GestionAdherentDiagComponent } from './gestion-adherent-diag/gestion-adherent-diag.component';

@Component({
  selector: 'app-gestion-adherent',
  templateUrl: './gestion-adherent.component.html',
  styleUrls: ['./gestion-adherent.component.scss']
})
export class GestionAdherentComponent implements OnInit {

  constructor(private diag:MatDialog,private service:AdherentService) { }
  adherents:any;
  ngOnInit() {
    this.service.getAll().subscribe(res=>this.adherents=res,err=>console.log(err));
  }
  ajouter(){
    let data={
      caller:'Ajouter'
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height='auto';
    dialogConfig.width='600px';
    dialogConfig.data=data;
   let diag= this.diag.open(GestionAdherentDiagComponent,dialogConfig);
    diag.afterClosed().subscribe(res=>{
      this.ngOnInit();
    })
  }
}
