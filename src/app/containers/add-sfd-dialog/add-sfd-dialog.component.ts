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
				<label>Nom :</label>
				<input type="text" class="form-control" placeholder="Nom SFD" name="Login" [ngModel]="data?.nomsfd">
      </div>
      <div class="form-group">
      <label>raison Social:</label>
      <input type="text" class="form-control" placeholder="raison sociale" [ngModel]="data?.raisonsociale">
    </div>
    <div class="form-group">
    <label>Adresse:</label>
    <input type="text" class="form-control" placeholder="Adresse SFD" [ngModel]="data?.adressesfd">
  </div>
  <div class="form-group">
  <label>Email:</label>
  <input type="email" class="form-control" placeholder="Email" [ngModel]="data?.email">
</div>
<div class="form-group">
<label>Status:</label>
<input type="text" class="form-control" placeholder="Statuts" [ngModel]="data?.statutsfd">
</div>
<div class="form-group">
<label>Tel :</label>
<input type="text" class="form-control" placeholder="Tel" [ngModel]="data?.telsfd">
</div>
<div class="form-group">
<label>Ville :</label>
<input type="text" class="form-control" placeholder="Ville" [ngModel]="data?.villesfd">
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
