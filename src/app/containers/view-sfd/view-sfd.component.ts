import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SfdserviceService } from '../../Services/SFDService/sfdservice.service';

@Component({
  selector: 'app-view-sfd',
  templateUrl: './view-sfd.component.html',
  styleUrls: ['./view-sfd.component.scss']
})
export class ViewSfdComponent implements OnInit {

  constructor(private route: ActivatedRoute,private sfd: SfdserviceService) { }
  ID;
  SFD;
  ngOnInit() {
    this.route.params.subscribe(params=>this.ID=params.id);
    this.sfd.getbyId(this.ID).subscribe(res=>{this.SFD=res;console.log(res)},err=>console.log(err));
  }


}
