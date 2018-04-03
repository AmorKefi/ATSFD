import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-add-role-diag',
  templateUrl: './add-role-diag.component.html',
  styleUrls: ['./add-role-diag.component.scss']
})
export class AddRoleDiagComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) { }

  ngOnInit() {
  }

}
