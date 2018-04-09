import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CompteFinancierDiagComponent } from '../compte-financier-diag/compte-financier-diag.component';
import { CompteFinancierService } from '../../Services/compte-financier.service';

@Component({
  selector: 'app-gestion-comptes',
  templateUrl: './gestion-comptes.component.html',
  styleUrls: ['./gestion-comptes.component.scss']
})
export class GestionComptesComponent implements OnInit {

  constructor(private dialog : MatDialog, private service: CompteFinancierService) { }
  comptes : any;

  ngOnInit() {
    this.service.getAll().subscribe(res=>this.comptes=res,err=>console.log(err));
  }
  Ajouter(){
    const data={
      caller : 'Ajout Compte'
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height='400px';
    dialogConfig.width='600px';
    dialogConfig.data=data;
    this.dialog.open(CompteFinancierDiagComponent, dialogConfig);

    this.dialog.afterAllClosed.subscribe(res=>{
     this.ngOnInit();
     });
  }
  Modifier(cpt){
    const data={
      caller : 'Modifier Compte',
      compte : cpt
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height='400px';
    dialogConfig.width='600px';
    dialogConfig.data=data;
    this.dialog.open(CompteFinancierDiagComponent, dialogConfig);

    this.dialog.afterAllClosed.subscribe(res=>{
     this.ngOnInit();
     });
  }
}
