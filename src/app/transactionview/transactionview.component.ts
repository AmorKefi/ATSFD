import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../transactions.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-transactionview',
  templateUrl: './transactionview.component.html',
  styleUrls: ['./transactionview.component.scss']
})
export class TransactionviewComponent implements OnInit {
  ID;
  transaction:any;
  constructor(private route: ActivatedRoute, private location : Location,private transervice: TransactionsService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>this.ID=params.id);
    this.transervice.getbyid(this.ID).subscribe(res=>this.transaction=res,err=>console.log(err))
  }
  back(){
    this.location.back();
  }
}
