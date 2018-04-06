import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';

@Component({
  selector: 'app-add-sfd-dialog',
  template: `
  <div class="card m-0 p-0">
  <div class=" card-header text-center">
    <h4 class="mb-4">Ajouter un SFD</h4>
  </div>
  <div>
  <div class="card-body">
  <form class="form-inline">
  <div class="form-group col-6 mb-2">
  <input type="text" class="form-control" placeholder="Nom SFD" name="nomsfd" [ngModel]="data?.nomsfd">
</div>
<div class="form-group col-6 mb-2">
<input type="text" class="form-control" placeholder="raison sociale" name="raisonsociale" [ngModel]="data?.raisonsociale">
</div>
<div class="form-group col-6 mb-2">
<input type="text" class="form-control" placeholder="Adresse SFD" name="adressesfd" [ngModel]="data?.adressesfd">
</div>
<div class="form-group col-6 mb-2">
<input type="email" class="form-control" placeholder="Email" name="email" [ngModel]="data?.email">
</div>
<div class="form-group col-6 mb-2">

<input type="text" class="form-control" placeholder="Statuts" name="statussfd" [ngModel]="data?.statutsfd">
</div>
<div class="form-group col-6 mb-2">
<input type="text" class="form-control" placeholder="Tel" name="telsfd" [ngModel]="data?.telsfd">
</div>
<div class="form-group col-6 mb-2">
<input type="text" class="form-control" placeholder="Ville" name="villesfd" [ngModel]="data?.villesfd">
</div>
</form>
</div>
<div class="card-footer">
<div class="text-center col-12">
<button class="btn btn-light" (click)="close()">Quitter</button>
<button type="submit" class="btn btn-primary">Ajouter</button>
</div>

</div> 
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
