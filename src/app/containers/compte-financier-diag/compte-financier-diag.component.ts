import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { CompteFinancierService } from '../../Services/compte-financier.service';

@Component({
  selector: 'app-compte-financier-diag',
  templateUrl: './compte-financier-diag.component.html',
  styleUrls: ['./compte-financier-diag.component.scss']
})
export class CompteFinancierDiagComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private service : CompteFinancierService) { }

  ngOnInit() {
  }
  close(){
    this.dialog.closeAll();
  }
  add(form){
    this.service.add(form.value).subscribe(res=>this.dialog.closeAll(),err=>console.log(err));
  }
  update(form){
    this.service.update(form.value).subscribe(res=>this.dialog.closeAll(),err=>console.log(err));
  }
}
