import { Component, OnInit } from '@angular/core';

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
				<input type="text" class="form-control" placeholder="Nom SFD">
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
				<button class="btn btn-light">Quitter</button>
				<button type="submit" class="btn btn-primary">Ajouter</button>
			</div>
		</div>
</form>
`
})
export class AddSfdDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
