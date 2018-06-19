import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MatDialog, MatDialogConfig,MAT_DIALOG_DATA} from "@angular/material";
import { AddSfdDialogComponent } from '../add-sfd-dialog/add-sfd-dialog.component';
import { SfdserviceService } from '../../Services/SFDService/sfdservice.service';
import { DeleteDialog } from '../../gestion_acces/app-role/delete-role.component';
import { DeletediagComponent } from '../deletediag/deletediag.component';
  //  import * as jsPDF from 'jspdf'; 
  //  import 'jspdf-autotable';
 declare var jsPDF: any;
//  declare let jsPDF;
//  declare let JSPdf;
//declare var JSPdf:any;
// declare let JSPdf ;
@Component({
  selector: 'app-sfd-layout',
  templateUrl: './sfd-layout.component.html',
  styleUrls: ['./sfd-layout.component.scss']
})
export class SfdLayoutComponent implements OnInit{
  
  constructor(private dialog: MatDialog, private service : SfdserviceService) {}
  sfds:any;
  layout='Active';
  ngOnInit(): void {
    this.service.getAll().subscribe(res=>{this.sfds=res},err=>console.log(err));
    this.layout='Active';

  }



  openAddSFDDialog(){
    const sfd = {
      caller :'Ajouter SFD'
    }
    let dialogRef = this.dialog.open(AddSfdDialogComponent, {
      height: 'auto',
      width: '700px',
      data:sfd
    });

    dialogRef.afterClosed().subscribe(result => {
      dialogRef = null;
      this.ngOnInit();
    });
  };
  update(sfd){
    sfd.caller="Modifier SFD"
    const dialogConfig = new MatDialogConfig();
     dialogConfig.height='auto';
     dialogConfig.width='700px';
     dialogConfig.data = sfd;
     this.dialog.open(AddSfdDialogComponent, dialogConfig);

     this.dialog.afterAllClosed.subscribe(res=>{
      this.ngOnInit();
      });

  }
  
  Desactiver(sfd){
    let datal={
      caller:'Desactiver',
      sfd
    }
  const dialogConfig = new MatDialogConfig();
  dialogConfig.height = 'auto';
  dialogConfig.width = "auto";
  dialogConfig.data = datal;
  this.dialog.open(DeletediagComponent,dialogConfig);
  this.dialog.afterAllClosed.subscribe(res=>{
    this.ngOnInit()
  });
  }
  Activer(sfd){
    let datal={
      caller:'Activer',
      sfd
    }
  const dialogConfig = new MatDialogConfig();
  dialogConfig.height = 'auto';
  dialogConfig.width = "auto";
  dialogConfig.data = datal;
  this.dialog.open(DeletediagComponent,dialogConfig);
  this.dialog.afterAllClosed.subscribe(res=>{
  this.ngOnInit()
  });

  }

  search(filter){
    if(filter.Code=="" && filter.Nom==""){
      this.ngOnInit();
    }else{
      let req = {
      codesfd :null,
      nomsfd:null
    };
    if(filter.Code!="" && filter.Nom!=""){
      req.codesfd=filter.Code;
      req.nomsfd=filter.Nom
    }else if (filter.Nom!=""){
      req.nomsfd=filter.Nom
    }else {
      req.codesfd=filter.Code;
    }
   this.service.getbyFilter(req).subscribe(res=>this.sfds=res,err=>console.log(err));
  }
  }
  getDesactivated(){
    if(this.layout=="Active"){
    this.layout='Desactivated';
    this.service.getDesactivated().subscribe(res=>this.sfds=res,err=>console.log(err));
  }else {
    this.layout='Active';
    this.ngOnInit();
  }
  }
  sortBy(t){
    if(t.value==""){
      this.ngOnInit();
    }else{
    this.service.sortBy(t.value).subscribe(res=>this.sfds=res,err=>console.log(err));
         }
          }
          @ViewChild('content') content :ElementRef;
          downolad(){
         
        // let doc=new JSPdf();
        var doc = new jsPDF('p', 'pt');
        doc.text(15,15,'                                                 Liste des SFD')
        var res = doc.autoTableHtmlToJson(document.getElementById('content'));
        let specialElementHandlers={
          '#editor':function(element,renderer) {
            return true;
          }};
          let content=this.content.nativeElement;
          // doc.fromHTML(content.innerHTML,15,15,{
          //   'width':190,
          //   'elementHandlers':specialElementHandlers
          // });
          // doc.autoTable(content.innerHTML,15,15,{
          //   'width':190,
          //   'elementHandlers':specialElementHandlers
          // });
          doc.autoTable(res.columns, res.rows);
          doc.save('ListSFD.pdf');
   
        
        
          }
  }

    

