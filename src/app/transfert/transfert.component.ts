import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CashinServiceService } from '../cashin-service.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddCashinComponent } from '../add-cashin/add-cashin.component';

@Component({
  selector: 'app-transfert',
  templateUrl: './transfert.component.html',
  styleUrls: ['./transfert.component.scss']
})
export class TransfertComponent implements OnInit {

  constructor(private cookie : CookieService, private cashservice : CashinServiceService,  private diag : MatDialog) { }

  ngOnInit() {
  }
  find(f){
    this.cashservice.find(f.value.jeton).subscribe(res=>
      {
        let resultat :any = res;
        let data = {
          operation : 'CASHOUT',
          transaction : resultat.cashIn
        }
        const dialogConfig = new MatDialogConfig();
        dialogConfig.height='auto';
        dialogConfig.width='800px';
        dialogConfig.data=data;
        let diag = this.diag.open(AddCashinComponent,dialogConfig);
        diag.afterClosed().subscribe(res=>{
          this.ngOnInit();
        })
    },err=>console.log(err));
  }
}
