import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import { SfdserviceService } from '../../Services/SFDService/sfdservice.service';

@Component({
  selector: 'app-deletediag',
  templateUrl: './deletediag.component.html',
  styleUrls: ['./deletediag.component.scss']
})
export class DeletediagComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private service : SfdserviceService) { }

  ngOnInit() {
  }
  delete(){
    this.service.delete(this.data).subscribe(res=>console.log(res),err=>console.log(err));
  }

}
