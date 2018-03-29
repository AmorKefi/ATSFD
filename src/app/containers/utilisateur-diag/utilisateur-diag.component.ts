import { Component, OnInit, Inject, Input } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import { UtilisateurService } from '../../Services/UtilisateursService/utilisateur.service';

@Component({
  selector: 'app-utilisateur-diag',
  templateUrl: './utilisateur-diag.component.html'
})
export class UtilisateurDiagComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private utilisateur: UtilisateurService) { }

  ngOnInit() {
  }
  Modifier(form) {
   this.utilisateur.updateUtilisateur(form.value).subscribe(res => console.log(res), err => console.log(err));
  }
  Ajouter(form) {
    this.utilisateur.addUtilisateur(form.value).subscribe(res => console.log(res), err => console.log(err))
  }
  close() {
    this.dialog.closeAll();
  }
}
