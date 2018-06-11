import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TransactionsService } from '../transactions.service';
import * as jwt_decode from 'jwt-decode';
import { MatDialogConfig, MatDialog, MatDialogRef } from '@angular/material';
import { TransactionOperationsComponent } from '../transaction-operations/transaction-operations.component';
import { AddCashinComponent } from '../add-cashin/add-cashin.component';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  usersfd:any=jwt_decode(this.cookie.get('Token'));
  transactions:any;
  constructor(private cookie: CookieService, private transervice: TransactionsService, private diag : MatDialog ) { }

  ngOnInit() {
    console.log(this.usersfd);
    this.transervice.getAll(this.usersfd.PDV.codePdv).subscribe(res=>{this.transactions=res},err=>console.log(err));
  }
  ajouter(){
    let data = {
      operation : 'CASHIN'
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height='auto';
    dialogConfig.width='800px';
    dialogConfig.data=data;
    let diag = this.diag.open(AddCashinComponent,dialogConfig);
    diag.afterClosed().subscribe(res=>{
      this.ngOnInit();
    })
  }
  annuler(transaction){
    let data : any = {
      operation:''
    };
    data.operation="annuler";
    data.information=transaction;
    const dialogConfig = new MatDialogConfig();
     dialogConfig.height='auto';
     dialogConfig.width='600px';
     dialogConfig.data = data;
    let diag= this.diag.open(TransactionOperationsComponent, dialogConfig);

     diag.afterClosed().subscribe(res=>{
      this.ngOnInit();
      });
  }
  Rembourser(transaction){
    let data : any = {
      operation:''
    };
    data.operation ="remboursement";
    data.information = transaction;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = 'auto';
    dialogConfig.width = '600px';
    dialogConfig.data= data;
    let diag = this.diag.open(TransactionOperationsComponent, dialogConfig);
    diag.afterClosed().subscribe(res=>{
      this.ngOnInit();
    })
  }

}
