import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-transactionsfd',
  templateUrl: './transactionsfd.component.html',
  styleUrls: ['./transactionsfd.component.scss']
})
export class TransactionsfdComponent implements OnInit {
  ID;
  transactions:any;
  constructor(private route: ActivatedRoute, private location : Location,private transervice: TransactionsService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>this.ID=params.id);
    this.transervice.getAll(this.ID).subscribe(res=>{this.transactions=res},err=>console.log(err));
  }

}
