
import { Component, OnInit, Input, Output } from '@angular/core';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material';
import { AddSfdDialogComponent } from '../add-sfd-dialog/add-sfd-dialog.component';
import { UtilisateurService } from '../../Services/UtilisateursService/utilisateur.service';
import {Observable} from 'rxjs/Observable'
import { timer } from 'rxjs/observable/timer';
import { UtilisateurDiagComponent } from '../utilisateur-diag/utilisateur-diag.component';
@Component({
  selector: 'app-gestion-utilisateurs-layout',
  templateUrl: './gestion-utilisateurs-layout.component.html',
  styleUrls: ['./gestion-utilisateurs-layout.component.scss']
})
export class GestionUtilisateursLayoutComponent  implements OnInit {
  constructor(private dialog: MatDialog, private utilisateur: UtilisateurService) {}
  // tslint:disable-next-line:member-ordering
  Utilisateurs: any;
  // tslint:disable-next-line:member-ordering
  @Output() caller;
  ngOnInit(): void {
    this.utilisateur.getUtilisateur().subscribe(res => this.Utilisateurs = res);
  }
  openAddSFDDialog() {
    const datal = {caller : ''};
    datal.caller = 'Ajouter';
    let dialogRef = this.dialog.open(UtilisateurDiagComponent, {
      data: datal,
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.utilisateur.getUtilisateur().subscribe(res => this.Utilisateurs = res);
      dialogRef = null;
    });
  };
  Modifier(datal) {
    datal.caller = 'modifier';
    const dialogRef = this.dialog.open(UtilisateurDiagComponent , {
      data : datal ,
      height: '400px',
      width: '600px',
    })
  }
  Supprimer(data) {
    this.utilisateur.deleteUtilisateur(data.id).subscribe(res => {
    this.utilisateur.getUtilisateur().subscribe( response => this.Utilisateurs = response);
    }, err => console.log(err));
  }

}
