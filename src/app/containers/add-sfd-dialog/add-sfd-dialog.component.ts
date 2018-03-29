import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';

@Component({
  selector: 'app-add-sfd-dialog',
  template: `
  <form>
	<div class="m-2">
			<div class="text-center">
				<h4 class="mb-4">Ajouter un SFD</h4>
			</div>
			<div class="form-group">
				<label>Nom:</label>
				<input type="text" class="form-control" placeholder="Nom SFD" name="Login" [ngModel]="data?.ssoId">
      </div>
      <div class="form-group">
      <label>Nom Agence:</label>
      <input type="text" class="form-control" placeholder="Nom Agence" >
    </div>
    <div class="form-group">
    <label>Adresse:</label>
    <input type="text" class="form-control" placeholder="Adresse SFD">
  </div>
  <div class="form-group">
  <label>Statut social:</label>
  <input type="text" class="form-control" placeholder="Statut social" >
</div>
			<div class="text-right mt-3">
				<button class="btn btn-light" (click)="close()">Quitter</button>
				<button type="submit" class="btn btn-primary">Ajouter</button>
			</div>
		</div>
</form>
`
})
export class AddSfdDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) { }

  ngOnInit() {
  }
  close() {
    this.dialog.closeAll();
  }
}
