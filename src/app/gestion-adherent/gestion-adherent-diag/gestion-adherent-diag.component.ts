import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { AdherentService } from '../../Services/adherent.service';

@Component({
  selector: 'app-gestion-adherent-diag',
  templateUrl: './gestion-adherent-diag.component.html',
  styleUrls: ['./gestion-adherent-diag.component.scss']
})
export class GestionAdherentDiagComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,private diag:MatDialog,private service:AdherentService) { }

  ngOnInit() {
  }

}
