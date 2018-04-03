import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-view-sfd',
  templateUrl: './view-sfd.component.html',
  styleUrls: ['./view-sfd.component.scss']
})
export class ViewSfdComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params=>console.log(params));
  }

}
