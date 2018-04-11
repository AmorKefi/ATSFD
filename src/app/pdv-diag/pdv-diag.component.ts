import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { PdvServiceService } from '../Services/pdvService/pdv-service.service';

@Component({
  selector: 'app-pdv-diag',
  templateUrl: './pdv-diag.component.html',
  styleUrls: ['./pdv-diag.component.scss']
})
export class PdvDiagComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,private diag:MatDialog, private service:PdvServiceService) { }

  ngOnInit() {
  }

}
