import { Component, OnInit } from '@angular/core';
import { LettrageService } from '../Services/LettrageService/lettrage.service';

@Component({
  selector: 'app-lettrage',
  templateUrl: './lettrage.component.html',
  styleUrls: ['./lettrage.component.scss']
})
export class LettrageComponent implements OnInit {

  constructor(private Service:LettrageService) { }
  Lettrages:any;
  ngOnInit() {
    // this.Service.fetchTransaction("1111111111").subscribe(res=>console.log(res),err=>console.log(err));
    this.Service.getall().subscribe(res=>this.Lettrages=res,err=>console.log(err));
  }

}
