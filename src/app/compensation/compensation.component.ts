import { Component, OnInit } from '@angular/core';
import { CompensationService } from '../compensation.service';

@Component({
  selector: 'app-compensation',
  templateUrl: './compensation.component.html',
  styleUrls: ['./compensation.component.scss']
})
export class CompensationComponent implements OnInit {

  constructor(private compservice : CompensationService) { }
  compensations : any;
  ngOnInit() {
    this.compservice.getAll().subscribe(res=>this.compensations=res,err=>console.log(err));
  }

}
