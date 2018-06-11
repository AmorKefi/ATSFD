import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CompensationService } from '../compensation.service';

@Component({
  selector: 'app-compensationview',
  templateUrl: './compensationview.component.html',
  styleUrls: ['./compensationview.component.scss']
})
export class CompensationviewComponent implements OnInit {

  ID;
  Lettrages:any;
  constructor(private route: ActivatedRoute, private location : Location,private CompService:CompensationService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>this.ID=params.id);
    this.CompService.getLettrage(this.ID).subscribe(res=>{this.Lettrages=res;console.log(res)},err=>console.log(err));
   }
   back(){
     this.location.back();
   }

}
