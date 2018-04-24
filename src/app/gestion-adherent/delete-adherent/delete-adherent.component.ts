import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { AdherentService } from '../../Services/adherent.service';

@Component({
  selector: 'app-delete-adherent',
  templateUrl: './delete-adherent.component.html',
  styleUrls: ['./delete-adherent.component.scss']
})
export class DeleteAdherentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,private service:AdherentService,private diag:MatDialog) { }

  ngOnInit() {
  } 
  Desactiver(){
    this.service.desactiver(this.data.data).subscribe(res=>this.diag.closeAll(),err=>console.log(err));
  }
  Activer(){
    this.service.activer(this.data.data).subscribe(res=>this.diag.closeAll(),err=>console.log(err));
  }

}
