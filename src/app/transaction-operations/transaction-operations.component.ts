import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-transaction-operations',
  templateUrl: './transaction-operations.component.html',
  styleUrls: ['./transaction-operations.component.scss']
})
export class TransactionOperationsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private transervice : TransactionsService) { }
  Operation : any = this.data.operation;
  MontantRemboursement:any;
  benification:any;
  ngOnInit() {
    console.log(this.data);
  }

}
